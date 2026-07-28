import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";

export default function Earth() {
  const earthRef = useRef();

  const earthTexture = useLoader(
    TextureLoader,
    "/textures/earth_day.jpg"
  );

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh ref={earthRef}>
      
      <sphereGeometry args={[1.25, 128, 128]} />
      <meshStandardMaterial
  map={earthTexture}
  metalness={0.05}
  roughness={0.4}
  emissive="#1b4dff"
  emissiveIntensity={0.12}
/>
    </mesh>
  );
}