var boom = new Howl({
  src: ['sounds/boom.wav']
});

var clap = new Howl({
  src: ['sounds/clap.wav']
});

var hihat = new Howl({
  src: ['sounds/hihat.wav']
});

var kick = new Howl({
  src: ['sounds/kick.wav']
});

var openhat = new Howl({
  src: ['sounds/openhat.wav']
});

var ride = new Howl({
  src: ['sounds/ride.wav']
});

var snare = new Howl({
  src: ['sounds/snare.wav']
});

var tink = new Howl({
  src: ['sounds/tink.wav']
});

var tom = new Howl({
  src: ['sounds/tom.wav']
});





document.addEventListener("keydown", function (e) {
  if (e.keyCode == 65) {
    boom.play();
    document.querySelector('#keyA').classList.add("selected")
    document.addEventListener("keyup", function() {
      document.querySelector('#keyA').classList.remove("selected")
    })
  } else if (e.keyCode == 83) {
    clap.play();
    document.querySelector('#keyS').classList.add("selected")
    document.addEventListener("keyup", function() {
      document.querySelector('#keyS').classList.remove("selected")
    })
  } else if (e.keyCode == 68) {
    hihat.play();
    document.querySelector('#keyD').classList.add("selected")
    document.addEventListener("keyup", function() {
      document.querySelector('#keyD').classList.remove("selected")
    })
  } else if (e.keyCode == 70) {
    kick.play();
    document.querySelector('#keyF').classList.add("selected")
    document.addEventListener("keyup", function() {
      document.querySelector('#keyF').classList.remove("selected")
    })
  } else if (e.keyCode == 71) {
    openhat.play();
    document.querySelector('#keyG').classList.add("selected")
    document.addEventListener("keyup", function() {
      document.querySelector('#keyG').classList.remove("selected")
    })
  } else if (e.keyCode == 72) {
    ride.play();
    document.querySelector('#keyH').classList.add("selected")
    document.addEventListener("keyup", function() {
      document.querySelector('#keyH').classList.remove("selected")
    })
  } else if (e.keyCode == 74) {
    snare.play();
    document.querySelector('#keyJ').classList.add("selected")
    document.addEventListener("keyup", function() {
      document.querySelector('#keyJ').classList.remove("selected")
    })
  } else if (e.keyCode == 75) {
    tink.play();
    document.querySelector('#keyK').classList.add("selected")
    document.addEventListener("keyup", function() {
      document.querySelector('#keyK').classList.remove("selected")
    })
  } else if (e.keyCode == 76) {
    tom.play();
    document.querySelector('#keyL').classList.add("selected")
    document.addEventListener("keyup", function() {
      document.querySelector('#keyL').classList.remove("selected")
    })
  }
})





