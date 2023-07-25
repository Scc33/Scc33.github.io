let country = 'United States';

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

d3.csv("cumulative-number-of-objects-launched-into-outer-space.csv").then(function(data) {

    // Filter data
    let dataFiltered = data.filter(function(d) {
        return d['Code'] == 'USA' && d['Year'] >= 1961
    })

    // X axis
    const x = d3.scaleLinear()
        .domain([1961, 2022])
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Y axis
    const y = d3.scaleLinear()
        .domain([0, d3.max(dataFiltered, function(d) {
            return +d.cumulative_launches;
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
            return x(+d.Year)
        })
        .y(function(d) {
            return y(+d.cumulative_launches)
        });

    // Initial line
    const lineSVG = svg.append('g')
        .append("path")
        .datum(dataFiltered)
        .attr("d", line)
        .attr("stroke", "black")
        .style("stroke-width", 4)
        .style("fill", "none")

    // A dropdown button
    d3.select("#selectButton").selectAll('myOptions')
        .data(Array.from(new Set(data.map(d => d.Entity)))) // Add more options here
        .enter()
        .append('option')
        .text(function(d) {
            return d;
        }) // Text shown in the dropdown menu
        .attr("value", function(d) {
            return d;
        }) // Corresponding value returned by the dropdown menu
        .attr("selected", function(d) {
            if (d === "United States") {
                return "selected"
            }
        });


    d3.select("#selectButton").on("change", () => {
        // A change event to redraw the line with the selected entity
        const selectedOption = d3.select("#selectButton").property("value")
        country = selectedOption;
        let dataFiltered = data.filter(function(d) {
            return d['Entity'] == selectedOption && d['Year'] >= 1961
        })

        // Redraw line with the selected data
        lineSVG.datum(dataFiltered)
            .transition()
            .duration(1000)
            .attr("d", d3.line()
                .x(function(d) {
                    return x(+d.Year)
                })
                .y(function(d) {
                    return y(+d.cumulative_launches)
                })
            )
    });

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
        let dataFiltered = data.filter(function(d) {
            return d['Entity'] == country && d['Year'] >= 1961
        })
        let d = dataFiltered[x1 - 1961];
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);

        tooltip
            .style("visibility", "visible")
            .html("Year: " + d.Year + "<br>" + "Cummulative object launches: " + d.cumulative_launches)
            .style("top", (event.pageY - 10) + "px")
            .style("left", (event.pageX + 10) + "px");
    });
});