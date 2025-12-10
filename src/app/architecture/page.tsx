import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/data/projectsData';

// Filter implementation reused or simplified specific to Architecture
export default function ArchitecturePage() {
    return (
        <main>
            <PageHeader title="Architecture" />
            <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem 6rem', textAlign: 'center' }}>
                <p style={{ maxWidth: '800px', margin: '0 auto 4rem', color: '#666', lineHeight: 1.6 }}>
                    We design buildings that are environmentally responsible and contextually relevant.
                    Our architectural practice spans residential, commercial, institutional, and hospitality sectors.
                </p>

                {/* Simple Grid Placeholder - can reuse Projects logic in real app */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2rem' }}>
                    {/* Using mapped data for consistency */}
                    {[
                        PROJECTS.find(p => p.id === 9)!, // Community Center
                        PROJECTS.find(p => p.id === 4)!, // Eco Resort
                        PROJECTS.find(p => p.id === 1)!  // Leaf House
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
