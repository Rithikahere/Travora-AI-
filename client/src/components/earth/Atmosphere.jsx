import { BackSide } from "three";

export default function Atmosphere() {
  return (
    
        <mesh scale={1.33}>
      
     <sphereGeometry args={[1.28, 128, 128]} />
      <meshBasicMaterial
        color="#6DBBFF"
        transparent
        opacity={0.18}
        side={BackSide}
      />
    </mesh>
  );
}