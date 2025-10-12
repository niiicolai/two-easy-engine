import fs from "fs";
import path from "path";

function getApiSidebar() {
  const apiDir = path.resolve(__dirname, "../api");
  const files = fs
    .readdirSync(apiDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      text: path.basename(file, ".md"),
      link: `/api/${path.basename(file, ".md")}`,
    }));

  return files;
}

export default {
  base: "/two-easy-engine/",
  title: "TwoEasyEngine",
  description: "2D library for the HTML5 Canvas",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        text: "Get Started",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Installation", link: "/installation" },
          { text: "Quick Start", link: "/quick_start" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Rotation Animation", link: "/examples/rotation_animation" },
          { text: "Pulse Animation", link: "/examples/pulse_animation" },
          {
            text: "Random Color Animation",
            link: "/examples/random_color_animation",
          },
          {
            text: "Light Follows Mouse",
            link: "/examples/light_follows_mouse",
          },
          {
            text: "Orbit Particles Animation",
            link: "/examples/orbit_particles_animation",
          },
          {
            text: "Matrix-style Animation",
            link: "/examples/matrix_style_animation",
          },
          {
            text: "Particle Explosion Animation",
            link: "/examples/particle_explosion_animation",
          },
          {
            text: "Equalizer-style Animation",
            link: "/examples/equalizer_style_animation",
          },
        ],
      },
      {
        text: "API Reference",
        collapsed: false,
        items: getApiSidebar(),
      },
      {
        text: "Resources",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/niiicolai/two-easy-engine",
          },
          {
            text: "npm",
            link: "https://www.npmjs.com/package/two-easy-engine",
          },
          {
            text: "License",
            link: "https://github.com/niiicolai/two-easy-engine/blob/main/LICENSE.md",
            target: "_blank",
          },
        ],
      },
    ],
  },
};
