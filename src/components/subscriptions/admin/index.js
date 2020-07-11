import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

import { MTable } from "../../common/MTable";

const useStyles = makeStyles({
  root: {
    padding: 20,
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

export const Subscriptions = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const optionTable = {
    columns: [
      { title: "Type", field: "type" },
      { title: "Date", field: "createdAt" },
    ],
    options: {
      sorting: false,
      pageSizeOptions: [10, 15, 20],
      pageSize: 10,
      search: false,
      actionsColumnIndex: -1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      setData([]);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <h2 className={classes.subtitle}>Abonnements</h2>
        <h1 className={classes.title}>Liste des abonnements</h1>
      </div>
      <div className={classes.table}>
        <MTable
          optionTable={optionTable}
          data={data}
          totalCount={data.length}
        ></MTable>
      </div>
    </div>
  );
};
