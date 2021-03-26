import React from 'react';
import { Parallax } from "react-parallax";
import Spring from '../Spring';
import Skeleton from '@material-ui/lab/Skeleton';

class ImageComp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({open: true});  
    }, 2000);
  }

  componentDidUpdate(state, lastState){
    // this.setState({open: true});

  }

  retornarSpring(){
    if (this.state.open){
      return (
        <Spring 
          key={this.props.key} 
          index={this.props.index} 
          open={true} 
          text1={this.props.text1} 
          text2={this.props.text2} 
          text3={this.props.text3}
          text4={this.props.text4} 
        />
      )  
    } else {
      return false
    }
  }

  retornarParallax(){
    return (
      <Parallax  
        bgImageStyle={{width: '100%', height: 550}} 
        bgImage ={this.props.image} 
        parent={this.props.key+2} 
        key={this.props.key+1} 
        strength= {0} 
        >
        <div style={{height: 550, width: '100%'}}> 
          {this.retornarSpring()}
        </div>
      </Parallax>
    )
  }

  render() {
    return (
      this.retornarParallax()
    )
  }
}

  export default ImageComp;
