import React, { useEffect } from 'react';
import * as d3 from 'd3';


function PieChart(props) {
  const {
    data,
    outerRadius,
    innerRadius,
  } = props;

  useEffect(() => {
    drawChart();
  }, [data]);

  function drawChart() {
    // set the dimensions and margins of the graph
    var margin = 10
    var width = 600;
    var height = 300;

    const textColor = "#222629"

    // append the svg object to the div called 'pie-container'
    var svg = d3.select("#pie-container")
      .append("text").attr("x", (width + 2 * margin) / 2).attr("y", 20).style('fill', textColor).style("text-anchor", "middle").style("font-family", "Montserrat").text("Breakdown by Faculty")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      // .attr("style", "-webkit-filter: drop-shadow( 0px 3px 3px rgba(0,0,0,.3) ); filter: drop-shadow( 0px 3px 3px rgba(0,0,0,.25) )")
      .append("g")
      .attr("transform", "translate(" + width / 3 + "," + height / 2 + ")");

    const color = d3
      .scaleSequential()
      .interpolator(d3.interpolateCool)
      .domain([0, data.length]);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    var data_ready = pieGenerator(data)

    // The arc generator
    var arcGenerator = d3.arc()
      .innerRadius(innerRadius)         // This is the size of the donut hole
      .outerRadius(outerRadius)

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('allSlices')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .attr('fill', (_, i) => color(i))
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)

    // Add the polylines between chart and labels:
    svg
      .selectAll('allPolylines')
      .data(data_ready)
      .enter()
      .append('polyline')
      .attr("stroke", "black")
      .style("fill", "none")
      .attr("stroke-width", 1)
      .attr('points', function (d) {
        var posA = arcGenerator.centroid(d) // line insertion in the slice
        var posB = arcGenerator.centroid(d) // line break: we use the other arc generator that has been built only for that
        var posC = arcGenerator.centroid(d); // Label position = almost the same as posB
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = ((outerRadius + margin) * 0.95) * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posC]
      })

    // Add the polylines between chart and labels:
    svg
      .selectAll('allLabels')
      .data(data_ready)
      .enter()
      .append('text')
      .text((d) => `${d.data.label}: ${d.data.value}%`)
      .attr('transform', function (d) {
        var pos = arcGenerator.centroid(d);
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = (outerRadius + margin) * 0.99 * (midangle < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
      })
      .attr("style", "font-size: 0.7em;")
      .style("font-family", "Montserrat")
      .style('text-anchor', function (d) {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'start' : 'end')
      });

  }

  return <div id="pie-container" />;
}

export default PieChart;