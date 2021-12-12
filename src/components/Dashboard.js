import React from "react";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { renderNotification } from "../helpers";
import { Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../redux/auth/authTypes";
import { fetchDateRange } from "../redux/dashboard/dashboardActions";
import MyDatePicker from "./MyDatePicker";
import DisplayCharts from "./DisplayCharts";

const useStyles = makeStyles(() => ({
  root: {
    width: "90%",
    height: "auto",
  },
}));
function Dashboard() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { userInfo } = useSelector((state) => state.auth.info);
  const handleSignout = () => {
    dispatch({ type: LOGOUT });
    renderNotification("Success!", "Logout Successfully", "success");
  };

  React.useEffect(() => {
    if (!(userInfo == null)) dispatch(fetchDateRange());
  }, []);
  if (userInfo == null) return <Redirect to="/login" />;
  return (
    <Paper className={classes.root}>
      <div>
        <h4>Dashboard Component</h4>
        <div>
          <MyDatePicker handleSignout={handleSignout} />
          <DisplayCharts />
        </div>
        {/* <Button
          variant="contained"
          onClick={() => {
            dispatch({ type: LOGOUT });
            renderNotification("Success!", "Logout Successfully", "success");
          }}
        >
          Logout
        </Button> */}
      </div>
    </Paper>
  );
}

export default Dashboard;
