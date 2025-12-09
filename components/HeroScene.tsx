"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";


type WaveNode = {
  mesh: THREE.Mesh;
  baseX: number;
  baseZ: number;
};

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & camera
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color("#020617"); // dark slate-ish

    const width = container.clientWidth;
    const height = container.clientHeight || 260;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3, 9);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000,0);
    container.appendChild(renderer.domElement);


    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(4, 8, 6);
    scene.add(dir);

    // Grid of wave nodes
    const nodeGeom = new THREE.SphereGeometry(0.08, 12, 12);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x0d6efd, // your blue
      emissive: 0x0d6efd,
      emissiveIntensity: 0.55,
      metalness: 0.5,
      roughness: 0.3,
    });

    const waveNodes: WaveNode[] = [];
    const gridSize = 24; // 12x12 nodes
    const spacing = 0.8; // distance between nodes

    for (let ix = 0; ix < gridSize; ix++) {
      for (let iz = 0; iz < gridSize; iz++) {
        const x = (ix - gridSize / 2) * spacing;
        const z = (iz - gridSize / 2) * spacing;

        const node = new THREE.Mesh(nodeGeom, nodeMat);
        node.position.set(x, 0, z);
        scene.add(node);

        waveNodes.push({ mesh: node, baseX: x, baseZ: z });
      }
    }

    // Optional: subtle ground disk under the nodes
    const planeGeom = new THREE.CircleGeometry(gridSize * spacing * 0.9, 48);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.0,
    });
    const plane = new THREE.Mesh(planeGeom, planeMat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.02;
    scene.add(plane);

    let frameId = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const t = performance.now() * 0.0001;

      // Slow rotation of the whole grid
      scene.rotation.y = t * 0.05;

      const waveSpeed = 0.2;
      const waveScale = 20.3;

      waveNodes.forEach(({ mesh, baseX, baseZ }) => {
        const dist = Math.sqrt(baseX * baseX + baseZ * baseZ);
        const phase = dist * 0.8; // offset based on distance from center

        const y = Math.sin(t * waveSpeed + phase) * waveScale;
        mesh.position.y = y;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 260;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);

      renderer.dispose();
      nodeGeom.dispose();
      nodeMat.dispose();
      planeGeom.dispose();
      planeMat.dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
