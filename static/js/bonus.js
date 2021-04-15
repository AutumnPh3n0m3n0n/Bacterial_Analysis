var data = [
  {
    type: "indicator",
    mode: "gauge+number+delta",
    value: 4.5,
    title: { text: "Speed", font: { size: 24 } },
    delta: { reference: 6, increasing: { color: "RebeccaPurple" } },
    gauge: {
      axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "darkblue" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0, 4], color: "cyan" },
        { range: [4, 9], color: "royalblue" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
        value: 4.5
      }
    }
  }
];

var layout = {
  width: 500,
  height: 400,
  margin: { t: 25, r: 25, l: 25, b: 25 },
  paper_bgcolor: "lavender",
  font: { color: "darkblue", family: "Arial" }
};

Plotly.newPlot('gauge', data, layout);