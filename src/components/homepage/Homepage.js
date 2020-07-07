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
              <Grid container>
                <Grid sm={5}></Grid>
                <Grid
                  sm={4}
                  alignContent="center"
                  alignItems="center"
                  justify="center"
                >
                  <img src={playing} alt="website logo" width="100%" />
                </Grid>
                <Grid
                  sm={3}
                  alignContent="center"
                  alignItems="center"
                  justify="center"
                >
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
              <Grid container>
                <Grid
                  sm={3}
                  alignContent="center"
                  alignItems="center"
                  justify="center"
                >
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
                <Grid
                  sm={4}
                  alignContent="center"
                  alignItems="center"
                  justify="center"
                >
                  <img src={unknown} alt="website logo" width="100%" />
                </Grid>
                <Grid sm={5}></Grid>
              </Grid>
            </Box>
            <Box paddingY={4}>
              <Grid container>
                <Grid sm={5}></Grid>
                <Grid
                  sm={4}
                  alignContent="center"
                  alignItems="center"
                  justify="center"
                >
                  <img src={teamwork} alt="website logo" width="100%" />
                </Grid>
                <Grid
                  sm={3}
                  alignContent="center"
                  alignItems="center"
                  justify="center"
                >
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
      <section id="devices"></section>
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
