import React from 'react';
import AmCharts from "@amcharts/amcharts3-react";

const Chart = (props) => {
    return (
        <div>
            <AmCharts.React style={{ width: "100%", height: "500px" }} options={props.children} />
            <span>
                <h4>Chart Filters and Activities:</h4>
                <ul>
                    <li>Filter Graph: Click Legends to hide/show the respective chart</li>
                    <li>Filter Graph: Rollover Legends to highlight the respective chart</li>
                    <li>Filter Date: Scroll the vertical and horizontal scroller to filter the date</li>
                    <li>Click on the graph to add annotations at any date</li>
                    <li>Click and select area of the graph</li>
                    <li>Data for the charts are fetched from API</li>
                </ul>
            </span>
        </div>
    )
}

export default Chart;