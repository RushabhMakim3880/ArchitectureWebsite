'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stage, useGLTF, Html } from '@react-three/drei';
import { Suspense } from 'react';
import styles from './ModelSection.module.css';

function Loader() {
    return (
        <Html center>
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
                <p>Loading Model...</p>
                <p className={styles.subtext}>Large model - Please wait</p>
            </div>
        </Html>
    );
}

function HighRiseModel() {
    const { scene } = useGLTF('/models/HighRise_Rajkot.glb');
    return <primitive object={scene} />;
}

export default function ModelSection() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles.title}>Future Visions</h2>
                <p className={styles.description}>Exploring verticality and sustainable density in modern urban environments.</p>
            </div>

            <div className={styles.canvasContainer}>
                <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 45 }}>
                    <Suspense fallback={<Loader />}>
                        <Stage environment="city" intensity={0.5} adjustCamera={1.2}>
                            <HighRiseModel />
                        </Stage>
                    </Suspense>
                    <OrbitControls autoRotate autoRotateSpeed={0.5} makeDefault />
                </Canvas>
            </div>
        </section>
    );
}

useGLTF.preload('/models/HighRise_Rajkot.glb');
