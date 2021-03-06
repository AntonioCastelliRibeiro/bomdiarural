import React from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { makeStyles, fade } from '@material-ui/core/styles';

import { Container, GridListTileBar, GridList, GridListTile, IconButton, Zoom, Fade } from '@material-ui/core';

import FModalPhoto from '../FModalPhoto';

import ShareIcon from '@material-ui/icons/Share';

import FShare from '../FShare';
import SnackBar from '../SnackBar';

// import Imagem11 from '../../Image/Imagem11.jpg';
// import Imagem2 from '../../Image/Imagem8.jpg';
// import Imagem3 from '../../Image/Imagem9.jpg';

import Imagem11 from '../../Image/floresta.jpg';
import Imagem2 from '../../Image/cavalo.jpg';
import Imagem3 from '../../Image/soja.jpg';

import SwipeableViewPhoto from '../SwipeableViewPhoto';

// const SwipeableViewPhoto = React.lazy(() => import());

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
    // borderRadius: '7px',
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
    // borderRadius: '7px',
    opacity: '80%',
    background: 'transparent',
    // 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
    //   'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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

function GridPhoto(props) {
  // const [onModal, setarOnModal] = React.useState({open: false, Image: [{
  //   Image: ''
  // }], Index: ''
  // });
  const [onIndex, setarOnIndex] = React.useState(0);

  const [onModal, setarOnModal] = React.useState({open: false,
    ConteudoImageComp: [
      {
        Image: Imagem11
      },
      {
        Image: Imagem2
      },
      {
        Image: Imagem3
      },
    ]
  , Index: ''
  });


  // const [onImage, setarOnImage] = React.useState('');
  // const [onLoadImg, setOnLoadImg] = React.useState(false);
  const [onModalShare, setOnModalShare] = React.useState(false);
  const [onSnackBar, setOnSnackBar] = React.useState(false);
  const classes = useStyles();
  const IsMobile = useMediaQuery("(max-width:600px)");
  const IsQuebraContainer = useMediaQuery("(max-width:968px)");


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
    { cols: 0  },
    { cols: 0  },
  ]

  function setarModal(AOpen){
    // setarOnImage(AImg);
    // setarOnModal({open: true, Image: AStateProps.Image, Index: AStateProps.Index});
    setarOnModal({open: AOpen, ConteudoImageComp: onModal.ConteudoImageComp, Index: onModal.Index});

  }

  function setarModalShare(AVisible, AIndex){
    setarOnIndex(AIndex);
    setModalShare(AVisible);
  }

  function retornarSwipeableViews(){
    return (
      <SwipeableViewPhoto 
        iconClass={classes.icon}
        titleBarClass={classes.titleBar}
        listImage={onModal.ConteudoImageComp} 
        handleChangeIndex={(e)=>setarOnIndex(e)}
        onClick={(AIndex)=>setarOnModal({open: true, ConteudoImageComp: onModal.ConteudoImageComp, Index: AIndex})} 
        setModalShare={(AVisible, AIndex)=>setarModalShare(AVisible, AIndex)}
      />
      )
  }

  function retornarGridListTile(ACols, AKey){
    return (
      // <Zoom key="princi" in={true} timeout={500} >
      <Fade in={props.open} timeout={500}>
        <GridListTile className={classes.gridListItem} key={AKey} cols={ACols}>
          {retornarSwipeableViews()}
          {/* <GridListTileBar
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
          /> */}
        </GridListTile>
      </Fade>
      // </Zoom>
    )
  }

  function retornarImageGridList(){
    return (
      <div >
          <GridList cellHeight={IsQuebraContainer ? 300 : 300} className={classes.gridList} spacing={IsMobile ? 3 : IsQuebraContainer ? 7 : 20} cols={(IsMobile)?(2):(3)}>
            {GridListItem.map((AConteudo, ACont)=>{
              return retornarGridListTile(AConteudo.cols, ACont)
            })}
          </GridList>
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
      image={onModal.ConteudoImageComp[onIndex].Image}
      />
  }

  function retornarModal(){
    return (
      <FModalPhoto 
        open={onModal.open}
        image={onModal.ConteudoImageComp.length > 1}
        retornarImage={(e)=>onModal.ConteudoImageComp[e].Image}
        onClose={(e)=>setarModal(e)}
        index={onModal.Index}
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

export default React.memo(GridPhoto);