import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock data generator for demo purposes
const getProjectsByCategory = (category: string) => {
    return [
        { id: 1, title: `Modern ${category} Project 1`, image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800' },
        { id: 2, title: `Iconic ${category} Design`, image: 'https://images.unsplash.com/photo-1518005020951-ecc8c2dba9c9?q=80&w=800' },
        { id: 3, title: `${category} Concept`, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800' },
    ];
};

const VALID_SLUGS = ['workspace', 'residential', 'culture', 'educational', 'wellness', 'hospitality', 'adaptive-reuse', 'industrial'];

export function generateStaticParams() {
    return VALID_SLUGS.map((slug) => ({ slug }));
}

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function ArchitectureCategoryPage({ params }: Props) {
    const resolvedParams = await params;

    if (!VALID_SLUGS.includes(resolvedParams.slug)) {
        // For static export, we might strictly control this, but locally handle gracefully
    }

    const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const projects = getProjectsByCategory(title);

    return (
        <main>
            <PageHeader title={`Architecture: ${title}`} parent={{ label: 'Architecture', href: '/architecture' }} />

            <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem 6rem' }}>
                <p style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center', color: '#666' }}>
                    Explore our portfolio of {title} projects, where we blend functionality with aesthetic excellence.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2rem' }}>
                    {projects.map(p => (
                        <Link key={p.id} href={`/projects/${p.id}`} style={{ display: 'block', cursor: 'pointer' }}>
                            <div style={{ overflow: 'hidden', aspectRatio: '4/3', marginBottom: '1rem', background: '#f0f0f0' }}>
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                />
                            </div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.25rem' }}>{p.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
