// components/DeliveryBox.tsx

"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const DeliveryBox = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    meshRef.current.rotation.y += 0.005;
  });

  // Define box proportions like a package: wider and flatter
  const boxSize: [number, number, number] = [2, 1, 1.5];

  // Define material with different colors for tape vs box
  const materials = [
    new THREE.MeshStandardMaterial({ color: "#A0522D" }), // Side 1 - cardboard
    new THREE.MeshStandardMaterial({ color: "#A0522D" }), // Side 2 - cardboard
    new THREE.MeshStandardMaterial({ color: "#C2B280" }), // Top - tape (lighter)
    new THREE.MeshStandardMaterial({ color: "#A0522D" }), // Bottom
    new THREE.MeshStandardMaterial({ color: "#A0522D" }), // Side 3
    new THREE.MeshStandardMaterial({ color: "#A0522D" }), // Side 4
  ];

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={boxSize} />
      <meshStandardMaterial attach="material" map={null} vertexColors={true}>
        {materials.map((material, index) => (
          <primitive key={index} object={material} attach={`material-${index}`} />
        ))}
      </meshStandardMaterial>
    </mesh>
  );
};

const DeliveryBoxCanvas = () => {
  return (
    <Canvas style={{ height: 400 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 2, 2]} intensity={0.8} />
      <DeliveryBox />
      <OrbitControls />
    </Canvas>
  );
};

export default DeliveryBoxCanvas;
