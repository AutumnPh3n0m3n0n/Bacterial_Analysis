//Part 1: Import the data from sample.json
d3.json('samples.json').then(data => {
  console.log(data);
})

console.log(names);
console.log(metadata);
console.log(samples);

//Part 2: Create a visual Bar Chart
function filterSamples(person) {
  return parseInt(person.sample_values) >= 40;
}

var filteredSamples = data.filter(samples);

console.log(filteredSamples);

// 3. Use the map method with the arrow function to return all the filtered cities.
var cities = filteredCities.map(city => city.City);

//  Check your filtered cities
console.log(cities);

// 4. Use the map method with the arrow function to return all the filtered cities population.
var population = filteredCities.map(city => city.population);

//  Check the populations of your filtered cities
console.log(population);


var bar_stats = {
    x: out_ids,
    y: sample_values,
    hoverinfo: out_labels,
    type: "bar"
};
  
var bar_data = [bar_stats];
  
var bar_layout = {
    title: "Cities that added more than 15,000 people in 2017",
    xaxis: { title: "City" },
    yaxis: { title: "2017 Population"}
};
  
Plotly.newPlot("bar-plot", bar_data, bar_layout);

//Part 3: Create a vicual Bubble Chart
var bubble_stats = {
  x: out_ids,
  y: sample_values,
  mode: 'markers',
  marker: {
    color: sample_values,
    size: sample_values
  }
};

var bubble_data = [bubble_stats];

var bubble_layout = {
  title: 'Marker Size and Color',
  xaxis: { title: "City" },
  yaxis: { title: "2017 Population"},
  showlegend: false,
};

Plotly.newPlot('myDiv', bubble_data, bubble_layout);

//Part 4: 
