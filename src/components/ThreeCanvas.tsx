import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // Create Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f172a, 0.15);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Create a central holographic sphere representing Munich RE's Risk Network
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Globe Core (Wireframe sphere)
    const globeGeo = new THREE.SphereGeometry(3, 24, 24);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6, // Blue
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globe);

    // Inner Solid Glowing Core
    const innerGeo = new THREE.SphereGeometry(2.8, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    globeGroup.add(innerCore);

    // Orbital Rings
    const ringGroup = new THREE.Group();
    globeGroup.add(ringGroup);

    const ringCount = 3;
    const rings: THREE.Line[] = [];

    for (let i = 0; i < ringCount; i++) {
      const ringGeo = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const radius = 4 + i * 0.8;
      const segments = 64;

      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }

      ringGeo.setFromPoints(points);
      const ringMat = new THREE.LineBasicMaterial({
        color: i === 1 ? 0x06b6d4 : 0x3b82f6,
        transparent: true,
        opacity: 0.4 - i * 0.1,
      });

      const ring = new THREE.Line(ringGeo, ringMat);
      // Tilt rings differently
      ring.rotation.x = Math.PI / 3 + i * 0.2;
      ring.rotation.y = i * 0.4;
      ringGroup.add(ring);
      rings.push(ring);
    }

    // Risk Node Particles (Stars)
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Sphere random distribution
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 3 + Math.random() * 2.5; // Distribute between r=3 and r=5.5

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);

      // Gradient colors between blue and cyan
      colors[i] = 0.2 + Math.random() * 0.2; // R
      colors[i + 1] = 0.5 + Math.random() * 0.4; // G
      colors[i + 2] = 0.9 + Math.random() * 0.1; // B
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const pTexture = new THREE.TextureLoader().load(
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='6' fill='white'/></svg>",
      () => {}
    );

    const particleMat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      map: pTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(particles);

    // Mouse movement listeners for interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouse.targetX = (x / rect.width) * 2 - 1;
      mouse.targetY = -(y / rect.height) * 2 + 1;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Scroll listeners for dynamic acceleration
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    setIsLoaded(true);

    // Animation Loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (Dampening)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Rotate group automatically
      const baseSpeed = 0.15;
      const scrollSpeedBoost = Math.min(scrollY * 0.001, 1.5);
      const activeSpeed = baseSpeed + scrollSpeedBoost;

      globeGroup.rotation.y = elapsedTime * activeSpeed;
      globeGroup.rotation.x = elapsedTime * (activeSpeed * 0.4);

      // Tilt based on mouse cursor (micro hover tilt)
      globeGroup.rotation.x += mouse.y * 0.25;
      globeGroup.rotation.y += mouse.x * 0.25;

      // Animate rings wave effect
      rings.forEach((ring, idx) => {
        ring.scale.setScalar(1 + Math.sin(elapsedTime * 2 + idx) * 0.05);
      });

      // Render
      renderer.render(scene, camera);
    };

    animate();

    // ResizeObserver for fluid container resizing
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const entry = entries[0];
      const { width: newWidth, height: newHeight } = entry.contentRect;

      width = newWidth || 500;
      height = newHeight || 500;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      // Dispose Three assets
      globeGeo.dispose();
      globeMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      rings.forEach((r) => r.geometry.dispose());
      pTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[350px] lg:min-h-[500px] flex items-center justify-center">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-mono animate-pulse">
          Initializing interactive 3D risk environment...
        </div>
      )}
      <div ref={containerRef} className="w-full h-full absolute inset-0" id="three-risk-globe" />
    </div>
  );
}
