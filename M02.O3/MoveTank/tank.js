const image = document.getElementById("image");
let toRight = 10;
let backgroundposvar = 164;
let toDown = 10;

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 32:
      console.log("spacebar");
      break;
    case 38:
      console.log("Up arrow");
      image.style.transform = "rotate(0deg)";
      image.style.marginTop = `${toDown}px`;
      toDown -= 10;
      image.style.backgroundPosition = `${backgroundposvar}px 0px`;
      backgroundposvar -= 168;
      break;
    case 40:
      console.log("down arrow");
      image.style.transform = "rotate(180deg)";
      image.style.marginTop = `${toDown}px`;
      toDown += 10;
      image.style.backgroundPosition = `${backgroundposvar}px 0px`;
      backgroundposvar += 168;
      break;
    case 37:
      console.log("left arrow");
      image.style.transform = "rotate(-90deg)";
      image.style.marginLeft = `${toRight}px`;
      toRight -= 10;
      image.style.backgroundPosition = `${backgroundposvar}px 0px`;
      backgroundposvar -= 168;
      break;
    case 39:
      console.log("right arrow");
      image.style.transform = "rotate(90deg)";
      image.style.marginLeft = `${toRight}px`;
      toRight += 10;
      image.style.backgroundPosition = `${backgroundposvar}px 0px`;
      backgroundposvar += 168;
      break;
  }
};