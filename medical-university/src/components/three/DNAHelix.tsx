import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * A rotating DNA double helix built from two phosphate backbones
 * (spheres) and connecting base-pair rungs. Pure geometry, no assets.
 */
export function DNAHelix({
  count = 26,
  reduce = false,
}: {
  count?: number;
  reduce?: boolean;
}) {
  const group = useRef<THREE.Group>(null);

  const { strandA, strandB, rungs } = useMemo(() => {
    const a: THREE.Vector3[] = [];
    const b: THREE.Vector3[] = [];
    const r: { mid: THREE.Vector3; len: number; angle: number }[] = [];
    const turns = 2.4;
    const radius = 1.25;
    const height = 7;
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;
      const ax = Math.cos(angle) * radius;
      const az = Math.sin(angle) * radius;
      const bx = Math.cos(angle + Math.PI) * radius;
      const bz = Math.sin(angle + Math.PI) * radius;
      const pa = new THREE.Vector3(ax, y, az);
      const pb = new THREE.Vector3(bx, y, bz);
      a.push(pa);
      b.push(pb);
      r.push({
        mid: pa.clone().add(pb).multiplyScalar(0.5),
        len: pa.distanceTo(pb),
        angle,
      });
    }
    return { strandA: a, strandB: b, rungs: r };
  }, [count]);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduce) group.current.rotation.y += delta * 0.35;
    // gentle pointer parallax
    const px = state.pointer.x * 0.25;
    const py = state.pointer.y * 0.2;
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, px, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -py, 0.05);
  });

  return (
    <group ref={group}>
      {strandA.map((p, i) => (
        <mesh key={`a${i}`} position={p}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#0891b2"
            emissiveIntensity={0.45}
            roughness={0.25}
            metalness={0.3}
          />
        </mesh>
      ))}
      {strandB.map((p, i) => (
        <mesh key={`b${i}`} position={p}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <meshStandardMaterial
            color="#34d399"
            emissive="#16a34a"
            emissiveIntensity={0.4}
            roughness={0.25}
            metalness={0.3}
          />
        </mesh>
      ))}
      {rungs.map((rung, i) => (
        <mesh
          key={`r${i}`}
          position={rung.mid}
          rotation={[0, -rung.angle, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.045, 0.045, rung.len, 8]} />
          <meshStandardMaterial
            color="#a5f3fc"
            emissive="#0891b2"
            emissiveIntensity={0.2}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}
