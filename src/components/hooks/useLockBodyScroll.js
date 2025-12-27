import { useLayoutEffect } from 'react';

export const useLockBodyScroll = (isLocked) => {
    useLayoutEffect(() => {
        if (!isLocked) return;

        const originalStyle = window.getComputedStyle(document.documentElement).overflow;

        document.documentElement.style.overflow = 'hidden';

        return () => {
            document.documentElement.style.overflow = originalStyle;
        };
    }, [isLocked]);
};