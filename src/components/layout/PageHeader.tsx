import Link from 'next/link';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
    title: string;
    parent?: { label: string; href: string };
}

export default function PageHeader({ title, parent }: PageHeaderProps) {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.breadcrumb}>
                <Link href="/">Home</Link>
                {parent && (
                    <>
                        {' / '}
                        <Link href={parent.href}>{parent.label}</Link>
                    </>
                )}
                {' / '}
                <span>{title}</span>
            </div>
        </div>
    );
}
