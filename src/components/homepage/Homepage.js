import React from "react";
import { useStyles } from "./useStyles";
import { Button, Grid, Typography, Box, Container } from "@material-ui/core";
import playing from "../../images/playing.png";
import unknown from "../../images/unknown.png";
import teamwork from "../../images/teamwork.png";
import spotify from "../../images/icons8-spotify-48.png";
import deezer from "../../images/icons8-deezer-48.png";
import youtube from "../../images/icons8-youtube-48.png";
import ticks from "../../images/ticks.png";
export const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <section id="header" className={classes.heroImage}>
        <main>
          <Container maxWidth="lg">
            <Box paddingY={24} paddingX={3} className={classes.whiteText}>
              <Typography variant="h2">Composez votre playlist.</Typography>
              <Typography variant="h6">
                Soyez sans limites. Trcklst, maintenant disponible.
              </Typography>
              <Box paddingY={5}>
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
      </section>
      <section id="maincontent" className={classes.whit}>
        <Box paddingY={6} align="center">
          <Container maxWidth="lg">
            <Box paddingX={3}>
              <Typography variant="h3" className={classes.boldText}>
                Comment ça marche ?
              </Typography>
            </Box>
            <Box paddingX={3}>
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid
                  xs={12}
                  sm={6}
                  md={3}
                  lg={3}
                  xl={3}
                  className={classes.stepsBox}
                >
                  <Box padding={2}>
                    <Box paddingY={3}>
                      <img src={playing} alt="boxPicture" width="100%" />
                    </Box>
                    <Typography variant="h6" className={classes.purpleText}>
                      Créez
                    </Typography>
                    <Box paddingX={2}>
                      <Typography variant="body2" align="left">
                        ...un salon/une partie
                      </Typography>
                      <Typography variant="body2" align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sed rutrum leo, eu tempus dui. Mauris sem nibh,
                        condimentum luctus commodo non, dapibus finibus augue.
                        Proin efficitur, magna at faucibus gravida, justo justo
                        augue.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  md={3}
                  lg={3}
                  xl={3}
                  className={classes.stepsBox}
                >
                  <Box padding={2}>
                    <Box paddingY={3}>
                      <img src={unknown} alt="boxPicture" width="100%" />
                    </Box>
                    <Typography variant="h6" className={classes.purpleText}>
                      Invitez
                    </Typography>
                    <Box paddingX={2}>
                      <Typography variant="body2" align="left">
                        ...vos amis
                      </Typography>
                      <Typography variant="body2" align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sed rutrum leo, eu tempus dui. Mauris sem nibh,
                        condimentum luctus commodo non, dapibus finibus augue.
                        Proin efficitur, magna at faucibus gravida, justo justo
                        augue.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  md={3}
                  lg={3}
                  xl={3}
                  className={classes.stepsBox}
                >
                  <Box padding={2}>
                    <Box paddingY={3}>
                      <img src={teamwork} alt="boxPicture" width="100%" />
                    </Box>
                    <Typography variant="h6" className={classes.purpleText}>
                      Recherchez
                    </Typography>
                    <Box paddingX={2}>
                      <Typography variant="body2" align="left">
                        ...des{" "}
                        <span role="img" aria-label="music">
                          🎵
                        </span>{" "}
                        sur la plateforme musicale de votre choix
                      </Typography>
                      <Typography variant="body2" align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sed rutrum leo, eu tempus dui. Mauris sem nibh,
                        condimentum luctus commodo non, dapibus finibus augue.
                        Proin efficitur, magna at faucibus gravida, justo justo
                        augue.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid
                  xs={12}
                  sm={6}
                  md={3}
                  lg={3}
                  xl={3}
                  className={classes.stepsBox}
                >
                  <Box padding={2}>
                    <Box paddingY={3}>
                      <img src={playing} alt="boxPicture" width="100%" />
                    </Box>
                    <Typography variant="h6" className={classes.purpleText}>
                      Ajoutez
                    </Typography>
                    <Box paddingX={2}>
                      <Typography variant="body2" align="left">
                        ...à son salon des musiques
                      </Typography>
                      <Typography variant="body2" align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sed rutrum leo, eu tempus dui. Mauris sem nibh,
                        condimentum luctus commodo non, dapibus finibus augue.
                        Proin efficitur, magna at faucibus gravida, justo justo
                        augue.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  md={3}
                  lg={3}
                  xl={3}
                  className={classes.stepsBox}
                >
                  <Box padding={2}>
                    <Box paddingY={3}>
                      <img src={playing} alt="boxPicture" width="100%" />
                    </Box>
                    <Typography variant="h6" className={classes.purpleText}>
                      Votez
                    </Typography>
                    <Box paddingX={2}>
                      <Typography variant="body2" align="left">
                        ...pour la musique préférée afin qu'elle puisse être lu
                        en premier.
                      </Typography>
                      <Typography variant="body2" align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sed rutrum leo, eu tempus dui. Mauris sem nibh,
                        condimentum luctus commodo non, dapibus finibus augue.
                        Proin efficitur, magna at faucibus gravida, justo justo
                        augue.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  md={3}
                  lg={3}
                  xl={3}
                  className={classes.stepsBox}
                >
                  <Box padding={2}>
                    <Box paddingY={3}>
                      <img src={playing} alt="boxPicture" width="100%" />
                    </Box>
                    <Typography variant="h6" className={classes.purpleText}>
                      Profitez
                    </Typography>
                    <Box paddingX={2}>
                      <Typography variant="body2" align="left">
                        ...de la musique avec vos amis sans vous embetez à vous
                        connecter
                      </Typography>
                      <Typography variant="body2" align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer sed rutrum leo, eu tempus dui. Mauris sem nibh,
                        condimentum luctus commodo non, dapibus finibus augue.
                        Proin efficitur, magna at faucibus gravida, justo justo
                        augue.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>
      <section
        id="supportAvailable"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Box paddingY={6}>
          <Container maxWidth="lg">
            <Box py={2}>
              <Typography variant="h4" align="center">
                Nos platformes
              </Typography>
            </Box>
            <Box pY={4}>
              <Grid container spacing={0} alignItems="center" justify="center">
                <Grid xs={2} align="center">
                  <img src={spotify} alt="spotifyLogo" />
                  <Typography
                    variant="subtitle1"
                    style={{ letterSpacing: "2px" }}
                  >
                    bientôt
                  </Typography>
                </Grid>
                <Grid xs={2} align="center">
                  <img src={youtube} alt="youtubeLogo" />
                  <Typography
                    variant="subtitle1"
                    style={{ letterSpacing: "2px" }}
                  >
                    disponible
                  </Typography>
                </Grid>
                <Grid xs={2} align="center">
                  <img src={deezer} alt="deezerLogo" />
                  <Typography
                    variant="subtitle1"
                    style={{ letterSpacing: "2px" }}
                  >
                    bientôt
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>
    </>
  );
};
