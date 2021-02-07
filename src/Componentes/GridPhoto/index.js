import React from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { makeStyles, fade } from '@material-ui/core/styles';

import {Hidden, Container, GridListTileBar, Grid, Paper, GridList, Modal, CardActionArea,
GridListTile, IconButton, Zoom, CardMedia, Card } from '@material-ui/core';

import FModalPhoto from '../FModalPhoto';

import SwipeableViewPhoto from '../SwipeableViewPhoto';

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
    height: '340px',
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
  const [onModal, setarOnModal] = React.useState({open: false, Image: ''});
  // const [onImage, setarOnImage] = React.useState('');
  // const [onLoadImg, setOnLoadImg] = React.useState(false);
  const [onModalShare, setOnModalShare] = React.useState(false);
  const [onSnackBar, setOnSnackBar] = React.useState(false);
  const classes = useStyles();
  const IsMobile = useMediaQuery("(max-width:600px)");

  const GridListItem = [
    { cols: 0  },
    { cols: 0  },
    { cols: 0  },
    { cols: 0  },
    { cols: 0  },
    { cols: 0  },
    { cols: 0  },
    { cols: 0  },
    { cols: 0  },
    { cols: 0  },
  ]

  function setarModal(AStateProps){
    // setarOnImage(AImg);
    setarOnModal({open: true, Image: AStateProps});
  }

  function retornarSwipeableViews(){
    return <SwipeableViewPhoto onClick={(AStateProps)=>setarModal(AStateProps)} open={true} />
  }

  function retornarSkeleton(){
    return (
      <Card className={classes.imgGridListTile} >
          {retornarSwipeableViews()}
      </Card>
    )
  }

  function retornarGridListTile(ACols, AKey){
    return (
      <GridListTile className={classes.gridListItem} key={AKey} cols={ACols}>
        {retornarSkeleton()}
        <GridListTileBar
          // title="Imagem"
          titlePosition="top"
          className={classes.titleBar}
          actionPosition="left"
          actionIcon={
            <IconButton 
              aria-label="Imagem" 
              className={classes.icon}
              onClick={()=>setModalShare(true)} 
              children={<ShareIcon />}
            />
          }
        />
      </GridListTile>
    )
  }

  function retornarImageGridList(){
    return (
      <div >
        <Zoom key="princi" in timeout={0} >
          <GridList cellHeight={340} className={classes.gridList} spacing={11} cols={(IsMobile)?(1):(2)}>
            {GridListItem.map((AConteudo, ACont)=>{
              return retornarGridListTile(AConteudo.cols, ACont)
            })}
          </GridList>
        </Zoom>
    </div>
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

  function retornarModal(){
    return (
      <FModalPhoto 
        open={onModal.open}
        Image={onModal.Image}
        onClose={(e)=>setarOnModal(e)}
      />
    )
    }

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

    return(
      retornarGridPhoto()
    )
}