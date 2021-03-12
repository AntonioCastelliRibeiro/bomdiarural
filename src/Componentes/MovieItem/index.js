import React from 'react';

import Imagem1 from '../../Image/Imagem10.jpg';

import { Fade, GridListTileBar } from '@material-ui/core'; 

import CardItemMedia from '../CardItemMedia';

class MovieItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
    };
  }

  render(){
    return(
      <div onMouseEnter={()=>this.setState({onHover: true})} onMouseLeave={()=>this.setState({onHover: false})} >
        <CardItemMedia gridMovie={true} image={Imagem1}/>
        <Fade in={this.state.onHover} timeout={500} >
          <GridListTileBar
            style={{ display: 'flex' }}
            title="Bom dia Rural"
            subtitle="Vídeo"
          >
          </GridListTileBar>
      </Fade>   
    </div>
    )
  }
}

export default MovieItem;