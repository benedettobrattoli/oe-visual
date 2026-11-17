/**
 * OE VISUAL — Real-Time 3D WebGL Team Character Engine (v4.0)
 * Loads rigged .glb 3D models reconstructed from Front/Side/Back turnaround sheets
 * Renders 4 articulated 3D architectural scale figures via Three.js onto card border lines
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const RENDER_W = 280;
const RENDER_H = 340;

class Team3DStudio {
  constructor() {
    this.characters = [];
    this.mouseNDC = new THREE.Vector2(0, 0);
    this.isVisible = true;
    this.clock = new THREE.Clock();

    // Single shared high-DPI WebGLRenderer (avoids browser WebGL context limits)
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      premultipliedAlpha: false
    });
    this.renderer.setSize(RENDER_W, RENDER_H, false);
    this.renderer.setPixelRatio(1);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;

    this.scene = new THREE.Scene();

    // Architectural studio camera (3/4 eye-level perspective)
    this.camera = new THREE.PerspectiveCamera(26, RENDER_W / RENDER_H, 0.1, 20);
    this.camera.position.set(0, 1.02, 4.35);
    this.camera.lookAt(0, 0.90, 0);

    this.setupLighting();
    this.loader = new GLTFLoader();
    this.bindEvents();
    this.initAllCharacters();
  }

  setupLighting() {
    const hemi = new THREE.HemisphereLight(0xffffff, 0xd8d2c8, 1.35);
    this.scene.add(hemi);

    // Warm key sun light
    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.1);
    keyLight.position.set(2.4, 3.8, 3.2);
    this.scene.add(keyLight);

    // Cool studio fill light
    const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.95);
    fillLight.position.set(-2.8, 2.0, 2.2);
    this.scene.add(fillLight);

    // Signature OE Visual orange architectural rim light
    const rimLight = new THREE.DirectionalLight(0xe85d04, 0.85);
    rimLight.position.set(-1.5, 2.4, -3.0);
    this.scene.add(rimLight);
  }

  bindEvents() {
    window.addEventListener('pointermove', (e) => {
      this.mouseNDC.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouseNDC.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    const section = document.getElementById('team-avatars');
    if (section && 'IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        this.isVisible = entries[0]?.isIntersecting ?? true;
      }, { rootMargin: '200px' });
      obs.observe(section);
    }
  }

  initAllCharacters() {
    const configs = [
      {
        id: 'benedetto',
        glb: 'assets/team/models/benedetto.glb?v=4.0',
        perchId: 'perch-3d-benedetto',
        canvasId: 'canvas-3d-benedetto',
        mode: 'walkLine',
        maxWalkX: 138,
        startLeft: true,
        prop: 'tablet'
      },
      {
        id: 'michele',
        glb: 'assets/team/models/michele.glb?v=4.0',
        perchId: 'perch-3d-michele',
        canvasId: 'canvas-3d-michele',
        mode: 'sitBlueprint',
        maxWalkX: 0,
        startLeft: false,
        prop: 'blueprint'
      },
      {
        id: 'marco',
        glb: 'assets/team/models/marco.glb?v=4.0',
        perchId: 'perch-3d-marco',
        canvasId: 'canvas-3d-marco',
        mode: 'inspectLine',
        maxWalkX: 58,
        startLeft: false,
        prop: 'swatch'
      },
      {
        id: 'angelo',
        glb: 'assets/team/models/angelo.glb?v=4.0',
        perchId: 'perch-3d-angelo',
        canvasId: 'canvas-3d-angelo',
        mode: 'walkVilla',
        maxWalkX: 128,
        startLeft: false,
        prop: 'villa'
      }
    ];

    configs.forEach((cfg) => {
      const perch = document.getElementById(cfg.perchId);
      const canvas = document.getElementById(cfg.canvasId);
      if (!perch || !canvas) return;

      canvas.width = RENDER_W;
      canvas.height = RENDER_H;
      const ctx2d = canvas.getContext('2d');

      const entry = {
        ...cfg,
        perch,
        canvas,
        ctx2d,
        group: null,
        bones: {},
        propGroup: null,
        hovered: false,
        posX: 0,
        dir: cfg.startLeft ? 1 : -1,
        walkTime: Math.random() * 4,
        pauseTimer: 0,
        isPaused: false
      };

      const card = perch.closest('.avatar-card');
      if (card) {
        card.addEventListener('mouseenter', () => { entry.hovered = true; });
        card.addEventListener('mouseleave', () => { entry.hovered = false; });
      }

      this.loader.load(
        cfg.glb,
        (gltf) => {
          const rootGroup = new THREE.Group();
          const model = gltf.scene;

          // Collect bone references
          model.traverse((obj) => {
            if (obj.isBone) {
              entry.bones[obj.name] = obj;
            }
            if (obj.isMesh) {
              obj.frustumCulled = false;
            }
          });

          // Soft contact shadow disc right under the shoes
          const shadowGeo = new THREE.CircleGeometry(0.28, 24);
          shadowGeo.rotateX(-Math.PI / 2);
          const shadowMat = new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0.16,
            depthWrite: false
          });
          const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
          shadowMesh.position.y = 0.005;
          rootGroup.add(shadowMesh);

          rootGroup.add(model);
          rootGroup.visible = false;
          this.scene.add(rootGroup);

          entry.group = rootGroup;
          entry.model = model;
          this.attachProp(entry);
          this.characters.push(entry);
        },
        undefined,
        (err) => {
          console.warn('[Team3D] Could not load', cfg.glb, err);
        }
      );
    });

    this.animate();
  }

  attachProp(entry) {
    const { bones, prop } = entry;
    if (prop === 'tablet' && bones.L_Elbow) {
      const tablet = new THREE.Group();
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.012, 0.24),
        new THREE.MeshStandardMaterial({ color: 0x1e2228, roughness: 0.35, metalness: 0.6 })
      );
      const screen = new THREE.Mesh(
        new THREE.BoxGeometry(0.16, 0.013, 0.21),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0ea5e9, emissiveIntensity: 0.35, roughness: 0.15 })
      );
      tablet.add(body, screen);
      tablet.position.set(-0.04, -0.26, 0.14);
      tablet.rotation.set(0.35, 0.2, 0);
      bones.L_Elbow.add(tablet);
      entry.propGroup = tablet;
    } else if (prop === 'blueprint' && bones.Pelvis) {
      const bp = new THREE.Group();
      // Unrolled architectural blueprint sheet across lap
      const sheet = new THREE.Mesh(
        new THREE.BoxGeometry(0.46, 0.008, 0.28),
        new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.85 })
      );
      const gridLine1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.38, 0.01, 0.012),
        new THREE.MeshStandardMaterial({ color: 0x1d4ed8 })
      );
      gridLine1.position.set(0, 0.002, -0.05);
      const gridLine2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.32, 0.01, 0.012),
        new THREE.MeshStandardMaterial({ color: 0x1d4ed8 })
      );
      gridLine2.position.set(-0.02, 0.002, 0.03);
      const accentBox = new THREE.Mesh(
        new THREE.BoxGeometry(0.10, 0.011, 0.06),
        new THREE.MeshStandardMaterial({ color: 0xe85d04 })
      );
      accentBox.position.set(0.12, 0.002, 0.06);
      bp.add(sheet, gridLine1, gridLine2, accentBox);
      bp.position.set(0, -0.04, 0.30);
      bp.rotation.x = 0.25;
      bones.Pelvis.add(bp);
      entry.propGroup = bp;
    } else if (prop === 'swatch' && bones.L_Elbow) {
      // Material swatch fan (oak, travertine, brass)
      const fan = new THREE.Group();
      const colors = [0xd6c7b2, 0x8b5e3c, 0x334155, 0xe85d04];
      colors.forEach((col, idx) => {
        const card = new THREE.Mesh(
          new THREE.BoxGeometry(0.06, 0.13, 0.008),
          new THREE.MeshStandardMaterial({ color: col, roughness: 0.6 })
        );
        card.position.set(idx * 0.015 - 0.02, 0, 0);
        card.rotation.z = (idx - 1.5) * 0.18;
        fan.add(card);
      });
      fan.position.set(-0.02, -0.28, 0.09);
      bones.L_Elbow.add(fan);
      entry.propGroup = fan;
    } else if (prop === 'villa' && bones.Pelvis) {
      // 3D Architectural Villa Scale Model hovering in front of Angelo's hands
      const villa = new THREE.Group();
      const plinth = new THREE.Mesh(
        new THREE.BoxGeometry(0.38, 0.03, 0.30),
        new THREE.MeshStandardMaterial({ color: 0xe7e2d8, roughness: 0.7 })
      );
      const pool = new THREE.Mesh(
        new THREE.BoxGeometry(0.16, 0.034, 0.12),
        new THREE.MeshStandardMaterial({ color: 0x22b8cf, roughness: 0.15, metalness: 0.2 })
      );
      pool.position.set(-0.07, 0.002, 0.05);

      const glassBox = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.11, 0.16),
        new THREE.MeshStandardMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.75, roughness: 0.1 })
      );
      glassBox.position.set(-0.03, 0.07, -0.02);

      const stoneWall = new THREE.Mesh(
        new THREE.BoxGeometry(0.14, 0.11, 0.18),
        new THREE.MeshStandardMaterial({ color: 0xd6cfc2, roughness: 0.85 })
      );
      stoneWall.position.set(0.09, 0.07, -0.03);

      const roof = new THREE.Mesh(
        new THREE.BoxGeometry(0.34, 0.022, 0.24),
        new THREE.MeshStandardMaterial({ color: 0xfafaf9, roughness: 0.4 })
      );
      roof.position.set(0.01, 0.135, -0.01);

      const fascia = new THREE.Mesh(
        new THREE.BoxGeometry(0.345, 0.008, 0.245),
        new THREE.MeshStandardMaterial({ color: 0xe85d04, emissive: 0xe85d04, emissiveIntensity: 0.25 })
      );
      fascia.position.set(0.01, 0.145, -0.01);

      villa.add(plinth, pool, glassBox, stoneWall, roof, fascia);
      villa.position.set(0, 0.18, 0.36);
      villa.rotation.set(0.22, -0.45, 0);
      bones.Pelvis.add(villa);
      entry.propGroup = villa;
    }
  }

  updatePose(entry, dt, elapsed) {
    const b = entry.bones;
    if (!b.Pelvis) return;

    // Reset A-pose arm spread closer to natural human posture
    if (b.L_Shoulder) b.L_Shoulder.rotation.set(0, 0, -0.22);
    if (b.R_Shoulder) b.R_Shoulder.rotation.set(0, 0, 0.22);

    const hoverTurn = entry.hovered ? 0.35 : 0.0;
    const lookX = this.mouseNDC.x * 0.22;
    const lookY = this.mouseNDC.y * 0.10;

    if (entry.mode === 'walkLine' || entry.mode === 'walkVilla') {
      const speed = 26;
      if (!entry.isPaused) {
        entry.walkTime += dt * 4.4;
        entry.posX += entry.dir * speed * dt;
        if (entry.startLeft) {
          if (entry.posX >= entry.maxWalkX) { entry.posX = entry.maxWalkX; entry.isPaused = true; entry.pauseTimer = 0; }
          if (entry.posX <= 0) { entry.posX = 0; entry.isPaused = true; entry.pauseTimer = 0; }
        } else {
          if (entry.posX <= -entry.maxWalkX) { entry.posX = -entry.maxWalkX; entry.isPaused = true; entry.pauseTimer = 0; }
          if (entry.posX >= 0) { entry.posX = 0; entry.isPaused = true; entry.pauseTimer = 0; }
        }
      } else {
        entry.pauseTimer += dt;
        if (entry.pauseTimer > 2.6) {
          entry.dir *= -1;
          entry.isPaused = false;
        }
      }

      // Smooth 3D Y-rotation: face walking direction when walking, turn toward visitor during pause!
      const targetYaw = entry.isPaused ? (0.18 * (entry.startLeft ? -1 : 1) + lookX) : (entry.dir > 0 ? 1.15 : -1.15);
      entry.group.rotation.y += (targetYaw - entry.group.rotation.y) * Math.min(1, dt * 5.0);
      entry.perch.style.transform = `translateX(${entry.posX.toFixed(1)}px)`;

      if (!entry.isPaused) {
        const s = Math.sin(entry.walkTime);
        const c = Math.cos(entry.walkTime);
        b.Pelvis.position.y = 0.90 + Math.abs(c) * 0.028;
        b.Spine.rotation.y = s * 0.08;
        b.Head.rotation.set(0.04, -s * 0.06, 0);

        // Gait cycle: negative X swings leg forward (+Z), positive knee X bends calf back
        b.L_Hip.rotation.x = -s * 0.42;
        b.L_Knee.rotation.x = Math.max(0.05, c * 0.55);
        b.R_Hip.rotation.x = s * 0.42;
        b.R_Knee.rotation.x = Math.max(0.05, -c * 0.55);

        if (entry.prop === 'tablet') {
          b.L_Shoulder.rotation.x = -0.52;
          b.L_Elbow.rotation.x = -0.85;
          b.R_Shoulder.rotation.x = -0.35 + s * 0.08;
          b.R_Elbow.rotation.x = -0.95;
        } else if (entry.prop === 'villa') {
          b.L_Shoulder.rotation.x = -0.45;
          b.L_Elbow.rotation.x = -0.80;
          b.R_Shoulder.rotation.x = -0.45;
          b.R_Elbow.rotation.x = -0.80;
          if (entry.propGroup) {
            entry.propGroup.rotation.y += dt * 0.9;
            entry.propGroup.position.y = 0.18 + Math.sin(elapsed * 2.2) * 0.015;
          }
        }
      } else {
        // Natural standing pause
        const breath = Math.sin(elapsed * 2.1) * 0.015;
        b.Pelvis.position.y = 0.90;
        b.Spine.rotation.set(breath, 0, 0);
        b.Head.rotation.set(-lookY + breath, lookX, 0);
        b.L_Hip.rotation.x *= 0.85;
        b.R_Hip.rotation.x *= 0.85;
        b.L_Knee.rotation.x *= 0.85;
        b.R_Knee.rotation.x *= 0.85;
        if (entry.propGroup && entry.prop === 'villa') {
          entry.propGroup.rotation.y += dt * 1.1;
        }
      }
    } else if (entry.mode === 'sitBlueprint') {
      // Michele seated on the top border line with knees bent 85 deg dangling over the card!
      b.Pelvis.position.y = 0.48 + Math.sin(elapsed * 1.8) * 0.01;
      b.Spine.rotation.set(0.08 + Math.sin(elapsed * 1.8) * 0.02, Math.sin(elapsed * 0.7) * 0.12, 0);
      b.Head.rotation.set(0.14 - lookY, lookX * 0.8 + Math.sin(elapsed * 0.9) * 0.15, 0);

      b.L_Hip.rotation.x = -1.42;
      b.L_Knee.rotation.x = 1.44;
      b.R_Hip.rotation.x = -1.42;
      b.R_Knee.rotation.x = 1.44;

      // Arms holding blueprint open across lap
      b.L_Shoulder.rotation.set(-0.42, 0, -0.15);
      b.L_Elbow.rotation.x = -0.68;
      b.R_Shoulder.rotation.set(-0.42, 0, 0.15);
      b.R_Elbow.rotation.x = -0.68;

      if (entry.propGroup) {
        // Gentle opening/closing breath on blueprint
        const openScale = 0.75 + 0.25 * (0.5 + 0.5 * Math.sin(elapsed * 1.1));
        entry.propGroup.scale.x = openScale;
      }
      entry.group.rotation.y = -0.22 + lookX * 0.35 + hoverTurn;
    } else if (entry.mode === 'inspectLine') {
      // Marco moving back and forth inspecting materials & measuring
      const cycle = Math.sin(elapsed * 0.55);
      entry.posX = (cycle * 0.5 - 0.5) * entry.maxWalkX;
      entry.perch.style.transform = `translateX(${entry.posX.toFixed(1)}px)`;

      const walking = Math.abs(Math.cos(elapsed * 0.55));
      const s = Math.sin(elapsed * 3.8) * walking;
      b.Pelvis.position.y = 0.88 + Math.abs(s) * 0.02;
      b.Spine.rotation.set(0.12, Math.sin(elapsed * 0.8) * 0.14, 0);
      b.Head.rotation.set(0.10 - lookY, lookX + Math.sin(elapsed * 1.2) * 0.18, 0);

      b.L_Hip.rotation.x = -s * 0.28;
      b.L_Knee.rotation.x = Math.max(0.08, s * 0.35);
      b.R_Hip.rotation.x = s * 0.28;
      b.R_Knee.rotation.x = Math.max(0.08, -s * 0.35);

      b.L_Shoulder.rotation.set(-0.55, 0, -0.18);
      b.L_Elbow.rotation.x = -0.75 + Math.sin(elapsed * 2.0) * 0.12;
      b.R_Shoulder.rotation.set(-0.35, 0, 0.20);
      b.R_Elbow.rotation.x = -0.55;

      entry.group.rotation.y = Math.cos(elapsed * 0.55) * 0.75 + lookX * 0.3;
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    if (!this.isVisible || this.characters.length === 0) return;

    const dt = Math.min(0.05, this.clock.getDelta());
    const elapsed = this.clock.elapsedTime;

    for (const entry of this.characters) {
      if (!entry.group) continue;
      this.updatePose(entry, dt, elapsed);

      entry.group.visible = true;
      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);
      entry.ctx2d.clearRect(0, 0, RENDER_W, RENDER_H);
      entry.ctx2d.drawImage(this.renderer.domElement, 0, 0, RENDER_W, RENDER_H);
      entry.group.visible = false;
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  try {
    new Team3DStudio();
  } catch (err) {
    console.warn('[Team3D] WebGL fallback:', err);
  }
});
