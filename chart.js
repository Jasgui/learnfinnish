var createChart = (graphData) => {
    var xaxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

    Chart.defaults.global.responsive = false;

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xaxis,
            datasets: [
                {
                    data: graphData.test,
                    label: "Africa",
                    borderColor: "#3e95cd",
                    fill: false

      },
                {
                    data: graphData.learn,
                    label: "Asia",
                    borderColor: "#3e95cd",
                    fill: false
},
                {
                    data: graphData.review,
                    label: "Europe",
                    borderColor: "#3e95cd",
                    fill: false
},
                {
                    data: graphData.done,
                    label: "Latin America",
                    borderColor: "#3e95cd",
                    fill: false
}
    ]
        }
    });

};

export {
    createChart
};
