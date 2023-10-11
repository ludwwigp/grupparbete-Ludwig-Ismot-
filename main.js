document.getElementById("color-button").addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  });
  
  function getRandomColor() {
    return "#" + Math.floor(Math.random()*100000).toString(16);
  }


