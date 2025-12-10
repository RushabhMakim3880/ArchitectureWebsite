import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import StudioSection from '@/components/home/StudioSection';

export default function AboutPage() {
    return (
        <main>
            <PageHeader title="About Us" />

            {/* Philosophy Section */}
            <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem 6rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '2rem' }}>Philosophy</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
                    At ABC ARCHITECT, our philosophy is rooted in the belief that architecture is a profound act of optimism.
                    We strive to create environments that elevate the human spirit, respect the natural world, and foster
                    meaningful connections. Every line we draw is a commitment to sustainability and timeless beauty.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
                    Our design process is collaborative and rigorous. We listen deeply to our clients and the context,
                    allowing the unique constraints of each project to drive innovation. From the macro scale of urban planning
                    to the micro detail of a door handle, we are obsessed with quality and craftsmanship.
                </p>
            </section>

            {/* Process Section */}
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 8rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '4rem', textAlign: 'center' }}>Our Process</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                    {[
                        { step: '01', title: 'Discovery', desc: 'We start by understanding your vision, needs, and the site context.' },
                        { step: '02', title: 'Concept', desc: 'Developing initial sketches and massing models to explore possibilities.' },
                        { step: '03', title: 'Development', desc: 'Refining the design with detailed drawings, material selection, and sustainability analysis.' },
                        { step: '04', title: 'Execution', desc: 'Overseeing construction to ensure the vision is realized with precision.' }
                    ].map((item) => (
                        <div key={item.step}>
                            <span style={{ fontSize: '3rem', fontWeight: 700, color: '#f0f0f0', display: 'block', marginBottom: '1rem' }}>{item.step}</span>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '1rem' }}>{item.title}</h3>
                            <p style={{ color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Re-use Studio Section for "People" */}
            <StudioSection />

            {/* Awards List - Simple Text List */}
            <section style={{ background: '#f9f9f9', padding: '6rem 2rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '3rem', textAlign: 'center' }}>Awards & Recognition</h2>
                    <ul style={{ listStyle: 'none', display: 'grid', gap: '2rem' }}>
                        {[
                            { year: '2023', award: 'National Architecture Excellence Award', project: 'Leaf House' },
                            { year: '2022', award: 'Outstanding Sustainable Design', project: 'Eco Resort Coorg' },
                            { year: '2021', award: 'Top 50 Architects in India', project: 'Practice' },
                            { year: '2020', award: 'Best Workspace Design', project: 'Tech Hub Bangalore' },
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
                                <span style={{ fontWeight: 500 }}>{item.award}</span>
                                <span style={{ color: '#666' }}>{item.project} ({item.year})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <Footer />
        </main>
    );
}
