import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'

import styles from './styles.module.css'
import './styles.module.css'

interface TrailProps {
  open: boolean;
  children: React.ReactNode; // Add this line to define children prop
}

const Trail: React.FC<TrailProps> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 20, tension: 2000, friction: 1000 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 200,
    height: open ? 180 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default function Skills() {
  const [open, set] = useState(true)
  return (
    <div className='skills-container' > 
    <div className={styles.container} onClick={() => set(state => !state)}>
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
  )
}
