import React from "react";
import "./CustomerReview.css";
import Chart from "react-apexcharts";

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yyyy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-09-05T00:00:00.000Z",
          "2023-09-05T01:30:00.000Z",
          "2023-09-05T02:30:00.000Z",
          "2023-09-05T03:30:00.000Z",
          "2023-09-05T04:30:00.000Z",
          "2023-09-05T05:30:00.000Z",
          "2023-09-05T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };

  return (
    <div className="customerReview">
      <Chart series={data.series} options={data.options} type="area" />
    </div>
  );
};

export default CustomerReview;
