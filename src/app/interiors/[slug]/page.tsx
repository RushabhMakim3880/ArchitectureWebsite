import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Mock data generator
const getProjectsByCategory = (category: string) => {
    return [
        { id: 101, title: `Luxe ${category} Styling`, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=800' },
        { id: 102, title: `${category} Spaces`, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800' },
        { id: 103, title: `Modern ${category}`, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800' },
    ];
};

const VALID_SLUGS = ['workspace', 'residential', 'cultural', 'hospitality', 'retail'];

export function generateStaticParams() {
    return VALID_SLUGS.map((slug) => ({ slug }));
}

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function InteriorsCategoryPage({ params }: Props) {
    const resolvedParams = await params;
    const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const projects = getProjectsByCategory(title);

    return (
        <main>
            <PageHeader title={`Interiors: ${title}`} parent={{ label: 'Interiors', href: '/interiors' }} />

            <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem 6rem' }}>
                <p style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center', color: '#666' }}>
                    Our {title} interiors are designed to evoke emotion and enhance the user experience through texture, light, and form.
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
