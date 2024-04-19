import React from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function HeaderAnimated({ content }) {
    const springs = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    });

    return (
        <animated.h1
            style={{
                ...springs,
                fontSize: '32px',
                textAlign: 'center',
                marginBottom: 30,
                // Apply marginTop only when the maximum width is 768px
                '@media (max-width: 768px)': {
                    marginTop: 80,
                },
            }}
        >
            {content}
        </animated.h1>
    );
}