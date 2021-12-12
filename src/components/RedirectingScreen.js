import React from "react";

function RedirectingScreen(props) {
  const { message, target } = props;
  return (
    <div>
      <h4>{`${message} >>> ${target}`}</h4>
    </div>
  );
}

export default RedirectingScreen;
