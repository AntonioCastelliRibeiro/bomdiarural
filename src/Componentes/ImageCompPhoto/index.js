import React from 'react';
import styles from './styles';

class ImageComp extends React.Component {
  
  retornarImagem(){
    return (
        <img 
          style={styles.Image}  
          src={this.props.image}
          key={this.props.key+1}
          alt="afs"
        ></img>
    )
  }

  render() {
    return this.retornarImagem()
  }
}

  export default React.memo(ImageComp);
