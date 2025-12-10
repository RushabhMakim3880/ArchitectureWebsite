'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Search, Menu, X, Instagram, Linkedin, Youtube, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

// Navigation Data
const NAV_ITEMS = [
    { label: 'Landmark Projects', href: '/projects' },
    {
        label: 'Architecture',
        href: '/architecture',
        submenu: ['Workspace', 'Residential', 'Culture', 'Educational', 'Wellness', 'Hospitality', 'Adaptive Reuse', 'Industrial']
    },
    {
        label: 'Interiors',
        href: '/interiors',
        submenu: ['Workspace', 'Residential', 'Cultural', 'Hospitality', 'Retail']
    },
    {
        label: 'About Us',
        href: '/about',
        submenu: ['Philosophy', 'People', 'Awards', 'Media']
    },
    {
        label: 'Contact Us',
        href: '/contact',
        submenu: ['Business', 'Careers']
    }
];

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/projects?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    const toggleSubmenu = (label: string) => {
        if (expandedItem === label) {
            setExpandedItem(null);
        } else {
            setExpandedItem(label);
        }
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setExpandedItem(null);
    };

    const isActive = (path: string) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname.startsWith(path);
    };

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
                <div className={styles.container}>

                    {/* SEARCH OVERLAY */}
                    <AnimatePresence>
                        {isSearchOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className={styles.searchOverlay}
                            >
                                <form onSubmit={handleSearchSubmit} style={{ width: '100%', display: 'flex' }}>
                                    <input
                                        type="text"
                                        placeholder="Type and press Enter..."
                                        className={styles.searchInput}
                                        autoFocus
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </form>
                                <button
                                    className={styles.searchCloseBtn}
                                    onClick={() => setIsSearchOpen(false)}
                                    aria-label="Close Search"
                                >
                                    <X size={24} strokeWidth={1} />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Left: Search */}
                    <div className={styles.leftGroup} style={{ opacity: isSearchOpen ? 0 : 1 }}>
                        <button
                            className={styles.searchBtn}
                            aria-label="Search"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search size={22} strokeWidth={1} />
                        </button>
                    </div>

                    {/* Center: Brand */}
                    <div className={styles.centerGroup} style={{ opacity: isSearchOpen ? 0 : 1 }}>
                        <Link href="/" className={styles.brand}>
                            ABC <span>ARCHITECT</span>
                        </Link>
                    </div>

                    {/* Right: Menu Toggle */}
                    <div className={styles.rightGroup} style={{ opacity: isSearchOpen ? 0 : 1 }}>
                        <button
                            className={styles.menuBtn}
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open Menu"
                        >
                            <Menu size={24} strokeWidth={1} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Slide Out Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1900 }}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
                            className={styles.overlay}
                        >
                            <button className={styles.closeBtn} onClick={() => setIsMenuOpen(false)}>
                                <X size={24} strokeWidth={1} />
                            </button>
                            <nav>
                                <ul className={styles.menuList}>
                                    {NAV_ITEMS.map((item) => (
                                        <li key={item.label}>
                                            {item.submenu ? (
                                                // If it has submenu, render as toggle button
                                                <div
                                                    className={styles.menuItem}
                                                    onClick={() => toggleSubmenu(item.label)}
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        fontWeight: isActive(item.href) ? 600 : 300,
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    {item.label}
                                                    <span style={{ fontSize: '0.8em', transform: expandedItem === item.label ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
                                                </div>
                                            ) : (
                                                // If no submenu, render as link
                                                <Link
                                                    href={item.href}
                                                    className={styles.menuItem}
                                                    onClick={handleLinkClick}
                                                    style={{ fontWeight: isActive(item.href) ? 600 : 300 }}
                                                >
                                                    {item.label}
                                                </Link>
                                            )}

                                            {/* Submenu Accordion */}
                                            <AnimatePresence>
                                                {item.submenu && expandedItem === item.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className={styles.submenu}
                                                        style={{ overflow: 'hidden' }}
                                                    >
                                                        {/* Add "All [Category]" link first */}
                                                        <Link
                                                            href={item.href}
                                                            className={styles.submenuLink}
                                                            onClick={handleLinkClick}
                                                            style={{ fontWeight: 500 }}
                                                        >
                                                            All {item.label}
                                                        </Link>

                                                        {item.submenu.map((sub) => (
                                                            <Link
                                                                key={sub}
                                                                href={`${item.href}/${sub.toLowerCase().replace(' ', '-')}`}
                                                                className={styles.submenuLink}
                                                                onClick={handleLinkClick}
                                                            >
                                                                {sub}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div style={{ marginTop: 'auto', paddingTop: '3rem', borderTop: '1px solid #eee' }}>
                                <div style={{ display: 'flex', gap: '1.5rem', color: '#333' }}>
                                    <Linkedin size={20} strokeWidth={1.5} />
                                    <Instagram size={20} strokeWidth={1.5} />
                                    <Youtube size={20} strokeWidth={1.5} />
                                    <Phone size={20} strokeWidth={1.5} />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
