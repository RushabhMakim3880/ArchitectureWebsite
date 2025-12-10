import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';

export default function CareersPage() {
    return (
        <main>
            <PageHeader title="Careers" parent={{ label: 'Contact Us', href: '/contact' }} />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem 8rem' }}>

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '1.5rem' }}>Join Our Team</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666', lineHeight: 1.6 }}>
                        We are always looking for talented individuals who share our passion for design excellence.
                        Explore our current openings below.
                    </p>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {[
                        { role: 'Senior Architect', loc: 'New York, NY', type: 'Full-time' },
                        { role: 'Interior Designer', loc: 'New York, NY', type: 'Full-time' },
                        { role: 'Architectural Intern', loc: 'Remote / Hybrid', type: 'Internship' },
                    ].map((job, i) => (
                        <div key={i} style={{
                            border: '1px solid #eee',
                            padding: '2rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'border-color 0.2s',
                            cursor: 'pointer'
                        }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }}>{job.role}</h3>
                                <p style={{ color: '#999', fontSize: '0.9rem' }}>{job.loc} • {job.type}</p>
                            </div>
                            <span style={{ fontSize: '0.9rem', fontWeight: 600, textDecoration: 'underline' }}>Apply Now</span>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', background: '#f9f9f9', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', color: '#666' }}>Don't see a matching role?</p>
                    <p style={{ color: '#666' }}>Send your portfolio and CV to <a href="mailto:careers@abcarchitect.com" style={{ color: '#000', fontWeight: 500 }}>careers@abcarchitect.com</a></p>
                </div>

            </div>
            <Footer />
        </main>
    );
}
