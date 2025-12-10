import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';

export default function PhilosophyPage() {
    return (
        <main>
            <PageHeader title="Our Philosophy" parent={{ label: 'About Us', href: '/about' }} />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem 8rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 300 }}>Design for Life</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666', marginBottom: '2rem' }}>
                    At ABC ARCHITECT, we believe that architecture is more than just buildings; it is about creating ecosystems
                    where life can thrive. Our philosophy aims to bridge the gap between human needs and the natural environment.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666', marginBottom: '2rem' }}>
                    We employ a rigorous process of inquiry, exploring context, climate, and culture to derive solutions
                    that are both contemporary and rooted in place.
                </p>
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
                    alt="Studio Philosophy"
                    style={{ width: '100%', borderRadius: '4px', marginTop: '2rem' }}
                />
            </div>
            <Footer />
        </main>
    );
}
