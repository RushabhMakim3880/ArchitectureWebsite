'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Building() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <group ref={group}>
            {/* Abstract Architectural Composition */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Main abstract tower */}
                <mesh position={[0, 0, 0]} castShadow receiveShadow>
                    <boxGeometry args={[2, 6, 2]} />
                    <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.8} />
                </mesh>

                {/* Floating platforms */}
                <mesh position={[2, 1, 1]} castShadow receiveShadow>
                    <boxGeometry args={[3, 0.2, 3]} />
                    <meshStandardMaterial color="#333333" roughness={0.2} metalness={0.5} />
                </mesh>
                <mesh position={[-1.5, -2, -1]} castShadow receiveShadow>
                    <boxGeometry args={[4, 0.2, 2]} />
                    <meshStandardMaterial color="#333333" roughness={0.2} metalness={0.5} />
                </mesh>

                {/* Accent elements */}
                <mesh position={[1.5, 3, 1.5]} castShadow receiveShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#FF5733" roughness={0.1} metalness={0.1} emissive="#FF5733" emissiveIntensity={0.5} />
                </mesh>
            </Float>
        </group>
    );
}

export default function HeroScene() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
            <Canvas shadows dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                <PerspectiveCamera makeDefault position={[5, 2, 8]} fov={50} />
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize={[512, 512]}
                />

                <Building />

                <Environment preset="city" />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
