const svg = d3.select("#scatterplot")
    .append("svg")
    .attr("width", 800)
    .attr("height", 600)

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
                .html("Country: " + d.Entity + "<br>" + "Year: " + d.Year + "<br>" + "Launches: " + d.yearly_launches)
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

    // Find data for Russia 1981 and 2022
    var russiaYear1981 = data.find(d => +d.Year === 1981 && d.Entity === "Russia");
    var russiaYear2022 = data.find(d => +d.Year === 2022 && d.Entity === "Russia");

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
        .data([russiaYear1981, russiaYear2022])
        .enter()
        .append("circle")
        .attr("cx", d => x(+d.Year))
        .attr("cy", d => y(+d.yearly_launches))
        .attr("r", 10) // larger radius
        .style("fill", "none")
        .style("stroke", "red"); // red outline

    // Connect US 2012 and 2022 with a line
    svg.append("line")
        .attr("x1", x(+russiaYear1981.Year))
        .attr("y1", y(+russiaYear1981.yearly_launches))
        .attr("x2", x(+russiaYear2022.Year))
        .attr("y2", y(+russiaYear2022.yearly_launches))
        .attr("marker-end", "url(#arrow)") // Add arrow to the end of the line
        .style("stroke", "red")
        .style("stroke-width", 2);

    // Find data for 2012 and 2022
    var usYear2012 = data.find(d => +d.Year === 2012 && d.Entity === "United States");
    var usYear2022 = data.find(d => +d.Year === 2022 && d.Entity === "United States");

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
        .data([usYear2012, usYear2022])
        .enter()
        .append("circle")
        .attr("cx", d => x(+d.Year))
        .attr("cy", d => y(+d.yearly_launches))
        .attr("r", 10) // larger radius
        .style("fill", "none")
        .style("stroke", "red"); // red outline

    // Connect US 2012 and 2022 with a line
    svg.append("line")
        .attr("x1", x(+usYear2012.Year))
        .attr("y1", y(+usYear2012.yearly_launches))
        .attr("x2", x(+usYear2022.Year))
        .attr("y2", y(+usYear2022.yearly_launches))
        .attr("marker-end", "url(#arrow)") // Add arrow to the end of the line
        .style("stroke", "red")
        .style("stroke-width", 2);
}).catch(e => console.log(e));