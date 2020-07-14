import React from "react";
import { useHistory } from "react-router-dom";

import { NOTFOUND } from "../../helpers/route-constant";

export const PartyUnauthorized = (props) => {
  const { push } = useHistory();

  if (props.location.state !== undefined) {
    const { idParty } = props.location.state;

    const handleClick = () => {
      push(`/party/${idParty}`);
    };

    return <div onClick={() => handleClick()}>Tas recharger sale con</div>;
  } else {
    push(NOTFOUND);
  }
};
