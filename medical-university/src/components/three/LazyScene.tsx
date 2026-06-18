import { Suspense, lazy } from "react";

const Scene3D = lazy(() => import("./Scene3D"));

/** Suspense-wrapped, code-split 3D scene with a graceful glow fallback. */
export function LazyScene({
  variant = "dna",
  className,
}: {
  variant?: "dna" | "molecule";
  className?: string;
}) {
  return (
    <Suspense fallback={<div className="scene-fallback" aria-hidden="true" />}>
      <Scene3D variant={variant} className={className} />
    </Suspense>
  );
}
