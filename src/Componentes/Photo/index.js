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
    window.scrollTo(0,0);
    this.setState({open: true});
  }

  componentWillUnmount(){
    this.setState({open: false})

  }
  
  render() {
    return <GridPhoto 
      open={this.state.open} 
      cols={this.props.cols} 
      cont={this.props.ACont} 
      gridPhoto={true}
      onSetarCarousel={(e)=>this.props.onSetarCarousel(e)}
     />
  }
}

export default Photo;
