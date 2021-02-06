import React from 'react';

import useMediaQuery from "@material-ui/core/useMediaQuery";

import Imagem1 from '../../Image/Imagem1.jpg';
import Imagem2 from '../../Image/Imagem2.jpg';
import Imagem3 from '../../Image/Imagem3.jpg';
import Imagem4 from '../../Image/Imagem4.jpg';
import Imagem5 from '../../Image/Imagem5.jpg';
import Imagem6 from '../../Image/Imagem6.jpg';

import Slider from '../Slider';

import SwipeableViews from 'react-swipeable-views';

import { makeStyles, fade } from '@material-ui/core/styles';

import { Modal, IconButton, Zoom } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';

import Grid from '@material-ui/core/Grid';

import IconClose from '@material-ui/icons/Close';
import Skeleton from '@material-ui/lab/Skeleton';
import ShareIcon from '@material-ui/icons/Share';

import Green from '@material-ui/core/colors/green';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  modal: {
    overflowX: 'hidden', 
    overflowY: 'hidden',
    // '&::-webkit-scrollbar': {
    //   background: 'blue',
    // }
  },
  divSlider: {
    // top: '100px',
    // display: 'flex',
    alignSelf: 'flex-end'
  },
  divIconCloseModal: {
    opacity: '80%',
    // padding: '2px 5px 0px 2px',
    // height: '10%', 
    width: '100%',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    alignContent: 'flex-end',
  },
  divIconArrow: {
    opacity: '80%',
    // padding: '2px 5px 0px 2px',
    height: '100%', 
    width: '100%',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'flex-start',
  },
  iconModalArrowLeft: {
    color: 'white',
    alignSelf: 'center'
  },
  iconModalArrowRight: {
    color: 'white',
    alignSelf: 'center'
  },
  divIcon: {
    opacity: '80%',
    // padding: '2px 5px 0px 2px',
    height: '100%', 
    width: '100%',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'flex-start',
  },
  iconModal: {
    opacity: '80%',
    color: 'white',
    alignSelf: 'flex-start'

  },
  divModalPhone:{
    outline: 0,
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0%',
    top: '0%',
  },
  divModal: {
    outline: 0,
    display: 'flex',
    position: 'absolute',
    width: '93.4%',
    height: '95%',
    left: '3.2%',
    top: '2%',
    [theme.breakpoints.up('sm')]: {
      width: '95.49%',
      height: '95%',
      top: '1.2%',
      left: '2%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '95.49%',
      height: '95%',
      top: '1.2%',
      left: '2%',
    },
    [theme.breakpoints.up('md')]: {
      width: '86.99%',
      height: '97.5%',
      top: '1.2%',
      left: '6%',
    },
    [theme.breakpoints.up('md')]: {
      width: '84.99%',
      height: '97.5%',
      top: '1.2%',
      left: '6%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '84.99%',
      height: '97.5%',
      top: '1.2%',
      left: '6%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '69%',
      height: '97.5%',
      top: '1.2%',
      left: '15%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '80.99%',
      height: '97.5%',
      top: '1.2%',
      left: '10%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '49%',
      height: '97.5%',
      top: '1.2%',
      left: '25.5%',
    },

  },
  gridModal: {
    height: '100%',
    width: '100%'
  }
}));

export default function FModalPhoto(props) {
  const [onRefreshRoom, setOnRefreshRoom] = React.useState(false);
  const [onImage, setOnImage] = React.useState(setarImage());
  const [onNumberImage, setOnNumberImage] = React.useState(1);
  const [onLoadImgModal, setOnLoadImgModal] = React.useState(false);
  const Image1 = Imagem1;
  const Image2 = Imagem2;
  const Image3 = Imagem3;
  const Image4 = Imagem4;
  const Image5 = Imagem5;
  const Image6 = Imagem6;

  const matches = useMediaQuery("(max-width:600px)");

  const classes = useStyles();

  function retornarImage(){
    switch (onNumberImage) {
      case 1: return Image1
      case 2: return Image2
      case 3: return Image3
      case 4: return Image4
      case 5: return Image5
      case 6: return Image6
      default:
        break;
    }
  }

  function setarImage(){
    return ([{
      Image1: Imagem1,
      Image2: Imagem2,
      Image3: Imagem3,
      Image4: Imagem4,
      Image5: Imagem5,
      Image6: Imagem6,
    }])
  }

  function retornarImageModal(){
    const img = new Image();
    img.onload = () =>{setOnLoadImgModal(true);};
    img.src = "https://source.unsplash.com/random";
    if (onLoadImgModal){
      return ( 
        // <Zoom key="princi" in={onLoadImgModal} timeout={500} >
        <img 
          src={retornarImage()} 
          alt="teste" 
          style={{borderRadius: '2px', height: '100%',width: '100%'}} 
        />
        // </Zoom>
      )
    } else {
      return (
          <Skeleton 
            variant="rect" 
            style={{backgroundColor: '#616161', borderRadius: '2px'}} 
            height="100%"
            width="100%" 
          />
      )
    }
  }

  function retornarGridModal(){
    return (
      <Grid container >
        <Grid container item style={{height: '100%'}}>
          {retornarImageModal()}
        </Grid>
        <Grid container item >
          <div style={{backgroundColor: Green[300], width: '100%', borderRadius: '1px', paddingTop: 5}}>
            <h1 style={{textAlign: 'center'}}>Rancho Bem Viver</h1>
            <div style={{textAlign: 'center', fontSize: '20px', padding: '0px 19px 0px 15px'}}>
            <p >Rancho vem representando uma das diversidades encontradas no sudoeste do Paraná. Caros amigos, o comprometimento entre as equipes nos obriga à análise do investimento em reciclagem técnica. Por conseguinte, a percepção das dificuldades aponta para a melhoria da gestão inovadora da qual fazemos parte. É importante questionar o quanto a determinação clara de objetivos representa uma abertura para a melhoria das diretrizes de desenvolvimento para o futuro. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a consolidação das estruturas auxilia a preparação e a composição das posturas dos órgãos dirigentes com relação às suas atribuições. O empenho em analisar a crescente influência da mídia estende o alcance e a importância dos modos de operação convencionais.</p>
            </div>
          </div>
        </Grid>
      </Grid>
    )
  }

  function retornarConteudoModal(){

    return (
      <div className={classes.divModal} 
      >
        {retornarGridModal()}
        <div className={classes.divIcon}>
          <div className={classes.divIconArrow}>
            <IconButton 
              aria-label={`info about antonio`} 
              className={classes.iconModalArrowLeft}
              onClick={()=>setarNumberImage('ArrowLeft')}
              >
            <ArrowBackIcon />
            </IconButton>
            <IconButton 
              aria-label={`info about antonio`} 
              className={classes.iconModalArrowRight}
              onClick={()=>setarNumberImage('ArrowRight')}
              >
            <ArrowForwardIcon />
            </IconButton>
          </div>
          <IconButton 
            aria-label={`info about antonio`} 
            className={classes.iconModal}
            // onClick={()=>setOnModalShare(true)}
            >
            <ShareIcon />
          </IconButton>
            <div className={classes.divSlider}>
              <Slider numberImage={onNumberImage} setarNumberImage={(e)=>setOnNumberImage(e)} />
            </div>
          <IconButton  
            aria-label={`info about antonio`} 
            className={classes.iconModal}
            onClick={()=>onClose()}
          >
            <IconClose />
          </IconButton>
        </div>
      </div>
    )
  }

  function retornarChildren(){
    return (
      <Zoom key="princi" in={props.open} timeout={500} >
        {retornarConteudoModal()}          
      </Zoom>
    )
  }

  function setarNumberImage(AKey){
    const lvKey = AKey;
    let lvNumer = onNumberImage;

    if (lvKey === 'ArrowLeft'){
      lvNumer = (onNumberImage === 1) ? (6) : (onNumberImage - 1);
    } 
    else if (lvKey === 'ArrowRight') {
      lvNumer = (onNumberImage === 6) ? (1) : (onNumberImage +1);
    }

    setOnNumberImage(lvNumer); 
    // setOnLoadImgModal(false);
    }

  function setarNumberImageKey(AKey){
    const lvKey = AKey.key;
    let lvNumer = onNumberImage;

    if (lvKey === 'ArrowLeft'){
      lvNumer = (onNumberImage === 1) ? (6) : (onNumberImage - 1);
    } 
    else if (lvKey === 'ArrowRight') {
      lvNumer = (onNumberImage === 6) ? (1) : (onNumberImage +1);
    }
    
    setOnNumberImage(lvNumer); 
    // setOnLoadImgModal(true);
    }


  function onClose(){
    // setOnNumberImage(1);
    props.onClose({open: false, img: props.Image});
  }

  function retornarGridImagem(AImagem){
    return (
      <Grid container >
        <div className={classes.divIconCloseModal}>
          <IconButton 
            aria-label={`info about antonio`} 
            className={classes.iconModalArrowRight}
            onClick={()=>onClose()}
            >
          <IconClose />
          </IconButton>
        </div>
      <Grid container item style={{height: '100%'}}>
        <img 
          src={AImagem} 
          alt="teste" 
          style={{borderRadius: '2px', height: '100%',width: '100%'}} 
        />
      </Grid>
      <Grid container item >
        <div style={{backgroundColor: Green[300], width: '100%', borderRadius: '1px', paddingTop: 5}}>
          <h1 style={{textAlign: 'center'}}>Rancho Bem Viver</h1>
          <div style={{textAlign: 'center', fontSize: '20px', padding: '0px 19px 0px 15px'}}>
          <p >Rancho vem representando uma das diversidades encontradas no sudoeste do Paraná. Caros amigos, o comprometimento entre as equipes nos obriga à análise do investimento em reciclagem técnica. Por conseguinte, a percepção das dificuldades aponta para a melhoria da gestão inovadora da qual fazemos parte. É importante questionar o quanto a determinação clara de objetivos representa uma abertura para a melhoria das diretrizes de desenvolvimento para o futuro. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a consolidação das estruturas auxilia a preparação e a composição das posturas dos órgãos dirigentes com relação às suas atribuições. O empenho em analisar a crescente influência da mídia estende o alcance e a importância dos modos de operação convencionais.</p>
          </div>
        </div>
      </Grid>
    </Grid>
    )
  }

  function retornarSwipeableViews(){
    return (
      <Zoom key="princi" in={props.open} timeout={0} >
        <div className={(matches)?(classes.divModalPhone) : (classes.divModal)} >
            {/* <IconButton 
              aria-label={`info about antonio`} 
              className={classes.iconModalArrowLeft}
              onClick={()=>setarNumberImage('ArrowLeft')}
              >
            <ArrowBackIcon />
            </IconButton> */}
          <SwipeableViews style={{height: '100%', width: '100%',  overflowX: 'hidden', overflowY: 'scroll'}} enableMouseEvents>
            {retornarGridImagem(props.Image)}
            {retornarGridImagem(props.Image)}
            {retornarGridImagem(props.Image)}
            {/* {retornarGridImagem(props.Image[0].Image)} */}
          </SwipeableViews>
        </div>
      </Zoom>
      
    )
  }

  function retornarModal(){

      return (
        <Modal
          // onMouseEnter={()=>console.log('mouse entrou')}
          // onMouseOut={()=>console.log('mouse saiu')}
          className={classes.modal}
          // style={{ overflowX: 'hidden', overflowY: 'hidden'}}
          open={props.open}
          onClose={()=>onClose()}
          disableEnforceFocus 
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          // children={retornarChildren()}
          children={retornarSwipeableViews()}

          onKeyDown={(e)=>setarNumberImageKey(e)}
      />
      )
    }

    return(
      retornarModal()
    )
}