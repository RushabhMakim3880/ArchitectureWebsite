import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/data/projectsData';

export async function generateStaticParams() {
    return PROJECTS.map((p) => ({ id: p.id.toString() }));
}

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
    const resolvedParams = await params;
    const project = PROJECTS.find(p => p.id.toString() === resolvedParams.id);
    return {
        title: project ? `${project.title} - Architect` : 'Project Not Found',
        description: project ? `Details about ${project.title}` : 'Project details',
    };
}


export default async function ProjectDetailPage({ params }: Props) {
    const resolvedParams = await params;
    const project = PROJECTS.find(p => p.id.toString() === resolvedParams.id);

    if (!project) {
        notFound();
    }

    return (
        <main>
            {/* Hero */}
            <div style={{ height: '70vh', width: '100%', position: 'relative' }}>
                <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '4rem 2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', color: '#fff' }}>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>{project.category}</span>
                        <h1 style={{ fontSize: '3rem', fontWeight: 300, marginTop: '0.5rem' }}>{project.title}</h1>
                        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>{project.location}</p>
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem', display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '4rem' }}>

                {/* Project Details */}
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '2rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>Project Specs</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#666' }}>
                        <li>
                            <strong style={{ display: 'block', color: '#000', fontSize: '0.8rem', textTransform: 'uppercase' }}>Client</strong>
                            {project.client}
                        </li>
                        <li>
                            <strong style={{ display: 'block', color: '#000', fontSize: '0.8rem', textTransform: 'uppercase' }}>Area</strong>
                            {project.area}
                        </li>
                        <li>
                            <strong style={{ display: 'block', color: '#000', fontSize: '0.8rem', textTransform: 'uppercase' }}>Year</strong>
                            {project.year}
                        </li>
                    </ul>
                </div>

                {/* Description */}
                <div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '2rem' }}>About the Project</h2>
                    <p style={{ lineHeight: 1.8, color: '#666', marginBottom: '2rem' }}>
                        This project represents a unique exploration of space and materiality. Designed for {project.client},
                        the {project.title} seeks to harmonize with its context in {project.location}. The design strategy
                        focused on maximizing natural light and ventilation while maintaining privacy.
                    </p>
                    <p style={{ lineHeight: 1.8, color: '#666' }}>
                        The material palette was chosen to age gracefully, reflecting the passage of time.
                        Every detail, from the structural joints to the interior finishes, was rigorously detailed
                        to ensure a cohesive and enduring result.
                    </p>
                </div>
            </div>

            {/* Gallery Placeholder */}
            <div style={{ padding: '0 2rem 8rem' }}>
                <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" style={{ width: '100%', height: 'auto' }} />
                    <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>

            <Footer />
        </main>
    );
}
