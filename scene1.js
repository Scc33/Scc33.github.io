const svg = d3.select("#scatterplot")
    .append("svg")
    .attr("width", 800)
    .attr("height", 600)
    .append("g")

var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip");

// Define color scale
let color = d3.scaleOrdinal()
    .domain(["United States", "Russia", "China", "European Space Agency", "Japan"])
    .range(["#1f77b4", "#ff7f0e", "#d62728", "#2ca02c", "#9467bd"]);

d3.csv("yearly-number-of-objects-launched-into-outer-space.csv").then(function(data) {
    // filter data
    let filteredData = data.filter(d => color.domain().includes(d.Entity));

    // X axis
    const x = d3.scaleLinear()
        .domain(d3.extent(data, d => +d.Year))
        .range([50, 750]);
    svg.append("g")
        .attr("transform", "translate(0,550)")
        .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Y axis
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => +d.yearly_launches)])
        .range([550, 50]);
    svg.append("g")
        .attr("transform", "translate(50,0)")
        .call(d3.axisLeft(y));

    // Add dots
    svg.append('g')
        .selectAll("dot")
        .data(filteredData)
        .enter()
        .append("circle")
        .attr("cx", d => x(+d.Year))
        .attr("cy", d => y(+d.yearly_launches))
        .attr("r", 6)
        .style("fill", function(d) {
            return color(d.Entity)
        })
        .on("mouseover", (event, d) => {
            tooltip.style("visibility", "visible")
                .text("Country: " + d.Entity + "\nYear: " + d.Year + "\n" + "Launches: " + d.yearly_launches)
                .style("top", (event.pageY - 10) + "px")
                .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", () => { tooltip.style("visibility", "hidden"); });

    // Add legend
    let legend = svg.selectAll(".legend")
        .data(color.domain())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) {
            return "translate(0," + i * 20 + ")";
        });

    legend.append("rect")
        .attr("x", 100 - 18)
        .attr("y", 50)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    legend.append("text")
        .attr("x", 100 + 10)
        .attr("y", 59)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .text(function(d) {
            return d;
        });
}).catch(e => console.log(e));