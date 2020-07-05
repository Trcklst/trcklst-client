import React from "react";
import { useStyles } from "./useStyles";
import { Button, Grid, Typography, Box, Container } from "@material-ui/core";
import banner1 from "../../images/undraw_having_fun_iais.png";
import banner2 from "../../images/undraw_music_r1se.png";
import banner3 from "../../images/undraw_party_lqnv.png";

export const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <section id="header" className={classes.heroImage}>
        <main>
          <Container>
            <Box py={24} px={3}>
              <Typography variant="h1" className={classes.whiteText}>
                Trcklst.
              </Typography>
              <Typography variant="body2" className={classes.whiteText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor. Cras elementum ultrices diam.
                Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                Proin porttitor, orci nec nonummy molestie, enim est eleifend
                mi, non fermentum diam nisl sit amet erat. Duis semper. Duis
                arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                Pellentesque congue. Ut in risus volutpat libero pharetra
                tempor. Cras vestibulum bibendum augue. Praesent egestas leo in
                pede. Praesent blandit odio eu enim. Pellentesque sed dui ut
                augue blandit sodales. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.
                Mauris ac mauris sed pede pellentesque fermentum. Maecenas
                adipiscing ante non diam sodales hendrerit.
              </Typography>
              <Box py={5}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.customButton}
                >
                  Rejoignez notre platforme
                </Button>
              </Box>
            </Box>
          </Container>
        </main>
        <div className={classes.shapeDivider}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={classes.shapeSvg}
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className={classes.shapeFill}
              fill="#FFFFFF"
              fill-opacity="1"
            ></path>
          </svg>{" "}
        </div>
      </section>
      <section id="maincontent">
        <header>
          <Container>
            <Box py={8}>
              <Typography variant="h3" align="center">
                Pourquoi utiliser Trcklst ?
              </Typography>
              <Typography variant="body2" align="justify">
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
                <Grid item xs={12} sm={4}>
                  <Box height="400px">
                    <img src={banner1} alt="website logo" width="100%" />
                  </Box>
                  <Typography variant="h4" component="h1" align="center">
                    Tout d'abord...
                  </Typography>
                  <Typography variant="body2" align="justify">
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
                <Grid item xs={12} sm={4}>
                  <Box height="400px">
                    <img src={banner2} alt="option2" width="100%" />
                  </Box>
                  <Typography variant="h4" component="h1" align="center">
                    Par la suite..
                  </Typography>
                  <Typography variant="body2" align="justify">
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
                <Grid item xs={12} sm={4}>
                  <Box height="400px">
                    <img src={banner3} alt="option3" width="100%" />
                  </Box>
                  <Typography variant="h4" component="h1" align="center">
                    Après...
                  </Typography>
                  <Typography variant="body2" align="justify">
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
