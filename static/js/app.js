//Part 1: Import the data from sample.json
d3.json('samples.json').then(data => {
  console.log(data);
})

let tableNames = data.names;
let tableMeta = data.metadata;
let tableSamples = data.samples;
console.log(tableNames);
console.log(tableMeta);
console.log(tableSamples);

//Part 2: Create a visual Bar Chart
function filterSamples(person) {
  return parseInt(person.sample_values) >= 40;
}

var filteredSamples = tableSamples.filter(filterSamples);
console.log(filteredSamples);

var ids = filteredSamples.map(person => person.otu_ids);
var values = filteredSamples.map(person => person.sample_values);
var labels = filteredSamples.map(person => person.otu_labels);
console.log(ids);
console.log(values);
console.log(labels);

var bar_stats = {
    x: ids,
    y: values,
    hoverinfo: labels,
    type: "bar"
};
  
var bar_data = [bar_stats];
  
var bar_layout = {
    title: "Cities that added more than 15,000 people in 2017",
    xaxis: { title: "City" },
    yaxis: { title: "2017 Population"}
};

console_log(bar_data);
console_log(bar_layout);
  
Plotly.newPlot("bar-plot", bar_data, bar_layout);

//Part 3: Create a vicual Bubble Chart
var bubble_stats = {
  x: ids,
  y: values,
  mode: 'markers',
  marker: {
    color: values,
    size: values
  }
};

var bubble_data = [bubble_stats];

var bubble_layout = {
  title: 'Marker Size and Color',
  xaxis: { title: "City" },
  yaxis: { title: "2017 Population"},
  showlegend: false,
};

console.log(bubble_data)
console.log(bubble_layout)

Plotly.newPlot('myDiv', bubble_data, bubble_layout);

//Part 4: 
let button = d3.select("#well");

const runEnter = () => {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  // Get the value property of the input element
  let inputElement = d3.select("#selDataset"),
      inputValue = inputElement.property("value");

  console.log(inputValue);

  let selectedData = tableMeta.filter(person => person.id === inputValue);

  console.log(selectedData);

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  let id_s = selectedData.map(info => info.id),
      ethnic = selectedData.map(info => info.ethnicity),
      ages = selectedData.map(info => info.age),
      sex = selectedData.map(info => info.gender),
      place = selectedData.map(info => info.location),
      bb_type = selectedData.map(info => info.bbtype),
      wr_freq = selectedData.map(info => info.wrfreq);

  // Then, select the unordered list element by class name
  let list = d3.select(".pannel-body");
  list.html("");

  const stats = {id: id_s, ethnicity: ethnic, gender: sex, age: ages, location: place, bbtype: bb_type, wrfreq: wr_freq};
  Object.entries(stats).forEach(([stat, value]) => list.append("li").text(`${stat}: ${value}`));
};

// Create event handlers
button.on("click", runEnter);
