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
    renderer.setClearColor(0x000000, 0); // full transparency
    container.appendChild(renderer.domElement);

    // Lights (subtle)
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const dir = new THREE.DirectionalLight(0xffffff, 0.6);
    dir.position.set(3, 5, 6);
    scene.add(dir);

    // --- Particles setup ---
    const particleCount = 50;       // tweak: more/less dots
    const areaX = 7;                // horizontal radius of area
    const areaY = 4;                // vertical radius of area
    const maxSpeed = 0.01;          // max drift speed

    const particleGeom = new THREE.SphereGeometry(0.06, 8, 8);
    const particleMat = new THREE.MeshStandardMaterial({
      color: 0x0d6efd,        // your blue
      emissive: 0x0d6efd,
      emissiveIntensity: 0.7,
      metalness: 0.4,
      roughness: 0.3,
    });

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const mesh = new THREE.Mesh(particleGeom, particleMat);
      const x = (Math.random() - 0.5) * 2 * areaX;
      const y = (Math.random() - 0.5) * 2 * areaY;
      mesh.position.set(x, y, 0);
      scene.add(mesh);

      const angle = Math.random() * Math.PI * 2;
      const speed = maxSpeed * (0.3 + Math.random() * 0.7); // avoid zero-speed
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
  opacity: 0.1,
  vertexColors: true // allow per-vertex colors
});

const lineGeom = new THREE.BufferGeometry();
const lineSegments = new THREE.LineSegments(lineGeom, lineMat);
scene.add(lineSegments);

// let lines reach a bit farther, but fade out
const maxConnectionDist = 3;
const maxConnectionDistSq = maxConnectionDist * maxConnectionDist;


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

    if (distSq <= maxConnectionDistSq) {
      const dist = Math.sqrt(distSq);
      const t = dist / maxConnectionDist;      // 0 (close) → 1 (max distance)
      const strength = 1 - t;                  // 1 (close) → 0 (far)

      // base color scaled by strength
      const r = baseColor.r * strength;
      const g = baseColor.g * strength;
      const bCol = baseColor.b * strength;

      positions.push(a.x, a.y, a.z, b.x, b.y, b.z);

      // same color at both ends of the segment
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


      // Update line geometry
      const positionAttr = new THREE.Float32BufferAttribute(positions, 3);
      lineGeom.setAttribute("position", positionAttr);
      lineGeom.computeBoundingSphere();

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

    // Cleanup
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
