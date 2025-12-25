import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const html = document.documentElement;

        html.classList.add('no-smooth-scroll');

        window.scrollTo(0, 0);

        requestAnimationFrame(() => {
            html.classList.remove('no-smooth-scroll');
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;