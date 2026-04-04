# Piggy's Letter Adventure

A cheerful, mobile-friendly web game for 3-year-old children to learn English letters A, B, and C through a countryside adventure with an original piggy character.

## Features

- **3 learning rounds** for letters A (Apple), B (Butterfly), C (Cat)
- **Letter reveal** with word association and original SVG illustrations
- **Interactive pick quiz** - tap the correct picture that starts with the letter
- **Letter tracing** - draw the letter with your finger or mouse
- **Positive feedback** with sound effects, confetti, and star rewards
- **Progress tracking** with a visual star progress bar
- **Mobile-first design** with large tap targets for small fingers
- **100% original art** - all characters and illustrations are programmatic SVG
- **No backend required** - pure static HTML/CSS/JS

## Run Locally

Simply open `index.html` in any modern browser:

```bash
# Option 1: Direct open
open index.html

# Option 2: Local server (recommended for best experience)
npx serve .
# or
python3 -m http.server 8000
```

## Deploy

This is a fully static site. Deploy to any static hosting:

- **Vercel**: `npx vercel --prod`
- **Netlify**: drag the folder into Netlify dashboard
- **GitHub Pages**: push to a repo and enable Pages
- **Any web server**: just serve the folder as-is

## File Structure

```
peppa-alpha-game/
  index.html    - Main HTML structure
  styles.css    - All styling, animations, responsive design
  script.js     - Game logic, SVG art library, audio
  README.md     - This file
```

## Tech Stack

- Vanilla HTML5, CSS3, JavaScript (ES6+)
- Web Audio API for sound effects
- CSS animations and transitions
- Programmatic SVG for all illustrations
- Google Fonts (Fredoka)

## Browser Support

Works in all modern browsers (Chrome, Safari, Firefox, Edge). Optimized for mobile touch devices.
