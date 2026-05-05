"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ── Paletas de cor ─────────────────────────────── */
const PALETTES = {
  gold: {
    main:    new THREE.Color("#F6A619"),
    light:   new THREE.Color("#FFD700"),
    ambient: "#F6A619",
    dir1:    "#FFD700",
    dir2:    "#F6A619",
    point:   "#F6A619",
  },
  green: {
    main:    new THREE.Color("#24a34a"),
    light:   new THREE.Color("#3dba62"),
    ambient: "#24a34a",
    dir1:    "#16803a",
    dir2:    "#2dba55",
    point:   "#0f6628",
  },
} as const;

type ColorVariant = keyof typeof PALETTES;

/* ── Geometria (proporções do SVG) ─────────────── */
const BAR_RADIUS  = 0.058;
const BAR_LENGTH  = 0.63;
const HEAD_RADIUS = 0.115;
const HEAD_Y      = 0.38;
const EXTRUDE     = 0.075;

function makeBarShape(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2 + r, -h / 2);
  s.lineTo(w / 2 - r, -h / 2);
  s.absarc(w / 2 - r, -h / 2 + r, r, -Math.PI / 2, 0, false);
  s.lineTo(w / 2, h / 2 - r);
  s.absarc(w / 2 - r, h / 2 - r, r, 0, Math.PI / 2, false);
  s.lineTo(-w / 2 + r, h / 2);
  s.absarc(-w / 2 + r, h / 2 - r, r, Math.PI / 2, Math.PI, false);
  s.lineTo(-w / 2, -h / 2 + r);
  s.absarc(-w / 2 + r, -h / 2 + r, r, Math.PI, -Math.PI / 2, false);
  return s;
}

const extrudeOpts = {
  depth: EXTRUDE,
  bevelEnabled: true,
  bevelThickness: 0.014,
  bevelSize: 0.01,
  bevelSegments: 4,
};

/* ── Material com cor variável ────────────────── */
function SymbolMat({ palette }: { palette: typeof PALETTES[ColorVariant] }) {
  return (
    <meshLambertMaterial
      color={palette.main}
      emissive={palette.main}
      emissiveIntensity={0.22}
    />
  );
}

/* ── Símbolo girando ──────────────────────────── */
function SickNomadsSymbol({ palette }: { palette: typeof PALETTES[ColorVariant] }) {
  const ref = useRef<THREE.Group>(null!);

  const headGeo = useMemo(() => {
    const s = new THREE.Shape();
    s.absarc(0, 0, HEAD_RADIUS, 0, Math.PI * 2, false);
    return new THREE.ExtrudeGeometry(s, extrudeOpts);
  }, []);

  const barGeo = useMemo(() => {
    const bw = BAR_LENGTH + BAR_RADIUS * 2;
    const bh = BAR_RADIUS * 2;
    return new THREE.ExtrudeGeometry(makeBarShape(bw, bh, BAR_RADIUS), extrudeOpts);
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.55;
  });

  const barAngles = [0, Math.PI / 3, -Math.PI / 3];

  return (
    <group ref={ref} position={[0, 0, -EXTRUDE / 2]}>
      <mesh geometry={headGeo} position={[0, HEAD_Y, 0]}>
        <SymbolMat palette={palette} />
      </mesh>
      {barAngles.map((angle, i) => (
        <mesh key={i} geometry={barGeo} rotation={[0, 0, angle]}>
          <SymbolMat palette={palette} />
        </mesh>
      ))}
    </group>
  );
}

/* ── Cena ─────────────────────────────────────── */
export function LogoSymbol3D({ variant = "gold" }: { variant?: ColorVariant }) {
  const palette = PALETTES[variant];
  return (
    <Canvas
      camera={{ fov: 44, position: [0, 0.08, 2.9] }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={2.4} color={palette.ambient} />
      <directionalLight position={[3, 5, 3]} intensity={4.0} color={palette.dir1} />
      <directionalLight position={[-2, 2, -1]} intensity={2.0} color={palette.dir2} />
      <pointLight position={[0, -2, 2]} intensity={2.5} color={palette.point} />

      <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.35}>
        <SickNomadsSymbol palette={palette} />
      </Float>
    </Canvas>
  );
}
