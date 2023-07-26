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

    // Define arrow marker
    svg.append("defs").append("marker")
        .attr("id", "arrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 5)
        .attr("refY", 0)
        .attr("markerWidth", 4)
        .attr("markerHeight", 4)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .style("stroke", "red")
        .style("fill", "none");

    // Find data for 2012 and 2022
    var year2012 = data.find(d => +d.Year === 2012);
    var year2022 = data.find(d => +d.Year === 2022);

    // Add circles for 2012 and 2022
    svg.selectAll("circle.highlighted")
        .data([year2012, year2022])
        .enter()
        .append("circle")
        .attr("cx", d => xScale(+d.Year))
        .attr("cy", d => yScale(+d.yearly_launches))
        .attr("r", 10) // larger radius
        .style("fill", "none")
        .style("stroke", "red"); // red outline

    // Connect 2012 and 2022 with a line
    svg.append("line")
        .attr("x1", xScale(+year2012.Year))
        .attr("y1", yScale(+year2012.yearly_launches))
        .attr("x2", xScale(+year2022.Year))
        .attr("y2", yScale(+year2022.yearly_launches))
        .attr("marker-end", "url(#arrow)") // Add arrow to the end of the line
        .style("stroke", "red")
        .style("stroke-width", 2);

}).catch(e => console.log(e));