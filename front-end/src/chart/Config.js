import AmCharts from "@amcharts/amcharts3-react";

const Configuration = {
  "type": "serial",
  "title": "abc",
  "theme": "light",
  "marginRight": 40,
  "marginLeft": 100,
  "autoMarginOffset": 20,
  "mouseWheelZoomEnabled": true,
  "legend": {
    "markerSize": 50,
    "markerLabelGap": 20,
    "rollOverGraphAlpha": .2,
    "position": "top"
  },

  // Axes value
  "valueAxes": [{
    "id": "v1",
    "axisColor": "#FF6600",
    "axisThickness": 2,
    "axisAlpha": 1,
    "position": "left"
  }, {
    "id": "v2",
    "axisColor": "#FCD202",
    "axisThickness": 2,
    "axisAlpha": 1,
    "position": "right"
  }],

  // Balloon confif
  "balloon": {
    "borderThickness": 1,
    "shadowAlpha": 0
  },

  // No. of Graphs shown
  // In this case its 2 "ids": g1 and g2
  "graphs": [{
    "id": "g1",
    "balloon": {
      "drop": false,
      "adjustBorderColor": false,
      "color": "#ffffff"
    },
    "valueAxis": "v1",
    "valueField": "High-1",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "title": "",
    "useLineColorForBulletBorder": true,
    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
  },
  {
    "id": "g2",
    "balloon": {
      "drop": false,
      "adjustBorderColor": false,
      "color": "#ffffff"
    },
    "valueAxis": "v2",
    "valueField": "High-2",
    "bullet": "round",
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "bulletSize": 5,
    "hideBulletsCount": 50,
    "lineThickness": 2,
    "title": "",
    "useLineColorForBulletBorder": true,
    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
  }],

  // Chart selection and scroll control
  "chartScrollbar": {
    "graph": "g1",
    "oppositeAxis": false,
    "offset": 30,
    "scrollbarHeight": 80,
    "backgroundAlpha": 0,
    "selectedBackgroundAlpha": 0.1,
    "selectedBackgroundColor": "#888888",
    "graphFillAlpha": 0,
    "graphLineAlpha": 0.5,
    "selectedGraphFillAlpha": 0,
    "selectedGraphLineAlpha": 1,
    "autoGridCount": true,
    "color": "#AAAAAA"
  },
  "chartCursor": {
    "pan": false,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "cursorAlpha": 1,
    "cursorColor": "#258cbb",
    "limitToGraph": "g2",
    "valueLineAlpha": 0.2,
    "valueZoomable": true
  },
  "categoryAxis": {
    "parseDates": true,
    "equalSpacing": true,
    "dashLength": 1,
    "minorGridEnabled": true
  },
  "autoMargins": true,

  "boldPeriodBeginning": true,
  "categoryField": "date",
  "valueScrollbar": {
    "offset": 100
  },
  "zoomOutOnDataUpdate": true,
  "cursorPosition": "mouse",
  "selectWithoutZooming": true,
  "listeners": [{
    "event": "init",
    "method": function (e) {
      e.chart.chartDiv.addEventListener("click", function () {
        if (e.chart.lastCursorPosition !== undefined) {
          var date = e.chart.dataProvider[e.chart.lastCursorPosition][e.chart.categoryField];
          var text = window.prompt("Enter Your Comments", "");
          if (text !== "") {
            var guide = new AmCharts.Guide();
            guide.date = date;
            guide.lineAlpha = 1;
            guide.lineColor = "#c44";
            guide.label = text;
            guide.position = "top";
            guide.inside = true;
            guide.labelRotation = 90;
            e.chart.categoryAxis.addGuide(guide);
            e.chart.validateNow();
          }
        }
      })
    }
  }, {
    "event": "changed",
    "method": function (e) {
      e.chart.lastCursorPosition = e.index;
    }
  }, {
    "event": "selected",
    "method": function (e) {}
  }],
  "periodSelector": {
    "position": "top",
    "periods": [{
      "period": "MM",
      "selected": true,
      "count": 1,
      "label": "1 month"
    }, {
      "period": "YYYY",
      "count": 1,
      "label": "1 year"
    }, {
      "period": "YTD",
      "label": "YTD"
    }, {
      "period": "MAX",
      "label": "MAX"
    }]
  }
};

export default Configuration;