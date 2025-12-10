'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './StudioSection.module.css';

export default function StudioSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={styles.imageWrapper}
                >
                    <Image
                        src="/images/home/team.jpg"
                        alt="Studio Team"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={styles.content}
                >
                    <span className={styles.eyebrow}>Our Studio</span>
                    <h3 className={styles.heading}>
                        A collective of <span>passionate</span> designers.
                    </h3>
                    <p className={styles.text}>
                        Our team is our greatest asset. We foster a collaborative environment where young architects
                        work alongside experienced mentors to create visionary spaces. Diversity in thought and
                        background drives our innovation.
                    </p>
                    <Link href="/about" className={styles.link}>
                        Meet the Team
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
