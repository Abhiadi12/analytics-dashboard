import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { fetchChartsData } from "../redux/dashboard/dashboardActions";

function MyDatePicker({ handleSignout }) {
  const [value, setValue] = React.useState([null, null]);
  const { startDate, endDate } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(
      fetchChartsData({
        startDate: "" + value[0].valueOf(),
        endDate: "" + value[1].valueOf(),
      })
    );
  };

  React.useEffect(() => {
    if (startDate) {
      setValue([new Date(parseInt(startDate)), new Date(parseInt(endDate))]);
    }
  }, [startDate]);
  if (value[0]) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: "1em" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              minDate={new Date(parseInt(startDate))}
              maxDate={new Date(parseInt(endDate))}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </div>
        <div style={{ marginBottom: "1em" }}>
          <Button
            variant="contained"
            disabled={!Boolean(value[1])}
            onClick={fetchData}
          >
            View Charts
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: "0.5em" }}
            onClick={handleSignout}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  } else {
    return <div>Loading Date Picker...</div>;
  }
}
export default MyDatePicker;
