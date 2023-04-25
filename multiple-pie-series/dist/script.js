/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root and chart
var root = am5.Root.new("chartdiv");

root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
  am5percent.PieChart.new(root, {
    radius: am5.percent(100),
    innerRadius: am5.percent(20)
  })
);

// Create series
var series = chart.series.push(
  am5percent.PieSeries.new(root, {
    name: "Series",
    valueField: "sales",
    categoryField: "country"
  })
);
// var series = chart.series.push( 
//   am5xy.LineSeries.new(root, { 
//     xAxis: xAxis, 
//     yAxis: yAxis, 
//     valueYField: field, 
//     valueXField: "date",
//     tooltip: am5.Tooltip.new(root, {
//       labelText: "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}"
//     })
//   }) 
// );

// series.data.setAll(data);
series.data.setAll([{
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"

}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "Spain",
  sales: 1,
  tooltipText: "x"
}, {
  country: "United Kingdom",
  sales: 1,
  tooltipText: "x"
}]);

// Configuring slices
series.slices.template.setAll({
  stroke: am5.color(0xffffff),
  strokeWidth: 2
})

// Disabling labels and ticks
series.labels.template.set("visible", false);
series.ticks.template.set("visible", false);

var series2 = chart.series.push(
  am5percent.PieSeries.new(root, {
    name: "Series",
    valueField: "sales",
    categoryField: "country"
  })
);

series2.data.setAll([{
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "Spain",
  sales: 1,
  tooltipText: "x"
}, {
  country: "United Kingdom",
  sales: 1,
  tooltipText: "x"
}]);

// Configuring slices
series2.slices.template.setAll({
  stroke: am5.color(0xffffff),
  strokeWidth: 2
})

// Disabling labels and ticks
series2.labels.template.set("visible", false);
series2.ticks.template.set("visible", false);

////////////////////////////////////

var series3 = chart.series.push(
  am5percent.PieSeries.new(root, {
    name: "Series",
    valueField: "sales",
    categoryField: "country"
  })
);

series3.data.setAll([{
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}]);

// Configuring slices
series3.slices.template.setAll({
  stroke: am5.color(0xffffff),
  strokeWidth: 2
})

// Disabling labels and ticks
series3.labels.template.set("visible", false);
series3.ticks.template.set("visible", false);

var series4 = chart.series.push(
  am5percent.PieSeries.new(root, {
    name: "Series",
    valueField: "sales",
    categoryField: "country"
  })
);

series4.data.setAll([{
  country: "France",
  sales: 1,
  tooltipText: "x"
}, {
  country: "France",
  sales: 1,
  tooltipText: "x"
}]);

// Configuring slices
series4.slices.template.setAll({
  stroke: am5.color(0xffffff),
  strokeWidth: 2
})

// Disabling labels and ticks
series4.labels.template.set("visible", false);
series4.ticks.template.set("visible", false);