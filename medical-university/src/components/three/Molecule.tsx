import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** A stylised molecule: central nucleus orbited by bonded atoms. */
export function Molecule({ reduce = false }: { reduce?: boolean }) {
  const group = useRef<THREE.Group>(null);

  const atoms = useMemo(() => {
    const list: { pos: THREE.Vector3; color: string; size: number }[] = [];
    const palette = ["#22d3ee", "#34d399", "#0891b2", "#a5f3fc"];
    const n = 7;
    for (let i = 0; i < n; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 2.4;
      list.push({
        pos: new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ),
        color: palette[i % palette.length],
        size: 0.3 + (i % 3) * 0.07,
      });
    }
    return list;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduce) {
      group.current.rotation.y += delta * 0.4;
      group.current.rotation.x += delta * 0.12;
    }
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      state.pointer.x * 0.2,
      0.05
    );
  });

  return (
    <group ref={group}>
      {/* nucleus */}
      <mesh>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshStandardMaterial
          color="#0891b2"
          emissive="#22d3ee"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.4}
          flatShading
        />
      </mesh>
      {atoms.map((a, i) => (
        <group key={i}>
          <mesh position={a.pos}>
            <sphereGeometry args={[a.size, 24, 24]} />
            <meshStandardMaterial
              color={a.color}
              emissive={a.color}
              emissiveIntensity={0.35}
              roughness={0.25}
              metalness={0.3}
            />
          </mesh>
          <Bond from={new THREE.Vector3(0, 0, 0)} to={a.pos} />
        </group>
      ))}
    </group>
  );
}

function Bond({ from, to }: { from: THREE.Vector3; to: THREE.Vector3 }) {
  const ref = useRef<THREE.Mesh>(null);
  const { mid, len, quat } = useMemo(() => {
    const dir = new THREE.Vector3().subVectors(to, from);
    const length = dir.length();
    const midpoint = from.clone().add(to).multiplyScalar(0.5);
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize()
    );
    return { mid: midpoint, len: length, quat: q };
  }, [from, to]);

  return (
    <mesh ref={ref} position={mid} quaternion={quat}>
      <cylinderGeometry args={[0.04, 0.04, len, 8]} />
      <meshStandardMaterial color="#a5f3fc" transparent opacity={0.55} />
    </mesh>
  );
}
