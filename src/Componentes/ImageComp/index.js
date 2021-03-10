import React from 'react';
import { Parallax } from "react-parallax";
import Spring from '../Spring';
import Skeleton from '@material-ui/lab/Skeleton';

class ImageComp extends React.Component {

  
  componentDidMount(){
    this.setState({open: false});
  }

  componentDidUpdate(state, lastState){
    // this.setState({open: true});

  }

  render() {
    return (
      <Parallax  
        bgImageSizes={"height: 15px"} 
        style={{width: '100%', height: 550}} 
        bgImage ={this.props.image} 
        parent={this.props.key+2} 
        key={this.props.key+1} 
        strength= {0} 
        >
        <div style={{height: 550, width: '100%'}}> 
          <Spring 
            key={this.props.key} 
            index={this.props.index} 
            open={true} 
            text1={this.props.text1} 
            text2={this.props.text2} 
            text3={this.props.text3}
            text4={this.props.text4} 
          />
         </div>
      </Parallax>
    )
  }
}

  export default ImageComp;
