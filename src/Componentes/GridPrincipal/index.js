import React from 'react';

import { Container } from '@material-ui/core';
import ContainerImage from '../ContainerImage'
import { fade } from '@material-ui/core/styles';

import GridItem from '../GridItem';

class GridPrincipal extends React.Component {
  render(){
    return(
      <div style={{ paddingTop: 10, paddingBottom: 10, backgroundColor: fade('rgba(224, 255, 227, 0.25)', 0.25)}} >
      <ContainerImage IsMobile={true} />
      <Container maxWidth="md" >
        <GridItem />
      </Container>
      </div>
    )
  }
}


export default GridPrincipal;