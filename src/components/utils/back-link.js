import React from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function BackLink({ execute }) {
  function onClick(event) {
    event.preventDefault();
    execute();
  }

  return (
    <a onClick={onClick}>
      <ArrowBackIcon />
    </a>
  );
}

export default BackLink;
