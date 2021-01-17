import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

import { CardMedia } from '@material-ui/core';
import { Parallax, Background } from "react-parallax";

import Spring from '../Spring';

  export default function ImageComp(props) {
  const [onLoadImage, setOnLoadImage] = React.useState(false);

  const img = new Image();
  img.onload = () =>{handleChangeLoadImg(true)};
  img.src = props.image;

  const handleChangeLoadImg = AStatus => {
    setOnLoadImage(AStatus);
  };
 
  function retornarImagem(){
    if (onLoadImage){
      return (
        <Parallax key={props.key} bgImage={img.src} renderLayer={(e)=>console.log(e)} strength={100}>
           <div style={{height: 500, width: '100%'}}>
            <Spring key={props.key} open={true} text1={props.text1} text2={props.text2}  text3={props.text3}  text4={props.text4} />
           </div>
        </Parallax>
      )
    } else {
      return (
        <Skeleton 
          style={{height: 500, width: '100%', borderRadius: 2}}
          variant="rect" 
          width="100%"
          />
      )
    }
  }

    return (
      retornarImagem()
    );
}
