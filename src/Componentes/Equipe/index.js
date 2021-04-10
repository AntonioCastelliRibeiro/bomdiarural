import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import { Container, GridList, Box, Fade, GridListTile, List, ListItem, CardContent, Card, CardMedia } from "@material-ui/core";

import { IconButton, Typography, useMediaQuery } from "@material-ui/core";
import { Skeleton, SkeletonProps } from "@material-ui/lab";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    backgroundColor: "#e8f5e9",
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    // paddingLeft: 15,
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2)
      // paddigLeft: 5,
    }
  },
  media: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "49%",
      height: 100,
      marginLeft: spacing(-3),
      marginTop: 0,
      // paddingLeft: 4,
      transform: "translateX(-8px)"
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5
    }
  },
  mediaSkeleton: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-14),
    height: 300,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    // backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "50%",
      height: 100,
      marginLeft: spacing(-3),
      marginTop: 0,
      // paddingLeft: 4,
      transform: "translateX(-8px)"
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5
    }
  },
  content: {
    padding: 22
  },
  cta: {
    marginTop: 24,
    textTransform: "initial"
  }
}));

const GridListItem = [ { NM_PESSOA: "Antonio Castelli", NM_PROFISSAO: "Desenvolvedor", NM_CIDADEMUN: "Francisco Beltrão, Paraná", DS_FOTO: "https://instagram.fmgf1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93855379_222648335840111_4850943541087567872_n.jpg?tp=1&_nc_ht=instagram.fmgf1-1.fna.fbcdn.net&_nc_ohc=pdBs_V2qDIYAX8L-mAf&edm=ABfd0MgAAAAA&ccb=7-4&oh=81841197875f9874575b1692f758810f&oe=60918D84&_nc_sid=7bff83" },  
{ NM_PESSOA: "Jean Campanhollo", NM_PROFISSAO: "Diretor", NM_CIDADEMUN: "Francisco Beltrão, Paraná", DS_FOTO: "https://instagram.fmgf1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/169203125_451446532793547_1416404050709766851_n.jpg?tp=1&_nc_ht=instagram.fmgf1-1.fna.fbcdn.net&_nc_ohc=5uBxgYDjjc4AX-lx5_f&edm=ABfd0MgAAAAA&ccb=7-4&oh=76d091182184768ed5a19f82ceadd222&oe=60938B2D&_nc_sid=7bff83" }, 
{ NM_PESSOA: "Eduardo Britto", NM_PROFISSAO: "Diretor", NM_CIDADEMUN: "Francisco Beltrão, Paraná", DS_FOTO: "https://instagram.fmgf1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/143050064_399998677972856_7570275588262972068_n.jpg?tp=1&_nc_ht=instagram.fmgf1-1.fna.fbcdn.net&_nc_ohc=J_1tLpwJ3-QAX-aYWEU&tn=DiwVQQW9a4BuauVj&edm=ABfd0MgAAAAA&ccb=7-4&oh=052982e1cdce99a7cdafe468ddd855e7&oe=609526AF&_nc_sid=7bff83"},
{ NM_PESSOA: "Tarcísio Reinehr", NM_PROFISSAO: "Diretor", NM_CIDADEMUN: "Francisco Beltrão, Paraná", DS_FOTO: "https://scontent.fmgf1-1.fna.fbcdn.net/v/t31.18172-1/p200x200/12771950_1402089163171419_4558210806032630462_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=6gJd-QsKlIYAX_RizB1&_nc_ht=scontent.fmgf1-1.fna&tp=6&oh=c245c30a3f1132cc5a0a22a213255770&oe=60974884" },
];

export const CardItem = function CardItem(props){
  const styles = useStyles();
  return (
    <div style={{ paddingTop: 50,width: '100%' }}>
      <Card className={styles.root}>
        {props.showSkeleton ? <Skeleton className={styles.mediaSkeleton} /> : <CardMedia className={styles.media} image={props.foto} />}
        <CardContent>
        <Typography>
          <Box
            children={props.showSkeleton ? <Skeleton width={160} /> : props.nome}
            fontFamily="'Amaranth', sans-serif"
            fontSize={20}
            width={props.Is960px ? 150 : 190}
            fontWeight="fontWeightBold"
            lineHeight={2}
          />
          <Box
            children={props.showSkeleton ? <Skeleton /> : props.profissao }
            fontFamily="'Amaranth', sans-serif"
            fontSize={15}
            fontWeight="fontWeightBold"
            marginBottom="0.35em"
          />
            <Box
              children={props.showSkeleton ? <Skeleton /> : props.cidadeMum}
              fontFamily="'Amaranth', sans-serif"
              fontSize={14}
              fontWeight="fontWeightBold"
              marginBottom="0.25em"
            >
              
            </Box>
          </Typography>
            <Fade in={!props.showSkeleton} timeout={500} >
          <Box paddingLeft={0} style={{ display: 'flex', justifyContent: props.Is960px ? 'center' : 'flex-start' }} >

              <IconButton
                style={{ marginLeft: 0, padding: 8 }}
                size="small"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton style={{ marginLeft: 3, padding: 8 }} size="small">
                <InstagramIcon />
              </IconButton>
          </Box>
          </Fade>

        </CardContent>
      </Card>
    </div>
  )
}

export class MyEquipe extends React.Component {

  render(){
    return (
        <GridList  cellHeight={this.props.Is960px ? 480 : 339} /*className={classes.gridList}*/ 
          style={{ width: '100%' }}
          spacing={0} 
          cols={1}
          // style={{ padding: "20px 0px 20px 0px" }}
        >
          {GridListItem.map( (e, key) =>{
            return (
              // <Fade in={true} timeout={500}>
                <GridListTile key={key} cols={1}>
                  <Box display="flex" >
                    <List style={{ width: '100%' }} >
                      <ListItem style={{ width: '100%' }}>
                        <CardItem showSkeleton={this.props.showSkeleton} Is960px={this.props.Is960px} nome={e.NM_PESSOA} profissao={e.NM_PROFISSAO} cidadeMum={e.NM_CIDADEMUN} foto={e.DS_FOTO} />
                      </ListItem>
                    </List>
                  </Box>
                </GridListTile>
                // </Fade>
                )
          })}
        </GridList>
    )
  }
}


export default function Equipe(){
  const [showSkeleton, onShowSkeleton] = React.useState(true);
  const Is600px = useMediaQuery("(max-width:600px)");

  React.useEffect(()=>{
    window.scrollTo(0,0);
    setTimeout(() => {
      onShowSkeleton(false)
    }, 1000);
  }, [showSkeleton]);

  function retornarSkeleton(AWidth){
    if (Is600px){
      return (
        <>
          <Skeleton width={AWidth} />
          <Skeleton width={AWidth} />
      </>
      )
    } else return <Skeleton width={AWidth} />

  }

  const Is960px = useMediaQuery("(max-width:960px)");
  return (
    <Container maxWidth="md" >
      <Box>
        <Box paddingBottom={2}>
          <Typography>
            <Box children={showSkeleton ? <Skeleton width={120} /> : 'Equipe'} margin={"6px 0"} paddingTop={1} fontSize={40} fontFamily="'Amaranth', sans-serif" fontWeight={400} lineHeight={1.167} letterSpacing={"0em"}  />
            <Box children={showSkeleton ? retornarSkeleton(Is960px ? '100%' : 880) : 'Uma visão geral da equipe fundadora do Bom Dia Rural.'} 
              margin={"0 0 20px"} paddingTop={3} fontSize={"1.5rem"} fontFamily="'Amaranth', sans-serif" fontWeight={400} lineHeight={1.167} letterSpacing={"0em"} />
            <Box children={showSkeleton ? retornarSkeleton(Is960px ? '100%' : 880) : 'Bom Dia Rural é mantido por um grupo de contribuidores essenciais de valor inestimável, com um enorme apoio.'}
              margin={"0 0 0px"} fontSize={"1rem"} fontFamily="'Amaranth', sans-serif" fontWeight={400} lineHeight={1.167} letterSpacing={"0em"} />
        </Typography>
        </Box>  
        <Box paddingBottom={8}>
          <MyEquipe showSkeleton={showSkeleton} Is960px={Is960px} />
        </Box>
      </Box>
    </Container>
  )
}