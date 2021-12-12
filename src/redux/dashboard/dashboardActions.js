import axios from "axios";
import { LOGOUT } from "../auth/authTypes";
import { FETCH_DATE_RANGE, FETCH_CHARTS_DATA } from "./dashboardTypes";
import {
  mockPayloadForTable,
  mockPayloadForBar,
  mockPayloadForPie,
} from "./payload";
import { renderNotification } from "../../helpers";
import Axios from "../ApiService";

export const fetchDateRange = () => {
  return async (dispatch) => {
    try {
      const response = await Axios.post("/getDateRange", {
        organization: "DemoTest",
        view: "Auction",
        dateRange: "1491004800000",
      });
      dispatch({ type: FETCH_DATE_RANGE, payload: response.data.result });
    } catch (error) {
      if (error?.response?.status == 401) {
        dispatch({ type: LOGOUT });
        renderNotification("Oops!", "Please Login Again", "warning");
      } else {
        console.log("error", error);
      }
    }
  };
};

export const fetchChartsData = (
  dateRange = {
    startDate: "1493337600000",
    endDate: "1493510400000",
  }
) => {
  return async (dispatch) => {
    try {
      const payloadForTable = {
        ...mockPayloadForTable,
        chartObject: {
          ...mockPayloadForTable.chartObject,
          requestParam: {
            ...mockPayloadForTable.chartObject.requestParam,
            dateRange,
          },
        },
      };
      const payloadForBar = {
        ...mockPayloadForBar,
        chartObject: {
          ...mockPayloadForBar.chartObject,
          requestParam: {
            ...mockPayloadForBar.chartObject.requestParam,
            dateRange,
          },
        },
      };
      const payloadForPie = {
        ...mockPayloadForPie,
        chartObject: {
          ...mockPayloadForPie.chartObject,
          requestParam: {
            ...mockPayloadForPie.chartObject.requestParam,
            dateRange,
          },
        },
      };

      const tableData = Axios.post("/getData", payloadForTable);
      const barData = Axios.post("/getData", payloadForBar);
      const pieData = Axios.post("/getData", payloadForPie);
      const response = await Promise.all([tableData, barData, pieData]);
      dispatch({ type: FETCH_CHARTS_DATA, payload: response });
    } catch (error) {
      if (error?.response?.status == 401) {
        dispatch({ type: LOGOUT });
        renderNotification("Oops!", "Please Login Again", "warning");
      } else {
        console.log("error", error);
      }
    }
  };
};
