import React from 'react';
import styles from './styles';

class ImageComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleChangeIndex = AIndex => {
    this.setState({index: AIndex});
  }; 

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
    return <React.Suspense fallback={<div style={{ fontSize: '30px', height: '350px', width: '100%'}}>carregando...</div>}>
      {this.retornarImagem()}
    </React.Suspense>
  }
}

  export default ImageComp;
