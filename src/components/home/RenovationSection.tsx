'use client';

import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import styles from './RenovationSection.module.css';

export default function RenovationSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Restoration & Renewal</h2>
                    <p className={styles.subtitle}>Bringing new life to historic structures while preserving their soul.</p>
                </div>

                <div className={styles.sliderContainer}>
                    <BeforeAfterSlider
                        beforeImage="/images/before.png"
                        afterImage="/images/after.png"
                        alt="Historic Villa Renovation"
                    />
                </div>
            </div>
        </section>
    );
}
