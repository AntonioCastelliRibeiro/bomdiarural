import React from 'react';

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
        style={{ display: 'flex', height: '309px', width: '100%'}}  
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

  export default ImageComp;
