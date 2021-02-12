import React from 'react';

import CardItem from '../TimeLine/CardItem';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Container, Grid, Fade } from '@material-ui/core';

import {Skeleton} from '@material-ui/lab';

import ContainerImage from '../ContainerImage'

// const ContainerImage = React.lazy(() => import('../ContainerImage'));

const useStyles = makeStyles((theme) => ({
  divPrincipalConteudo: {
    flexGrow: 1,
  },
  divContainer: {
      paddingTop: theme.spacing(2),
      [theme.breakpoints.up('xs')]: {
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: theme.spacing(2),

      },
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(2),
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(2)
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: theme.spacing(2)
      },
      [theme.breakpoints.up('xl')]: {
        paddingLeft: theme.spacing(2)
      },
      display: 'flex',
      flexWrap: 'Wrap',
    },
  gridContainer: {
    paddingLeft: '2%',
    // paddingTop: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '10px',
    maxWidth: 150
  },
  divItemGrid1: {
    gridRowStart: 1,
    gridRowEnd: 3
  },
  gridListImg: {
    cursor: 'pointer',
    '&:hover': {
      opacity: '90%',
    },
  }
}));

function GridPrincipal(props) {
  const classes = useStyles();

  function retornarGridPrincipal(){
    return (
      <div 
        // style={{paddingTop: "10px", paddingBottom: 10, backgroundColor: fade('#257627', 0.25)}}
      >
        <Container>
          <div style={{ height: '100%', width: '100%'}}>
            {/* <React.Suspense fallback={<div style={{height: '100%', width: '100%'}}></div>}> */}
              {/* <Skeleton> */}
                <ContainerImage /> 
              {/* </Skeleton> */}
            {/* </React.Suspense> */}
          </div>
          {/* {retornarConteudo()} */}
        </Container>
      </div>
    )
  }

  // function retornarConteudo(){
  //   return (
  //   <div className={classes.divPrincipalConteudo}>
  //     <div className={classes.divContainer}>
  //       <Grid container spacing={3} >
  //         {retornarCarFood()}
  //       </Grid>
  //     </div>
  //     </div>
  //   );
  // }

  // function retornarCarFood(){
  //   let rows = [];
  //     for(let i=0; i<4; i++){
  //         rows.push(i)
  //     }
  //     return ( 
  //       rows.map((cont, aKey)=>retornarZoom(cont, aKey))
  //     )
  // }

  // function retornarZoom(aCont, aKey){
  //   // const lvTransition = 500 * aCont;
  //   return (

  //       <Grid  item xs={12} sm={6} md={6} lg={6}>
  //         <Fade 
  //           key={aKey} 
  //           in  
  //           timeout={600}
  //         >
  //           <CardItem />
  //         </Fade>
  //       </Grid>
  //   )
  // }

    return(
      retornarGridPrincipal()
    )
}


export default GridPrincipal;