import React from 'react';

import CardFood from '../CardFood';
import ContainerImage from '../ContainerImage';
import TimeLine from '../TimeLine';

import CardItem from '../TimeLine/CardItem';

import { makeStyles, fade } from '@material-ui/core/styles';

import {Hidden, Container, Grid, GridListTileBar, 
GridListTile, IconButton, Zoom, CardMedia } from '@material-ui/core';

import IconClose from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';

import Skeleton from '@material-ui/lab/Skeleton';

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

export default function GridPrincipal(props) {
  const classes = useStyles();

  function retornarGridPrincipal(){
    return (
      <div 
        style={{paddingTop: "10px", paddingBottom: 20, backgroundColor: fade('#257627', 0.25)}}>
        <Container maxWidth="md">
          <ContainerImage /> 
          {retornarConteudo()}
        </Container>
      </div>
    )
  }

  function retornarConteudo(){
    return (
    <div className={classes.divPrincipalConteudo}>
      <div className={classes.divContainer}>
        <Grid container spacing={3} >
          {retornarCarFood()}
        </Grid>
      </div>
      </div>
    );
  }

  function retornarCarFood(){
    let rows = [];
      for(let i=0; i<8; i++){
          rows.push(i)
      }
      return ( 
        rows.map((cont, aKey)=>retornarZoom(cont, aKey))
      )
  }

  function retornarZoom(aCont, aKey){
    const lvTransition = 420  * aCont;
    return (
      <Zoom 
        key={aKey} 
        in  
        timeout={(lvTransition === 0 )? (420) : (lvTransition) }
      >
          <Grid  item xs={12} sm={6} md={6} lg={6}>
            <CardItem />
          </Grid>
      </Zoom>
    )
  }

    return(
      retornarGridPrincipal()
    )
}