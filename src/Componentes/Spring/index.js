import React, { useState } from 'react'
import { useTrail, a } from 'react-spring'
import './styles.css'

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    to: async (next, cancel) => {
      await next({
        config: { mass: 5, tension: 2000, friction: 600 },
        opacity: 1,
        x: open ? 0 : 10,
        height: open ? 110 : 0,
      })
      await next({
        config: { mass: 5, tension: 2000, friction: 600 },
        opacity: 0,
        x: 110,
        height: 0,
      })
    },
    from: { opacity: 1, x: 20, height: 0 },
  })
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index*props.key]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

function App(props) {
  const [open, set] = useState(false);
  return (
    <Trail key={props.key} open={props.open} onClick={() => set((state) => !state)}>
      <span>{props.text1}</span>
      <span>{props.text2}</span>
      <span>{props.text3}</span>
      <span>{props.text4}</span>
    </Trail>
  )
}

export default App;
