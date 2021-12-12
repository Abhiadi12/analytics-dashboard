import React from "react";
import { Redirect } from "react-router-dom";
import { readToken } from "../../helpers/index";

function withRememberme(PageComponent) {
  function IsAuthenticated(props) {
    if (readToken()) return <PageComponent {...props} />;
    else return <Redirect to="/login" />;
  }
  return IsAuthenticated;
}

export default withRememberme;
