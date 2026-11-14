const { spawn } = require('child_process');
const fs = require('fs');

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9223;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1920,1080',
    `--remote-debugging-port=${port}`,
    'http://localhost:8085'
  ]);

  let ws;
  try {
    await sleep(2000);
    const listRes = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await listRes.json();
    const tab = tabs.find(t => t.url.includes('localhost:8085')) || tabs[0];
    ws = new WebSocket(tab.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let msgId = 1;
    const pending = new Map();
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && pending.has(data.id)) {
        pending.get(data.id)(data);
        pending.delete(data.id);
      }
    };

    function send(method, params = {}) {
      const id = msgId++;
      return new Promise((resolve) => {
        pending.set(id, resolve);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Runtime.enable');
    await send('Page.enable');
    await sleep(1500);

    // Screenshot 1: Home Light
    const shot1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('c:\\GIOTTO\\O_E_visual\\shot_home_light.png', Buffer.from(shot1.result.data, 'base64'));
    console.log('Saved shot_home_light.png');

    // Toggle theme to dark
    await send('Runtime.evaluate', {
      expression: `document.getElementById('theme-toggle').click();`
    });
    await sleep(1000);

    // Screenshot 2: Home Dark
    const shot2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('c:\\GIOTTO\\O_E_visual\\shot_home_dark.png', Buffer.from(shot2.result.data, 'base64'));
    console.log('Saved shot_home_dark.png');

    // Open lightbox
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.render-card').click();`
    });
    await sleep(1000);

    // Screenshot 3: Lightbox Dark
    const shot3 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('c:\\GIOTTO\\O_E_visual\\shot_lb_dark.png', Buffer.from(shot3.result.data, 'base64'));
    console.log('Saved shot_lb_dark.png');

    // Toggle theme in lightbox to light
    await send('Runtime.evaluate', {
      expression: `document.getElementById('lb-theme-toggle').click();`
    });
    await sleep(1000);

    // Screenshot 4: Lightbox Light
    const shot4 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('c:\\GIOTTO\\O_E_visual\\shot_lb_light.png', Buffer.from(shot4.result.data, 'base64'));
    console.log('Saved shot_lb_light.png');

  } catch (err) {
    console.error('Error:', err);
  } finally {
    if (ws) ws.close();
    chrome.kill();
  }
}

main();
