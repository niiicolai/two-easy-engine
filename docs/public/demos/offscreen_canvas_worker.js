import * as Two from "/two-easy-engine/demos/two-easy-engine.js"

let renderer;

onmessage = (e) => {
  if (e.data.canvas && e.data.options) {

    const canvas = e.data.canvas;
    const clock = new Two.Clock();
    const camera = new Two.Camera2D();
    const scene = new Two.Scene();
    renderer = new Two.Renderer2D(canvas, scene, camera, e.data.options);

    const numParticles = 500;
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      const fillStyle = new Two.HslaColor(((i * 2) % 300) + 1, 100, 60, 1);
      const material = new Two.BasicMaterial({ fillStyle });
      const geom = new Two.CircleGeometry(Math.random() * 6 + 1);
      const mesh = new Two.Mesh(geom, material);
      scene.add(mesh);
      particles.push(mesh);
    }

    const speed = 2;

    renderer.requestAnimationFrame({
      beforeRender: () => {
        clock.update();

        const centerX = renderer.centerX;
        const centerY = renderer.centerY;
        const time = clock.elapsedTime;

        particles.forEach((p) => {
          p.transform.position.set(
            centerX + Math.sin(time * speed * Math.random()) * 100,
            centerY + Math.cos(time * speed * Math.random()) * 100,
          );
        });
      },
    });
  }

  if (renderer && e.data.width && e.data.height) {
    renderer.options.setSize(e.data.width, e.data.height);
  }
};