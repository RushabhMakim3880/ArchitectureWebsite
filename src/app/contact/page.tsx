import PageHeader from '@/components/layout/PageHeader';
import Footer from '@/components/layout/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <main>
            <PageHeader title="Contact Us" />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

                {/* Info Column */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '2rem' }}>Get in Touch</h3>
                    <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '3rem' }}>
                        Whether you have a project in mind or just want to say hello, we'd love to hear from you.
                        Our team is available for consultations by appointment.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <MapPin size={24} color="#000" />
                            <div>
                                <h4 style={{ marginBottom: '0.5rem', fontWeight: 500 }}>Visit Us</h4>
                                <address style={{ fontStyle: 'normal', color: '#666' }}>
                                    123 Architecture Blvd,<br />
                                    Design District,<br />
                                    New York, NY 10012
                                </address>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Mail size={24} color="#000" />
                            <div>
                                <h4 style={{ marginBottom: '0.5rem', fontWeight: 500 }}>Email Us</h4>
                                <a href="mailto:hello@abcarchitect.com" style={{ color: '#666' }}>hello@abcarchitect.com</a>
                                <br />
                                <a href="mailto:careers@abcarchitect.com" style={{ color: '#666' }}>careers@abcarchitect.com</a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Phone size={24} color="#000" />
                            <div>
                                <h4 style={{ marginBottom: '0.5rem', fontWeight: 500 }}>Call Us</h4>
                                <a href="tel:+12125550123" style={{ color: '#666' }}>+1 (212) 555-0123</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Column */}
                <div style={{ background: '#f9f9f9', padding: '3rem' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Name</label>
                            <input type="text" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', background: '#fff' }} placeholder="Your Name" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Email</label>
                            <input type="email" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', background: '#fff' }} placeholder="your@email.com" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Message</label>
                            <textarea rows={5} style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', background: '#fff' }} placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button type="button" style={{ padding: '1rem 2rem', background: '#000', color: '#fff', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '1rem' }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}
