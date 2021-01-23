import React, { useState, useEffect } from 'react'
import { useTrail, a } from 'react-spring'
import './styles.css'

function Trail({open, children, ...props }) {
  const [onChange, setOnChange] = React.useState(false);


  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    to: async (next, cancel) => {
      await next({
        config: { mass: 5, tension: 2000, friction: 600 },
        opacity: 1,
        x: 0,
        height: 110,
      })
    },

      // await next({
      // //   config: { mass: 5, tension: 2000, friction: 600 },
      //   opacity: 0,
      //   x: -50,
      //   height: 0,
      // })
    // reverse: props.index === 2,
    reset: props.index === 2,
    reverse: props.index === 2,

    delay: ( props.index === 2 ) ? (2800) : (500),
    // immediate: props.index = 1,
    // delay: 500,
    from: {
      opacity: 1, x: -50, height: 0  },
  })

  useEffect(() => {
    setOnChange(true)
  }, [props.index]);

  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            // onClick={()=>setRefresh(!refresh)}
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

class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
    open: true,
  }
}

  render(){
    return (
      <Trail key={this.props.key} index={this.props.index} onClose={(e)=> this.setState({open: e})} onClick={() => this.setState({open: !this.state.open})}>
        <span>{this.props.text1}</span>
        <span>{this.props.text2}</span>
        <span>{this.props.text3}</span>
        <span>{this.props.text4}</span>
      </Trail>
  )
}

}

export default App;
