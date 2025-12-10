'use client';

import Link from 'next/link';
import styles from './CategoryList.module.css';
import { PROJECTS, CATEGORIES_INFO } from '@/data/projectsData';

export default function CategoryList() {
    // Get all categories from Info object
    const categories = Object.keys(CATEGORIES_INFO);

    return (
        <section className={styles.section}>
            <h3 className={styles.heading}>Explore Project Categories</h3>
            <div className={styles.grid}>
                {categories.map((cat) => {
                    // Find a representative project for the image
                    const project = PROJECTS.find(p => p.category === cat);
                    // Use a fallback image if no project found (though we ensured there is one)
                    const image = project?.image || 'https://images.unsplash.com/photo-1518005020951-ecc8c2dba9c9?q=80&w=800';

                    return (
                        <Link
                            key={cat}
                            href={`/projects?category=${encodeURIComponent(cat)}`}
                            className={styles.card}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={image} alt={cat} className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.title}>{cat}</h4>
                                <p className={styles.description}>
                                    {CATEGORIES_INFO[cat]}
                                </p>
                                <span className={styles.linkText}>View Projects</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
