import React, { useState } from 'react';
import { useTrail, useSpring, a } from '@react-spring/web';

import styles from './styles.module.css';

interface TrailProps {
  open: boolean;
  children: React.ReactNode;
}

const Trail: React.FC<TrailProps> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 20, tension: 2000, friction: 1000 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 200,
    height: open ? 180 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function Skills() {
  const [open, set] = useState(true);
  
  // Define spring for shake animation
  const shakeSpring = useSpring({
    x: open ? 0 : 10, // Adjust the shaking intensity by modifying the value
    config: { duration: 100 },
    reset: true,
  });

  // Function to trigger shaking animation
  const handleShake = () => {
    set(false);
    setTimeout(() => set(true), 100); // Restore the original state after a short delay
  };

  return (
    <div className='skills-container' > 
      <div className={styles.container} onClick={handleShake}>
        <p> Strengths:</p>
        <Trail open={open}>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>Responsive Design</span>
          <span>React.js</span>
        </Trail>
      </div>
    </div>
  );
}
