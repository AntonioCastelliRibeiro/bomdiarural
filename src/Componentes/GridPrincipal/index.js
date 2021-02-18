import React from 'react';

import { Container, Grid, Fade } from '@material-ui/core';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ContainerImage from '../ContainerImage'

function GridPrincipal(props) {
  const IsMobile = useMediaQuery("(max-width:600px)");

  function retornarGridPrincipal(){
    return (
        <Container maxWidth="lg" >
          <div style={{ height: '100%', width: '100%'}}>
              <ContainerImage IsMobile={IsMobile}/> 
          </div>
        </Container>
    )
  }


    return(
      retornarGridPrincipal()
    )
}


export default GridPrincipal;