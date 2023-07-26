const margin = {
        top: 10,
        right: 30,
        bottom: 30,
        left: 60
    },
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

const svg = d3.select("#linechart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

d3.csv("launch-cost.csv").then(function(data) {

    // X axis
    const x = d3.scaleLinear()
        .domain([1961, 2020])
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Y axis
    const y = d3.scaleLinear()
        .domain([20000, d3.max(data, function(d) {
            return +d.AverageofAllLaunchplatforms;
        })])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Tooltip
    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip");

    // Line generator
    const line = d3.line()
        .x(function(d) {
            return x(d.Year)
        })
        .y(function(d) {
            return y(d.AverageofAllLaunchplatforms)
        })

    // Add line to the SVG
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 4)
        .attr("d", line)

    let overlay = svg.append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .style("opacity", 0)
        .on("mouseover", () => { tooltip.style("visibility", "visible"); })
        .on("mouseout", () => { tooltip.style("visibility", "hidden"); });

    overlay.on("mousemove", function(event) {
        let x0 = x.invert(d3.pointer(event, this)[0]);
        let x1 = Math.round(x0);
        let d = data[x1 - 1961];

        tooltip.transition()
            .duration(200)
            .style("opacity", .9);

        tooltip
            .style("visibility", "visible")
            .html("Year: " + d.Year + "<br>" + "Avg cost per Kg: " + Math.round(d.AverageofAllLaunchplatforms))
            .style("top", (event.pageY - 10) + "px")
            .style("left", (event.pageX + 10) + "px");
    });

    // Find data for 2012 and 2022
    var year1961 = data.find(d => +d.Year === 1961);
    var year2020 = data.find(d => +d.Year === 2020);

    // Define US arrow marker
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

    // Add circles for US 2012 and 2022
    svg.selectAll("circle.highlighted")
        .data([year1961, year2020])
        .enter()
        .append("circle")
        .attr("cx", d => x(+d.Year))
        .attr("cy", d => y(+d.AverageofAllLaunchplatforms))
        .attr("r", 10) // larger radius
        .style("fill", "none")
        .style("stroke", "red"); // red outline

    // Connect US 2012 and 2022 with a line
    svg.append("line")
        .attr("x1", x(+year1961.Year) + 5)
        .attr("y1", y(+year1961.AverageofAllLaunchplatforms) + 5)
        .attr("x2", x(+year2020.Year) - 5)
        .attr("y2", y(+year2020.AverageofAllLaunchplatforms) - 5)
        .attr("marker-end", "url(#arrow)") // Add arrow to the end of the line
        .style("stroke", "red")
        .style("stroke-width", 2);
});