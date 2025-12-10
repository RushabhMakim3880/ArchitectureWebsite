import Hero from '@/components/home/Hero';
import IntroSection from '@/components/home/IntroSection';
import { AwardsSection, NewsSection } from '@/components/home/GridSections';
import CategoryList from '@/components/home/CategoryList';
import StudioSection from '@/components/home/StudioSection';
import RenovationSection from '@/components/home/RenovationSection';
import ModelSection from '@/components/home/ModelSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
    return (
        <main>
            <Hero />
            <ModelSection />
            <IntroSection />
            <RenovationSection />
            <AwardsSection />
            <NewsSection />
            <CategoryList />
            <StudioSection />
            <Footer />
        </main>
    );
}
