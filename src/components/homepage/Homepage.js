import React from "react";
import { useStyles } from "./useStyles";
import { Button, Grid, Typography, Box, Container } from "@material-ui/core";
// import playing from "../../images/playing.png";
// import unknown from "../../images/unknown.png";
// import teamwork from "../../images/teamwork.png";
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
            <Box paddingY={24} px={3}>
              <Typography variant="h1" className={classes.whiteText}>
                Ensemble, créer votre playlist.
              </Typography>
              <Typography variant="h6" className={classes.whiteText}>
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
        <div className={classes.shapeDivider}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={classes.shapeSvg}
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className={classes.shapeFill}
            ></path>
          </svg>{" "}
        </div>
      </section>
      <section id="maincontent" style={{ backgroundColor: "#F9F9F9" }}>
        <Box paddingY={6}>
          <Container maxWidth="lg">
            <Box paddingY={2}>
              <Typography variant="h3" align="center">
                Comment marche Trcklst? 👀
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={0}>
                <Grid xs={2}>
                  <hr />
                  <Box paddingX={1}>
                    <Typography variant="h6">Etape 1</Typography>
                    <Typography variant="body2">Créer une partie</Typography>
                  </Box>
                </Grid>
                <Grid xs={2}>
                  <hr />
                  <Box paddingX={1}>
                    <Typography variant="h6">Etape 2</Typography>
                    <Typography variant="body2">Invitez vos amis</Typography>
                  </Box>
                </Grid>
                <Grid xs={2}>
                  <hr />
                  <Box paddingX={1}>
                    <Typography variant="h6">Etape 3</Typography>
                    <Typography variant="body2">
                      Rechercher des 🎵 sur une platforme
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={2}>
                  <hr />
                  <Box paddingX={1}>
                    <Typography variant="h6">Etape 4</Typography>
                    <Typography variant="body2">
                      Ajouter à son salon des musiques
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={2}>
                  <hr />
                  <Box paddingX={1}>
                    <Typography variant="h6">Etape 5</Typography>
                    <Typography variant="body2">
                      Votez pour la musique préférée afin qu'elle passe avant
                      les cours
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={2}>
                  <hr />
                  <Box paddingX={1}>
                    <Typography variant="h6">Etape 6</Typography>
                    <Typography variant="body2">
                      Profitez de la musique avec vos amis sans vous embetez à
                      vous connecter
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>
      {/* <section id="maincontent" style={{ backgroundColor: "#F9F9F9" }}>
        <Box paddingY={6}>
          <Container maxWidth="lg">
            <Box paddingY={4}>
              <Grid container spacing={0} alignItems="center" justify="center">
                <Grid xl={5} lg={0} md={0} sm={0} xs={0}></Grid>
                <Grid xl={4} lg={6} md={6} sm={6} xs={12} alignContent="center">
                  <img src={playing} alt="website logo" width="100%" />
                </Grid>
                <Grid xl={3} lg={4} md={4} sm={4} xs={12} alignContent="center">
                  <Box>
                    <Box paddingY={1}>
                      <Typography
                        variant="h4"
                        className={classes.descriptionTitle}
                      >
                        Ceci est le premier point
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      className={classes.descriptionContent}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam sed ipsum ut ante consequat consequat. Quisque
                      laoreet sem vitae nunc dignissim porta. Vestibulum
                      lobortis tortor in blandit convallis. Proin tincidunt eros
                      quis erat tristique, eu lacinia nibh interdum. Suspendisse
                      a tellus nibh. Cras nec ornare elit. Aliquam erat
                      volutpat. Proin magna ipsum, hendrerit non odio vel,
                      pharetra vulputate odio.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box paddingY={4}>
              <Grid container spacing={0} alignItems="center" justify="center">
                <Grid xl={3} lg={4} md={4} sm={4} xs={12} alignContent="center">
                  <Box>
                    <Box paddingY={1}>
                      <Typography
                        variant="h4"
                        align="right"
                        className={classes.descriptionTitle}
                      >
                        Ceci est le premier point
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      align="right"
                      className={classes.descriptionContent}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam sed ipsum ut ante consequat consequat. Quisque
                      laoreet sem vitae nunc dignissim porta. Vestibulum
                      lobortis tortor in blandit convallis. Proin tincidunt eros
                      quis erat tristique, eu lacinia nibh interdum. Suspendisse
                      a tellus nibh. Cras nec ornare elit. Aliquam erat
                      volutpat. Proin magna ipsum, hendrerit non odio vel,
                      pharetra vulputate odio.
                    </Typography>
                  </Box>
                </Grid>
                <Grid xl={4} lg={6} md={6} sm={6} xs={12} alignContent="center">
                  <img src={unknown} alt="website logo" width="100%" />
                </Grid>
                <Grid xl={5} lg={0} md={0} sm={0} xs={0}></Grid>
              </Grid>
            </Box>
            <Box paddingY={4}>
              <Grid container spacing={0} alignItems="center" justify="center">
                <Grid xl={5} lg={0} md={0} sm={0} xs={0}></Grid>
                <Grid xl={4} lg={6} md={6} sm={6} xs={12} alignContent="center">
                  <img src={teamwork} alt="website logo" width="100%" />
                </Grid>
                <Grid xl={3} lg={4} md={4} sm={4} xs={12} alignContent="center">
                  <Box>
                    <Box paddingY={1}>
                      <Typography
                        variant="h4"
                        className={classes.descriptionTitle}
                      >
                        Ceci est le premier point
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      className={classes.descriptionContent}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam sed ipsum ut ante consequat consequat. Quisque
                      laoreet sem vitae nunc dignissim porta. Vestibulum
                      lobortis tortor in blandit convallis. Proin tincidunt eros
                      quis erat tristique, eu lacinia nibh interdum. Suspendisse
                      a tellus nibh. Cras nec ornare elit. Aliquam erat
                      volutpat. Proin magna ipsum, hendrerit non odio vel,
                      pharetra vulputate odio.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section> */}
      <section
        id="supportAvailable"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Box paddingY={6}>
          <Container maxWidth="lg">
            <Box py={2}>
              <Typography variant="h4" align="center">
                Disponible à présent sur...
              </Typography>
            </Box>
            <Box pY={4}>
              <Grid container spacing={0} alignItems="center" justify="center">
                <Grid xs={2} align="center">
                  <img src={spotify} />
                  <Typography variant="body2">(bientôt)</Typography>
                </Grid>
                <Grid xs={2} align="center">
                  <img src={youtube} />
                  <Typography variant="body2">(bientôt)</Typography>
                </Grid>
                <Grid xs={2} align="center">
                  <img src={deezer} />
                  <Typography variant="body2">(bientôt)</Typography>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>
      <section
        id="partnership"
        style={{ backgroundColor: "#1f1959" }}
        className={classes.whiteText}
      >
        <Box paddingY={6}>
          <Container maxWidth="lg">
            <Typography variant="h3">Envie d'un partenariat?</Typography>
            <Typography variant="body2" align="justify">
              Vous pouvez nous contacter en envoyant un mail à trcklst.esgi@gmail.com
            </Typography>
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
                      <img src={ticks} />
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
                      <img src={ticks}></img>
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
                      <img src={ticks}></img>
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
                      <img src={ticks}></img>
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
                      <img src={ticks}></img>
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
                        <img src={ticks} />
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
                        <img src={ticks}></img>
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
                        <img src={ticks}></img>
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
                        <img src={ticks}></img>
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
                        <img src={ticks}></img>
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
