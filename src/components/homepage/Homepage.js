import React from "react";
import { useStyles } from "./useStyles";
import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
  Box,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { LOGIN, REGISTER } from "../../helpers/route-constant";

export const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <section id="header" className={classes.heroImage}>
        <header>
          <AppBar position="static" className={classes.appbar}>
            <Container>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  Trcklst
                </Typography>
                <Box py={2}>
                  <Link to={LOGIN} className={classes.link}>
                    Connexion
                  </Link>
                </Box>
                <Box px={2}>
                  <Link to={REGISTER} className={classes.link}>
                    Inscrption
                  </Link>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </header>
        <main>
          <Container>
            <Box pt={12} px={3} pb={3}>
              <Grid item xs={12} sm={8}>
                <Typography
                  component="h1"
                  variant="h4"
                  style={{
                    color: "white",
                  }}
                  gutterBottom
                >
                  Profitez de 3 mois de Spotify Premium gratuits
                </Typography>
                <Typography
                  variant="body2"
                  align="justify"
                  style={{
                    color: "white",
                  }}
                  paragraph
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean varius velit eleifend orci consequat, sed commodo enim
                  vulputate. Suspendisse sit amet congue purus. Aenean auctor
                  dui non orci porttitor posuere. Donec eu enim arcu. Cras
                  varius euismod risus nec viverra. Quisque eu eros rutrum,
                  mollis eros non, ultricies erat. In et tellus ultrices,
                  lacinia ligula nec, tempor purus. Curabitur aliquet diam
                  metus, non suscipit ante interdum eu. Maecenas vulputate nunc
                  sed nunc accumsan, nec tempus enim elementum. Praesent
                  tincidunt dignissim lectus, nec congue urna. Pellentesque
                  fringilla nec neque a dapibus. Vestibulum nisl velit,
                  vulputate id elementum ut, egestas eget est. Proin consequat
                  finibus scelerisque.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.buttonOffer}
                >
                  Profitez de l'offre
                </Button>
              </Grid>
            </Box>
          </Container>
        </main>
      </section>
      <section id="maincontent" className={classes.blackBg}>
        <header>
          <Container>
            <Box py={8}>
              <Typography
                variant="h3"
                align="center"
                className={classes.whiteText}
              >
                Pourquoi utiliser Trcklst ?
              </Typography>
              <Typography
                variant="body2"
                align="justify"
                className={classes.whiteText}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                varius velit eleifend orci consequat, sed commodo enim
                vulputate. Suspendisse sit amet congue purus. Aenean auctor dui
                non orci porttitor posuere. Donec eu enim arcu. Cras varius
                euismod risus nec viverra. Quisque eu eros rutrum, mollis eros
                non, ultricies erat. In et tellus ultrices, lacinia ligula nec,
                tempor purus. Curabitur aliquet diam metus, non suscipit ante
                interdum eu. Maecenas vulputate nunc sed nunc accumsan, nec
                tempus enim elementum. Praesent tincidunt dignissim lectus, nec
                congue urna. Pellentesque fringilla nec neque a dapibus.
                Vestibulum nisl velit, vulputate id elementum ut, egestas eget
                est. Proin consequat finibus scelerisque.
              </Typography>
            </Box>
          </Container>
        </header>
        <main>
          <Container>
            <Box py={5}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={3}>
                  <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    className={classes.whiteText}
                  >
                    Tout d'abord...
                  </Typography>
                  <Typography
                    variant="body2"
                    align="justify"
                    className={classes.whiteText}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean varius velit eleifend orci consequat, sed commodo
                    enim vulputate. Suspendisse sit amet congue purus. Aenean
                    auctor dui non orci porttitor posuere. Donec eu enim arcu.
                    Cras varius euismod risus nec viverra. Quisque eu eros
                    rutrum, mollis eros non, ultricies erat. In et tellus
                    ultrices, lacinia ligula nec, tempor purus. Curabitur
                    aliquet diam metus, non suscipit ante interdum eu. Maecenas
                    vulputate nunc sed nunc accumsan, nec tempus enim elementum.
                    Praesent tincidunt dignissim lectus, nec congue urna.
                    Pellentesque fringilla nec neque a dapibus. Vestibulum nisl
                    velit, vulputate id elementum ut, egestas eget est. Proin
                    consequat finibus scelerisque.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    className={classes.whiteText}
                  >
                    Par la suite..
                  </Typography>
                  <Typography
                    variant="body2"
                    align="justify"
                    className={classes.whiteText}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean varius velit eleifend orci consequat, sed commodo
                    enim vulputate. Suspendisse sit amet congue purus. Aenean
                    auctor dui non orci porttitor posuere. Donec eu enim arcu.
                    Cras varius euismod risus nec viverra. Quisque eu eros
                    rutrum, mollis eros non, ultricies erat. In et tellus
                    ultrices, lacinia ligula nec, tempor purus. Curabitur
                    aliquet diam metus, non suscipit ante interdum eu. Maecenas
                    vulputate nunc sed nunc accumsan, nec tempus enim elementum.
                    Praesent tincidunt dignissim lectus, nec congue urna.
                    Pellentesque fringilla nec neque a dapibus. Vestibulum nisl
                    velit, vulputate id elementum ut, egestas eget est. Proin
                    consequat finibus scelerisque.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    className={classes.whiteText}
                  >
                    Après...
                  </Typography>
                  <Typography
                    variant="body2"
                    align="justify"
                    className={classes.whiteText}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean varius velit eleifend orci consequat, sed commodo
                    enim vulputate. Suspendisse sit amet congue purus. Aenean
                    auctor dui non orci porttitor posuere. Donec eu enim arcu.
                    Cras varius euismod risus nec viverra. Quisque eu eros
                    rutrum, mollis eros non, ultricies erat. In et tellus
                    ultrices, lacinia ligula nec, tempor purus. Curabitur
                    aliquet diam metus, non suscipit ante interdum eu. Maecenas
                    vulputate nunc sed nunc accumsan, nec tempus enim elementum.
                    Praesent tincidunt dignissim lectus, nec congue urna.
                    Pellentesque fringilla nec neque a dapibus. Vestibulum nisl
                    velit, vulputate id elementum ut, egestas eget est. Proin
                    consequat finibus scelerisque.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    className={classes.whiteText}
                  >
                    Pour finir...
                  </Typography>
                  <Typography
                    variant="body2"
                    align="justify"
                    className={classes.whiteText}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean varius velit eleifend orci consequat, sed commodo
                    enim vulputate. Suspendisse sit amet congue purus. Aenean
                    auctor dui non orci porttitor posuere. Donec eu enim arcu.
                    Cras varius euismod risus nec viverra. Quisque eu eros
                    rutrum, mollis eros non, ultricies erat. In et tellus
                    ultrices, lacinia ligula nec, tempor purus. Curabitur
                    aliquet diam metus, non suscipit ante interdum eu. Maecenas
                    vulputate nunc sed nunc accumsan, nec tempus enim elementum.
                    Praesent tincidunt dignissim lectus, nec congue urna.
                    Pellentesque fringilla nec neque a dapibus. Vestibulum nisl
                    velit, vulputate id elementum ut, egestas eget est. Proin
                    consequat finibus scelerisque.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </main>
      </section>
      <section id="pricing">
        <header>
          <Container>
            <Box py={8}>
              <Typography variant="h3" component="h1" align="center">
                Choisissez votre offre Trcklst Premium
              </Typography>
              <Typography variant="body2" align="center">
                Pour vos choix et vos envies.
              </Typography>
            </Box>
          </Container>
        </header>
        <main>
          <Container>
            <Box py={5}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h4" component="h1" align="center">
                    Offre 1
                  </Typography>
                  <Typography variant="body2" align="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean varius velit eleifend orci consequat, sed commodo
                    enim vulputate. Suspendisse sit amet congue purus. Aenean
                    auctor dui non orci porttitor posuere. Donec eu enim arcu.
                    Cras varius euismod risus nec viverra. Quisque eu eros
                    rutrum, mollis eros non, ultricies erat.
                  </Typography>
                  <Box p={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buttonOffer}
                    >
                      Profitez de l'offre
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h4" component="h1" align="center">
                    Offre 2
                  </Typography>
                  <Typography variant="body2" align="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean varius velit eleifend orci consequat, sed commodo
                    enim vulputate. Suspendisse sit amet congue purus. Aenean
                    auctor dui non orci porttitor posuere. Donec eu enim arcu.
                    Cras varius euismod risus nec viverra. Quisque eu eros
                    rutrum, mollis eros non, ultricies erat.
                  </Typography>
                  <Box p={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buttonOffer}
                    >
                      Profitez de l'offre
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h4" component="h1" align="center">
                    Offre 3
                  </Typography>
                  <Typography variant="body2" align="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean varius velit eleifend orci consequat, sed commodo
                    enim vulputate. Suspendisse sit amet congue purus. Aenean
                    auctor dui non orci porttitor posuere. Donec eu enim arcu.
                    Cras varius euismod risus nec viverra. Quisque eu eros
                    rutrum, mollis eros non, ultricies erat.
                  </Typography>
                  <Box p={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.buttonOffer}
                    >
                      Profitez de l'offre
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </main>
      </section>
      <section id="footer" className={classes.blackBg}>
        <Box py={8}>
          <Container>
            <Typography
              variant="body2"
              composant="p"
              className={classes.whiteText}
              align="center"
            >
              © Tous droits réservés - Trcklst | 2020
            </Typography>
          </Container>
        </Box>
      </section>
    </>
  );
};
