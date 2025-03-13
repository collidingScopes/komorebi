# Liquid Shape Distortions 🌀

Create psychedelic animations in real-time in the browser.

Webgl shader created using liquid motion, distorted shapes, shadows, and light.

![Liquid Shape Distortions Example](assets/siteOGImage4.png)

## Demo

**Live demo: https://collidingscopes.github.io/liquid-shape-distortions**

## Overview

Use this to create:
- Animated backgrounds for music videos
- Stylized assets for creative projects
- Art for your next trip

## Features

- **Real-time rendering** - real-time edits to the animation in the browser
- **Randomization** - Generate unique patterns with a single click
- **Extensive controls** - Fine-tune the animation parameters 
- **Export options** - Save your creations as images or videos
- **Completely free** - No paywalls, no premium options
- **Open source** - MIT licensed for personal and commercial use

## Controls

| Control | Keyboard | Description |
|---------|----------|-------------|
| 🎲 | [R] | Randomize all inputs |
| ⏯️ | [Space] | Pause/play the animation |
| 📷 | [S] | Save a screenshot image |
| 🎥 | [V] | Start/stop video export |
| 🔊 | [M] | Toggle background music |

Additional keyboard shortcuts:
- [Tab] - Refresh pattern with a new random seed
- [T] - Restart animation from time = 0

## Technical Details

This project is built using:
- WebGL shaders for high-performance rendering
- Vanilla JavaScript for logic and interactivity
- HTML5 Canvas for display
- CSS for styling
- dat.GUI for the control interface
- MP4 muxer for video encoding and export

The fragment shader uses:
- 3D simplex noise and fractal Brownian motion for organic patterns / liquid movement
- Seed-based randomization for unique visuals
- Real-time shader effects (bloom, saturation, grain)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/collidingScopes/liquid-shape-distortions.git
   ```

2. Open `index.html` in a web browser.

That's it! No build process, dependencies, or server setup required.

For development, you might want to use a local server:
```
npx http-server
```

## Performance Notes

The WebGL shaders used in this project can be resource-intensive. For optimal performance:
- Close unnecessary browser tabs
- Ensure your device has adequate GPU capabilities
- Reduce the canvas size if experiencing lag
- Ensure your device is not in battery-saving mode

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## Related Projects

Check out other free and open-source projects by the same developer:

- [Particular Drift](https://collidingScopes.github.io/particular-drift) - Turn photos into flowing particle animations
- [Liquid Logo](https://collidingScopes.github.io/liquid-logo) - Transform logos and icons into liquid metal animations
- [Video-to-ASCII](https://collidingScopes.github.io/ascii) - Convert videos into ASCII pixel art
- [Shape Shimmer](https://collidingScopes.github.io/shimmer) - Turn photos into funky wave animations
- [Colliding Scopes](https://collidingScopes.github.io) - Turn photos into kaleidoscope animations
- [Manual Brick Breaker](https://manual-brick-breaker.netlify.app) - Play brick breaker by waving your hands around

## Connect with the Developer

- Instagram: [@stereo.drift](https://www.instagram.com/stereo.drift/)
- Twitter/X: [@measure_plan](https://x.com/measure_plan)
- Email: [stereodriftvisuals@gmail.com](mailto:stereodriftvisuals@gmail.com)
- GitHub: [collidingScopes](https://github.com/collidingScopes)

## Donations

If you found this tool useful, feel free to buy me a coffee. 

My name is Alan, and I enjoy building open source software for art, animation, games, and more. This would be much appreciated during late-night coding sessions!

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://www.buymeacoffee.com/stereoDrift)