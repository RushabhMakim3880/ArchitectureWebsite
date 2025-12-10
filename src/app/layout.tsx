import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import MagneticCursor from '@/components/ui/MagneticCursor';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Antigravity Architects | Visionary & Sustainable Design',
    description: 'Antigravity Architects is a premium architectural studio focusing on sustainable, high-rise, and residential design.',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning>
                <Header />
                <MagneticCursor />
                {children}
            </body>
        </html>
    );
}
