function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomName() {
    var names = [['Eren Jaegar', 2, 2],
                  ['Jrem Eaegar', 3, 2], 
                  ['John Smith', 5, 3],
                  ['MusicMan1994', 1, 1],
                  ['NFTlover', 10, 5],
                  ['Cit Boin', 20, 8],
                  ['Random Man', 0, 0]];
      
    var selectedName = getRandomInt(names.length);
    return names[selectedName];
  }

  //change any text with id="randomName" into randomly chosen name
  function displayRandomName() {
    var name = document.getElementById("randomName");
    var collected = document.getElementById("randomCollected");
    var level = document.getElementById("randomLevel");

    var info = getRandomName();
    name.innerHTML = info[0];
    collected.innerHTML = 'Collected ' + info[1];
    level.innerHTML = 'Level ' + info[2];
  }