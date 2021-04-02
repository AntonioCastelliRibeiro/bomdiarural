import React from 'react';

import useMediaQuery from "@material-ui/core/useMediaQuery";

import Avatar from '@material-ui/core/Avatar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';


import Imagem1 from '../../Image/Imagem1.jpg';
import Imagem2 from '../../Image/Imagem2.jpg';
import Imagem3 from '../../Image/Imagem3.jpg';
import Imagem4 from '../../Image/Imagem4.jpg';
import Imagem5 from '../../Image/Imagem5.jpg';
import Imagem6 from '../../Image/Imagem6.jpg';
import BomdiaRuralLogo from '../../Image/logo.png';

import Slider from '../Slider';

import SwipeableViews from 'react-swipeable-views';

import FShare from '../FShare';
import SnackBar from '../SnackBar';

import { makeStyles, fade } from '@material-ui/core/styles';

import { Modal, IconButton, Zoom, Fade, Divider, Box } from '@material-ui/core';

import Backdrop from '@material-ui/core/Backdrop';

import Grid from '@material-ui/core/Grid';

import IconClose from '@material-ui/icons/Close';
import Skeleton from '@material-ui/lab/Skeleton';
import ShareIcon from '@material-ui/icons/Share';
import IconChat from '@material-ui/icons/ModeComment';
import IconLike from '@material-ui/icons/Favorite';

import Green from '@material-ui/core/colors/green';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconShare from '@material-ui/icons/Share';


const useStyles = makeStyles((theme) => ({
  modal: {
    // overflowX: 'hidden', 
    overflowY: 'scroll',
    overflowX: 'hidden',
    WebkitOverflowScrolling: 'touch',
    // '&::-webkit-scrollbar': {
    //   background: 'blue',
    // }
  },
  divZoom: {

  },
  divTexto: {
    WebkitOverflowScrolling: 'touch',
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
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'flex-end',
  },
  divIconShareModal: {
    opacity: '80%',
    width: '50%',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'flex-start',
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
    // alignSelf: 'flex-start'

  },
  divModalPhone:{
    outline: 0,
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    left: '0%',
    top: '0%',
  },
  divModal: {
    outline: 0,
    display: 'flex',
    position: 'absolute',
    flexDirection: 'row',
    // width: '93.4%',
    // height: '95%',
    // left: '3.2%',
    // top: '2%',
    // [theme.breakpoints.down('sm')]: {
    //   width: '95.49%',
    //   height: '95%',
    //   top: '0%',
    //   left: '2%',
    // },
    [theme.breakpoints.up('sm')]: {
      width: '99%',
      // // height: '95%',
      top: '10%',
      left: '0.5%',
    },
    // [theme.breakpoints.down('md')]: {
    //   width: '86.99%',
    //   height: '97.5%',
    //   top: '11%',
    //   left: '6%',
    // },
    [theme.breakpoints.up('md')]: {
      // width: '99%',
      height: '17.5%',
      top: '7%',
      left: '0.5%',
    },
    [theme.breakpoints.down('lg')]: {
      width: '98%',
      // height: '10%',
      // top: '10%',
      left: '1.3%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
      // height: '10%',
      // top: '10%',
      left: '10%',
    },
    // [theme.breakpoints.up('xl')]: {
    //   width: '80%',
    //   height: '100%',
    //   top: '7%',
    //   left: '10%',
    // },
    [theme.breakpoints.up('xl')]: {
      width: '85.99%',
      // height: '80%',
      top: '5%',
      left: '8%',
    },
  },
  gridModal: {
    height: '100%',
    width: '100%'
  },
  iconSmall: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    '&:hover': {
      cursor: 'pointer',
      opacity: '90%',
    },
  },
  iconLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function FModalPhoto(props) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const matches = useMediaQuery("(max-width:943px)");
  const isQuebraTituloMd = useMediaQuery("(max-width:1047px)");
  const isLarge = useMediaQuery("(max-width:1920px)");
  

  const [onIndex, setIndex] = React.useState(0);
  React.useEffect(() => {
    return props.index > 0 ?  setIndex(props.index) : false
  }, [props.index]);

  const [onModalShare, setModalShare] = React.useState(false);
  const [onSnackBar, setSnackBar] = React.useState(false);
  const [onNumberImage, setOnNumberImage] = React.useState(1);
  const [onLoadImgModal, setOnLoadImgModal] = React.useState(false);
  const Image1 = Imagem1;
  const Image2 = Imagem2;
  const Image3 = Imagem3;
  const Image4 = Imagem4;
  const Image5 = Imagem5;
  const Image6 = Imagem6;


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
        // <Zoom key="princi" in={true} timeout={800} >
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
          style={{backgroundColor: 'black', borderRadius: '2px'}} 
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
          <div style={{backgroundColor: 'rgb(255, 255, 255)', width: '100%', borderRadius: '1px', paddingTop: 5}}>
            <h1 style={{textAlign: 'center'}}>Rancho Bem Viver</h1>
            <div style={{textAlign: 'center', fontSize: '35px' }}>
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
            // className={classes.iconModal}

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
    let lvNumber = onNumberImage;

    if (lvKey === 'ArrowLeft'){
      lvNumber = (onNumberImage === 1) ? (3) : (onNumberImage - 1);
    } 
    else if (lvKey === 'ArrowRight') {
      lvNumber = (onNumberImage === 3) ? (1) : (onNumberImage +1);
    }

    props.handleChangeIndex(lvNumber);
    // setOnNumberImage(lvNumber); 
    // setOnLoadImgModal(false);
    }

  function setarNumberImageKey(AKey){
    const lvKey = AKey.key;
    let lvNumber = onNumberImage;

    if (lvKey === 'ArrowLeft'){
      lvNumber = (onNumberImage === 1) ? (6) : (onNumberImage - 1);
    } 
    else if (lvKey === 'ArrowRight') {
      lvNumber = (onNumberImage === 6) ? (1) : (onNumberImage +1);
    }
    
    setOnNumberImage(lvNumber); 
    // setOnLoadImgModal(true);
    }


  function onClose(){
    // setOnNumberImage(1);
    // props.onClose({open: false, Image: [{ Image: '' }] });
    props.onClose(false);
    
  }

  function onShareClick(){
    return setModalShare(true);
  }

  function retornarModalShare(){
    return <FShare 
      open={onModalShare} 
      onSetClose={()=>setModalShare(false)} 
      onSetSnackBar={(AObject)=>setSnackBar(AObject)}
      image={setarImagem(onIndex)}
      />
  }

  function retornarSnackBar(){
    const { open, message, success } = onSnackBar;
    return (open) ? (<SnackBar zIndex={99999} open={open} message={message} success={success} onClose={(e)=>setSnackBar(e)}/>) : (false)
  }

  function retornarImagemComp(AImg){
    const lvImage = new Image();
    lvImage.onload = () => {
      // console.log("natural:", lvImage.naturalWidth, lvImage.naturalHeight);
      console.log("width,height:", lvImage.width, lvImage.height);
      // console.log("offsetW,offsetH:", lvImage.offsetWidth, lvImage.offsetHeight);
    }
    lvImage.src = AImg;

    return (
      <img 
      draggable={false}
      src={AImg} 
      alt="teste" 
      style={{borderRadius: '2px', height: isMobile ? '100%' : isLarge ? '100%' : lvImage.height, width: '100%'}} 
    />
    )
  }

  function retornarGridImagem(AImagem){
    return (
      <Grid container >
          <div className={classes.divIconCloseModal} >
            <IconButton 
              aria-label={`info about antonio`} 
              className={classes.iconModalArrowRight}
              onClick={()=>onClose()}
              >
              <Fade in={onNumberImage}timeout={500}>
                <IconClose  />                
              </Fade>
            </IconButton>
          </div>
          {/* <div className={classes.divIconShareModal}>
            <IconButton 
              aria-label={`info about antonio`} 
              className={classes.iconModalArrowLeft}
              onClick={()=>onShareClick()}
              >
                <ShareIcon />
            </IconButton>
          </div> */}
      <Grid container item style={{height: '100%'}}>
        {retornarImagemComp(AImagem)}
      </Grid>
    </Grid>
    )
  }

  function setarImagem(AIndex){
    if (props.image){
      return props.retornarImage(AIndex)
    }
  }

  function retornarIndexProps(){
    if (props.image){
      return props.index
    }
    return 0
  }

  function retornarSwipeableViews(){
    return (
      <Zoom key="princi" in={props.open} timeout={0} style={{ height: 'inherit', backgroundColor: 'rgb(255, 255, 255)' }} >
        <div className={(matches)?(classes.divModalPhone) : (classes.divModal)} >
          <div style={{ display: 'contents', backgroundColor: 'rgb(255, 255, 255)', height: 'inherit', width: '100%'}}/>
        {/* {!isMobile ? <IconButton 
              aria-label={`info about antonio`} 
              className={classes.iconModalArrowLeft}
              onClick={()=>setarNumberImage('ArrowLeft')}
              > 
            <ArrowBackIcon />
            </IconButton> : false} */}
          <SwipeableViews onChangeIndex={(e)=>setIndex(e)} index={retornarIndexProps()} style={{ width: '100%',  overflow: matches ? '' : 'hidden'}} enableMouseEvents>
            {retornarGridImagem(setarImagem(0))}
            {retornarGridImagem(setarImagem(1))}
            {retornarGridImagem(setarImagem(2))}
           </SwipeableViews> 
          <Grid container style={{ width: (matches) ? '100%' : '35%' }} >
            <div style={{backgroundColor: '', width: '100%', height: '100%', borderRadius: '1px', paddingTop: 0 }}>
            <Fade in={onNumberImage}timeout={500}>
              <section style={{height: '100%' }}>
              <List style={{ backgroundColor: 'rgb(255, 255, 255)' , height: '100%', paddingTop: 0, paddingBottom: 0, display: 'flex', flexDirection: 'column'}}>
                <ListItem style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgb(255, 255, 255)', width: '100%', padding: '1% 0 0 4%'}}>
                  {/* <div > */}
                    <Avatar alt="Remy Sharp" className={classes.iconSmall} src={BomdiaRuralLogo} />
                    <h1 style={{ flexGrow: 2, fontSize: isQuebraTituloMd ? isMobile || matches ? '20px' : '16px' : '20px', fontFamily: '"Amaranth", sans-serif', fontWeight: 400, lineHeight: 1.5, paddingLeft: '3%' }}>Rancho Bem Viver</h1>
                    <IconButton style={{ marginRight: '3%' }} onClick={()=>onShareClick()}> 
                      <IconShare />
                    </IconButton>
                    <Divider />
                  {/* </div> */}
                </ListItem>
                <ListItem style={{ overflow: 'auto', height: '100%', padding: '0 0 0 20px' }} setIndex>
                <div style={{ height: '100%' }} >
                  {/* <h1 style={{fontFamily: '"Amaranth", sans-serif', textAlign: 'center', fontWeight: 500}}>Rancho Bem Viver</h1> */}
                  <div className={classes.divTexto} style={{ height: isQuebraTituloMd ? 350 : 10, WebkitOverflowScrolling: 'touch', textAlign: 'left', fontSize: '20px' , paddingRight: 20}}>
                    <p style={{ display: 'contents' }} >Rancho vem representando uma das diversidades encontradas no sudoeste do Paraná. Caros amigos, o comprometimento entre as equipes nos obriga à análise do investimento em reciclagem técnica. Por conseguinte, a percepção das dificuldades aponta para a melhoria da gestão inovadora da qual fazemos parte. É importante questionar o quanto a determinação clara de objetivos representa uma abertura para a melhoria das diretrizes de desenvolvimento para o futuro. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a consolidação das estruturas auxilia a preparação e a composição das posturas dos órgãos dirigentes com relação às suas atribuições. O empenho em analisar a crescente influência da mídia estende o alcance e a importância dos modos de operação convencionais.Caros amigos, o comprometimento entre as equipes nos obriga à análise do investimento em reciclagem técnica. Por conseguinte, a percepção das dificuldades aponta para a melhoria da gestão inovadora da qual fazemos parte. É importante questionar o quanto a determinação clara de objetivos representa uma abertura para a melhoria das diretrizes de desenvolvimento para o futuro. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a consolidação das estruturas auxilia a preparação e a composição das posturas dos órgãos dirigentes com relação às suas atribuições. O empenho em analisar a crescente influência da mídia estende o alcance e a importância dos modos de operação convencionais.</p>
                  </div>
                </div>
                </ListItem>
                {/* <Divider /> */}
                  <ListItem style={{ display: 'flex', paddingTop: 10, justifyContent: 'flex-start', backgroundColor: 'rgb(255, 255, 255)', width: '100%'}}>
                    <IconButton style={{ marginRight: '3%' }}> 
                      <IconLike />
                    </IconButton>
                    <IconButton style={{ marginRight: '3%' }}> 
                      <IconChat />
                    </IconButton>
                  </ListItem>
                {/* <Divider /> */}
                </List>
              </section>
              </Fade >
            </div>
          </Grid>
          {/* {!isMobile ? <IconButton 
              aria-label={`info about antonio`} 
              className={classes.iconModalArrowRight}
              onClick={()=>setarNumberImage('ArrowRight')}
              >
            <ArrowForwardIcon />
            </IconButton> : false} */}
        </div>
       </Zoom>
      
    )
  }

  function retornarModal(){

      return (
        <>
        <Modal
          // onMouseEnter={()=>console.log('mouse entrou')}
          // onMouseOut={()=>console.log('mouse saiu')}
          // onScroll={(e)=>e.preventDefault()}
          className={classes.modal}
          // style={{overflowY: 'scroll'}}
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
      {retornarModalShare()}
      {retornarSnackBar()}
      </>
      )
    }

    return(
      retornarModal()
    )
}