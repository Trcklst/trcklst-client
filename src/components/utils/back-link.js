import React from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";

function BackLink({ execute }) {
  function onClick(event) {
    event.preventDefault();
    execute();
  }

  return (
    <Button color="primary" onClick={onClick}>
      <ArrowBackIcon />
    </Button>
  );
}

export default BackLink;
