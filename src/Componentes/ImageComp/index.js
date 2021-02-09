import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Parallax, Background } from "react-parallax";
import Spring from '../Spring';

class ImageComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      onLoadImage: true,
    };
  }

  handleChangeIndex = AIndex => {
    this.setState({index: AIndex});
  };

  retornarSpring(){
    if (this.props.retornarDescricao){
      return (
        <Spring 
          key={this.props.key} 
          index={this.props.index} 
          open={this.state.onLoadImage} 
          text1={this.props.text1} 
          text2={this.props.text2} 
          text3={this.props.text3}
          text4={this.props.text4} 
        />
      ) 
    } else return false
  }

  retornarImagem(){
  if (this.state.onLoadImage){
      return (
        <Parallax  bgImage ={this.props.image} parent={this.props.key+2} key={this.props.key+1} strength= {0}>
          <div style={{height: (this.props.retornarDescricao)? (500) : (310), width: '100%'}}>
            {this.retornarSpring()}
          </div>
        </Parallax>
      )
    } else {
      return (
        <Skeleton 
          style={{height: 500, width: '100%', borderRadius: 2}}
          variant="rect" 
          width="100%"
          />
      )
    }
  }

  render() {
    return this.retornarImagem()
  }
}

  export default ImageComp;
