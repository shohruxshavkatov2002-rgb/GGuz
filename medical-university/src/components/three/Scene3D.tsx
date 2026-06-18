import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { DNAHelix } from "./DNAHelix";
import { Molecule } from "./Molecule";
import { Particles } from "./Particles";

/**
 * WebGL scene wrapper. `variant` picks the focal object.
 * Lazy-loaded by callers so Three.js stays out of the initial bundle.
 */
export default function Scene3D({
  variant = "dna",
  className,
}: {
  variant?: "dna" | "molecule";
  className?: string;
}) {
  const reduce = useReducedMotion() ?? false;

  return (
    <Canvas
      className={className}
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 6, 5]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-6, -3, 2]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[5, -4, -3]} intensity={0.9} color="#34d399" />

      <Particles reduce={reduce} />

      <Float
        speed={reduce ? 0 : 1.4}
        rotationIntensity={reduce ? 0 : 0.4}
        floatIntensity={reduce ? 0 : 0.8}
      >
        {variant === "dna" ? (
          <DNAHelix reduce={reduce} />
        ) : (
          <Molecule reduce={reduce} />
        )}
      </Float>
    </Canvas>
  );
}
