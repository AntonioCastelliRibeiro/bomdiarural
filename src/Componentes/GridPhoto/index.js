import React from 'react';

import { makeStyles, fade } from '@material-ui/core/styles';

import {Hidden, Container, GridListTileBar, Grid, Paper, GridList, Modal, CardActionArea,
GridListTile, IconButton, Zoom, CardMedia, Card } from '@material-ui/core';

import FModalPhoto from '../FModalPhoto';

import IconClose from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/StarBorderOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShareIcon from '@material-ui/icons/Share';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import FShare from '../FShare';
import SnackBar from '../SnackBar';

import Skeleton from '@material-ui/lab/Skeleton';

import Carousel from '../Carousel';


const useStyles = makeStyles((theme) => ({
  divPrincipalConteudo: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingLeft: '2%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '10px',
    maxWidth: 150,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2%',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0',
    },
  },
  gridContainerPrincipal: {
    // borderRadius: '20px',
  },
  gridList:{
    // borderRadius: '20px',
  },
  gridListItem: {
    backgroundColor: 'transparent',
    height: 'inherit',
  },
  imgGridListTile: {
    height: '300px',
    borderRadius: '7px',
    backgroundColor: '#25762712',
    color: '#fff',
  },
  imgSkeleton: {
    height: '100%',
    width: '100%'
  },
  divItemGrid1: {
    gridRowStart: 1,
    gridRowEnd: 3
  },
  FirstItemList: {
    height: 500, 
    width: 550,
    cursor: 'pointer',
    '&:hover': {
      opacity: '90%',
    },
    
    // [theme.breakpoints.up('sm')]: {
    //   width: '340px',
    //   height: '410px'
    // },
    // [theme.breakpoints.up('xs')]: {
    //   width: '280px',
    //   height: '290px'
    // },
    // [theme.breakpoints.down('sm')]: {
    //   width: '340px',
    //   height: '410px'
    // },
    // [theme.breakpoints.down('xs')]: {
    //   width: '200px',
    //   height: '290px'
    // },

  },
  SecondItemList: {
    height: 245,
    width: 315,
    cursor: 'pointer',
    '&:hover': {
      opacity: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '230px',
      height: '200px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '160px',
      height: '140px'
    },
  },
  divArrowContainer: {
    bottom: '50%',
    left: 0,
    right: 0,
    height: '48px',
    position: 'absolute',
    background: '#fff0',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',

  },
  titleBar: {
    borderRadius: '7px',
    opacity: '80%',
    background:
    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      '&:hover': {
        opacity: '95%',
      },
  },
  icon: {
    // opacity: '50%',
    color: 'white',
  },
  divIcon: {
    // borderRadius: '80px',

    opacity: '80%',
    width: '100%',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  iconModal: {
    opacity: '80%',
    color: 'white',
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
      left: '25%',
    },

    // backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
  gridModal: {
    height: '100%',
    width: '100%'
  }
}));

export default function GridPhoto(props) {
  const [onModal, setarOnModal] = React.useState(false);
  const [onImage, setarOnImage] = React.useState('');
  const [onLoadImg, setOnLoadImg] = React.useState(false);
  const [onLoadImgModal, setOnLoadImgModal] = React.useState(false);
  const [onModalShare, setOnModalShare] = React.useState(false);
  const [onSnackBar, setOnSnackBar] = React.useState(false);
  const classes = useStyles();

  function retornarCarousel(AReverse){
    if (AReverse){
      return (
      <div style={{ height: '100%', paddingTop: 10}} className={classes.gridContainer}>
        <Hidden >
        {retornarGridListTittle(300, 'FirstItemList')}   
          <div className={classes.divItemGrid1}>
            <div style={{display: ('block')}}>{retornarGridListTittle(350, 'SecondItemList')}</div>
            <div style={{display: ('block'), paddingTop: 10}}>{retornarGridListTittle(400, 'SecondItemList')}</div>         
          </div>
        </Hidden>        
      </div>
      )
    }
    else{
    return (
      <div className={classes.gridContainer}>
        <Hidden >
          <div className={classes.divItemGrid1}>
            {retornarGridListTittle(300, 'FirstItemList')}          
          </div>
          <div style={{display: ('block')}}>{retornarGridListTittle(350,  'SecondItemList')}</div>
          <div style={{display: ('block')}}>{retornarGridListTittle(400,  'SecondItemList')}</div>  
        </Hidden>
      </div>
    )
    }
  }

  function setarModal(AImg){
    setarOnImage(AImg);
    setarOnModal(true);
    // props.onSetarCarousel(true);
  }

  function retornarSkeleton(){
    const img = new Image();
    img.onload = () =>{setOnLoadImg(true)};
    img.src = "https://source.unsplash.com/random";
    if (onLoadImg) {
      return (
        <Card
          className={classes.imgGridListTile}
        >
          <CardActionArea
            className={classes.imgGridListTile}
          >
            <CardMedia
              component="img"
              alt="Album de Fotos"
              className={classes.imgGridListTile}
              image={img.src}
              onClick={()=>setarModal(img.src)}
            >
            </CardMedia>
          </CardActionArea>
        </Card>
        // <img 
        // onClick={()=>setarModal(img.src)}
        // className={classes.imgGridListTile}
        // src={img.src} 
        // alt="teste" />
      )
    } else {
      return (
        <Skeleton 
          style={{borderRadius: '7px'}}
          animation="wave"
          variant="rect" 
          width="100%" 
          height="100%" 

        />
      )
    }
  }

  function retornarGridListTile(ACols, AKey){
      return (
        <GridListTile className={classes.gridListItem} key={AKey} cols={ACols}>
          {/* {retornarModal()} */}
          {retornarSkeleton()}
          <GridListTileBar
            // key={AKey}
            title="Imagem"
            titlePosition="top"
            className={classes.titleBar}
            actionIcon={
              <IconButton 
                aria-label="Imagem" 
                className={classes.icon}
                onClick={()=>setModalShare(true)} 
              >
                {/* <StarBorderIcon /> */}
                <ShareIcon 
                />
              </IconButton>
            }
            actionPosition="left"
          />
        </GridListTile>
      )
  }

  function retornarImageGridList(){
    return (
      <div >
        <Zoom key="princi" in timeout={300} >
          <GridList cellHeight={300} className={classes.gridList} spacing={11} cols={2}>
            {retornarGridListTile(1, 0)}
            {retornarGridListTile(1, 1)}
            {retornarGridListTile(1, 2)}
            {retornarGridListTile(1, 3)}
            {retornarGridListTile(1, 4)}
            {retornarGridListTile(1, 5)}
            {retornarGridListTile(1, 6)}
            {retornarGridListTile(1, 7)}
            {retornarGridListTile(1, 8)}
            {retornarGridListTile(1, 9)}
            {retornarGridListTile(1, 10)}
            {retornarGridListTile(1, 11)}
          </GridList>
        </Zoom>
    </div>
    )
  }

  function retornarConteudoGrid(){
    let rows = [];
    for(let i=1; i<4; i++){ rows.push(i) }
    return ( 
      rows.map((cont, aKey)=>retornarCarousel((cont%2 === 1) ? (false) : (true)))
    )
  }

  function retornarArrowContainer(){
    return (
      <div className={classes.divArrowContainer}>
        <div>
          <IconButton onClick={()=>setOnLoadImg(false)} aria-label={`info about Antonio`}>
            <ArrowBackIosIcon style={{color: '#424242'}} />
          </IconButton>  
        </div>
        <div>
          <IconButton aria-label={`info about Antonio`}>
            <ArrowForwardIosIcon style={{color: '#424242'}} />
          </IconButton>
        </div>
      </div>

    )
  }

  function retornarConteudoImage(){
    return (
      <>
        <Hidden mdUp>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Zoom key="princi" in timeout={250} >
              <GridListTile key="test" style={{listStyleType: 'none'}} >
              {retornarImagem("450px", "100%")}
              {retornarArrowContainer()}
              <GridListTileBar
                titlePosition="bottom"
                title="Imagem Teste"
                style={{backgroundColor: '#fff0', borderRadius: 2}}
                subtitle={<span>by: Antonio</span>}
              />
              </GridListTile>
            </Zoom>            
          </Grid>
        </Grid>
      </Hidden>
    </>
    )
  }

  function onCloseModal(AClose){
    setarOnModal(AClose);
    setOnLoadImgModal(AClose);
  }

  function retornarSkeletonModal(){
    if (onLoadImgModal){
      return (
        <div style={{display: 'flex'}}>
          <div>
            <img src={onImage} alt="teste" style={{borderRadius: '7px', height: '100%',width: '100%'}} />
          </div>
          <h1>testee</h1>
          <h1>testee</h1>
          <h1>testee</h1>
        </div>
      )
    } else
    return (
        <Skeleton variant="rect" style={{opacity: '0%', backgroundColor: '#616161', borderRadius: '7px'}} height="100%" width="100%" />
    )
  }

  function setModalShare(AVisible){
    setOnModalShare(AVisible);
  }

  function setSnackBar(AObject){
    setOnSnackBar(AObject);
  }

  function retornarModalShare(){
    return <FShare 
      open={onModalShare} 
      onSetClose={()=>setModalShare(false)} 
      onSetSnackBar={(AObject)=>setSnackBar(AObject)}
      />
  }

  function retornarConteudoModal(){
    const img = new Image();
    img.onload = () =>{setOnLoadImgModal(true)};
    img.src = "https://source.unsplash.com/random";
    return (
      <div className={classes.divModal}>
        {retornarSkeletonModal()}
        <div className={classes.divIcon}>
          <IconButton 
            aria-label={`info about antonio`} 
            className={classes.iconModal}
            onClick={()=>setOnModalShare(true)}
            >
            <ShareIcon />
          </IconButton>
          <IconButton  
            aria-label={`info about antonio`} 
            className={classes.iconModal}
            onClick={()=>onCloseModal(false)}
          >
            <IconClose />
          </IconButton>
        </div>
      </div>
    )
  }

  function retornarModal(){
    return (
      <FModalPhoto 
        open={onModal}
        onClose={(e)=>setarOnModal(e)}
      />
    )
    }
    // if (onModal) {
    //   return (
    //     <Carousel open={onModal} onClose={(e)=>setarOnModal(e)} />
    //   )
    //   return (
    //     <Modal
    //       style={{border: 'none'}}
    //       open={onModal}
    //       onClose={()=>setarOnModal(false)}
    //   >
    //     <Zoom key="princi" in timeout={300} >
    //       {retornarConteudoModal()}          
    //     </Zoom>
    //   </Modal>
    //   )
    // }
  // }

  function retornarSnackBar(){
    const { open, message, success } = onSnackBar;
    return (open) ? (<SnackBar open={open} message={message} success={success} onClose={(e)=>setOnSnackBar(e)}/>) : (false)
  }

  function retornarGridPhoto(){
    return (
      <div 
        style={{ height: '100%', paddingTop: "10px", paddingBottom: "10px", backgroundColor: fade('#257627', 0.25)}}
      >
        <Container className={classes.gridContainerPrincipal} maxWidth="md">
          {retornarImageGridList()}
        </Container>
        {retornarModal()}
        {retornarModalShare()}
        {retornarSnackBar()}
      </div>
    )
  }

  function retornarImagem(AClassName){
    const img = new Image();
    img.onload = () =>{setOnLoadImg(true)};
    img.src = "https://source.unsplash.com/random";
    
    if (onLoadImg){
      return (
        <>
          <CardMedia
            className={(AClassName === 'FirstItemList')?(classes.FirstItemList): (classes.SecondItemList)}
            image={img.src}
            title="Paella dish"
          />
      </>
      )
    } else {
     return (
      <Skeleton variant="rect" width="100%">
        <div className={(AClassName === 'FirstItemList')?(classes.FirstItemList): (classes.SecondItemList)} />
      </Skeleton>
     )
    }
  }

  function retornarGridListTittle(ATimeOut, AClassName){
    return (
      <Zoom key="princi" in timeout={ATimeOut} >
        <GridListTile key="test" style={{listStyleType: 'none'}} >
        {retornarImagem(AClassName)}
        <GridListTileBar
          titlePosition="top"
          style={{ backgroundColor: '#fff0', borderRadius: 2}}        
        />
        <GridListTileBar
          titlePosition="bottom"
          title="Imagem Teste"
          style={{backgroundColor: '#fff0', borderRadius: 2}}
          subtitle={<span>by: Antonio</span>}
        />
        </GridListTile>
      </Zoom>
    )
  }

    return(
      retornarGridPhoto()
    )
}