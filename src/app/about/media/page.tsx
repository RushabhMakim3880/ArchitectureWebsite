import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import { NewsSection } from '@/components/home/GridSections';

export default function MediaPage() {
    return (
        <main>
            <PageHeader title="News & Media" parent={{ label: 'About Us', href: '/about' }} />
            <div style={{ paddingBottom: '6rem' }}>
                <NewsSection />
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}>
                    <p style={{ color: '#666' }}>For press inquiries, please contact <a href="mailto:press@abcarchitect.com" style={{ color: '#000', textDecoration: 'underline' }}>press@abcarchitect.com</a></p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
