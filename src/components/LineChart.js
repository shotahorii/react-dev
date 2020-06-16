import React from 'react';
import * as d3 from 'd3';

class LineChart extends React.Component {

    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
    }

    componentDidMount() {
        this.draw(this.props.data);
    }

    componentDidUpdate() {
        this.draw(this.props.data);
    }

    draw(data) { 
        // set positioning properties
        const width = 500,
            height = 500,
            margin = 50;

        // define positions based on width, height and margin
        const xStart = margin,
            yStart = height - margin,
            xEnd = width - margin,
            yEnd = margin,
            quadrantWidth = width - 2 * margin,
            quadrantHeight = height - 2 * margin;

        // define draw area
        const svg = d3.select(this.node);
        // crear draw area
        svg.selectAll('*').remove();
        
        svg.attr("height", height)
            .attr("width", width);

        // define x and y scales
        const x = d3.scaleLinear()
                    .domain([0, 10])
                    .range([xStart, xEnd]);

        const y = d3.scaleLinear()
                    .domain([0, 10])
                    .range([yStart, yEnd]);
        
        // define line drawer
        const line = d3.line()
                        .x(function(d){return x(d.x);})
                        .y(function(d){return y(d.y);});

        // draw line from the data
        svg.selectAll("path")
            .data(data)
            .enter()
            .append("path")
            .attr("class", "line")            
            .attr("d", function(d){return line(d);})
            .style('fill', 'none')
            .style('stroke', 'darkgray')
            .style('stroke-width', 2);


        // render axis
        const xAxis = d3.axisBottom()
                .scale(x.range([0, quadrantWidth]))
                .scale(x); 

        const yAxis = d3.axisLeft()
                .scale(y.range([quadrantHeight, 0]))
                .scale(y);

        svg.append("g")        
            .attr("class", "axis")
            .attr("transform", function(){
                return "translate(" + xStart 
                    + "," + yStart + ")";
            })
            .call(xAxis);

        svg.append("g")        
            .attr("class", "axis")
            .attr("transform", function(){
                return "translate(" + xStart 
                    + "," + yEnd + ")";
            })
            .call(yAxis);
    }

    render() {
        return (<svg ref={node => this.node = node}></svg>);
    }

}

export default LineChart;