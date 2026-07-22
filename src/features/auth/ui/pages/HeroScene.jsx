import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sparkles } from "@react-three/drei";

const nodes = [
  [-2, 1, 0],
  [-1, -1, 1],
  [0, 2, -1],
  [1, -1, 0],
  [2, 1, 1],
  [0, 0, 2],
  [-2, -2, -1],
  [2, -2, -2],
  [0, 1, 2],
  [-1, 2, 1],
];

const connections = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [3, 5],
  [4, 5],
  [6, 1],
  [6, 7],
  [7, 4],
  [8, 2],
  [8, 5],
  [9, 0],
  [9, 2],
];

function Network() {
  const group = useRef();

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();

    group.current.rotation.y = t * 0.15;
    group.current.rotation.x = Math.sin(t * 0.3) * 0.08;

    // subtle mouse movement
    group.current.rotation.y += mouse.x * 0.15;
    group.current.rotation.x += -mouse.y * 0.15;
  });

  return (
    <group ref={group}>
      {connections.map(([a, b], i) => (
        <Line
          key={i}
          points={[nodes[a], nodes[b]]}
          color="#8B5CF6"
          lineWidth={1}
        />
      ))}

      {nodes.map((position, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry args={[0.08, 32, 32]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#8B5CF6"
            emissiveIntensity={3}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
      <color attach="background" args={["#0b0b12"]} />

      <ambientLight intensity={1.5} />

      <pointLight
        position={[4, 4, 4]}
        color="#8B5CF6"
        intensity={25}
      />

      <pointLight
        position={[-4, -4, -4]}
        color="#3B82F6"
        intensity={15}
      />

      <Network />

      <Sparkles
        count={150}
        scale={10}
        size={2}
        speed={0.25}
      />
    </Canvas>
  );
}