import React from 'react';
import styles from './styles';

class ImageComp extends React.Component {
  
  retornarImagem(){
    return (
      <img 
      draggable={false}
      style={styles.Image}  
        src={this.props.image}
        key={this.props.key+1}
        alt="imageCarrousel"
      />
    )
  }

  render() {
    return this.retornarImagem()
  }
}

  export default ImageComp;
