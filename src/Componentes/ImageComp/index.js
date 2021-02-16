import React from 'react';
import { Parallax } from "react-parallax";
import Spring from '../Spring';
import { Fade } from '@material-ui/core'; 

class ImageComp extends React.Component {
  retornarImagem(){
      return (
        <Fade 
            in  
            timeout={600}
        >
          <Parallax bgImage ={this.props.image} parent={this.props.key+2} key={this.props.key+1} strength= {0} >
            <div style={{height: (this.props.retornarDescricao)? (500) : (310), width: '100%'}}>
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
        </Fade>
      )
  }

  render() {
    return this.retornarImagem()
  }
}

  export default ImageComp;
