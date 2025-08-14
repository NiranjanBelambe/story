import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.zIndex = '-1';
    renderer.domElement.style.pointerEvents = 'none';
    containerRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(4, 3, 8); // Farther to fit bigger model

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enabled = false; // background only

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(5, 6, 4);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x88ff88, 0.5);
    rim.position.set(-4, -3, -5);
    scene.add(rim);

    // Bigger Möbius with less mesh density (wider wire spacing)
    const R = 6, w = 3, slices = 70, stacks = 20; // reduced from 320, 80
    const mobius = (u: number, v: number, target: THREE.Vector3) => {
      const U = u * Math.PI * 2;
      const V = (v - 0.5) * 2 * w;
      const half = U * 0.5;
      const cosU = Math.cos(U), sinU = Math.sin(U);
      const cosH = Math.cos(half), sinH = Math.sin(half);
      const x = (R + V * cosH) * cosU;
      const y = (R + V * cosH) * sinU;
      const z = V * sinH;
      target.set(x, y, z);
    };

    const geom = new ParametricGeometry(mobius, slices, stacks);
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      color: 0x39ff14, // Neon green
      metalness: 0.3,
      roughness: 0.1,
      side: THREE.DoubleSide,
      wireframe: true
    });

    const mesh = new THREE.Mesh(geom, mat);
    scene.add(mesh);

    const clock = new THREE.Clock();
    let raf = 0;

    const onResize = () => {
      const wv = window.innerWidth, hv = window.innerHeight;
      renderer.setSize(wv, hv);
      camera.aspect = wv / hv;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    const loop = () => {
      const t = clock.getElapsedTime();
      mesh.rotation.x = t * 0.25; // rotate on X
      mesh.rotation.y = t * 0.35; // rotate on Y
      mesh.rotation.z = t * 0.2;  // rotate on Z
      controls.update();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      geom.dispose();
      mat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} />;
}

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';

// export default function Background3D() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);
//     renderer.domElement.style.position = 'fixed';
//     renderer.domElement.style.inset = '0';
//     renderer.domElement.style.zIndex = '-1';
//     renderer.domElement.style.pointerEvents = 'none';
//     containerRef.current.appendChild(renderer.domElement);

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
//     camera.position.set(4, 3, 8);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.enabled = false;

//     // Lights
//     scene.add(new THREE.AmbientLight(0xffffff, 0.25));
//     const key = new THREE.DirectionalLight(0xffffff, 0.8);
//     key.position.set(5, 6, 4);
//     scene.add(key);

//     // Möbius geometry — high resolution for more characters
//     const R = 6, w = 3, slices = 200, stacks = 80;
//     const mobius = (u: number, v: number, target: THREE.Vector3) => {
//       const U = u * Math.PI * 2;
//       const V = (v - 0.5) * 2 * w;
//       const half = U * 0.5;
//       const cosU = Math.cos(U), sinU = Math.sin(U);
//       const cosH = Math.cos(half), sinH = Math.sin(half);
//       const x = (R + V * cosH) * cosU;
//       const y = (R + V * cosH) * sinU;
//       const z = V * sinH;
//       target.set(x, y, z);
//     };

//     const geom = new ParametricGeometry(mobius, slices, stacks);

//     // Create tiny neon green ASCII sprite
//     const createCharSprite = (char: string) => {
//       const canvas = document.createElement('canvas');
//       const ctx = canvas.getContext('2d')!;
//       const size = 32;
//       canvas.width = size;
//       canvas.height = size;
//       ctx.font = 'Bold 16px monospace';
//       ctx.fillStyle = '#39FF14';
//       ctx.shadowColor = '#39FF14';
//       ctx.shadowBlur = 2;
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
//       ctx.fillText(char, size / 2, size / 2);

//       const texture = new THREE.CanvasTexture(canvas);
//       const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
//       const sprite = new THREE.Sprite(material);
//       sprite.scale.set(0.3, 0.3, 1); // really tiny
//       return sprite;
//     };

//     const chars = '01@#$%&*+=-:;<>[]{}\\/'.split('');

//     // Get vertices from BufferGeometry
//     const positions = geom.attributes.position.array as Float32Array;
//     for (let i = 0; i < positions.length; i += 3) {
//       const vertex = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]);

//       // Place 2–3 characters per vertex for density
//       const count = 2 + Math.floor(Math.random() * 2);
//       for (let j = 0; j < count; j++) {
//         const char = chars[Math.floor(Math.random() * chars.length)];
//         const sprite = createCharSprite(char);
        
//         // Slight random offset to make it look more "grid filled"
//         sprite.position.copy(vertex).add(new THREE.Vector3(
//           (Math.random() - 0.5) * 0.05,
//           (Math.random() - 0.5) * 0.05,
//           (Math.random() - 0.5) * 0.05
//         ));

//         scene.add(sprite);
//       }
//     }

//     const clock = new THREE.Clock();
//     let raf = 0;

//     const onResize = () => {
//       const wv = window.innerWidth, hv = window.innerHeight;
//       renderer.setSize(wv, hv);
//       camera.aspect = wv / hv;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener('resize', onResize);

//     const loop = () => {
//       const t = clock.getElapsedTime();
//       scene.rotation.x = t * 0.25;
//       scene.rotation.y = t * 0.35;
//       scene.rotation.z = t * 0.2;
//       controls.update();
//       renderer.render(scene, camera);
//       raf = requestAnimationFrame(loop);
//     };
//     loop();

//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener('resize', onResize);
//       geom.dispose();
//       renderer.dispose();
//       if (renderer.domElement.parentNode) {
//         renderer.domElement.parentNode.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <div ref={containerRef} />;
// }

