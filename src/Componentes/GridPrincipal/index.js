import React from 'react';

import { Container, Grid, Fade } from '@material-ui/core';
import ContainerImage from '../ContainerImage'

function GridPrincipal(props) {

  function retornarGridPrincipal(){
    return (
        <Container maxWidth="lg" >
          <div style={{ height: '100%', width: '100%'}}>
                <ContainerImage /> 
          </div>
        </Container>
    )
  }


    return(
      retornarGridPrincipal()
    )
}


export default GridPrincipal;