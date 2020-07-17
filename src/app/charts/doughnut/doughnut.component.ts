import { Component, OnInit } from "@angular/core";
import { Chart } from "node_modules/chart.js";

@Component({
  selector: "app-doughnut",
  templateUrl: "./doughnut.component.html",
  styleUrls: ["./doughnut.component.css"],
})
export class DoughnutComponent implements OnInit {
  myDoughnutChart;
  colors;
  data;
  color;
  constructor() {
    this.colors = {
      red: "rgba(255, 99, 132, 0.2)",
      orange: "rgba(54, 162, 235, 0.2)",
      yellow: "rgba(255, 206, 86, 0.2)",
      green: "rgba(75, 192, 192, 0.2)",
      blue: "rgba(153, 102, 255, 0.2)",
    };
  }

  ngOnInit() {
    this.myDoughnutChart = new Chart("myChart", {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [60, 40, 50, 25, 90],
            backgroundColor: [
              this.colors.red,
              this.colors.orange,
              this.colors.yellow,
              this.colors.green,
              this.colors.blue,
            ],
            label: "Dataset 1",
          },
        ],
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
      },
      options: {
        responsive: true,
        legend: {
          display: true,
          position: "left",
        },
        title: {
          display: false,
          text: "Chart.js Doughnut Chart",
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        events: ["click"],
      },
    });
  }

  showData(evt: any) {
    this.data = this.myDoughnutChart.getElementsAtEvent(evt);
    if (this.data[0] === undefined) {
      return;
    } else {
      this.color = this.data[0]._model.backgroundColor;
      for (const prop in this.colors) {
        if (this.color === `${this.colors[prop]}`) {
          console.log(prop);
          return prop;
        }
      }
    }
  }
}
