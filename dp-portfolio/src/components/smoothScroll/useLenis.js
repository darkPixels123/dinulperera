import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.4,
            easing: (t) => Math.sin((t * Math.PI) / 2),
            smooth: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            // Clean up Lenis instance if component unmounts
            lenis.destroy();
        };
    }, []);
};

export default useLenis;
