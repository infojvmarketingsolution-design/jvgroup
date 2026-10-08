"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Hero3DCanvasProps {
  activeVerticalIndex: number;
  mode?: "globe" | "matrix";
  isAutoRotate?: boolean;
  className?: string;
  onFpsUpdate?: (fps: number) => void;
}

// 5 Color Themes corresponding to the 5 verticals
const VERTICAL_THEMES = [
  { primary: 0xf36323, secondary: 0xf59e0b, name: "Omni Ads", code: "#F36323" },
  { primary: 0x06b6d4, secondary: 0x3b82f6, name: "Cloud IT", code: "#06B6D4" },
  { primary: 0x10b981, secondary: 0x14b8a6, name: "Next.js Web", code: "#10B981" },
  { primary: 0x8b5cf6, secondary: 0xec4899, name: "Mobile App", code: "#8B5CF6" },
  { primary: 0xf59e0b, secondary: 0xef4444, name: "Global GTM", code: "#F59E0B" },
];

// Helper: Convert Lat/Lng to 3D Cartesian coordinates on sphere
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// Key Global Gateways for London HQ Visualization
const GLOBAL_HUBS = [
  { name: "London Global HQ", lat: 51.5074, lng: -0.1278, isHQ: true },
  { name: "New York Hub", lat: 40.7128, lng: -74.006, isHQ: false },
  { name: "Toronto Hub", lat: 43.6532, lng: -79.3832, isHQ: false },
  { name: "Dubai Gateway", lat: 25.2048, lng: 55.2708, isHQ: false },
  { name: "Singapore Desk", lat: 1.3521, lng: 103.8198, isHQ: false },
  { name: "Mumbai Node", lat: 19.076, lng: 72.8777, isHQ: false },
];

export default function Hero3DCanvas({
  activeVerticalIndex,
  mode = "globe",
  isAutoRotate = true,
  className = "",
  onFpsUpdate,
}: Hero3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  // References to communicate with animation loop without re-triggering effect
  const stateRef = useRef({
    activeMode: mode,
    isAutoRotate,
    activeVerticalIndex,
    theme: VERTICAL_THEMES[activeVerticalIndex] || VERTICAL_THEMES[0],
    targetColorPrimary: new THREE.Color(VERTICAL_THEMES[activeVerticalIndex]?.primary || 0xf36323),
    targetColorSecondary: new THREE.Color(VERTICAL_THEMES[activeVerticalIndex]?.secondary || 0xf59e0b),
    currentColorPrimary: new THREE.Color(VERTICAL_THEMES[activeVerticalIndex]?.primary || 0xf36323),
    currentColorSecondary: new THREE.Color(VERTICAL_THEMES[activeVerticalIndex]?.secondary || 0xf59e0b),
  });

  // Sync state ref with props
  useEffect(() => {
    stateRef.current.activeMode = mode;
    stateRef.current.isAutoRotate = isAutoRotate;
    stateRef.current.activeVerticalIndex = activeVerticalIndex;
    const theme = VERTICAL_THEMES[activeVerticalIndex] || VERTICAL_THEMES[0];
    stateRef.current.theme = theme;
    stateRef.current.targetColorPrimary.setHex(theme.primary);
    stateRef.current.targetColorSecondary.setHex(theme.secondary);
  }, [mode, isAutoRotate, activeVerticalIndex]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // === 1. THREE.JS INITIALIZATION ===
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090e, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background for organic blending
    container.appendChild(renderer.domElement);

    // === 2. LIGHTING ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf36323, 1.4);
    dirLight2.position.set(-5, -5, -3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffaa44, 2.2, 25);
    pointLight.position.set(0, 0, 4.5);
    scene.add(pointLight);

    // === 3. OBJECT GROUPS ===
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    const matrixGroup = new THREE.Group();
    const globeGroup = new THREE.Group();
    masterGroup.add(matrixGroup);
    masterGroup.add(globeGroup);

    // ==========================================
    // BUILD SCENE A: 3D CYBER MATRIX & CORE
    // ==========================================
    const coreGeom = new THREE.IcosahedronGeometry(1.35, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: false,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    matrixGroup.add(coreMesh);

    const wireGeom = new THREE.IcosahedronGeometry(1.65, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xf36323,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const wireMesh = new THREE.Mesh(wireGeom, wireMat);
    matrixGroup.add(wireMesh);

    const ring1Geom = new THREE.TorusGeometry(2.35, 0.035, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xf36323,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x441100,
      emissiveIntensity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    matrixGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(2.05, 0.025, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    matrixGroup.add(ring2);

    const ring3Geom = new THREE.TorusGeometry(2.75, 0.018, 16, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.45,
    });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.y = Math.PI / 4;
    matrixGroup.add(ring3);

    const satGroup = new THREE.Group();
    matrixGroup.add(satGroup);
    const satCount = 6;
    const satMeshes: THREE.Mesh[] = [];
    for (let i = 0; i < satCount; i++) {
      const angle = (i / satCount) * Math.PI * 2;
      const sGeom = new THREE.BoxGeometry(0.24, 0.24, 0.24);
      const sMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.95,
        roughness: 0.08,
        emissive: 0xf36323,
        emissiveIntensity: 0.7,
      });
      const sMesh = new THREE.Mesh(sGeom, sMat);
      sMesh.position.set(Math.cos(angle) * 2.35, Math.sin(i) * 0.4, Math.sin(angle) * 2.35);
      satGroup.add(sMesh);
      satMeshes.push(sMesh);
    }

    const particleCount = 220;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8.5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8.5;
    }
    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf36323,
      size: 0.065,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    matrixGroup.add(particles);

    // ==========================================
    // BUILD SCENE B: 3D HOLOGRAPHIC GLOBAL NETWORK
    // ==========================================
    const globeRadius = 1.95;

    const globeSphereGeom = new THREE.SphereGeometry(globeRadius, 48, 48);
    const globeSphereMat = new THREE.MeshStandardMaterial({
      color: 0x080e18,
      roughness: 0.3,
      metalness: 0.75,
      transparent: true,
      opacity: 0.95,
    });
    const globeSphere = new THREE.Mesh(globeSphereGeom, globeSphereMat);
    globeGroup.add(globeSphere);

    const globeWireGeom = new THREE.SphereGeometry(globeRadius * 1.006, 24, 18);
    const globeWireMat = new THREE.MeshBasicMaterial({
      color: 0x1e293b,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const globeWire = new THREE.Mesh(globeWireGeom, globeWireMat);
    globeGroup.add(globeWire);

    const atmoGeom = new THREE.SphereGeometry(globeRadius * 1.09, 32, 32);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0xf36323,
      transparent: true,
      opacity: 0.16,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
    const atmoMesh = new THREE.Mesh(atmoGeom, atmoMat);
    globeGroup.add(atmoMesh);

    // Dense glowing dot cloud for continents & international traffic
    const globeDotCount = 950;
    const dotPositions = new Float32Array(globeDotCount * 3);
    for (let i = 0; i < globeDotCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = globeRadius * 1.012;
      const sinPhi = Math.sin(phi);
      dotPositions[i * 3] = r * sinPhi * Math.cos(theta);
      dotPositions[i * 3 + 1] = r * Math.cos(phi);
      dotPositions[i * 3 + 2] = r * sinPhi * Math.sin(theta);
    }
    const globeDotGeom = new THREE.BufferGeometry();
    globeDotGeom.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    const globeDotMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.04,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const globeDots = new THREE.Points(globeDotGeom, globeDotMat);
    globeGroup.add(globeDots);

    // London HQ Beacon
    const londonCoord = latLngToVector3(51.5074, -0.1278, globeRadius);

    const beaconHeight = 0.6;
    const beaconGeom = new THREE.CylinderGeometry(0.015, 0.045, beaconHeight, 12);
    beaconGeom.translate(0, beaconHeight / 2, 0);
    const beaconMat = new THREE.MeshBasicMaterial({
      color: 0xf36323,
      transparent: true,
      opacity: 0.95,
    });
    const londonBeacon = new THREE.Mesh(beaconGeom, beaconMat);
    londonBeacon.position.copy(londonCoord);
    londonBeacon.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), londonCoord.clone().normalize());
    globeGroup.add(londonBeacon);

    const pinGeom = new THREE.SphereGeometry(0.09, 16, 16);
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xf36323,
      emissiveIntensity: 1.5,
    });
    const pinMesh = new THREE.Mesh(pinGeom, pinMat);
    pinMesh.position.copy(londonCoord.clone().add(londonCoord.clone().normalize().multiplyScalar(beaconHeight)));
    globeGroup.add(pinMesh);

    // Target City Nodes & Flight Arcs
    interface ArcData {
      curve: THREE.QuadraticBezierCurve3;
      mesh: THREE.Line;
      packet: THREE.Mesh;
      progress: number;
      speed: number;
    }
    const flightArcs: ArcData[] = [];

    GLOBAL_HUBS.forEach((hub) => {
      const hubPos = latLngToVector3(hub.lat, hub.lng, globeRadius);
      const hGeom = new THREE.SphereGeometry(hub.isHQ ? 0.075 : 0.05, 12, 12);
      const hMat = new THREE.MeshBasicMaterial({
        color: hub.isHQ ? 0xffffff : 0x38bdf8,
      });
      const hMesh = new THREE.Mesh(hGeom, hMat);
      hMesh.position.copy(hubPos);
      globeGroup.add(hMesh);

      if (!hub.isHQ) {
        const midPoint = londonCoord.clone().add(hubPos).multiplyScalar(0.5);
        const dist = londonCoord.distanceTo(hubPos);
        midPoint.normalize().multiplyScalar(globeRadius + dist * 0.44);

        const curve = new THREE.QuadraticBezierCurve3(londonCoord, midPoint, hubPos);
        const points = curve.getPoints(36);
        const arcGeom = new THREE.BufferGeometry().setFromPoints(points);
        const arcMat = new THREE.LineBasicMaterial({
          color: 0xf36323,
          transparent: true,
          opacity: 0.55,
          blending: THREE.AdditiveBlending,
        });
        const arcLine = new THREE.Line(arcGeom, arcMat);
        globeGroup.add(arcLine);

        const pGeom = new THREE.SphereGeometry(0.045, 8, 8);
        const pMat = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          blending: THREE.AdditiveBlending,
        });
        const pMesh = new THREE.Mesh(pGeom, pMat);
        globeGroup.add(pMesh);

        flightArcs.push({
          curve,
          mesh: arcLine,
          packet: pMesh,
          progress: Math.random(),
          speed: 0.007 + Math.random() * 0.004,
        });
      }
    });

    const globeOrbitGeom = new THREE.TorusGeometry(globeRadius * 1.38, 0.015, 12, 100);
    const globeOrbitMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.4,
    });
    const globeOrbitRing = new THREE.Mesh(globeOrbitGeom, globeOrbitMat);
    globeOrbitRing.rotation.x = Math.PI / 2.8;
    globeOrbitRing.rotation.y = Math.PI / 6;
    globeGroup.add(globeOrbitRing);

    globeGroup.rotation.y = -0.9;
    globeGroup.rotation.x = 0.35;

    // === 4. INTERACTION CONTROLS ===
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let rotVelocity = { x: 0, y: 0 };
    let mouseParallax = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const xNorm = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const yNorm = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseParallax = { x: xNorm * 0.35, y: yNorm * 0.25 };

      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      rotVelocity.y = deltaX * 0.005;
      rotVelocity.x = deltaY * 0.005;

      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePos.x;
      const deltaY = e.touches[0].clientY - prevMousePos.y;

      rotVelocity.y = deltaX * 0.007;
      rotVelocity.x = deltaY * 0.007;

      prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // === 5. RESIZE HANDLER ===
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    // === 6. ANIMATION LOOP ===
    let animationId: number;
    let clock = new THREE.Clock();
    let frameCount = 0;
    let lastFpsTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      frameCount++;
      const now = performance.now();
      if (now - lastFpsTime >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / (now - lastFpsTime));
        if (onFpsUpdate) onFpsUpdate(currentFps);
        frameCount = 0;
        lastFpsTime = now;
      }

      const elapsedTime = clock.getElapsedTime();
      const state = stateRef.current;

      // Color lerping
      state.currentColorPrimary.lerp(state.targetColorPrimary, 0.06);
      state.currentColorSecondary.lerp(state.targetColorSecondary, 0.06);

      // Apply dynamic colors
      wireMat.color.copy(state.currentColorPrimary);
      ring1Mat.color.copy(state.currentColorPrimary);
      ring1Mat.emissive.copy(state.currentColorPrimary).multiplyScalar(0.3);
      ring2Mat.color.copy(state.currentColorSecondary);
      particleMat.color.copy(state.currentColorPrimary);
      pointLight.color.copy(state.currentColorPrimary);
      dirLight2.color.copy(state.currentColorSecondary);

      atmoMat.color.copy(state.currentColorPrimary);
      beaconMat.color.copy(state.currentColorPrimary);
      globeDotMat.color.copy(state.currentColorSecondary);
      globeOrbitMat.color.copy(state.currentColorPrimary);
      flightArcs.forEach((arc) => {
        (arc.mesh.material as THREE.LineBasicMaterial).color.copy(state.currentColorPrimary);
      });

      // Mode visibility transition
      const targetMatrixScale = state.activeMode === "matrix" ? 1 : 0.001;
      const targetGlobeScale = state.activeMode === "globe" ? 1 : 0.001;

      matrixGroup.scale.lerp(new THREE.Vector3(targetMatrixScale, targetMatrixScale, targetMatrixScale), 0.09);
      globeGroup.scale.lerp(new THREE.Vector3(targetGlobeScale, targetGlobeScale, targetGlobeScale), 0.09);

      matrixGroup.visible = matrixGroup.scale.x > 0.02;
      globeGroup.visible = globeGroup.scale.x > 0.02;

      // Apply drag rotation velocity with friction
      if (isDragging) {
        masterGroup.rotation.y += rotVelocity.y;
        masterGroup.rotation.x += rotVelocity.x;
      } else {
        masterGroup.rotation.y += rotVelocity.y;
        masterGroup.rotation.x += rotVelocity.x;
        rotVelocity.x *= 0.92;
        rotVelocity.y *= 0.92;

        if (state.isAutoRotate) {
          if (state.activeMode === "globe") {
            globeGroup.rotation.y += 0.0028;
          } else {
            masterGroup.rotation.y += 0.0035;
          }
        }
      }

      // Parallax camera easing
      camera.position.x += (mouseParallax.x - camera.position.x) * 0.04;
      camera.position.y += (-mouseParallax.y - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      if (matrixGroup.visible) {
        wireMesh.rotation.x = elapsedTime * 0.2;
        wireMesh.rotation.y = elapsedTime * 0.25;
        coreMesh.rotation.x = -elapsedTime * 0.15;
        coreMesh.rotation.y = -elapsedTime * 0.2;

        ring1.rotation.z = elapsedTime * 0.4;
        ring2.rotation.x = elapsedTime * 0.35 + Math.PI / 3;
        ring3.rotation.y = -elapsedTime * 0.3;

        satMeshes.forEach((mesh, idx) => {
          const angle = (idx / satCount) * Math.PI * 2 + elapsedTime * 0.45;
          mesh.position.x = Math.cos(angle) * 2.35;
          mesh.position.z = Math.sin(angle) * 2.35;
          mesh.position.y = Math.sin(elapsedTime * 1.5 + idx) * 0.35;
          mesh.rotation.x += 0.02;
          mesh.rotation.y += 0.03;
        });

        particles.rotation.y = -elapsedTime * 0.08;
      }

      if (globeGroup.visible) {
        const pulse = 1 + Math.sin(elapsedTime * 4) * 0.25;
        londonBeacon.scale.set(1, pulse, 1);
        (pinMesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.0 + Math.sin(elapsedTime * 6) * 0.5;

        flightArcs.forEach((arc) => {
          arc.progress += arc.speed;
          if (arc.progress > 1) arc.progress = 0;
          const pos = arc.curve.getPoint(arc.progress);
          arc.packet.position.copy(pos);
        });

        globeOrbitRing.rotation.z = elapsedTime * 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);

      renderer.dispose();
      coreGeom.dispose();
      coreMat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      ring3Geom.dispose();
      ring3Mat.dispose();
      globeSphereGeom.dispose();
      globeSphereMat.dispose();
      globeWireGeom.dispose();
      globeWireMat.dispose();
      atmoGeom.dispose();
      atmoMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full select-none overflow-hidden ${className}`}>
      {/* 3D WebGL Canvas Viewport */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing" 
      />

      {/* Subtle interaction cue - disappears on interaction */}
      {!isInteracting && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-700 opacity-40">
          <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
            Drag 360° to Explore
          </span>
        </div>
      )}
    </div>
  );
}
