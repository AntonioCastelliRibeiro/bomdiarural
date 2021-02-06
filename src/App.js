import React from 'react';
import './App.scss';

import Photo from './Class/Photo';

import { BrowserRouter } from 'react-router-dom';

import SwipeableDrawerLeft from './Componentes/SwipeableDrawerLeft';
import NavbarTop from './Componentes/NavbarTop';
import GridPrincipal from './Componentes/GridPrincipal';

import FModalPhoto from './Componentes/FModalPhoto';

import ReactRouter from './Componentes/ReactRouter';

import LinearProgress from '@material-ui/core/LinearProgress';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageHome: true,
      pageFoto: false,
      SwipeableDrawerLeft : false,
      onCarousel: false
    }
  }

  componentDidMount(){
    this.onSetarPageFoto(document.location.pathname);
  }

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
      this.setState({pageFoto: true, pageHome: false})
    }
    else if (e === '/'){
      this.setState({pageFoto: false, pageHome: true})
    }
  }

  retornarGridPrincipal(){
    if (this.state.pageHome){
    return (
      <GridPrincipal />
      )
    }
  }

  retornarProgressLinear(){
    return <LinearProgress />
  }

  retornarGridPhoto(){
    return (this.state.pageFoto) ? (<Photo onSetarCarousel={(e)=>this.setState({onCarousel: e})} /> /*<GridPhoto />*/) : (false)
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
          </main>
          <footer >
            <div style={{ display: 'flex', height: 50 ,backgroundColor: '#257627'}}>
              <span style={{ paddingTop: 27, paddingLeft: 10, color: '#ffff'}}>© Copyright 2020-2021 Antonio Castelli Ribeiro</span>
            </div>
          </footer>
        </BrowserRouter>
      </>
      );
    }
}

export default App;
