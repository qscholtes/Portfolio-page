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
            marginTop: 25,
            marginBottom:30,
        }}
        className="animated-header"
        >
        {content}
        </animated.h1>
    );
    }