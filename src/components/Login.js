import React from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import useInput from "../custom-hooks/useInput";
import RedirectingScreen from "./RedirectingScreen";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/auth/authActions";
import { renderNotification } from "../helpers";
import { CLEAR_MSG } from "../redux/auth/authTypes";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    padding: "1em",
    alignItems: "space-around",
    "& .MuiButton-root": {
      marginTop: "1em",
    },
    "& .MuiTypography-root": {
      color: "blue",
      display: "inline",
    },
  },
  mb1: {
    marginBottom: "1em",
  },
  rememberMeSection: {
    textAlign: "left",
    marginLeft: "-20px",
  },
}));

function Login() {
  const classes = useStyles();
  const router = useHistory();
  const [rememberMe, setRememberMe] = React.useState(false);
  const {
    info: { loading, userInfo, errorMsg },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    value: emailValue,
    handleChange: handleEmailChange,
    error: emailError,
  } = useInput("");

  const {
    value: passwordValue,
    handleChange: handlePasswordChange,
    error: passwordError,
  } = useInput("");

  const handleOnSubmit = () => {
    const payload = {
      email: emailValue,
      password: passwordValue,
      rememberMe,
    };
    dispatch(fetchUser(payload));
  };

  const btnDisableChecker = () => {
    return !(
      !Boolean(emailError["email"]) &&
      Boolean(emailValue) &&
      !Boolean(passwordError["password"]) &&
      Boolean(passwordValue)
    );
  };

  React.useEffect(() => {
    if (errorMsg) {
      renderNotification("Oops!", errorMsg, "warning");
      setTimeout(() => dispatch({ type: CLEAR_MSG }), 3000);
    }
  }, [errorMsg]);

  // React.useEffect(() => {
  //   console.log("how many", userInfo);
  //   if (userInfo?.token) router.push("/dashboard");
  // }, [userInfo?.token]);

  if (userInfo?.token) {
    router.push("/dashboard");
    return <RedirectingScreen msg="Please Wait..." target="dashboard" />;
  }
  return (
    <div>
      <p className={classes.mb1}>Dashboard Login Component</p>
      <Paper className={classes.root}>
        <TextField
          id="email"
          name="email"
          label={emailValue ? "" : "email"}
          variant="standard"
          value={emailValue}
          onChange={handleEmailChange}
          error={emailError["email"]}
          helperText={emailError["email"] ? emailError["email"] : ""}
        />
        <TextField
          id="password"
          name="password"
          label={passwordValue ? "" : "password"}
          variant="standard"
          value={passwordValue}
          onChange={handlePasswordChange}
          type="password"
          error={passwordError["password"]}
          helperText={
            passwordError["password"] ? passwordError["password"] : ""
          }
        />
        <div className={classes.rememberMeSection}>
          <Checkbox
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography variant="subtitle1"> Remember Me </Typography>
        </div>

        <Button
          variant="contained"
          onClick={handleOnSubmit}
          disabled={loading || btnDisableChecker()}
        >
          Submit
        </Button>
      </Paper>
    </div>
  );
}

export default Login;
