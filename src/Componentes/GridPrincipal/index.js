import React from 'react';

import { Container } from '@material-ui/core';
import ContainerImage from '../ContainerImage'

import GridItem from '../GridItem';

class GridPrincipal extends React.Component {
  render(){
    return(
      <>
      <ContainerImage IsMobile={true} />
      <Container maxWidth="md" >
        <GridItem />
      </Container>
      </>
    )
  }
}


export default GridPrincipal;