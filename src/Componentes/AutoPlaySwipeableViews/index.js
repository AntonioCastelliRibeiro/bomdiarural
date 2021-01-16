import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import ImageComp from '../ImageComp';

import { makeStyles } from '@material-ui/core/styles';

import { CardMedia } from '@material-ui/core';

import Slider from '../Slider';

import Imagem1 from '../../Image/Imagem7.jpg';
import Imagem2 from '../../Image/Imagem8.jpg';
import Imagem3 from '../../Image/Imagem9.jpg';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  gridListImg: {

  },
  divSlider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  divSlider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  gridList: {
    width: "100%",
    height: 100,
  },
  gridListImg: {
    cursor: 'pointer',
    '&:hover': {
      opacity: '90%',
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
}));

class Swipe extends React.Component {
  state = {
    index: 0,
  };



  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  retornarImage(AImage){
    return <ImageComp image={AImage} />
  }

  render() {
    const { index } = this.state;

    const lvImagem1 = Imagem1;
    const lvImagem2 = Imagem2;
    const lvImagem3 = Imagem3;
    
    return (
      <div style={styles.root}>
        <SwipeableViews index={index} enableMouseEvents onChangeIndex={this.handleChangeIndex}>
          {this.retornarImage(lvImagem1)}
          {this.retornarImage(lvImagem2)}
          {this.retornarImage(lvImagem3)}
        </SwipeableViews>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Slider max={2} numberImage={index} setarNumberImage={this.handleChangeIndex} />
        </div>
      </div>
    );
  }
}

export default Swipe;
