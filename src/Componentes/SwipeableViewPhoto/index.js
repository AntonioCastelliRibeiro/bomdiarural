import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import ImageCompPhoto from '../ImageCompPhoto';
import Slider from '../Slider';
import themePhoto from './themePhoto';

import ShareIcon from '@material-ui/icons/Share';



import {CardActionArea, GridListTileBar, IconButton} from '@material-ui/core';

import Imagem11 from '../../Image/Imagem11.jpg';
import Imagem2 from '../../Image/Imagem8.jpg';
import Imagem3 from '../../Image/Imagem9.jpg';

const styles = {
  root: {
    position: 'relative',
    flexDirection: 'column',
    display: 'flex'
  }
};

class SwipePhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      // ConteudoImageComp: [{
      //   Image: ''
      // }],
    };
  }

  componentDidMount(){
    // this.carregarConteudoImageComp();
  }

  // carregarConteudoImageComp(){
  //   this.setState({ConteudoImageComp: [
  //     {
  //       text1: 'O Programa',
  //       text2: 'de quem',
  //       text3: 'Planta e',
  //       text4: 'Produz',
  //       Image: Imagem11
  //     },
  //     {
  //       text1: 'As 08h30',
  //       text2: 'todo Sábado',
  //       text3: 'na Tv',
  //       text4: 'Sudoeste 7.1',
  //       Image: Imagem2
  //     },
  //     {
  //       text1: 'Conteúdo',
  //       text2: 'Exclusivo',
  //       text3: 'do Campo',
  //       text4: 'e Lavoura',
  //       Image: Imagem3
  //     },
  //   ]})
  // }

  handleChangeIndex = index => {
    this.setState({
      index,
    });
    this.props.handleChangeIndex(index);
  };

  retornarSwipe(){
    const { index } = this.state;
    return (
      <>
      <div style={styles.root}>
        <SwipeableViews open={this.props.open} style={{display: 'flex'}} draggable={'false'} onClick={()=>this.props.onClick(this.state.index)} index={index} enableMouseEvents onChangeIndex={this.handleChangeIndex}>
          {
            this.props.listImage.map((AConteudo, ACont) => {
              return (
                // <CardActionArea >
                  <ImageCompPhoto 
                    key={ACont} 
                    index={index} 
                    image={AConteudo.Image} 
                    text1={AConteudo.text1} 
                    text2={AConteudo.text2}
                    text3={AConteudo.text3}
                    text4={AConteudo.text4}
                  />
                // </CardActionArea>
              )
            })
          }
        </SwipeableViews>
        <div style={{width: '100%', display: 'flex', alignItems: 'flex-start',  justifyContent: 'center'}}>
          <Slider theme={themePhoto} max={2} numberImage={index} setarNumberImage={this.handleChangeIndex} />
        </div>
      </div>
        <GridListTileBar
          // title="Imagem"
          titlePosition="top"
          className={this.props.titleBarClass}
          actionPosition="left"
          actionIcon={
            <IconButton 
              aria-label="Imagem" 
              className={this.props.iconClass}
              onClick={()=>this.props.setModalShare(true, this.state.index)} 
              children={<ShareIcon />}
            />
          }
        />
      </>
    )
  }

  // onClick(){
  //   return this.state.index
    
//[this.state.index].Image;

  render() {
    return (
        this.retornarSwipe()
    )
  }
}

export default SwipePhoto;
