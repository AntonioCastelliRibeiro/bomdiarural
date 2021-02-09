import React from 'react';

import { Grid, Fade } from '@material-ui/core'; 
import CardItem from '../TimeLine/CardItem';

import { makeStyles } from '@material-ui/core/styles';

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
}));

export default function GridItem(props){
  const classes = useStyles();

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
      for(let i=0; i<4; i++){
          rows.push(i)
      }
      return ( 
        rows.map((cont, aKey)=>retornarZoom(cont, aKey))
      )
  }

  function retornarZoom(aCont, aKey){
    // const lvTransition = 500 * aCont;
    return (

        <Grid  item xs={12} sm={6} md={6} lg={6}>
          <Fade 
            key={aKey} 
            in  
            timeout={600}
          >
            <CardItem />
          </Fade>
        </Grid>
    )
  }

    return (
      retornarConteudo()
    )

}