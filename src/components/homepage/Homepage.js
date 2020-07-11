import React from "react";
import { useStyles } from "./useStyles";
import {
  Button,
  Grid,
  Typography,
  Box,
  Container,
  Chip,
} from "@material-ui/core";
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
      <section id="maincontent" className={classes.whiteBg}>
        <Box paddingY={6} align="center">
          <Container maxWidth="lg">
            <Box paddingY={3}>
              <Typography variant="h3" className={classes.boldText}>
                Comment ça marche ?
              </Typography>
            </Box>
            <Box paddingX={3}>
              <Grid container spacing={0} alignItems="center" justify="center">
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
                    <Typography
                      variant="h6"
                      className={(classes.purpleText, classes.boldText)}
                    >
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
                    <Typography
                      variant="h6"
                      className={(classes.purpleText, classes.boldText)}
                    >
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
                    <Typography
                      variant="h6"
                      className={(classes.purpleText, classes.boldText)}
                    >
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
                    <Typography
                      variant="h6"
                      className={(classes.purpleText, classes.boldText)}
                    >
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
                    <Typography
                      variant="h6"
                      className={(classes.purpleText, classes.boldText)}
                    >
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
                    <Typography
                      variant="h6"
                      className={(classes.purpleText, classes.boldText)}
                    >
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
        className={classes.whiteText}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Box paddingY={6} align="center">
          <Container maxWidth="lg">
            <Box paddingY={3}>
              <Typography variant="h3" className={classes.boldText}>
                Nos platformes
              </Typography>
            </Box>
            <Box paddingX={3}>
              <Grid container spacing={0} alignItems="center" justify="center">
                <Grid xs={12} sm={2} md={2} lg={2} xl={2} align="center">
                  <img src={spotify} alt="spotifyLogo" />
                  {/* <Typography
                    variant="subtitle1"
                    style={{ letterSpacing: "2px" }}
                  >
                    bientôt
                  </Typography> */}
                  <Chip size="small" label="bientôt" />
                </Grid>
                <Grid xs={12} sm={2} md={2} lg={2} xl={2} align="center">
                  <img src={youtube} alt="youtubeLogo" />
                  <Typography
                    variant="subtitle1"
                    style={{ letterSpacing: "2px" }}
                  >
                    disponible
                  </Typography>
                </Grid>
                <Grid xs={12} sm={2} md={2} lg={2} xl={2} align="center">
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
      <section
        id="pricing"
        className={classes.pricing}
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <Box paddingY={6} align="center">
          <Container maxWidth="lg">
            <Box paddingY={2}>
              <Typography variant="h4" className={classes.descriptionTitle}>
                Notre plateforme propose deux types d'abonnements pour vous
                satisfaire.
              </Typography>
            </Box>
            <Grid container spacing={0} alignItems="center" justify="center">
              <Grid
                xl={4}
                lg={4}
                md={4}
                sm={4}
                xs={12}
                className={classes.pricingBox}
                style={{ backgroundColor: "white" }}
              >
                <Box paddingY={3}>
                  <Typography variant="body2">Classique</Typography>
                  <Typography variant="h2">0€</Typography>
                  <Typography variant="body2">à vie, pour toujours</Typography>
                </Box>
                <div>
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid xl={1} lg={1} md={1} sm={1} xs={3}>
                      <img src={ticks} alt="ticksLogo" />
                    </Grid>
                    <Grid
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={6}
                      style={{ alignSelf: "center" }}
                    >
                      <Typography variant="body2">Création de party</Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid xl={1} lg={1} md={1} sm={1} xs={3}>
                      <img src={ticks} alt="ticksLogo"></img>
                    </Grid>
                    <Grid
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={6}
                      style={{ alignSelf: "center" }}
                    >
                      <Typography variant="body2">Inviter des amis</Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid xl={1} lg={1} md={1} sm={1} xs={3}>
                      <img src={ticks} alt="ticksLogo"></img>
                    </Grid>
                    <Grid
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={6}
                      style={{ alignSelf: "center" }}
                    >
                      <Typography variant="body2">
                        Nombre de party limités
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid xl={1} lg={1} md={1} sm={1} xs={3}>
                      <img src={ticks} alt="ticksLogo"></img>
                    </Grid>
                    <Grid
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={6}
                      style={{ alignSelf: "center" }}
                    >
                      <Typography variant="body2">
                        Nombre d'invités limités
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid xl={1} lg={1} md={1} sm={1} xs={3}>
                      <img src={ticks} alt="ticksLogo"></img>
                    </Grid>
                    <Grid
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={6}
                      style={{ alignSelf: "center" }}
                    >
                      <Typography variant="body2">
                        Nombre de sons limités
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid
                xl={4}
                lg={4}
                md={4}
                sm={4}
                xs={12}
                className={classes.pricingBox}
                style={{ backgroundColor: "#1f1959", color: "white" }}
              >
                <Box paddingY={3}>
                  <Typography variant="body2">Preminum</Typography>
                  <Typography variant="h2">15€</Typography>
                  <Typography variant="body2">par mois</Typography>
                </Box>
                <Box>
                  <div>
                    <Grid
                      container
                      spacing={0}
                      alignItems="center"
                      justify="center"
                    >
                      <Grid xl={1} lg={1} md={1} sm={1} xs={3}>
                        <img src={ticks} alt="ticksLogo" />
                      </Grid>
                      <Grid
                        xl={4}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={6}
                        style={{ alignSelf: "center" }}
                      >
                        <Typography variant="body2">
                          Création de party
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid
                      container
                      spacing={0}
                      alignItems="center"
                      justify="center"
                    >
                      <Grid xl={1} lg={1} md={1} sm={1} xs={3}>
                        <img src={ticks} alt="ticksLogo"></img>
                      </Grid>
                      <Grid
                        xl={4}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={6}
                        style={{ alignSelf: "center" }}
                      >
                        <Typography variant="body2">
                          Inviter des amis
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid
                      container
                      spacing={0}
                      alignItems="center"
                      justify="center"
                    >
                      <Grid xl={1} lg={1} md={1} sm={1} xs={3}>
                        <img src={ticks} alt="ticksLogo"></img>
                      </Grid>
                      <Grid
                        xl={4}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={6}
                        style={{ alignSelf: "center" }}
                      >
                        <Typography variant="body2">
                          Nombre de party illimités
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid
                      container
                      spacing={0}
                      alignItems="center"
                      justify="center"
                    >
                      <Grid xl={1} lg={1} md={1} sm={1} xs={3}>
                        <img src={ticks} alt="ticksLogo"></img>
                      </Grid>
                      <Grid
                        xl={4}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={6}
                        style={{ alignSelf: "center" }}
                      >
                        <Typography variant="body2">
                          CréNombre d'invités illimités
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid
                      container
                      spacing={0}
                      alignItems="center"
                      justify="center"
                    >
                      <Grid xl={1} lg={1} md={1} sm={1} xs={3}>
                        <img src={ticks} alt="ticksLogo"></img>
                      </Grid>
                      <Grid
                        xl={4}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={6}
                        style={{ alignSelf: "center" }}
                      >
                        <Typography variant="body2">
                          Nombre de sons illimités
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </section>
      <section id="footer" className={classes.blackBg}>
        <Box paddingY={8}>
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
