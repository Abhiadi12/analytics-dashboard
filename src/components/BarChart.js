import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart(props) {
  const data = props;

  const configCreator = () => {
    const labels = [];
    const values = [];
    data?.barData?.data?.result?.data.forEach((record) => {
      labels.push(record.appSiteId);
      values.push(record.impressions_offered);
    });
    return {
      labels,
      datasets: [
        {
          label: "Bar Chart",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: values,
        },
      ],
    };
  };

  return (
    <div style={{ margin: "1em 0" }}>
      <h4>Bar Chart: </h4>
      <Bar
        data={configCreator()}
        options={{
          title: {
            display: true,
            text: "Bar Chart Details",
            fontSize: 16,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default BarChart;
