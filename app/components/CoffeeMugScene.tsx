"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import * as THREE from "three";

// Coffee Mug Component
const CoffeeMug = () => {
  const mugRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    mugRef.current.rotation.y += 0.003;
  });

  return (
    <group ref={mugRef} position={[0, 0.8, 0]}>
      {/* Mug Body */}
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
        <meshStandardMaterial color="#c2a67a" />
      </mesh>

      {/* Handle */}
      <mesh position={[0.6, 0, 0]}>
        <torusGeometry args={[0.3, 0.07, 16, 100]} />
        <meshStandardMaterial color="#c2a67a" />
      </mesh>
    </group>
  );
};

// Table Component
const TableTop = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
    <cylinderGeometry args={[2.5, 2.5, 0.2, 32]} />
    <meshStandardMaterial color="#8B4513" />
  </mesh>
);

const CoffeeMugScene = () => {
  return (
    <Canvas shadows camera={{ position: [4, 3, 5], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Stage adjustCamera intensity={0.5} environment="city">
        <CoffeeMug />
        <TableTop />
      </Stage>
      <OrbitControls />
    </Canvas>
  );
};

export default CoffeeMugScene;
