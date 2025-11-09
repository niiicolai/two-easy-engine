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
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Join Discord Community",
        link: "https://discord.gg/W3r2scCX5r",
        target: "_blank",
      },
    ],
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
        text: "Animations",
        collapsed: true,
        items: [
          { text: "Rotation", link: "/examples/rotation_animation" },
          { text: "Pulse", link: "/examples/pulse_animation" },
          { text: "Move", link: "/examples/move_animation" },
          { text: "Fade", link: "/examples/fade_animation" },
          {
            text: "Random Color",
            link: "/examples/random_color_animation",
          },
          {
            text: "Orbit Particles",
            link: "/examples/orbit_particles_animation",
          },
          {
            text: "Matrix-style",
            link: "/examples/matrix_style_animation",
          },
          {
            text: "Particle Explosion",
            link: "/examples/particle_explosion_animation",
          },
          {
            text: "Equalizer-style",
            link: "/examples/equalizer_style_animation",
          },
          {
            text: "Light Follow",
            link: "/examples/light_follows_mouse",
          },
        ],
      },
      {
        text: "Materials & Geometry",
        items: [
          { text: "Image Material", link: "/examples/image_material" },
          { text: "Text Geometry", link: "/examples/text_geometry" },
          { text: "Line Geometry", link: "/examples/custom_line_shape" },
          { text: "Polygon Geometry", link: "/examples/polygon_geometry" },
        ],
      },
      {
        text: "Advanced Topics",
        items: [
          {
            text: "Camera Pan and Zoom",
            link: "/examples/camera_pan_zoom",
          },
          {
            text: "Offscreen Canvas",
            link: "/examples/offscreen_canvas",
          },
        ],
      },
      {
        text: "Model Context Protocol",
        items: [
          { text: "Integration", link: "/mcp/mcp_integration" },
          { text: "Add to MCP Server", link: "/mcp/mcp_add_server" },
          { text: "Example Project", link: "/mcp/mcp_example" },
        ],
      },
      {
        text: "API Reference",
        collapsed: true,
        items: getApiSidebar(),
      },
      {
        text: "Mathematics for 2D Graphics",
        collapsed: true,
        items: [
          {
            text: "Vector Fundamentals",
            link: "https://www.bergandersen.com/vector-math-animation/",
            target: "_blank",
          },
        ],
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
