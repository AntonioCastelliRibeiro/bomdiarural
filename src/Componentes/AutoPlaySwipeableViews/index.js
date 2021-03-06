import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import ImageComp from '../ImageComp';
import Slider from '../Slider';
import CarrouselView from '../CarrouselView';

import Imagem1 from '../../Image/Imagem7.jpg';
import Imagem2 from '../../Image/Imagem8.jpg';
import Imagem3 from '../../Image/Imagem9.jpg';

const ConteudoImageComp =  [
  {
    text1: 'O Programa',
    text2: 'de quem',
    text3: 'Planta e',
    text4: 'Produz',
    Image: Imagem1
  },
  {
    text1: 'As 08h30',
    text2: 'todo Sábado',
    text3: 'na Tv',
    text4: 'Sudoeste 7.1',
    Image: Imagem2
  },
  {
    text1: 'Conteúdo',
    text2: 'Exclusivo',
    text3: 'do Campo',
    text4: 'e Lavoura',
    Image: Imagem3
  },
]

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
  root: {
    position: 'relative',
  }
};

class Swipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      ConteudoImageComp: [{}],
    };
  }

  componentDidMount(){
    // this.carregarConteudoImageComp();
  }

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  retornarAutoPlaySwipe(){
    const { index } = this.state;
    return (
      <div style={styles.root}>
        <AutoPlaySwipeableViews style={{width: '100%'}}  interval={7500} index={index} enableMouseEvents onChangeIndex={this.handleChangeIndex}>
            {/* <CarrouselView /> */}
          {
            ConteudoImageComp.map((AConteudo, ACont) => {
              return (
                <ImageComp 
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
        </AutoPlaySwipeableViews>
        {/* <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}> */}
          {/* <Slider  max={2} numberImage={index} setarNumberImage={this.handleChangeIndex} /> */}
        {/* </div> */}
      </div>
    )
  }

  retornarSwipe(){
    const { index } = this.state;
    return (
      <div style={styles.root}>
        <SwipeableViews onClick={()=>this.props.onClick()} index={index} enableMouseEvents onChangeIndex={this.handleChangeIndex}>
          {
            this.state.ConteudoImageComp.map((AConteudo, ACont) => {
              return (
                <ImageComp 
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
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Slider max={2} numberImage={index} setarNumberImage={this.handleChangeIndex} />
        </div>
      </div>
    )
  }

  render() {
    const SwipeableViews = this.retornarAutoPlaySwipe();
    return SwipeableViews
  }
}

export default Swipe;
