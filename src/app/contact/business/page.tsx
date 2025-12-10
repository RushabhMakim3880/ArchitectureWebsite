import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';

export default function BusinessPage() {
    return (
        <main>
            <PageHeader title="Business Inquiries" parent={{ label: 'Contact Us', href: '/contact' }} />
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 8rem' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem', color: '#666', textAlign: 'center' }}>
                    We collaborate with visionary clients to create exceptional value.
                    Tell us about your project requirements.
                </p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: '#f9f9f9', padding: '3rem', borderRadius: '4px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>First Name</label>
                            <input type="text" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Last Name</label>
                            <input type="text" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd' }} />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Company / Organization</label>
                        <input type="text" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd' }} />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Project Type</label>
                        <select style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd' }}>
                            <option>Residential</option>
                            <option>Commercial</option>
                            <option>Hospitality</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message</label>
                        <textarea rows={5} style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd' }}></textarea>
                    </div>

                    <button type="button" style={{ padding: '1rem 2rem', background: '#000', color: '#fff', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Submit Inquiry
                    </button>
                </form>
            </div>
            <Footer />
        </main>
    );
}
