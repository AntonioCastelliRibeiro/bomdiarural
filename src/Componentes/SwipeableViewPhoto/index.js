import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Slider from '../Slider';

import themePhoto from './themePhoto';
import ShareIcon from '@material-ui/icons/Share';

import { GridListTileBar, IconButton, Fade } from '@material-ui/core';
import ImageCompPhoto from '../ImageCompPhoto';

const styles = {
  root: {
    position: 'absolute',
    flexDirection: 'column',
    display: 'flex',
    '&:hover': {
      opacity: '90%',
    },
  }
};

class SwipePhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      slider: false
    };
  }


  handleChangeIndex = index => {
    this.setState({
      index,
    });
    this.props.handleChangeIndex(index);
  };

  retornarBtnShare(){
    if (this.state.slider){
    return(
      <Fade in={this.state.slider} timeout={500}>
        <GridListTileBar
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
      </Fade>
      ) 
    } else return false
  }

  retornarSlider(){
    return(
      <Fade in={this.state.slider} timeou={500}>
        <Slider theme={themePhoto} max={2} numberImage={this.state.index} setarNumberImage={this.handleChangeIndex} /> 
      </Fade>
    )
  }

  retornarSwipe(){
    const { index } = this.state;
    return (
      <>
      <div style={styles.root} onMouseOver={(e)=>this.setState({slider: true})} onMouseLeave={(e)=>this.setState({slider: false})} >
        <SwipeableViews open={this.props.open} style={{display: 'flex'}} draggable={false} onClick={()=>this.props.onClick(this.state.index)} index={index} enableMouseEvents onChangeIndex={this.handleChangeIndex}>
          {
            this.props.listImage.map((AConteudo, ACont) => {
              return (
                <ImageCompPhoto 
                  key={ACont} 
                  index={index} 
                  image={AConteudo.Image} 
                  text1={AConteudo.text1} 
                  text2={AConteudo.text2}
                  text3={AConteudo.text3}
                  text4={AConteudo.text4}
                />
              )
            })
          }
        </SwipeableViews>
        <div style={{width: '100%', display: 'flex', alignItems: 'flex-start',  justifyContent: 'center'}}>
          {this.retornarSlider()}
        </div>
          {/* {this.retornarBtnShare()} */}
      </div>
      </>
    )
  }
  render() {
    return this.retornarSwipe()
  }
}

export default SwipePhoto;
