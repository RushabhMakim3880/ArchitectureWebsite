'use client';

import styles from './GridSection.module.css';

import { NEWS } from '@/data/mediaData';

const AWARDS = [
    { id: 1, title: 'W.A.D.E Asia 2019', image: '/images/awards/award1.png' },
    { id: 2, title: 'Inside Outside 2020', image: '/images/awards/award2.png' },
    { id: 3, title: 'Architectural Digest 100', image: '/images/awards/award3.png' },
    { id: 4, title: 'IIID Design Excellence', image: '/images/awards/award4.png' },
];

export function AwardsSection() {
    return (
        <section className={styles.section}>
            <h3 className={styles.heading}>Awards</h3>
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#666' }}>
                Our commitment to good breathing and innovative design has been recognized globally. We are honored to receive these awards which inspire us to push boundaries.
            </p>
            <div className={styles.grid}>
                {AWARDS.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={item.image} alt={item.title} className={styles.image} />
                        </div>
                        {/* <span className={styles.caption}>{item.title}</span> */}
                        {/* Reference often hides text for awards or keeps it very minimal */}
                    </div>
                ))}
            </div>
        </section>
    );
}

import Link from 'next/link';
export function NewsSection() {
    return (
        <section className={styles.section} style={{ background: '#fcfcfc' }}>
            <h3 className={styles.heading}>News & Media</h3>
            <div className={styles.grid}>
                {NEWS.map((item) => (
                    <Link key={item.id} href={`/about/media/${item.id}`} className={`${styles.card} ${styles.newsCard}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className={styles.imageWrapper}>
                            <img src={item.image} alt={item.title} className={styles.image} />
                        </div>
                        <div>
                            <span className={styles.date}>{item.date}</span>
                            <span className={styles.caption} style={{ fontWeight: 500 }}>{item.title}</span>
                            {item.summary && <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', lineHeight: 1.5 }}>{item.summary}</p>}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
