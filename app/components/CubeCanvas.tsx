// components/CubeCanvas.tsx

"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const SpinningCube = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
};

const CubeCanvas = () => {
  return (
    <Canvas style={{ height: 400 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} />
      <SpinningCube />
      <OrbitControls />
    </Canvas>
  );
};

export default CubeCanvas;
