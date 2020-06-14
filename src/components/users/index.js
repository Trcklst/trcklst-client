import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import { MTable } from "../common/MTable";
import { Users } from "../../services/users";
import { USERS } from "../../helpers/route-constant";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 1220,
    padding: 15,
    margin: "0 auto",
  },
  title: {
    color: "#263238",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: "-0.06px",
    marginTop: 0,
  },
  subtitle: {
    color: "#546e7a",
    fontSize: 11,
    fontWeight: 500,
    lineHeight: "13px",
    letterSpacing: "0.33px",
    textTransform: "uppercase",
  },
});

export const UsersIndex = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const { push } = useHistory();

  const optionTable = {
    columns: [
      { title: "Email", field: "email" },
      { title: "Nom", field: "lastname" },
      { title: "Prénom", field: "firstname" },
    ],
    options: {
      sorting: false,
      pageSizeOptions: [10, 15, 20],
      pageSize: 10,
      search: false,
      actionsColumnIndex: -1,
    },
  };

  const remove = async (rowData) => {
    const data = await Users.remove(rowData.id);
    const jsonData = await data.json();

    if (data.status !== 200) console.log("error", jsonData);
    console.log("L'utilisteur a été supprimé.");
    push(USERS);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await Users.list();
      const jsonData = await data.json();

      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <h2 className={classes.subtitle}>Utilisateurs</h2>
        <h1 className={classes.title}>Gestion des utilisateurs</h1>
      </div>
      <div className={classes.table}>
        <MTable
          optionTable={optionTable}
          data={data}
          totalCount={data.length}
          actions={[
            {
              icon: "delete",
              tooltip: "Supprimer l'utilisateur",
              onClick: (event, rowData) => remove(rowData),
            },
          ]}
        ></MTable>
      </div>
    </div>
  );
};
