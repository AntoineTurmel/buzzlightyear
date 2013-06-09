var buzzsound = new Audio();

function buzzaction(){
  buzzsound.pause();
  buzzsound.src = "sounds/0" + getRandomInt(1, 3) + ".ogg";
  
  buzzsound.load();
  buzzsound.play();
  
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
