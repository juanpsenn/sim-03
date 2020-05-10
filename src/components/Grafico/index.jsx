import React, {Component} from "react";
import {Bar} from "react-chartjs-2";
import {Paper} from "@material-ui/core";
import {toFixed} from "../../library/distribuciones";


export default function BarChart(props) {
  const {intervalos} = props;
  const data = {
    labels: intervalos.map(intervalo => {
      return `[${toFixed(intervalo.inf, 4)} ; ${toFixed(intervalo.sup, 4)}]`
    }),
    datasets: [
      {
        label: "FE",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: intervalos.map(intervalo => {
          return intervalo.expectedFreq
        }),
      },
      {
        label: "FO",
        backgroundColor: "rgba(125,9,32,0.8)",
        borderColor: "rgba(255,99,32,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,12,0.4)",
        hoverBorderColor: "rgba(235,99,12,1)",
        data: intervalos.map(intervalo => {
          return intervalo.observedFreq
        }),
      },
    ],
  };

  return (
    <Paper style={{margin: 10, padding: 10}}>
      <div style={{height: 345}}>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </Paper>
  );
}
