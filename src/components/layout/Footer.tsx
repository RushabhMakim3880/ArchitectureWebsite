import Link from 'next/link';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h4>ABC ARCHITECT</h4>
                    <address className={styles.address}>
                        123 Architecture Blvd,<br />
                        Design District,<br />
                        New York, NY 10012<br />
                        <br />
                        <a href="mailto:hello@abcarchitect.com">hello@abcarchitect.com</a><br />
                        +1 (212) 555-0123
                    </address>
                </div>

                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <nav>
                        <ul className={styles.linkList}>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/architecture">Architecture</Link></li>
                            <li><Link href="/interiors">Interiors</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.column}>
                    <h4>Connect</h4>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                        <a href="#" aria-label="LinkedIn"><Linkedin color="#999" /></a>
                        <a href="#" aria-label="Instagram"><Instagram color="#999" /></a>
                        <a href="#" aria-label="Twitter"><Twitter color="#999" /></a>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                &copy; {new Date().getFullYear()} ABC Architect. All rights reserved.
            </div>
        </footer>
    );
}
