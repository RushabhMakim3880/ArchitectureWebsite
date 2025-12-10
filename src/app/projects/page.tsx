'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import { PROJECTS, CATEGORIES_INFO } from '@/data/projectsData';

// All unique categories from the Projects data + 'All'
// Or simpler: just use the keys from CATEGORIES_INFO as the allowable filters
const ALLOWED_CATEGORIES = ['All', ...Object.keys(CATEGORIES_INFO)];

function ProjectsContent() {
    const searchParams = useSearchParams();
    const search = searchParams.get('search');
    const categoryParam = searchParams.get('category');

    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        if (categoryParam) {
            // Decode URI component to handle spaces correctly
            const decoded = decodeURIComponent(categoryParam);
            // Check if it exists in our known categories (loosely)
            const match = ALLOWED_CATEGORIES.find(c => c.toLowerCase() === decoded.toLowerCase());
            if (match) setActiveFilter(match);
        }
    }, [categoryParam]);

    // Filter Logic
    const filteredProjects = PROJECTS.filter(project => {
        const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
        const matchesSearch = search
            ? project.title.toLowerCase().includes(search.toLowerCase())
            : true;
        return matchesCategory && matchesSearch;
    });

    const categoryDescription = activeFilter !== 'All' ? CATEGORIES_INFO[activeFilter] : '';

    return (
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem 6rem' }}>

            {/* Category Info Section */}
            {activeFilter !== 'All' && (
                <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '3rem 1rem', background: '#f9f9f9', borderRadius: '8px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '1rem' }}>{activeFilter}</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666', lineHeight: 1.6, fontSize: '1.1rem' }}>
                        {categoryDescription}
                    </p>
                </div>
            )}

            {/* Search Result Message */}
            {search && (
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>
                        Showing results for: <span style={{ color: '#000', fontWeight: 600 }}>"{search}"</span>
                    </p>
                    <Link href="/projects" style={{ fontSize: '0.9rem', textDecoration: 'underline', color: '#999' }}>Clear Search</Link>
                </div>
            )}

            {/* Filter Buttons */}
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '4rem', flexWrap: 'wrap' }}>
                {ALLOWED_CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            cursor: 'pointer',
                            color: activeFilter === cat ? '#000' : '#999',
                            borderBottom: activeFilter === cat ? '1px solid #000' : '1px solid transparent',
                            paddingBottom: '4px',
                            transition: 'all 0.2s'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            {filteredProjects.length > 0 ? (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredProjects.map(project => (
                        <Link key={project.id} href={`/projects/${project.id}`} style={{ display: 'block', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                            <div style={{ overflow: 'hidden', aspectRatio: '4/3', marginBottom: '1rem', background: '#f0f0f0' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.25rem' }}>{project.title}</h3>
                            <span style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase' }}>{project.category}</span>
                        </Link>
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '4rem 0', color: '#666' }}>
                    <p>No projects found matching your criteria.</p>
                </div>
            )}
        </div>
    );
}

export default function ProjectsPage() {
    return (
        <main>
            <PageHeader title="Our Projects" />
            <Suspense fallback={<div style={{ textAlign: 'center', padding: '4rem' }}>Loading projects...</div>}>
                <ProjectsContent />
            </Suspense>
            <Footer />
        </main>
    );
}
