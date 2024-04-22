import { animated, useSpring } from "react-spring";

export default function LeftAnimation({ children }) {
    const props = useSpring({
        from: { transform: "translateX(-700px)" },
        to: [ { transform: "translateX(0px)" }],
        config: { duration: 1000 },
        loop: false
    });

    // Wrap animated function around your component to apply animation
    const AnimatedDiv = animated.div;

    return (
        <AnimatedDiv style={props} className="socials">
        {children}
        </AnimatedDiv>
    );
    }