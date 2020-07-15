import React, { useContext } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  Container,
  Chip,
} from "@material-ui/core";
import { LOGIN, POLICY } from "../../helpers/route-constant";
import { Link } from "react-router-dom";
import { useStyles } from "./useStyles";
import { SessionContext } from "../../context/session";

import profitez from "../../images/landing/maincontent/profitez.png";
import recherchez from "../../images/landing/maincontent/recherchez.png";
import invitez from "../../images/landing/maincontent/invitez.png";
import creez from "../../images/landing/maincontent/creez.png";
import votez from "../../images/landing/maincontent/votez.png";
import ajoutez from "../../images/landing/maincontent/ajoutez.png";
import spotify from "../../images/landing/platformes/spotify.png";
import deezer from "../../images/landing/platformes/deezer.png";
import youtube from "../../images/landing/platformes/youtube.png";
import ticks from "../../images/landing/ticksPricing.png";
import logo from "../../images/logo/logo_white2.png";

export const Homepage = () => {
  const classes = useStyles();
  const { session } = useContext(SessionContext);

  return (
    <>
      <section id="header" className={classes.heroImage}>
        <main>
          <Container maxWidth="lg">
            <Box paddingY={15} paddingX={3} className={classes.whiteText}>
              <Grid item xs={6} sm={4} md={3} lg={3} xl={3}>
                <Box py={3}>
                  <img src={logo} alt="logo" width="100%" />
                </Box>
              </Grid>
              <Typography variant="h2">Composez votre playlist.</Typography>
              <Typography variant="h6">
                Soyez sans limites. Trcklst, maintenant disponible.
              </Typography>
              {session && !session.auth && (
                <Box paddingY={5}>
                  <Link to={LOGIN} className={classes.link}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.customButton}
                    >
                      Rejoignez notre platforme{"  "}
                      <span role="img" aria-label="music">
                        🎵
                      </span>
                    </Button>
                  </Link>
                </Box>
              )}
            </Box>
          </Container>
        </main>
      </section>
      <section
        id="maincontent"
        className={`${classes.purpleText} ${classes.whiteBg}`}
      >
        <Box paddingY={6} align="center">
          <Container maxWidth="lg">
            <Box paddingY={3}>
              <Typography variant="h4">
                <span role="img" aria-label="thinkEmoji">
                  🤔
                </span>
              </Typography>
              <Typography variant="h3" className={classes.boldText}>
                Comment ça marche ?
              </Typography>
            </Box>
            <Box paddingX={3}>
              <Grid container spacing={0} alignItems="center" justify="center">
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  className={classes.stepsBox}
                >
                  <Box padding={2}>
                    <Box paddingY={3} height="200px">
                      <img src={creez} alt="boxPicture" width="100%" />
                    </Box>
                    <Typography variant="h6" className={classes.boldText}>
                      Créez
                    </Typography>
                    <Box paddingX={2}>
                      <Typography variant="body2" align="justify">
                        ...un salon. Vous avez la possibilité de créer autant de
                        salons que vous le souhaitez afin de gérer la musique de
                        votre{" "}
                        <span role="img" aria-label="music">
                          🎉
                        </span>{" "}
                        . Ainsi, la musique sera entre vos mains.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  className={classes.stepsBox}
                >
                  <Box padding={2}>
                    <Box paddingY={3} height="200px">
                      <img src={invitez} alt="boxPicture" width="100%" />
                    </Box>
                    <Typography variant="h6" className={classes.boldText}>
                      Invitez
                    </Typography>
                    <Box paddingX={2}>
                      <Typography variant="body2" align="justify">
                        ...vos{" "}
                        <span role="img" aria-label="music">
                          👨‍🎤
                        </span>{" "}
                        dans le but rejoindre votre salon. Envoyez leur le lien
                        d'invitation, et bénéficiez des fonctionnalités que
                        propose Trcklst pour mettre autant de musiques que vous
                        le souhaitez.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  className={classes.stepsBox}
                >
                  <Box padding={2}>
                    <Box paddingY={3} height="200px">
                      <img src={recherchez} alt="boxPicture" width="100%" />
                    </Box>
                    <Typography variant="h6" className={classes.boldText}>
                      Recherchez
                    </Typography>
                    <Box paddingX={2}>
                      <Typography variant="body2" align="justify">
                        ...des{" "}
                        <span role="img" aria-label="music">
                          🎵
                        </span>{" "}
                        sur la plateforme musicale de votre choix. Liez votre
                        compte à Trcklst ainsi que votre platforme de streaming
                        musicale préférée.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={0} alignItems="center" justify="center">
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  className={classes.stepsBox}
                >
                  <Box padding={2}>
                    <Box paddingY={3} height="200px">
                      <img src={ajoutez} alt="boxPicture" width="100%" />
                    </Box>
                    <Typography variant="h6" className={classes.boldText}>
                      Ajoutez
                    </Typography>
                    <Box paddingX={2}>
                      <Typography variant="body2" align="justify">
                        ...à votre salon des musiques. Notre système de{" "}
                        <span role="img" aria-label="music">
                          🔍
                        </span>{" "}
                        permet de rechercher à travers des millons de musiques
                        fera ainsi votre bonheur. Ajoutez les à votre playlist
                        en illimité grâce à Trcklst.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  className={classes.stepsBox}
                >
                  <Box padding={2}>
                    <Box paddingY={3} height="200px">
                      <img src={votez} alt="boxPicture" width="100%" />
                    </Box>
                    <Typography variant="h6" className={classes.boldText}>
                      Votez
                    </Typography>
                    <Box paddingX={2}>
                      <Typography variant="body2" align="justify">
                        ...pour la musique préférée afin qu'elle puisse être lue
                        en premier. Une chanson dans votre salon que vous{" "}
                        <span role="img" aria-label="music">
                          💖
                        </span>{" "}
                        ? Parlez en avec vos amis afin qu'elle puisse être
                        remonté en haut de liste!
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  className={classes.stepsBox}
                >
                  <Box padding={2}>
                    <Box paddingY={3} height="200px">
                      <img src={profitez} alt="boxPicture" width="100%" />
                    </Box>
                    <Typography variant="h6" className={classes.boldText}>
                      Profitez
                    </Typography>
                    <Box paddingX={2}>
                      <Typography variant="body2" align="justify">
                        ...de la musique avec vos amis en créant la playlist de
                        vos{" "}
                        <span role="img" aria-label="music">
                          ✨
                        </span>{" "}
                        !
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>
      <section id="supportAvailable" className={classes.purpleBg}>
        <Box paddingY={6} align="center" className={classes.whiteText}>
          <Container maxWidth="lg">
            <Box paddingY={3}>
              <Typography variant="h4">
                <span role="img" aria-label="thinkEmoji">
                  🎤
                </span>
              </Typography>
              <Typography variant="h3" className={classes.boldText}>
                Nos platformes
              </Typography>
            </Box>
            <Box paddingX={3}>
              <Grid container spacing={0} alignItems="center" justify="center">
                <Grid item xs={12} sm={2} md={2} lg={2} xl={2} align="center">
                  <img src={spotify} alt="spotifyLogo" width="40%" />
                  <Box paddingY={1}>
                    <Chip size="small" label="bientôt" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2} xl={2} align="center">
                  <img src={youtube} alt="youtubeLogo" width="40%" />
                  <Box paddingY={1}>
                    <Chip size="small" label="disponible" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2} xl={2} align="center">
                  <img src={deezer} alt="deezerLogo" width="40%" />
                  <Box paddingY={1}>
                    <Chip size="small" label="bientôt" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>
      <section id="pricing" className={classes.whiteBg}>
        <Box paddingY={6} align="center">
          <Container maxWidth="lg">
            <Box paddingY={2}>
              <Typography variant="h4">
                <span role="img" aria-label="thinkEmoji">
                  🤑
                </span>
              </Typography>
              <Typography
                variant="h3"
                className={`${classes.purpleText} ${classes.boldText}`}
              >
                Deux types d'abonnements pour vous satisfaire.
              </Typography>
            </Box>
            <Grid container spacing={0} alignItems="center" justify="center">
              <Grid
                item
                xl={3}
                lg={3}
                md={3}
                sm={4}
                xs={12}
                className={`${classes.pricingBox} ${classes.whiteBg}`}
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
                    <Box mr={2}>
                      <Grid item xl={1} lg={1} md={1} sm={1} xs={3}>
                        <img src={ticks} alt="ticksLogo" />
                      </Grid>
                    </Box>
                    <Grid
                      item
                      xl={8}
                      lg={8}
                      md={6}
                      sm={6}
                      xs={6}
                      style={{ alignSelf: "center" }}
                    >
                      <Typography variant="body2" align="left">
                        Création de party avec 10 personnes maximum
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
                    <Box mr={2}>
                      <Grid item xl={1} lg={1} md={1} sm={1} xs={3}>
                        <img src={ticks} alt="ticksLogo"></img>
                      </Grid>
                    </Box>
                    <Grid
                      item
                      xl={8}
                      lg={8}
                      md={6}
                      sm={6}
                      xs={6}
                      style={{ alignSelf: "center" }}
                    >
                      <Typography variant="body2" align="left">
                        1 playlist par jour
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid
                item
                xl={3}
                lg={3}
                md={3}
                sm={4}
                xs={12}
                className={`${classes.pricingBox} ${classes.purpleBg} ${classes.whiteText}`}
              >
                <Box paddingY={3}>
                  <Typography variant="body2">Premium</Typography>
                  <Typography variant="h2">3,99€</Typography>
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
                      <Box mr={2}>
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={3}>
                          <img src={ticks} alt="ticksLogo" />
                        </Grid>
                      </Box>
                      <Grid
                        item
                        xl={8}
                        lg={8}
                        md={6}
                        sm={6}
                        xs={6}
                        style={{ alignSelf: "center" }}
                      >
                        <Typography variant="body2" align="left">
                          Création de party avec 25 personnes maximum
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
                      <Box mr={2}>
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={3}>
                          <img src={ticks} alt="ticksLogo"></img>
                        </Grid>
                      </Box>
                      <Grid
                        item
                        xl={8}
                        lg={8}
                        md={6}
                        sm={6}
                        xs={6}
                        style={{ alignSelf: "center" }}
                      >
                        <Typography variant="body2" align="left">
                          Nombre illimités de playlist
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                </Box>
              </Grid>
              <Grid
                item
                xl={3}
                lg={3}
                md={3}
                sm={4}
                xs={12}
                className={`${classes.pricingBox} ${classes.blackBg} ${classes.whiteText}`}
              >
                <Box paddingY={3}>
                  <Typography variant="body2">Professionnel</Typography>
                  <Typography variant="h2">9,99€</Typography>
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
                      <Box mr={2}>
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={3}>
                          <img src={ticks} alt="ticksLogo" />
                        </Grid>
                      </Box>
                      <Grid
                        item
                        xl={8}
                        lg={8}
                        md={6}
                        sm={6}
                        xs={6}
                        style={{ alignSelf: "center" }}
                      >
                        <Typography variant="body2" align="left">
                          Création de party sans limite de personnes
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
                      <Box mr={2}>
                        <Grid item xl={1} lg={1} md={1} sm={1} xs={3}>
                          <img src={ticks} alt="ticksLogo"></img>
                        </Grid>
                      </Box>
                      <Grid
                        item
                        xl={8}
                        lg={8}
                        md={6}
                        sm={6}
                        xs={6}
                        style={{ alignSelf: "center" }}
                      >
                        <Typography variant="body2" align="left">
                          Nombre illimités de playlist
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
        <Box paddingY={6}>
          <Container>
            <Typography
              variant="body2"
              composant="p"
              className={classes.whiteText}
              align="center"
            >
              © Tous droits réservés - Trcklst | 2020
            </Typography>
            <Typography variant="body2" align="center">
              <Link to={POLICY} className={classes.whiteText}>
                Mentions légales
              </Link>
            </Typography>
          </Container>
        </Box>
      </section>
    </>
  );
};
