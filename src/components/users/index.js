import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { MTable } from "../common/MTable";
import { Users } from "../../services/users";
import { Modal } from "../common/Modal";
import { fail, success } from "../common/Toast";

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

export const UsersIndex = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState("");

  const optionTable = {
    columns: [{ title: "Email", field: "email" }],
    options: {
      sorting: false,
      pageSizeOptions: [10, 15, 20],
      pageSize: 10,
      search: false,
      actionsColumnIndex: -1,
    },
  };

  const handleClickDelete = (rowData) => {
    setOpen(true);
    setUserId(rowData.id);
  };

  const deleteUser = async () => {
    const dataRemove = await Users.remove(userId);

    if (dataRemove.status !== 200) fail("L'utilisateur n'a pas été supprimé");

    success("L'utilisteur a été supprimé.");

    const tempData = [];
    data.map((value) => {
      return value.id === userId ? "" : tempData.push(value);
    });

    setData(tempData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await Users.list();
      const jsonData = await data.json();

      setData(jsonData.users);
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
              icon: () => <DeleteIcon />,
              tooltip: "Supprimer l'utilisateur",
              onClick: (event, rowData) => handleClickDelete(rowData),
            },
          ]}
        ></MTable>
        <Modal
          title={"Supprimer un utilisateur"}
          content={"Êtes-vous sûr de vouloir supprimer cet utilisateur ?"}
          leftLink={"Annuler"}
          rightLink={"Supprimer"}
          setOpen={setOpen}
          open={open}
          validate={deleteUser}
        />
      </div>
    </div>
  );
};
