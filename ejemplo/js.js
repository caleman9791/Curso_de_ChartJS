var resourceChartElement = document.getElementById("nestedDoughnut");
var resourceChart = new Chart(resourceChartElement, {
  "type": "doughnut",
  "data": {
    "datasets": [{
      "backgroundColor": ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC"],
      "hoverBackgroundColor": ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC"],
      "data": [0.0, 0.0, 8.31, 10.43, 84.69, 0.84]
    }, {
      "backgroundColor": ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC"],
      "hoverBackgroundColor": ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC"],
      "data": [8.31, 95.96]
    }],
    "labels": ["resource-group-1", "resource-group-2", "Data Services - Basic Database Days", "Data Services - Basic Database Days", "Azure App Service - Basic Small App Service Hours", "resource-group-2 - Other"]
  }
});