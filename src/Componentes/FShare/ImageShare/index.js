import React from 'react';

import { CardMedia } from '@material-ui/core';

export default class ImageShare extends React.Component{

  render(){
    return (
      <CardMedia
        style={{display: 'flex', width: '100%', height: '158px', paddingRight: '0px'}}
        image={this.props.image}//"https://picsum.photos/700/700"
        alt="Share"
      />
    )
  }
}