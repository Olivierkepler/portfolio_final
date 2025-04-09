// 'use client';

// import { useFrame } from '@react-three/fiber';
// import { useRef, useState, useEffect } from 'react';
// import * as THREE from 'three';

// export default function RobotFace() {
//   const groupRef = useRef<THREE.Group>(null);
//   const leftEyeRef = useRef<THREE.Mesh>(null);
//   const rightEyeRef = useRef<THREE.Mesh>(null);
//   const [blink, setBlink] = useState(false);

//   const velocity = useRef(0);
//   const positionY = useRef(0);
//   const mouse = useRef({ x: 0, y: 0 });

//   // Mouse tracking
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
//       mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Blink every 3s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBlink(true);
//       setTimeout(() => setBlink(false), 200);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Bounce and tracking logic
//   useFrame(() => {
//     const maxHeadRotation = 0.3;
//     const maxEyeRotation = 0.25;

//     const targetX = THREE.MathUtils.clamp(mouse.current.x, -1, 1);
//     const targetY = THREE.MathUtils.clamp(mouse.current.y, -1, 1);

//     // Head looks toward mouse
//     if (groupRef.current) {
//       groupRef.current.rotation.y = targetX * maxHeadRotation;
//       groupRef.current.rotation.x = targetY * maxHeadRotation;

//       // Apply bounce position
//       velocity.current -= 0.01; // gravity
//       positionY.current += velocity.current;
//       if (positionY.current < 0) {
//         positionY.current = 0;
//         velocity.current *= -0.5; // bounce back with damping
//       }
//       groupRef.current.position.y = positionY.current;
//     }

//     // Eyes follow
//     const xRot = targetX * maxEyeRotation;
//     const yRot = targetY * maxEyeRotation;
//     if (leftEyeRef.current) leftEyeRef.current.rotation.set(yRot, xRot, 0);
//     if (rightEyeRef.current) rightEyeRef.current.rotation.set(yRot, xRot, 0);
//   });

//   const handleClick = () => {
//     velocity.current = 0.2; // jump velocity
//   };

//   return (
//     <group ref={groupRef} onClick={handleClick}>
//       {/* Head */}
//       <mesh>
//         <sphereGeometry args={[1.5, 32, 32]} />
//         <meshStandardMaterial color="#fdba74" />
//       </mesh>

//       {/* Eyes */}
//       {!blink && (
//         <>
//           <mesh position={[-0.5, 0.3, 1.4]} ref={leftEyeRef}>
//             <sphereGeometry args={[0.2, 32, 32]} />
//             <meshStandardMaterial emissive="#67e8f9" color="#67e8f9" emissiveIntensity={1.5} />
//           </mesh>
//           <mesh position={[0.5, 0.3, 1.4]} ref={rightEyeRef}>
//             <sphereGeometry args={[0.2, 32, 32]} />
//             <meshStandardMaterial emissive="#67e8f9" color="#67e8f9" emissiveIntensity={1.5} />
//           </mesh>
//         </>
//       )}

//       {/* Closed Eyes */}
//       {blink && (
//         <>
//           <mesh position={[-0.5, 0.3, 1.41]}>
//             <boxGeometry args={[0.4, 0.05, 0.01]} />
//             <meshStandardMaterial color="#0f172a" />
//           </mesh>
//           <mesh position={[0.5, 0.3, 1.41]}>
//             <boxGeometry args={[0.4, 0.05, 0.01]} />
//             <meshStandardMaterial color="#0f172a" />
//           </mesh>
//         </>
//       )}

//       {/* Visor */}
//       <mesh position={[0, 0.3, 1.2]}>
//         <boxGeometry args={[1.5, 0.4, 0.1]} />
//         <meshStandardMaterial color="#1e293b" />
//       </mesh>

//       {/* Antenna */}
//       <mesh position={[0, 1.6, 0]}>
//         <cylinderGeometry args={[0.05, 0.05, 0.8, 12]} />
//         <meshStandardMaterial color="#1e40af" />
//       </mesh>

//       {/* Ears */}
//       <mesh position={[-1.6, 0.3, 0]}>
//         <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
//         <meshStandardMaterial color="#334155" />
//       </mesh>
//       <mesh position={[1.6, 0.3, 0]}>
//         <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
//         <meshStandardMaterial color="#334155" />
//       </mesh>

//       {/* Mouth */}
//       <mesh position={[0, -0.7, 1.35]}>
//         <boxGeometry args={[0.6, 0.2, 0.05]} />
//         <meshStandardMaterial color="#1e293b" />
//       </mesh>

//       {/* Grill Lines */}
//       {[...Array(3)].map((_, i) => (
//         <mesh key={i} position={[0, -0.7 + (i - 1) * 0.08, 1.4]}>
//           <boxGeometry args={[0.4, 0.02, 0.05]} />
//           <meshStandardMaterial color="#e2e8f0" />
//         </mesh>
//       ))}
//     </group>
//   );
// }
