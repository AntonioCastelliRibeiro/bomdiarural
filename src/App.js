import React from 'react';
import './App.scss';

import { fade } from '@material-ui/core/styles';

import Photo from './Class/Photo';

import { BrowserRouter } from 'react-router-dom';

import SwipeableDrawerLeft from './Componentes/SwipeableDrawerLeft';
import GridItem from './Componentes/GridItem';
import NavbarTop from './Componentes/NavbarTop';
import ContainerImage from './Componentes/ContainerImage';
import ParallaxScroll from './Componentes/ParallaxScroll';


import FModalPhoto from './Componentes/FModalPhoto';

import ReactRouter from './Componentes/ReactRouter';

import LinearProgress from '@material-ui/core/LinearProgress';

import {Container} from '@material-ui/core';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageHome: true,
      pageFoto: false,
      pageVideos: false,
      SwipeableDrawerLeft : false,
      onCarousel: false
    }
  }

  componentDidMount(){
    this.onSetarPageFoto(document.location.pathname);
    // window.onscroll = ()=> this.handleScroll();
  }

  
  // handleScroll(){
  //   this.setState({ onShowGrid: (document.documentElement.scrollTop > 400) ? (true) : (false) })
  // }

  retornarNavbar(){
    return(
      <NavbarTop
        refresh={()=>this.setState({SwipeableDrawerLeft: this.SwipeableDrawerLeft })} 
        onClose={(e)=>this.onSetarPageFoto(e)}
        onClickSwipeableLeft={()=>this.setState({SwipeableDrawerLeft: true})} 
      />
    )
  }

  onCloseSwipeableLeft(e){
    this.setState({SwipeableDrawerLeft: e.state});
    this.onSetarPageFoto(e.page);
  }

  retornarSwipeableDrawerLeft(){
    // if (this.state.SwipeableDrawerLeft) {
      return( 
      <SwipeableDrawerLeft
        setarRouter={(e)=>this.setarRouter(e)}
        open={this.state.SwipeableDrawerLeft}
        onClose={(e)=>this.onCloseSwipeableLeft(e)} 
        onSetarPageFoto={(e)=>this.onSetarPageFoto(e)}
      />)
    // }
  }

  onSetarPageFoto(e){
    if (e === '/fotos'){
      this.setState({pageFoto: true, pageHome: false, pageVideos: false})
    }
    else if (e === '/videos'){
      this.setState({pageFoto: false, pageHome: false, pageVideos: true})
    }
    else if (e === '/'){
      this.setState({pageFoto: false, pageHome: true, pageVideos: false})
    }
  }

  retornarGridPrincipal(){
    if (this.state.pageHome){
    return (
      <div style={{ paddingTop: 10, paddingBottom: 10, backgroundColor: fade('#257627', 0.25)}} >
        <ContainerImage />
        <Container maxWidth="md" >
          <GridItem />
        </Container>
      </div>
      )
    }
  }

  retornarProgressLinear(){
    return <LinearProgress />
  }

  retornarGridPhoto(){
    if (this.state.pageFoto) {
      return (
        <Photo 
        onSetarCarousel={(e)=>this.setState({onCarousel: e})} />
      ) 
    } else return false
  }

  retornarCarousel(){
    return (
      <FModalPhoto 
        open={this.state.onCarousel}
        onClose={(e)=>this.setState({onCarousel: e})}
      />
      // <Carousel open={this.state.onCarousel} onClose={(e)=>this.setState({onCarousel: e})} />
    )
  }

  retornarBreadCrumb(){
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={()=>false}>
          Bom dia Rural
        </Link>
        <Link color="inherit" href="/fotos" onClick={()=>false}>
          Fotos
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    )
  }

  retornarGridVideos(){
    if (this.state.pageVideos){
      return (
        <ParallaxScroll />
      )
    }
  }
  
  render()
  {
    return (
      <>
        <BrowserRouter>
        {this.retornarSwipeableDrawerLeft()}
        {this.retornarCarousel()}
          <header>
          {this.retornarNavbar()}
          </header>
          <main>
            {/* {this.retornarProgressLinear()} */}
            <ReactRouter />
            {/* {this.retornarBreadCrumb()} */}
            {this.retornarGridPrincipal()}
            {this.retornarGridPhoto()}
            {this.retornarGridVideos()}
          </main>
          {/* <footer >
            <div style={{ display: 'flex', height: 50 ,backgroundColor: '#257627'}}>
              <span style={{ paddingTop: 27, paddingLeft: 10, color: '#ffff'}}>© Copyright 2020-2021 Antonio Castelli Ribeiro</span>
            </div>
          </footer> */}
        </BrowserRouter>
      </>
      );
    }
}

export default App;
