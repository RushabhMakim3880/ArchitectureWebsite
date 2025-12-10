'use client';

import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import { NEWS } from '@/data/mediaData';
import { use } from 'react';

export default function MediaDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const item = NEWS.find(n => n.id.toString() === resolvedParams.id);

    if (!item) {
        notFound();
    }

    return (
        <main>
            <PageHeader title={item.title} parent={{ label: 'News & Media', href: '/about/media' }} />
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 8rem' }}>
                <span style={{ display: 'block', marginBottom: '1rem', color: '#666' }}>{item.date}</span>
                <div style={{ width: '100%', height: '400px', overflow: 'hidden', marginBottom: '3rem' }}>
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                {item.content ? (
                    <div
                        dangerouslySetInnerHTML={{ __html: item.content }}
                        style={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#444' }}
                    />
                ) : (
                    <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#444' }}>{item.summary}</p>
                )}
            </div>
            <Footer />
        </main>
    );
}
