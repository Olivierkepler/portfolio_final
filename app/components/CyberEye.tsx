// components/CyberEye.tsx

"use client";

import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const CyberEyeModel = () => {
  const { scene } = useGLTF("/models/cyber_eye.glb");
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
};

const CyberEyeScene = () => {
  return (
    <Canvas className="h-full w-full" camera={{ position: [3, 2, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <CyberEyeModel />
      <OrbitControls />
      <Environment preset="sunset" background />
    </Canvas>
  );
};

export default CyberEyeScene;
