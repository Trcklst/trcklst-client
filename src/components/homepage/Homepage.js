import React from "react";
import { useStyles } from "./useStyles";
import { Button, Grid, Typography, Box, Container } from "@material-ui/core";
import playing from "../../images/playing.png";
import unknown from "../../images/unknown.png";
import teamwork from "../../images/teamwork.png";

export const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <section id="header" className={classes.heroImage}>
        <main>
          <Container>
            <Box py={24} px={3}>
              <Typography variant="h1" className={classes.whiteText}>
                Partagez votre musique.
              </Typography>
              <Typography variant="h6" className={classes.whiteText}>
                Soyez sans limites. Trcklst, maintenant disponible.
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
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className={classes.shapeFill}
            ></path>
          </svg>{" "}
        </div>
      </section>
      <section id="maincontent" style={{ backgroundColor: "#F9F9F9" }}>
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
      </section>
      <section id="pricing" className={classes.pricing}>
        <Box py={8} align="center">
          <Typography variant="h4" className={classes.descriptionTitle}>
            Notre plateforme propose deux types d'abonnements pour vous
            satisfaire.
          </Typography>
          <Container>
            <Grid container alignItems="center">
              <Grid sm={5} className={classes.cardPrice}>
                <Typography variant="h4" className={classes.descriptionTitle}>
                  Offre standard
                </Typography>
                <ul>
                  <li className={classes.listItems}>Création de party</li>
                  <li className={classes.listItems}>Nombre d'invités limité</li>
                  <li className={classes.listItems}>
                    Capacité de playlist limité
                  </li>
                  <li className={classes.listItems}>Avec publicité</li>
                  <li className={classes.listItems}>Création de party</li>
                  <li className={classes.listItems}>Nombre d'invités limité</li>
                  <li className={classes.listItems}>
                    Capacité de playlist limité
                  </li>
                  <li className={classes.listItems}>Avec publicité</li>
                </ul>
                <Typography
                  variant="h3"
                  className={classes.descriptionTitle}
                  align="right"
                >
                  25 €
                </Typography>
              </Grid>
              <Grid sm={5} className={classes.cardPrice}>
                <Typography variant="h4" className={classes.descriptionTitle}>
                  Offre premium
                </Typography>
                <ul>
                  <li className={classes.listItems}>Création de party</li>
                  <li className={classes.listItems}>
                    Nombre d'invités illimité
                  </li>
                  <li className={classes.listItems}>
                    Capacité de playlist illimité
                  </li>
                  <li className={classes.listItems}>Sans publicité</li>
                  <li className={classes.listItems}>Création de party</li>
                  <li className={classes.listItems}>
                    Nombre d'invités illimité
                  </li>
                  <li className={classes.listItems}>
                    Capacité de playlist illimité
                  </li>
                  <li className={classes.listItems}>Sans publicité</li>
                </ul>
                <Typography
                  variant="h3"
                  className={classes.descriptionTitle}
                  align="right"
                >
                  50 €
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
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
