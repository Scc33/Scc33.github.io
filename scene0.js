// Create SVG container
var svg = d3.select("#scatterplot").append("svg")
    .attr("width", 800)
    .attr("height", 600);

// Create tooltip
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip");

// Load data
d3.csv("yearly-number-of-objects-launched-into-outer-space.csv").then(data => {
    // Filter for entity code "World"
    data = data.filter(d => d.Entity === "World");

    // Create scales
    var xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => +d.Year))
        .range([50, 750]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => +d.yearly_launches)])
        .range([550, 50]);

    // Add circles
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(+d.Year))
        .attr("cy", d => yScale(+d.yearly_launches))
        .attr("r", 6)
        .style("fill", "#00c698")
        .on("mouseover", (event, d) => {
            tooltip.style("visibility", "visible")
                .html("Year: " + d.Year + "<br>" + "Objects Launched: " + d.yearly_launches)
                .style("top", (event.pageY - 10) + "px")
                .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", () => { tooltip.style("visibility", "hidden"); });

    // Add axes
    svg.append("g")
        .attr("transform", "translate(0,550)")
        .call(d3.axisBottom(xScale).tickFormat(d3.format("d")));

    svg.append("g")
        .attr("transform", "translate(50,0)")
        .call(d3.axisLeft(yScale));

    // Add legend
    let legend = svg.selectAll(".legend")
        .data(["World"])
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", "translate(0,20)");

    legend.append("rect")
        .attr("x", 100 - 18)
        .attr("y", 50)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", "#00c698")

    legend.append("text")
        .attr("x", 100 + 10)
        .attr("y", 59)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .text("World");
}).catch(e => console.log(e));