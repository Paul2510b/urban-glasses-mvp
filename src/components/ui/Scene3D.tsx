import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Environment, Float, Torus } from '@react-three/drei';
import * as THREE from 'three';

function GlassShape() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, state.mouse.y * 0.8, 0.05);
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, state.mouse.x * 0.8, 0.05);
    mesh.current.rotation.z += 0.001;
  });

  return (
    <Float floatIntensity={2} speed={1.5} rotationIntensity={0.5}>
      <Torus ref={mesh} args={[1.5, 0.6, 128, 128]} position={[2.5, 0, 0]}>
        <MeshTransmissionMaterial 
          backside={true}
          thickness={1.5}
          roughness={0.05}
          transmission={1}
          ior={1.15}
          chromaticAberration={0.08}
          distortion={0.3}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color="#ffffff"
        />
      </Torus>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-[15] hidden lg:block" style={{ mixBlendMode: 'screen' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#F3F0EA" />
        <directionalLight position={[-10, -10, -10]} intensity={2} color="#D4AF37" />
        <GlassShape />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
