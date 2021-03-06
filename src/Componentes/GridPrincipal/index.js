import React from 'react';

import { Container } from '@material-ui/core';
import ContainerImage from '../ContainerImage'
import { fade } from '@material-ui/core/styles';

import GridItem from '../GridItem';

class GridPrincipal extends React.Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }

    render(){
    return(
      <div style={{ paddingTop: 10, paddingBottom: 10, backgroundColor: fade('rgb(255, 255, 255)', 0.25)}} >
      <ContainerImage IsMobile={true} />
      <Container maxWidth="md" >
        <GridItem />
      </Container>
      </div>
    )
  }
}


export default GridPrincipal;