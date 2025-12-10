import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';

export default function BlogPage() {
    return (
        <main>
            <PageHeader title="Blog" />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem 8rem', textAlign: 'center', color: '#666' }}>
                <p>Coming Soon. Stay tuned for updates on our latest projects and thoughts on design.</p>
            </div>
            <Footer />
        </main>
    );
}
