'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './MagneticCursor.module.css';

export default function MagneticCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    // Mouse position vectors
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics for smooth movement
    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
    const outputX = useSpring(mouseX, smoothOptions);
    const outputY = useSpring(mouseY, smoothOptions);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over clickable elements
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setHovered(true);
            } else {
                setHovered(false);
            }
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            ref={cursorRef}
            className={styles.cursor}
            style={{
                translateX: outputX,
                translateY: outputY,
            }}
            animate={{
                width: hovered ? 40 : 20,
                height: hovered ? 40 : 20,
                backgroundColor: hovered ? 'rgba(255, 255, 255, 0.2)' : 'var(--accent)',
                border: hovered ? '1px solid var(--accent)' : 'none',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className={`${styles.dot} ${hovered ? styles.hovered : ''}`} />
        </motion.div>
    );
}
