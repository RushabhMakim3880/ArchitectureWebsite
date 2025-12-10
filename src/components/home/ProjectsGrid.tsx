'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './ProjectsGrid.module.css';

const RECENT_PROJECTS = [
    {
        id: 1,
        title: 'Minimalist Villa',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Urban Office Hub',
        category: 'Workspace',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'The Glass Pavilion',
        category: 'Cultural',
        image: 'https://images.unsplash.com/photo-1510917226279-889ad4915add?q=80&w=1000&auto=format&fit=crop'
    }
];

export default function ProjectsGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h3 className={styles.title}>Recent Works</h3>
                <Link href="/projects" className={styles.viewAll}>
                    View All Projects
                </Link>
            </div>

            <div className={styles.grid}>
                {RECENT_PROJECTS.map((project) => (
                    <Link key={project.id} href={`/projects/${project.id}`} className={styles.projectCard}>
                        <div className={styles.imageWrapper}>
                            <img src={project.image} alt={project.title} className={styles.image} />
                        </div>
                        <div className={styles.projectInfo}>
                            <div>
                                <h4 className={styles.projectName}>{project.title}</h4>
                                <span className={styles.projectCategory}>{project.category}</span>
                            </div>
                            <ArrowRight className={styles.arrow} size={20} strokeWidth={1} />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
