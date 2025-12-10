import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import StudioSection from '@/components/home/StudioSection';
import { TEAM_IMAGES } from '@/data/projectImages';
import Image from 'next/image';

const TEAM = [
    { name: 'John Doe', role: 'Principal Architect', img: TEAM_IMAGES['John Doe'] },
    { name: 'Jane Smith', role: 'Senior Architect', img: TEAM_IMAGES['Jane Smith'] },
    { name: 'Robert Fox', role: 'Interior Lead', img: TEAM_IMAGES['Robert Fox'] },
    { name: 'Alice Cooper', role: 'Design Associate', img: TEAM_IMAGES['Alice Cooper'] },
];

export default function PeoplePage() {
    return (
        <main>
            <PageHeader title="Our People" parent={{ label: 'About Us', href: '/about' }} />

            {/* Leadership */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 8rem' }}>
                <StudioSection />

                <h2 style={{ fontSize: '2rem', marginTop: '6rem', marginBottom: '3rem', fontWeight: 300, textAlign: 'center' }}>Leadership Team</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '3rem' }}>
                    {TEAM.map((member) => (
                        <div key={member.name} style={{ textAlign: 'center' }}>
                            <div style={{ position: 'relative', width: '100%', aspectRatio: '1', marginBottom: '1.5rem', borderRadius: '50%', overflow: 'hidden' }}>
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
                                />
                            </div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 400 }}>{member.name}</h3>
                            <span style={{ fontSize: '0.9rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{member.role}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
