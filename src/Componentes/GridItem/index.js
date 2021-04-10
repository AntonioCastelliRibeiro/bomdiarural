import React from 'react';

import { Grid, Fade, Container } from '@material-ui/core'; 
import CardItem from '../TimeLine/CardItem';
import CardFood from '../../Componentes/CardFood';

import useMediaQuery from "@material-ui/core/useMediaQuery";

import ParallaxScroll from '../ParallaxScroll';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  divPrincipalConteudo: {
    flexGrow: 1
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
  const isMobile = useMediaQuery("(max-width:750px)");

  function retornarConteudo(){
    return (
    <div /*style={{ backgroundColor: props.isRecipe ? 'rgba(224, 255, 227, 0.25)' : 'transparent' }}*/ className={classes.divPrincipalConteudo}>
      <div className={classes.divContainer}>
        <Grid container spacing={3} >
          {retornarCardItem()}
        </Grid>
      </div>
      </div>
    );
  }

  function retornarCardItem(){
    const ArrayConteudo = [{ ds_materia: "Produtores rurais aposentados investem na apicultura, são 250 caixas de mel espalhados em 14 apiários.",  ds_foto: "https://scontent.fmgf1-1.fna.fbcdn.net/v/t15.5256-10/p180x540/162671052_121655263278580_1962325060877914101_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=ad6a45&_nc_ohc=h_dWBUV0a7sAX9P-6WI&_nc_ht=scontent.fmgf1-1.fna&tp=6&oh=8d894c914715c5ada24d4edffd7c039b&oe=6097E0D5" },
    { ds_materia: "A propriedade Poltronieri elevou seu padrão de produção de leite em quantidade e qualidade. O incentivo para buscar um melhor rendimento na produção e mais renda para toda família.",  ds_foto: "https://scontent.fmgf1-1.fna.fbcdn.net/v/t15.5256-10/p180x540/158475325_965435280893581_2763126935971877207_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ad6a45&_nc_ohc=GSrgPTu4JZkAX_ZoOSt&_nc_ht=scontent.fmgf1-1.fna&tp=6&oh=97875ff14391a7a7bd1495e0dfe5130a&oe=6096CEBF" }, 
    { ds_materia: "Hotelaria para Cavalos: Aos 36 anos, ao lado da esposa Micheli, Rodrigo passou a trabalhar exclusivamente com cavalos.",  ds_foto: "https://scontent.fmgf1-1.fna.fbcdn.net/v/t15.5256-10/p180x540/167941335_453358842658979_1988059779862030554_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ad6a45&_nc_ohc=laaUDrCl23MAX-Wds6M&_nc_ht=scontent.fmgf1-1.fna&tp=6&oh=1025898fbab622c18bb7dd22d1a9380f&oe=60976F7F" },
    { ds_materia: "Na Fazenda Rosal do Cruzeiro, no município de Palmas, vive a família Loureiro. É neste lugar, que está plantada uma das raízes do Gado Caracu, há mais de 100 anos.",  ds_foto: "https://scontent.fmgf1-1.fna.fbcdn.net/v/t15.5256-10/p180x540/148876538_445994053299926_5736226129798749638_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=ad6a45&_nc_ohc=tQBFdA_9exkAX9evDM-&_nc_ht=scontent.fmgf1-1.fna&tp=6&oh=0bfa3f589ec9ee1c9ca5c3f07725e41a&oe=6097935F" }
  ]
    // let rows = [];
    //   for(let i=0; i<4; i++){
    //       rows.push(i)
    //   }
      return ( 
        ArrayConteudo.map((AElement, aKey) => props.isRecipe ? retornarCardFood(AElement.ds_foto, AElement.ds_materia) : <CardItem key={aKey}/> )
      )
  }

  function retornarCardFood(AFoto, AMateria){
    return (
      <div style={{ width: '100%', padding: isMobile ? '10px 0 10px 0' : '10px 120px 10px 120px'  }} >
        <CardFood isMateria={props.isMateria} descFoto={AFoto} descMateria={AMateria}
          isRecipe={true} onSetarFShare={(e)=>props.onSetarFShare(e)} />
      </div>
    )
  }

    return (
      retornarConteudo()
    )

}