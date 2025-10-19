import * as Two from "/two-easy-engine/demos/two-easy-engine.js"
onmessage = (e) => {
  if (e.data.canvas && e.data.options) {

    const options = e.data.options;
    const canvas = e.data.canvas;
    const clock = new Two.Clock();
    const camera = new Two.Camera2D();
    const scene = new Two.Scene();
    const render = new Two.Renderer2D(canvas, scene, camera, e.data.options);

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

    render.requestAnimationFrame({
      beforeRender: () => {
        const speed = 2;
        const time = clock.getElapsedTime();

        particles.forEach((p) => {
          p.transform.position.set(
            options.width / 2 + Math.sin(time * speed * Math.random()) * 100,
            options.height / 2 + Math.cos(time * speed * Math.random()) * 100,
          );
        });
      },
    });
  }
};