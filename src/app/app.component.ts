import { Component } from '@angular/core';
declare var CanvasJS:any; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rangeBarGraphDemoApp';
  ngOnInit(){
    let chart = new CanvasJS.Chart("chartContainer",
    {
      backgroundColor: "#F5DEB3",
      theme:"",
      title: {
        text: "Logs"
      },
      
      axisY: {
        includeZero: false,
        crosshair: {
          enabled: true,
        }
      },
      axisX: {
        stripLines: [
          {
           value:4,
           color: "black",
           thickness:2,
          },
          {
            value:8,
            color: "black",
            thickness:2
          },
          {
            value:12,
            color: "black",
            thickness:2
          }
        ]
      },
      data: [
      {
        type: "rangeBar",
        yValueFormatString: "#0.## °C",
        markerBorderThickness: 1,
        dataPoints: [
          {x:4, label:" "},
          {x:3, y:[0,1.4], color: "LightSeaGreen", markerBorderColor: "black", label:" "},
          {x:3, y:[1.8,3.1], color: "#008080", markerBorderColor: "#000000", label:" "},
          {x:3, y:[3.1,4.7], color: "LightSeaGreen", markerBorderColor: "#000000", label:" "},
          {x:3, y:[4.9,5.2], color: "#008080", markerBorderColor: "#000000"},
          {x:2, y:[1.1,1.3], color: "#7F3E71", markerBorderColor: "#000000"},
          {x:2, y:[3.1,3.3], color: "#AB497A", markerBorderColor: "#000000", label:"Application2"},
          {x:2, y:[5.3,5.5], color: "#7F3E71", markerBorderColor: "#000000", label:""},
          {x:1, y:[2,2.2], color: "#bf4c41", markerBorderColor: "#000000", label:" "},
          {x:1, y:[3,3.2], color: "#660000", markerBorderColor: "#000000", label:" "},
          {x:1, y:[11.6,11.8], color: "#bf4c41", markerBorderColor: "#000000", label:" "},
          {x:7, y:[0,2], color: "LightSeaGreen", markerBorderColor: "#000000", label:" "},
          {x:7, y:[2,6], color: "#008080", markerBorderColor: "#000000"},
          {x:7, y:[6,10], color: "LightSeaGreen", markerBorderColor: "#000000"},
          {x:7, y:[10,12], color: "#008080", markerBorderColor: "#000000"},
          {x:6, y:[0,1], color: "#7F3E71", markerBorderColor: "#000000"},
          {x:6, y:[3,4], color: "#AB497A", markerBorderColor: "#000000", label:"Application1"},
          {x:6, y:[7.2,7.4], color: "#7F3E71", markerBorderColor: "#000000"},
          {x:5, y:[2,3], color: "#bf4c41", markerBorderColor: "#000000", label:" "},
          {x:5, y:[3,4], color: "#660000", markerBorderColor: "#000000"},
          {x:5, y:[11,12], color: "#bf4c41", markerBorderColor: "#000000"},
        ]
      }
      ]
    });
    chart.render(); 
  }
}
