import React, { useEffect, useState  } from 'react';

import ImageSkeleton from '../ImageSkeleton';

import CardItemMedia from '../CardItemMedia';

import image from '../../Image/Imagem11.jpg';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {Fade , GridListTileBar} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Skeleton from '@material-ui/lab/Skeleton';

import Zoom from '@material-ui/core/Zoom';

import Grow from '@material-ui/core/Grow';

import BdrlLogo from '../../Image/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    backgroundColor: '#e8f5e9',
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

function CardFood(props) {
  const classes = useStyles();
  const [onLoad, setOnLoad] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [figure, setFigure] = useState('https://picsum.photos/700/700'); 

  React.useEffect(() => {
    setTimeout(() => {
      setOnLoad(true);
    }, 2500);

  }, [onLoad])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function retornarDescricao() {
    if (props.isMateria) {
      return props.descMateria
    } else return "Esta impressionante paella é um prato de festa perfeito e uma refeição divertida para cozinhar junto com seus convidados. Adicione 1 xícara de ervilhas congeladas junto com os músculos, se desejar."
  }

  function retornarSkeleton(AHeight, AWidth, AComp) {
    if (onLoad){
      return ( AComp )
  } else {
    return (
      AWidth !== 0 ? <Skeleton width={AWidth}/> : <><Skeleton /><Skeleton /></>
    )
  }
  }

  function retornarBtnExpandir(){
    if (props.isMateria) {
      return false
    } else {
      return (
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Saiba Mais"
          children={<ExpandMoreIcon style={{ color: '#4caf50' }} />}
        />
      )
    }
  }
  
  function retornarDescReceita(){
    if (!props.isMateria) {
      return (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Método:</Typography>
            <Typography paragraph>
              Aqueça 1/2 xícara do caldo em uma panela até ferver, acrescente o açafrão e reserve por 10 minutos.
            </Typography>
            <Typography paragraph>
              Aqueça o óleo em uma panela de paella (14 a 16 polegadas) ou uma frigideira grande e funda em fogo médio-alto. Adicione o frango, o camarão e o chouriço e cozinhe, mexendo ocasionalmente até dourar levemente, 6 a 8 minutos. Transfira os camarões para um prato grande e reserve, deixando o frango e o chouriço na frigideira. Adicione pimentón, louro, alho, tomate, cebola, sal e pimenta e cozinhe, mexendo sempre até engrossar e cheirar, cerca de 10 minutos. Adicione o caldo de açafrão e as restantes 4 1/2 xícaras de caldo de galinha; leve para ferver.
            </Typography>
            <Typography paragraph>
              Adicione o arroz e mexa delicadamente para distribuir. Cubra com alcachofras e pimentões e cozinhe sem mexer, até a maior parte do líquido ser absorvida, 15 a 18 minutos. Reduza o fogo para médio-baixo, adicione os camarões reservados e os mexilhões, enfiando-os no arroz, e cozinhe novamente sem mexer, até os mexilhões abrirem e o arroz ficar macio, mais 5 a 7 minutos. (Descarte os mexilhões que não abrirem.)
            </Typography>
            <Typography>
              Retire do fogo e deixe descansar por 10 minutos e depois serve.
            </Typography>
          </CardContent>
        </Collapse>
      )
    } else return false
  }

  return (
      <Card className={classes.root} >
        <CardHeader
          style={{ padding: 8, fontWeight: 800 }}
          avatar={
            <Avatar src={BdrlLogo} aria-label="recipe" />
          }
          action={
            <div style={{ paddingTop: 5, paddingRight: 6 }}>
              <Fade in={onLoad} timeout={500}>
                <IconButton onClick={()=>props.onSetarFShare(image)} disableFocusRipple={false} size="medium"  aria-label="share">
                  <ShareIcon style={{ color: '#4caf50' }} />
                </IconButton>
              </Fade>
            </div>
          }
          title={retornarSkeleton(0, 150, 'Receita de Nova Prata')}
          subheader={retornarSkeleton(0, 110, '14 de Maio, 2021')} 
        />
        <div
          style={{ position: 'flex' }}
          onClick={()=>setFigure('https://picsum.photos/700/700')}
        >
          <CardItemMedia image={props.isMateria ? props.descFoto : "https://scontent.fmgf1-1.fna.fbcdn.net/v/t15.5256-10/p206x206/121846646_409164260098714_7029468152300090604_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=ad6a45&_nc_ohc=eAVPH2GBKn4AX_fSd3c&_nc_ht=scontent.fmgf1-1.fna&tp=6&oh=73e8051d86dfd730d61c7545027ee8bb&oe=6099031E"}/>
          {/* <ImageSkeleton 
            
          /> */}
        </div>
        <CardContent style={{ padding: 8 }} >
          <Typography style={{  textAlign: 'justify' ,fontWeight: 800 }} variant="body2" color="textSecondary" component="p">
            {retornarSkeleton(0, 0, retornarDescricao()) }
          </Typography>
        </CardContent>
        <Fade in={onLoad} timeout={500}>
          <CardActions style={{ paddingTop: 4, paddingBottom: 4 }} disableSpacing>
            <IconButton aria-label="like">
              <FavoriteIcon style={{ color: '#4caf50' }} />
            </IconButton>
              {retornarBtnExpandir()}
          </CardActions>
        </Fade>
        {retornarDescReceita()}        
      </Card>
  );
}

export default React.memo(CardFood);