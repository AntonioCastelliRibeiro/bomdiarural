import React from 'react';

import GridPhoto from '../../Componentes/GridPhoto';

class Photo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  componentDidMount(){
    this.setState({open: true})
  }

  componentWillUnmount(){
    this.setState({open: false})

  }
  
  render() {
    return <GridPhoto cols={this.props.cols} cont={this.props.ACont}  onSetarCarousel={(e)=>this.props.onSetarCarousel(e)} />
  }
}

export default Photo;
