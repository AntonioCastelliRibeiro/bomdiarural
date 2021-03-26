import React from 'react'
import { useTrail, a, config  } from 'react-spring'
import './styles.css'

function Trail({open, children, ...props }) {

  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config:  {  },
    x: 10,
    y: 0,
    opacity: 1,
    // height: 120,
    from: { opacity: 0, x: 10, y: 3 },
    delay: 90,
    reset: true,
    reverse: false,
    immediate: false        
  })

  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, y, height, ...rest }, index) => (
          <a.div
            // onClick={()=>setRefresh(!refresh)}
            key={items[index*props.key]}
            className="trails-text"
            style={{ ...rest, transform: y.interpolate((y) => `translate3d(${y}px,0px,0)`) }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

class App extends React.Component {

  render(){
    return (
      <Trail open={false} key={this.props.key} index={this.props.index} >
        <span>{this.props.text1}</span>
        <span>{this.props.text2}</span>
        <span>{this.props.text3}</span>
        <span>{this.props.text4}</span>
      </Trail>
    )
  }
}

export default React.memo(App);
