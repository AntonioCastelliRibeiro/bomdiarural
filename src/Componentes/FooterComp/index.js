import React from "react";

import logo from "../../Image/logo.png";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  legalLink: {
    ...typography.caption,
    justifyContent: "center",
    color:
      palette.type === "dark"
        ? "rgba(255,255,255,0.57)"
        : palette.text.secondary,
    position: "relative",
    [breakpoints.up("sm")]: {
      "&:not(:first-of-type)": {
        "&:before": {
          content: '"|"',
          display: "block",
          position: "absolute",
          left: 0
        }
      }
    }
  },
  newsletter: {
    fontSize: typography.caption.fontSize
  },
  navMenu: {
    flexWrap: "wrap"
  },
  boxNavManu: {
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  boxNavTermos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },
  itemSobre: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.54)",
    cursor: "pointer",
    display: "flex",
    padding: "8px 16px",
    transition: "all 0.2s ease-out 0s",
    alignItems: "center",
    flexShrink: "0",
    borderRadius: "4px",
    textDecoration: "none"
  }
}));

const FooterComp = React.memo(function FooterComp() {
  const classes = useStyles();
  const history = useHistory();

  function setarRouter(AQueryParams){
  
    history.push(AQueryParams);
    // onClose({state: false, page: AQueryParams});
    // props.onSetarPageFoto(AQueryParams);
  }
  

  return (
    <Box bgcolor={'#e8f5e9'} width={"100%"}>
      <Container>
        <Box pt={8} pb={1}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flexGrow: 2 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ paddingRight: 2 }}>
                  <Avatar
                    style={{ height: 38, width: 38 }}
                    src={logo}
                  />
                </div>
                <div style={{ paddingLeft: 8 }}>
                  <Typography style={{ fontFamily: "Amaranth, sans-serif" }} variant={"h6"} color={"textSecondary"}>
                    Bom dia Rural
                  </Typography>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Button className={classes.itemSobre} size="small">
                  Sobre
                </Button>
                <Button className={classes.itemSobre} onClick={()=>setarRouter("/equipe")} size="small">
                  Equipe
                </Button>
                <Button className={classes.itemSobre} size="small">
                  Contato
                </Button>
              </div>
            </div>
            <div
              style={{
                flexGrow: 1,
                maxWidth: "500px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <Box textAlign={"center"} mt={{ xs: 2, md: 0 }} my={2}>
                <IconButton size="medium" children={<FacebookIcon />} />
                <IconButton size="medium" children={<InstagramIcon />} />
                <IconButton size="medium" children={<YouTubeIcon />} />
              </Box>
            </div>
          </div>
        </Box>
        <Divider />
        <Box pt={2} pb={10}>
          <div className={classes.boxNavTermos}>
            <div style={{ flexGrow: 1, flexShrink: 0, marginLeft: "-16px" }}>
              <div style={{ display: "flex" }}>
                <Box className={classes.boxNavManu} component="div">
                  <Button className={classes.itemSobre}>
                    Termos e Condições
                  </Button>
                  <Button className={classes.itemSobre}>
                    Politica de Privacidade
                  </Button>
                  <Button className={classes.itemSobre}>Acessibilidade</Button>
                  <Button className={classes.itemSobre}>Legal</Button>
                </Box>
              </div>
            </div>
            <div>
              <Box py={1} textAlign={{ xs: "center", md: "right" }}>
                <Typography
                  component={"p"}
                  variant={"caption"}
                  color={"textSecondary"}
                >
                  Designer Antonio Castelli © Tony Studios 2019-2021 Todos os
                  Diretitos Reservados
                </Typography>
              </Box>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
});

export default FooterComp;
