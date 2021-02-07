import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import ImageCompPhoto from '../ImageCompPhoto';
import Slider from '../Slider';
import themePhoto from './themePhoto';

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
      ConteudoImageComp: [{
        Image: ''
      }],
    };
  }

  componentDidMount(){
    this.carregarConteudoImageComp();
  }

  carregarConteudoImageComp(){
    this.setState({ConteudoImageComp: [
      {
        text1: 'O Programa',
        text2: 'de quem',
        text3: 'Planta e',
        text4: 'Produz',
        Image: Imagem11
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
    ]})
  }

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  retornarSwipe(){
    const { index } = this.state;
    return (
      <div style={styles.root}>
        <SwipeableViews style={{display: 'flex'}} onClick={()=>this.props.onClick(this.onClick())} index={index} enableMouseEvents onChangeIndex={this.handleChangeIndex}>
          {
            this.state.ConteudoImageComp.map((AConteudo, ACont) => {
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
          <Slider theme={themePhoto} max={2} numberImage={index} setarNumberImage={this.handleChangeIndex} />
        </div>
      </div>
    )
  }

  onClick(){
    return this.state.ConteudoImageComp[this.state.index].Image;
  }

  render() {
    return (
        this.retornarSwipe()
    )
  }
}

export default SwipePhoto;
