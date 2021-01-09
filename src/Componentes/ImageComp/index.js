import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

import { CardMedia } from '@material-ui/core';

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
        <CardMedia
        style={{height: 500, width: '100%', borderRadius: 2}}
        image={img.src}
      />
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
