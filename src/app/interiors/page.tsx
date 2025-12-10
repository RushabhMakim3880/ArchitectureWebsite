import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/data/projectsData';

export default function InteriorsPage() {
    return (
        <main>
            <PageHeader title="Interiors" />
            <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem 6rem', textAlign: 'center' }}>
                <p style={{ maxWidth: '800px', margin: '0 auto 4rem', color: '#666', lineHeight: 1.6 }}>
                    Our interior design practice focuses on creating intimate, tactile, and highly functional spaces.
                    We believe the inside of a building should be as compelling as its exterior.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2rem' }}>
                    {[
                        PROJECTS.find(p => p.id === 7)!, // Urban Loft
                        PROJECTS.find(p => p.id === 12)!, // Minimalist Office
                        PROJECTS.find(p => p.id === 13)!  // Boutique Showroom
                    ].map(project => (
                        <Link key={project.id} href={`/projects/${project.id}`} className="card">
                            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <h3 style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: 400 }}>{project.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
