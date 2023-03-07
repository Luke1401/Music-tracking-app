let xValues = [];
let yValues = [];
let barColors = [];
let barBorder = [];
let date = new Date();
let today = date.getDate();

for(let i = 1; i <= 24; i++) {

    let currX = i;
    
    xValues.push(currX + ':00       Songs');
    yValues.push((Math.floor(Math.random() * 10) + 10));
    var ran = randomColour();
    barColors.push(ran);
    barBorder.push(ran);
}
function randomColour(){
    var random = '#'+Math.floor(Math.random()*16777215).toString(16);
    return random;
}
new Chart('homeGraph', {
    type: "polarArea",
    data: {
      labels: xValues,
      datasets: [{
        label: 'Number of Songs: ',
        backgroundColor: 'rgba(152,23,163, .5)',
        hoverBackgroundColor: 'rgb(93,4,116)',
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {display: true},
      label: {display: true},
    }
  });