'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import type { Mesh, ShaderMaterial } from 'three';

function Sphere({ active }: { active: boolean }) {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vDisplacement;
    
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    
    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    void main() {
      vUv = uv;
      
      float noise = snoise(position * 1.5 + uTime * 0.15);
      float displacement = noise * 0.15;
      vDisplacement = displacement;
      
      vec3 newPosition = position + normal * displacement;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    varying float vDisplacement;
    
    void main() {
      vec3 graphite = vec3(0.070, 0.060, 0.085);
      vec3 purple = vec3(0.545, 0.416, 0.847);
      vec3 lilac = vec3(0.710, 0.630, 0.910);
      
      float mixFactor = clamp(vUv.y + vDisplacement * 1.15, 0.0, 1.0);
      vec3 color = mix(graphite, purple, mixFactor);
      color = mix(color, lilac, smoothstep(0.70, 1.0, mixFactor) * 0.35);
      
      float intensity = 0.72 + vDisplacement * 1.2;
      color *= intensity;
      
      gl_FragColor = vec4(color, 0.74);
    }
  `;

  useFrame((state, delta) => {
    if (!active) return;

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
      meshRef.current.rotation.x = MathUtils.lerp(meshRef.current.rotation.x, 0.08, 0.05);
      meshRef.current.rotation.z = MathUtils.lerp(meshRef.current.rotation.z, 0, 0.05);
    }

    state.invalidate();
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.8, 16]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        wireframe
      />
    </mesh>
  );
}

function SphereFallback() {
  return (
    <svg viewBox="0 0 600 600" width="100%" height="100%" className="sphere-fallback" aria-hidden="true">
      <g transform="translate(300 300) rotate(-18)" fill="none" stroke="#b79adc" strokeWidth=".7">
        <circle r="245" />
        {[35, 70, 108, 145, 180, 210, 232].map((r) => <ellipse key={r} rx={r} ry="245" />)}
        {[-210, -175, -140, -105, -70, -35, 0, 35, 70, 105, 140, 175, 210].map((y) => (
          <ellipse key={y} cy={y} rx={Math.sqrt(245 * 245 - y * y)} ry={Math.sqrt(245 * 245 - y * y) * .15} />
        ))}
      </g>
    </svg>
  );
}

export function SentientSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    try {
      const context = canvas.getContext('webgl2') || canvas.getContext('webgl');
      setSupported(Boolean(context));
      context?.getExtension('WEBGL_lose_context')?.loseContext();
    } catch {
      setSupported(false);
    }
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let inView = true;
    const sync = () => setActive(inView && !document.hidden);

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.02 },
    );

    observer.observe(node);
    document.addEventListener('visibilitychange', sync);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  if (!supported) {
    return (
      <div ref={containerRef} className="h-full w-full">
        <SphereFallback />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="h-full w-full"
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        frameloop="demand"
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.5} />
        <Sphere active={active} />
      </Canvas>
    </div>
  );
}
