
function week() {
  
  xValues7days = [];
  yValues7days = [];
  barColors7days = [];
  
  let xVal = today;
  
  for(let i = 0; i < 7; i++) {
    
    if(xVal < 1){
      xVal = 31;
    }
    xValues7days.unshift(xVal);
    yValues7days.unshift(yValues[yValues.length-1-i]);
    barColors7days.unshift(barColors[barColors.length-1-i]);
    xVal--;
  }
  xValuesUpdated = xValues7days;
  yValuesUpdated = yValues7days;
  barColorsUpdated = barColors7days;
  myChart.destroy();
  printChart();
}
  

function month() {
  xValuesUpdated = xValues;
  yValuesUpdated = yValues;
  barColorsUpdated = barColors;
  myChart.destroy();
  printChart();
}


function printChart() {
  myChart = new Chart('chartCanvas', {
      type: "bar",
      data: {
        labels: xValuesUpdated,
        datasets: [{
          backgroundColor: barColorsUpdated,
          data: yValuesUpdated
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {display: false},
        title: {
          display: true,
          text: "Daily Music Listening Hours"
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Hour'
            }
          }],
          xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Day/Date'
              }
            }]
        } 
      }
    });
}


  // -------------MAIN---------

  let myChart;
  let xValues = [];
  let yValues = [];
  let barColors = [];

  let xValues7days = [];
  let yValues7days = [];
  let barColors7days = [];

  let date = new Date();
  let today = date.getDate();

  let currX = today;
  for(let i = 0; i < 31; i++) {

    if(currX > 30) {
        currX = 1;
    } else {
      currX++;
    }
    
    xValues.push(currX);
    let yRandom = Math.random() * 3;
    yRandom = yRandom.toFixed(2);

    yValues.push(yRandom);

    let r = (Math.random() * 255).toFixed(0);
    let g = (Math.random() * 255).toFixed(0);
    let b = (Math.random() * 255).toFixed(0);

    barColors.push('rgba('+r+','+g+','+b+', 0.4)');
  }

  let xValuesUpdated = xValues;
  let yValuesUpdated = yValues;
  let barColorsUpdated = barColors;
  printChart();

  // ------------------------


  // ---------------------------album art part starts here ------------------------

  let songName = ['Reputation','Now or Never','Sorry','Somebody’s me','Heart Attack','Thinking out Loud','I Don’t Care','See you Again','A thousand year','Tajdar-E-Haram','Chunar','Just a dream','Yaariyan','Bella Ciao'];
  let artistName = ['Taylor Swift','Halsey','Halsey','Enrique Iglesias','Enrique Iglesias','Ed Shareen','Ed Shareen','Wiz Khalifa','Christina Perri','Atif Aslam','Arijit Singh','Prem Dhillon','Momina Mustehsan','Manu Pilas'];

  let albumName = ['X (Ed Sheeran)','Coke Studio Season 9','Euphoria','Adhi Tape - EP','Judaa 3 Chapter 1','Enrique Iglesias - Sex Love', 'Twilight'];
  for(let i = 0; i < 4; i++ ){
    
    let randomIndex = Math.abs((Math.random() * songName.length-1).toFixed(0));
    
    let divIdName = 'trackName'+i;
    let divIdDesc = 'trackDesc'+i;
    let divIdImg = 'trackImg'+ i;

    let divIdAlbumImage = 'albumImage'+i;
    let divIAalbumTitle = 'albumTitle'+i;
    let divIdNumberOfPlays = 'numberOfPlays'+i;

    let img = document.createElement('img');
    let albumImg = document.createElement('img');

    document.getElementById(divIdName).innerHTML = songName[randomIndex];
    document.getElementById(divIdDesc).innerHTML = artistName[randomIndex];
    img.src = '../assets/images/albumArts/'+randomIndex+'.jpg';
    document.getElementById(divIdImg).appendChild(img);

    if(i<3) {
    
    randomIndex = Math.abs((Math.random() * albumName.length-1).toFixed(0));
    document.getElementById(divIAalbumTitle).innerHTML= albumName[randomIndex];
    // albumName.splice(randomIndex,1);
    let played = randomIndex+15;
    document.getElementById(divIdNumberOfPlays).innerHTML = 'Played '+ played + " Times";
    albumImg.src = '../assets/images/albumCovers/'+randomIndex+'.jpg';
    document.getElementById(divIdAlbumImage).appendChild(albumImg);
    }

  }

  document.getElementById('ran1').innerHTML = "This week: " + (Math.random() * 14).toFixed(0);
  document.getElementById('ran2').innerHTML = "This week: " + (Math.random() * 11).toFixed(0);
  document.getElementById('ran3').innerHTML = "This week: " + (Math.random() * 7).toFixed(0);
  document.getElementById('ran4').innerHTML = "This week: " + (Math.random() * 6).toFixed(0);

  
