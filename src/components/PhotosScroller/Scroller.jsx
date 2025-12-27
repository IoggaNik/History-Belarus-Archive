import { useState, useEffect } from 'react';
import { dataWarPhotos } from '../../../data/dataWarPhotos';
import { motion } from 'framer-motion';
import {
    containerImages,
    imageWar,
    btnPrev,
    btnNext,
    wrapper,
} from './Scroller_MS.module.css';

const Scroller = () => {
    const [photos, setPhotos] = useState(dataWarPhotos);
    const [isAnimating, setIsAnimating] = useState(false);

    const timeLimit = 1000;

    const next = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        setPhotos((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });

        setTimeout(() => setIsAnimating(false), timeLimit - 400);
    };

    const prev = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        setPhotos((prev) => {
            const last = prev.at(-1);
            const rest = prev.slice(0, -1);
            return [last, ...rest];
        });

        setTimeout(() => setIsAnimating(false), timeLimit);
    };

    useEffect(() => {
        const handleKeyDown = ({ key, target }) => {
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

            if (key === 'ArrowRight' || key === 'Enter') next();

            else if (key === 'ArrowLeft') prev();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isAnimating]);

    return (
        <section>
            <button disabled={isAnimating} className={btnPrev} onClick={prev}>
                ‹
            </button>

            <div className={containerImages}>
                <motion.div layout className={wrapper}>
                    {photos.map((photo) => (
                        <motion.img
                            layout
                            key={photo}
                            className={imageWar}
                            src={photo}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 60,
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            <button disabled={isAnimating} className={btnNext} onClick={next}>
                ›
            </button>
        </section>
    );
};

export default Scroller;