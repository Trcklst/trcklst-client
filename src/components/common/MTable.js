import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100vw - 40px)",
    },
    "& > div > div:nth-of-type(1)": {
      display: "none",
    },
  },
}));
export const MTable = (props) => {
  const {
    optionTable,
    data,
    totalCount,
    onChangeRowsPerPage,
    onOrderChange,
    onChangePage,
    onRowClick,
    onSearchChange,
  } = props;
  const classes = useStyles();

  const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
  };

  return (
    <section className={classes.root}>
      <MaterialTable
        {...props}
        title={optionTable.title ? optionTable.title : ""}
        columns={optionTable.columns}
        icons={tableIcons}
        data={data}
        totalCount={totalCount}
        onChangeRowsPerPage={onChangeRowsPerPage}
        onOrderChange={onOrderChange}
        onChangePage={onChangePage}
        onRowClick={onRowClick}
        onSearchChange={onSearchChange}
        options={{
          ...optionTable.options,
          cellStyle: {
            maxWidth: 178,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
        }}
        localization={{
          body: {
            emptyDataSourceMessage: "Aucune donnée à afficher",
            addTooltip: "Ajouter",
            deleteTooltip: "Supprimer",
            editTooltip: "Modifier",
            filterRow: {
              filterTooltip: "Filtre",
            },
            editRow: {
              deleteText: "Voulez-vous vraiment supprimer cette ligne ?",
              cancelTooltip: "Annuler",
              saveTooltip: "Sauvegarder",
            },
          },
          grouping: { placeholder: "Glisser les en-têtes" },
          header: { actions: "Actions" },
          pagination: {
            labelDisplayedRows: "{from}-{to} de {count}",
            labelRowsSelect: "Lignes",
            labelRowsPerPage: "Lignes par page:",
            firstAriaLabel: "Première page",
            firstTooltip: "Première page",
            previousAriaLabel: "Page précédente",
            previousTooltip: "Page précédente",
            nextAriaLabel: "Page suivante",
            nextTooltip: "Page suivante",
            lastAriaLabel: "Dernière page",
            lastTooltip: "Dernière page",
          },
          toolbar: {
            addRemoveColumns: "Ajouter ou supprimer des colonnes",
            nRowsSelected: "{0} ligne(s) sélectionnée(s)",
            showColumnsTitle: "Afficher les colonnes",
            showColumnsAriaLabel: "Afficher les colonnes",
            exportTitle: "Exporter",
            exportAriaLabel: "Exporter",
            exportName: "Exporter en CSV",
            searchTooltip: "Rechercher",
            searchPlaceholder: "Rechercher",
          },
        }}
      ></MaterialTable>
    </section>
  );
};
