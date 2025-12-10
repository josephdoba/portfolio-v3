"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Particle = {
  mesh: THREE.Mesh;
  velocity: THREE.Vector2;
};

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & camera
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight || 260;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    // Renderer (transparent)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xf2f7fe, 1);
    container.appendChild(renderer.domElement);

    // Lights (subtle)
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const dir = new THREE.DirectionalLight(0xffffff, 0.6);
    dir.position.set(3, 5, 6);
    scene.add(dir);

    // --- Particles setup ---
    const particleCount = 60;
    const areaX = 5;
    const areaY = 5;      
    const maxSpeed = 0.01;

    const particleGeom = new THREE.SphereGeometry(0.06, 8, 8);
    const particleMat = new THREE.MeshStandardMaterial({
      color: 0x0d6efd, // blue
      emissive: 0x0d6efd,
      emissiveIntensity: 1.7,
      metalness: 0.8,
      roughness: 0.2,
    });

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const mesh = new THREE.Mesh(particleGeom, particleMat);
      const x = (Math.random() - 0.5) * 2 * areaX;
      const y = (Math.random() - 0.5) * 2 * areaY;
      mesh.position.set(x, y, 0);
      scene.add(mesh);

      const angle = Math.random() * Math.PI * 2;
      const speed = maxSpeed * (0.3 + Math.random() * 0.7);
      const velocity = new THREE.Vector2(
        Math.cos(angle) * speed,
        Math.sin(angle) * speed
      );

      particles.push({ mesh, velocity });
    }

    // --- Connection lines ---
      const baseColor = new THREE.Color(0x334155);

      const lineMat = new THREE.LineBasicMaterial({
        transparent: true,
        opacity: 0.08,
        vertexColors: true // allow per-vertex colors
      });

      const lineGeom = new THREE.BufferGeometry();
      const lineSegments = new THREE.LineSegments(lineGeom, lineMat);
      scene.add(lineSegments);

      const innerDist = 0.0;
      const outerDist = 3.0;
      const outerDistSq = outerDist * outerDist;


    let frameId = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Move particles
      particles.forEach(({ mesh, velocity }) => {
        mesh.position.x += velocity.x;
        mesh.position.y += velocity.y;

        // Bounce off soft bounds
        if (mesh.position.x > areaX || mesh.position.x < -areaX) {
          velocity.x *= -1;
        }
        if (mesh.position.y > areaY || mesh.position.y < -areaY) {
          velocity.y *= -1;
        }
      });

// Build connection line positions + per-segment colors
const positions: number[] = [];
const colors: number[] = [];

for (let i = 0; i < particleCount; i++) {
  const a = particles[i].mesh.position;
  for (let j = i + 1; j < particleCount; j++) {
    const b = particles[j].mesh.position;

    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const distSq = dx * dx + dy * dy;

    if (distSq <= outerDistSq) {
      const dist = Math.sqrt(distSq);

      // 1.0 when dist <= innerDist, then linearly down to 0 at outerDist
      let strength = 1;
      if (dist > innerDist) {
        const t = (dist - innerDist) / (outerDist - innerDist); // 0..1
        strength = 1 - t;                                       // 1..0
      }

      const r = baseColor.r * strength;
      const g = baseColor.g * strength;
      const bCol = baseColor.b * strength;

      positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
      colors.push(r, g, bCol, r, g, bCol);
    }
  }
}

lineGeom.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(positions, 3)
);
lineGeom.setAttribute(
  "color",
  new THREE.Float32BufferAttribute(colors, 3)
);
lineGeom.computeBoundingSphere();


      // // Update line geometry
      // const positionAttr = new THREE.Float32BufferAttribute(positions, 3);
      // lineGeom.setAttribute("position", positionAttr);
      // lineGeom.computeBoundingSphere();

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

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);

      renderer.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      lineGeom.dispose();
      lineMat.dispose();

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
