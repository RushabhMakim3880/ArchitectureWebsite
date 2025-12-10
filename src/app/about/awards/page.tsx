import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';

const AWARDS = [
    { year: '2023', title: 'National Architecture Excellence Award', project: 'Leaf House', org: 'IIA' },
    { year: '2022', title: 'Outstanding Sustainable Design', project: 'Eco Resort Coorg', org: 'Green Building Council' },
    { year: '2021', title: 'Top 50 Architects in India', project: 'Practice', org: 'AD50' },
    { year: '2020', title: 'Best Workspace Design', project: 'Tech Hub Bangalore', org: 'Trends Awards' },
    { year: '2019', title: 'Young Architect of the Year', project: 'Various', org: 'Design Forum' },
    { year: '2018', title: 'Civic Building Award', project: 'City Library', org: 'Municipal Council' },
];

export default function AwardsPage() {
    return (
        <main>
            <PageHeader title="Awards & Recognition" parent={{ label: 'About Us', href: '/about' }} />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem 8rem' }}>
                <img
                    src="/images/about/awards.png"
                    alt="Architectural Award Trophy"
                    style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover', borderRadius: '4px', marginBottom: '3rem' }}
                />

                <div style={{ display: 'grid', gap: '1rem' }}>
                    {AWARDS.map((item, i) => (
                        <div key={i} style={{
                            display: 'grid',
                            gridTemplateColumns: '100px 1fr auto',
                            alignItems: 'center',
                            padding: '2rem 0',
                            borderBottom: '1px solid #eee',
                            gap: '2rem'
                        }}>
                            <span style={{ fontSize: '1.2rem', color: '#999' }}>{item.year}</span>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 400, marginBottom: '0.5rem' }}>{item.title}</h3>
                                <span style={{ color: '#666' }}>{item.project}</span>
                            </div>
                            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ccc' }}>{item.org}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
