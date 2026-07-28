import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from "./Earth";

export default function Scene() {
  return (
    <Canvas
      gl={{
        alpha: true,
        antialias: true,
      }}
      camera={{
  position: [0, 0, 6.8],
  fov: 40,
}}
    >
      {/* Transparent Background */}

      {/* Lighting */}
      <ambientLight intensity={2.2} />

<directionalLight
  position={[6, 4, 5]}
  intensity={5}
/>

<pointLight
  position={[-5, 3, 5]}
  intensity={3}
/>

      <pointLight
        position={[-5, 3, 5]}
        intensity={2}
        color="#ffffff"
      />

      <pointLight
        position={[0, -4, -4]}
        intensity={0.8}
        color="#4da6ff"
      />

      {/* Stars */}
      <Stars
        radius={100}
        depth={60}
        count={6000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Earth */}
      <Earth />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
      />
    </Canvas>
  );
}