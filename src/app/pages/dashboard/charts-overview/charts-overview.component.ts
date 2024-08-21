import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from '../dashboard.component';

@Component({
  selector: 'app-charts-overview',
  templateUrl: './charts-overview.component.html',
  styleUrls: ['./charts-overview.component.scss']
})
export class ChartsOverviewComponent {
  @ViewChild("chartone") chartone!: ChartComponent;
  public chartOptionsone!: Partial<ChartOptions>;

  @ViewChild("charttwo") charttwo!: ChartComponent;
  public chartOptionstwo!: Partial<ChartOptions>;

  @ViewChild("chartthree") chartthree!: ChartComponent;
  public chartOptionsthree!: Partial<ChartOptions>;
  
  public chartOptionsfour!: Partial<ChartOptions>;

  constructor(){

    this.chartOptionsone = {
      series: [
        {
          name: "بالاترین ها 1403",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "پایین ترین ها 1403",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "میانگین ثبت نام های سایت در ماه",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر"],
        title: {
          text: "ماه"
        }
      },
      yaxis: {
        title: {
          text: "ثبت نام ها "
        },
        min: 5,
        max: 40
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };

    this.chartOptionstwo = {
      series: [
        {
          name: "تعداد کلیک های سایت",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "1403 - میزان کاربران ثبت نامی در ماه",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "فروردین",
          "اردیبهتش",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر ",
          "ابان",
          "اذر"
        ]
      }
    };

    this.chartOptionsthree = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 350,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.chartOptionsfour = {
      series: [
        {
          name: "Bubble1",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Bubble2",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Bubble3",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Bubble4",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        }
      ],
      chart: {
        height: 350,
        type: "bubble"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.8
      },
      title: {
        text: "Simple Bubble Chart"
      },
      xaxis: {
        tickAmount: 12,
        type: "category"
      },
      yaxis: {
        max: 70
      }
    };

  }



  public generateData(baseval:any, count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
 
  ngOnInit(): void {

  }
}
