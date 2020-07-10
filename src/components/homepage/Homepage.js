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
                Partagez votre musique.
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
      </section>
      <section id="maincontent" style={{ backgroundColor: "#F9F9F9" }}>
        <Box paddingY={6} align="center">
          <Container maxWidth="lg">
            <Box paddingY={2}>
              <Typography variant="h3">Comment marche Trcklst? 👀</Typography>
            </Box>
            <Box paddingY={6} align="center">
              <Grid container>
                <Grid
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={12}
                  style={{
                    height: "200px",
                    backgroundColor: "#1f1959",
                    color: "white",
                  }}
                >
                  <Box paddingY={3}>
                    <Typography variant="h4">Créez</Typography>
                  </Box>
                  <Typography variant="body2">
                    ...un salon/une partie
                  </Typography>
                </Grid>
                <Grid
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={12}
                  style={{ height: "200px" }}
                >
                  <Box paddingY={3}>
                    <Typography variant="h4">Invitez</Typography>
                  </Box>
                  <Typography variant="body2">...vos amis</Typography>
                </Grid>
                <Grid
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={12}
                  style={{
                    height: "200px",
                    backgroundColor: "#1f1959",
                    color: "white",
                  }}
                >
                  <Box paddingY={3}>
                    <Typography variant="h4">Recherchez</Typography>
                  </Box>
                  <Typography variant="body2">
                    ...des 🎵 sur la plateforme musicale de votre choix
                  </Typography>
                </Grid>
                <Grid
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={12}
                  style={{ height: "200px" }}
                >
                  <Box paddingY={3}>
                    <Typography variant="h4">Ajoutez</Typography>
                  </Box>
                  <Typography variant="body2">
                    ...à son salon des musiques
                  </Typography>
                </Grid>
                <Grid
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={12}
                  style={{
                    height: "200px",
                    backgroundColor: "#1f1959",
                    color: "white",
                  }}
                >
                  <Box paddingY={3}>
                    <Typography variant="h4">Votez</Typography>
                  </Box>
                  <Typography variant="body2">
                    ...pour la musique préférée afin qu'elle puisse être lu en
                    premier.
                  </Typography>
                </Grid>
                <Grid
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={12}
                  style={{ height: "200px" }}
                >
                  <Box paddingY={3}>
                    <Typography variant="h4">Profitez</Typography>{" "}
                  </Box>
                  <Typography variant="body2">
                    ...de la musique avec vos amis sans vous embetez à vous
                    connecter
                  </Typography>
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
                  <img src={spotify} />
                  <Typography
                    variant="subtitle1"
                    style={{ letterSpacing: "2px" }}
                  >
                    bientôt
                  </Typography>
                </Grid>
                <Grid xs={2} align="center">
                  <img src={youtube} />
                  <Typography
                    variant="subtitle1"
                    style={{ letterSpacing: "2px" }}
                  >
                    bientôt
                  </Typography>
                </Grid>
                <Grid xs={2} align="center">
                  <img src={deezer} />
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
        id="partnership"
        style={{ backgroundColor: "#1f1959" }}
        className={classes.whiteText}
      >
        <Box paddingY={6}>
          <Container maxWidth="lg">
            <Typography variant="h3">
              Inscrivez-vous à notre newsletter!
            </Typography>
            <Typography variant="body2" align="justify">
              Une publication de 1994 du magazine « Before & After » décrit
              l'expression « Lorem ipsum ... » comme une version latine peu
              fidèle d'un passage d'un traité de théorie éthique, de Finibus
              Bonorum et Malorum, écrit par Cicéron en 45 avant Jésus-Christ. Le
              passage « Lorem ipsum ... » est tiré du texte « Neque porro
              quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit ... » qui peut se traduire par « Personne n'aime la
              douleur en elle-même, ne la recherche et ne la souhaite, tout
              simplement parce qu'il s'agit de la douleur... ».
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
