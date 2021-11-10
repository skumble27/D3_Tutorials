// import * as d3 from "d3";

const width = 400
const height = 400

// const svg = d3.select('#lesson2')
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)

// svg.append("circle")
//     .attr('cx', 100)
//     .attr('cy', 250)
//     .attr('r', 70)
//     .attr('fill','red')

// svg.append('rect')
//     .attr('x',200)
//     .attr('y',200)
//     .attr("width", 50)
//     .attr("height",100)
//     .attr("fill", "blue")

const data = [25,20,10,12,15]

const svg2 = d3.select('#lesson2_1').append('svg')
    .attr('width', width)
    .attr('height', height)

svg2.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr("cx", (d,i)=> (i*50) + 50)
    .attr("cy",250)
    .attr("r", (d) => d)





