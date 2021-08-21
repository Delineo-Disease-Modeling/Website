import React, { useEffect } from 'react';
import * as d3 from 'd3';


function PieChart(props) {
  const {
    data,
    outerRadius,
    innerRadius,
  } = props;

  const margin = {
    top: 50, right: 50, bottom: 50, left: -30,
  };

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;
  const textColor = "#222629"

  const colorScale = d3     
    .scaleSequential()      
    .interpolator(d3.interpolateCool)      
    .domain([0, data.length]);

  useEffect(() => {
    drawChart();
  }, [data]);

  function drawChart() {
    // Remove the old svg
    d3.select('#pie-container')
      .select('svg')
      .remove();

    // Create new svg
    const svg = d3
      .select('#pie-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);
    
    svg.append("text")
    .attr("x", 0)
    .attr("y", 0 - height/2 +margin.top -20).style('fill', textColor).style("text-anchor", "middle")
    .style("font-family", "Montserrat").text("Infection breakdown by facility");


    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const arc = svg
      .selectAll()
      .data(pieGenerator(data))
      .enter();

    // Append arcs
    arc
      .append('path')
      .attr('d', arcGenerator)
      .style('fill', (_, i) => colorScale(i))
      .style('stroke', '#ffffff')
      .style('stroke-width', 0);

    // Append text labels
    arc
      .append('text')
      .attr('text-anchor', 'middle')
      .style("font-family", "Montserrat")
      .attr('alignment-baseline', 'middle')
      .text((d) => `${d.data.label}: ${d.data.value}%`)
      .style('fill', '#fff')
      .attr('transform', (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });
  }    

  return <div id="pie-container" />;
}

export default PieChart;