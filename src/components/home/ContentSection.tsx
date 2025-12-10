'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ContentSection.module.css';

export default function ContentSection() {
    return (
        <section className={styles.section}>
            {/* About Teaser */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.intro}
            >
                <h2>Thoughtful Architecture for Modern Living</h2>
                <p>
                    At ABC ARCHITECT, we believe that great design is not just about aesthetics—it's about creating
                    environments that enhance the human experience. With a focus on sustainability and innovation,
                    we craft spaces that stand the test of time.
                </p>
                <Link href="/about" className={styles.link}>
                    Read Our Philosophy
                </Link>
            </motion.div>

            {/* Categories */}
            <div className={styles.categories}>
                <Link href="/architecture" className={styles.card}>
                    <img
                        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop"
                        alt="Architecture"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardOverlay}>
                        <span className={styles.cardTitle}>Architecture</span>
                    </div>
                </Link>

                <Link href="/interiors" className={styles.card}>
                    <img
                        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1000&auto=format&fit=crop"
                        alt="Interiors"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardOverlay}>
                        <span className={styles.cardTitle}>Interiors</span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
