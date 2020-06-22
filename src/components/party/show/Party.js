import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Grid,
  Container,
  Typography,
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  Box,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { Party } from "../../../services/party";
import { Music } from "./Music";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1220,
    padding: 15,
    margin: "0 auto",
  },
  head: {
    display: "flex",
  },
  backgroundPlaylist: {
    border: "1px solid #000",
    width: 245,
    [theme.breakpoints.down("xs")]: {
      width: 200,
    },
  },
  mainTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  subtitle: {
    margin: 0,
    color: "#c3c3c3",
    fontSize: 14,
    fontWeight: "100",
    textTransform: "uppercase",
  },
  title: {
    fontSize: 40,
    margin: 0,
    padding: "2px 0 15px 0",
  },
  createdBy: {
    margin: 0,
    color: "#9c9c9c",
    paddingBottom: 20,
  },
  author: {
    color: "#252525",
  },
  buttonState: {
    width: 125,
    height: 35,
    borderRadius: 25,
  },
  headPlaylist: {
    color: "#c3c3c3",
    textTransform: "uppercase",
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
  },
  people: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    color: "#40eadb",
  },
}));

export const PartyShow = () => {
  const classes = useStyles();
  const location = useLocation();
  const endpoint = location.pathname.split("/").pop();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Party.show(endpoint);
      const jsonData = await data.json();

      console.log(data);
      console.log(jsonData);

      if (data.status !== 200) throw jsonData;

      setData(jsonData);
    };
    fetchData();
  }, [endpoint]);

  return (
    <>
      <Container>
        <Box justifyContent="center" mx="auto" py={3}>
          <header>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Recherche..
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </header>
        </Box>
        <main>
          <section id="top">
            <Typography variant="h4" component="h1">
              {data.name}
            </Typography>
            <Typography variant="body2" component="span">
              Playlist de LAVAN
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              4 titres
            </Typography>
          </section>
          <section id="main">
            <Box p={5}>
              <Grid xs={12}>
                <Music
                  icon="https://i.ytimg.com/vi/QHuo2pIyTH8/maxresdefault.jpg"
                  title="Booba - Petite Fille (Clip Officiel)"
                />
                <Music
                  icon="https://i.ytimg.com/vi/QHuo2pIyTH8/maxresdefault.jpg"
                  title="Booba - Petite Fille (Clip Officiel)"
                />
                <Music
                  icon="https://i.ytimg.com/vi/QHuo2pIyTH8/maxresdefault.jpg"
                  title="Booba - Petite Fille (Clip Officiel)"
                />
                <Music
                  icon="https://i.ytimg.com/vi/QHuo2pIyTH8/maxresdefault.jpg"
                  title="Booba - Petite Fille (Clip Officiel)"
                />
              </Grid>
            </Box>
          </section>
        </main>
      </Container>
    </>
  );
};
