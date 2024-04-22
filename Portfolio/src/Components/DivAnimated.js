import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function ContentAnimated({ content }) {
    const [ref, inView] = useInView({
        threshold: 0.5, // Adjust threshold as needed
        triggerOnce: true, // Ensures animation only happens once
    });

    const springs = useSpring({
        from: { opacity: 0, transform: 'translateY(-70px)' },
        to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(-70px)' },
    });

    useEffect(() => {
        if (inView) {
            // Element is in view, you can add additional actions here if needed
        }
    }, [inView]);

    return (
        <animated.div
            ref={ref}
            style={{
                ...springs,
            }}
            className="animated-content"
        >
            {content}
        </animated.div>
    );
}
