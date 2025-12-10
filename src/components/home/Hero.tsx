'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';


const HERO_SLIDES = [
    {
        id: 1,
        title: 'The Rain tree Hotel',
        location: 'Chennai, Tamil Nadu',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Nirvana Film Studio',
        location: 'Bengaluru, Karnataka',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Boat Club Apartments',
        location: 'Chennai, Tamil Nadu',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop'
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.hero}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={styles.slideContainer}
                >
                    <img
                        src={HERO_SLIDES[currentSlide].image}
                        alt={HERO_SLIDES[currentSlide].title}
                        className={styles.slideImage}
                    />
                </motion.div>
            </AnimatePresence>




            <div className={styles.overlay}>
                <div className={styles.content}>
                    <motion.h2
                        key={`title-${currentSlide}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className={styles.projectTitle}
                    >
                        {HERO_SLIDES[currentSlide].title}
                    </motion.h2>
                    <motion.p
                        key={`loc-${currentSlide}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={styles.projectLocation}
                    >
                        {HERO_SLIDES[currentSlide].location}
                    </motion.p>
                </div>
            </div>

            {/* Arrows */}
            <button className={`${styles.arrowBtn} ${styles.prevBtn}`} onClick={prevSlide} aria-label="Previous Slide">
                <ChevronLeft size={40} strokeWidth={1} />
            </button>
            <button className={`${styles.arrowBtn} ${styles.nextBtn}`} onClick={nextSlide} aria-label="Next Slide">
                <ChevronRight size={40} strokeWidth={1} />
            </button>

            {/* Dots */}
            <div className={styles.controls}>
                {HERO_SLIDES.map((slide, index) => (
                    <button
                        key={slide.id}
                        className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section >
    );
}
