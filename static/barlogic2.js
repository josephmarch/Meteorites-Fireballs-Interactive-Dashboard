// Function to build bar graph of meteor count with active year highlighted
function bargraph(year) {
    // Pull years and count from Flask
    var years = m_years.slice(1,-7).split(", ");
    var counts = m_count.slice(1,-4).split(", ");
    var n_counts = []
    for (let i = 0; i<counts.length; i++) {n_counts.push(Number(counts[i]))}
    console.log(years);
    console.log(n_counts);

    // create color list
    color_list = [];
    for (let i = 0; i < years.length; i++) {
        if (years[i] == year){
            color_list.push("gold");
        }
        else{
            color_list.push("skyblue");
        }
    }

    // Trace for meteorite data
    let trace = {
        x: years,
        y: n_counts,
        type: "bar",
        //orientation: "h",
        marker: {
            color: color_list
        }
    };
    console.log(trace);

    // Data trace array
    let traceData = [trace];
    // Apply title to the layout
    let layout = {
        title: "<b>Meteorites per Year</b>",
        autosize: true,
        xaxis: {
            title: "Year",
            type: "category"
        },
        yaxis: {
            title: "Meteorites",
            type: "linear",
            autorange: true
        }
    };
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", traceData, layout);

}

bargraph(2021);