# OE VISUAL — High-End Architectural CGI & Motion

> **Vendi il progetto prima che esista.**  
> Studio di visualizzazione architettonica, rendering 3D fotorealistici, studi bioclimatici e animazioni cinematografiche in loop.  
> Ideato e diretto dall'**Arch. Benedetto Brattoli** (Orange Engineering S.r.l. — Corato, BA).

🌐 **Sito Web Live (GitHub Pages):**  
[https://benedettobrattoli.github.io/oe-visual/](https://benedettobrattoli.github.io/oe-visual/)

---

## 🏛️ Filosofia di Progetto & Design

* **Swiss Architectural Grid:** Layout full-bleed *edge-to-edge* (zero vuoti laterali) con sottile interlinea millimetrica bianca a contrasto.
* **Dual Theme (Light / Dark):**
  * *Light Paper:* Carta millimetrata tecnica ad alta luminosità.
  * *Dark Luxury:* Sfondo nero assoluto (`#0a0c0f` / `#000000`), perfetta integrazione con schermi OLED e visibilità notturna.
* **Materiali Smerigliati (Frosted Glass):** Tutti i controlli, le maniglie interattive e i pulsanti utilizzano vetro satinato ad alta fedeltà ottica (`backdrop-filter: blur(12px)`).
* **Zero Dipendenze Esterne:** 100% Vanilla HTML5, CSS3, ES6 JavaScript. Nessuna libreria o CDN esterna per massima velocità di caricamento, longevità e sicurezza.

---

## ✨ Funzionalità Interattive

1. **Portfolio Stream Dinamico:**
   * Rendering fotorealistici still ad altissima risoluzione.
   * Video loop 4K con modal cinema integrata.
   * Maniglie comparative *Wireframe / Clay Render* con cursore a trascinamento fluido.
   * Studio Bioclimatico a 4 Stagioni (Inverno, Primavera, Estate, Autunno) con sfumatura cross-fade temporizzata e controlli dedicati.
2. **Museum-Grade Lightbox:**
   * Navigazione a tutta pagina con supporto a tastiera (`←`, `→`, `Esc`, `Z`).
   * Zoom architettonico ad alta risoluzione.
   * Pulsanti e contatore in vetro satinato traslucido.
3. **Logo Identitario con Saldatura Cinematografica:**
   * Disegno originale dell'Arch. Benedetto Brattoli animato con effetto saldatura geometrica dinamica su HTML5 Canvas (`setupWeldingSpark`).
4. **Configuratore Preventivi & WhatsApp Atelier:**
   * Calcolo interattivo di pacchetti rendering e contatto istantaneo con lo studio.

---

## 📁 Struttura del Repository

```
oe-visual/
├── assets/
│   ├── logo_original_transparent.png  # Logo ufficiale OE Visual
│   ├── favicon-32.png, ...            # Icone e manifest
│   ├── portfolio/                     # Rendering still e compositing
│   └── videos/                        # Loop cinematografici 4K
├── index.html                         # Markup semantico SEO & OpenGraph
├── style.css                          # Design system, griglia e temi
├── app.js                             # Motore di rendering dinamico e interazioni
├── robots.txt, sitemap.xml            # Ottimizzazione motori di ricerca
└── manifest.json                      # PWA Web App Manifest
```

---

## 🚀 Pubblicazione e Deploy

Il sito è configurato per il deploy automatico su **GitHub Pages**:
* Branch: `main`
* Cartella: `/ (root)`

© 2026 OE Visual · Arch. Benedetto Brattoli · Tutti i diritti riservati.
