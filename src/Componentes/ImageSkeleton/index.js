import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';

import { red } from '@material-ui/core/colors';

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    opacity: '97%',
    height: 0,
    paddingTop: '56.25%', // 16:9
    '&:hover': {
      cursor: 'pointer',
      width: '100%',
      opacity: '100'
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ImageSkeleton() {
  const classes = useStyles();
  const [onLoadImg, setOnLoadImg] = useState(false);

  const img = new Image();
  img.onload = () =>{setOnLoadImg(true)};
  img.src = 'https://picsum.photos/700/700';

  function retornarImagem(){
    if (onLoadImg){
      return (
        <CardMedia
          className={classes.media}
          image={img.src}
          title="Bom dia Rural"
        />
      )
    } else {
      return (
        <Skeleton style={{backgroundColor: '#9ea490'}} variant="rect" width="100%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton>
      )
    }
  }
  
  return (
    retornarImagem()
  );
}
