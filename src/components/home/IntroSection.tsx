'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './IntroSection.module.css';

export default function IntroSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    return (
        <section ref={containerRef} className={styles.section}>
            <motion.div style={{ y }} className={styles.parallaxBg} />

            <div className={styles.container}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.eyebrow}
                >
                    Crafting Modern Solutions
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={styles.heading}
                >
                    Our practice is an <span>architecture, urban design and interior design firm</span> founded in 1990. We design spaces that are contexturally sensitive, nature-centric and culturally rooted.
                </motion.h2>

                <div className={styles.separator} />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className={styles.description}
                >
                    We believe that every project is an opportunity to craft something unique. Our approach combines rigorous analysis
                    with intuitive creativity, resulting in spaces that are not only beautiful but also deeply functional and sustainable.
                </motion.p>
            </div>
        </section>
    );
}
