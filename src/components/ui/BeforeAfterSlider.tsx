'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './BeforeAfterSlider.module.css';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    alt?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt = 'Before and after comparison' }: BeforeAfterSliderProps) {
    const [isResizing, setIsResizing] = useState(false);
    const [position, setPosition] = useState(50);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!sliderRef.current) return;
        const { left, width } = sliderRef.current.getBoundingClientRect();
        const x = clientX - left;
        const newPos = Math.min(Math.max((x / width) * 100, 0), 100);
        setPosition(newPos);
    }, []);

    const onMouseMove = useCallback((e: MouseEvent) => {
        if (!isResizing) return;
        handleMove(e.clientX);
    }, [isResizing, handleMove]);

    const onMouseUp = useCallback(() => {
        setIsResizing(false);
    }, []);

    const onTouchMove = useCallback((e: TouchEvent) => {
        if (!isResizing) return;
        handleMove(e.touches[0].clientX);
    }, [isResizing, handleMove]);

    useEffect(() => {
        if (isResizing) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('touchmove', onTouchMove);
            window.addEventListener('touchend', onMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onMouseUp);
        };
    }, [isResizing, onMouseMove, onMouseUp, onTouchMove]);

    return (
        <div
            className={styles.container}
            ref={sliderRef}
            onMouseDown={() => setIsResizing(true)}
            onTouchStart={() => setIsResizing(true)}
        >
            <div className={styles.afterImage}>
                <img src={afterImage} alt={`After ${alt}`} draggable={false} />
            </div>

            <div
                className={styles.beforeImage}
                style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
            >
                <img src={beforeImage} alt={`Before ${alt}`} draggable={false} />
                <div className={styles.label}>BEFORE</div>
            </div>

            <div className={styles.sliderHandle} style={{ left: `${position}%` }}>
                <div className={styles.line} />
                <div className={styles.knob}>
                    <MoveHorizontal size={20} color="black" />
                </div>
            </div>

            <div className={styles.afterLabel}>AFTER</div>
        </div>
    );
}
