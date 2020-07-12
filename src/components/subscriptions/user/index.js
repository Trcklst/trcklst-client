import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Subscriptions } from "../../../services/subscriptions";

import { MTable } from "../../common/MTable";
import {
  Link
} from "react-router-dom";
import {NEWSUBSCRIPTION} from "../../../helpers/route-constant";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 1220,
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
  links: {
    textAlign: "right"
  }
});

export const MySubscriptions = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const optionTable = {
    columns: [
      { title: "Date", field: "date" },
      { title: "Prix", field: "price" },
      { title: "Facture", field: "invoice" }
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
      const data = await Subscriptions.mine();
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;
      
      setData(jsonData.billingItems);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <h2 className={classes.subtitle}>Abonnements</h2>
        <h1 className={classes.title}>Mes abonnements</h1>
      </div>
      <div className={classes.links}>
        <Link to={NEWSUBSCRIPTION} className={classes.linkNewSubscription}>
            Nouvel abonnement
        </Link>
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
