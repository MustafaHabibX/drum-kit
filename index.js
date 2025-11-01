// Storing the drum-boxes
const drum = document.querySelectorAll(".drum");

function playingAudio(audioNote) {
  const audio = new Audio(`./sounds/${audioNote}.mp3`);
  audio.play();
}

function playNote(key) {
  //Based on the recieved key we decide to play which sound
  switch (key) {
    case "a":
      playingAudio("tom-1");
      break;
    case "s":
      playingAudio("tom-2");
      break;
    case "d":
      playingAudio("tom-3");
      break;
    case "f":
      playingAudio("tom-4");
      break;
    case "j":
      playingAudio("kick-bass");
      break;
    case "k":
      playingAudio("crash");
      break;
    case "l":
      playingAudio("snare");
      break;

    default:
      break;
  }
}

// * To highlight if a key is pressed from the keyboard
function keyPressedHighlight(pressedKey) {
  // Here the value of the pressed keyboard's key was sent, we can match to the element's classname's
  // like if key 'a' was pressed, then the box 'a' has a classname called 'a', that's how we retrieve the HTML element here

  const element = document.querySelector(`.${pressedKey}`);

  // To that element, we add this CSS-class
  element.classList.add("pressed");

  setTimeout(() => {
    // After 150ms we remnove that classname back
    element.classList.remove("pressed");
  }, 120);
}

// * To highlight if a box is clicked from the UI
function clickedHighlight(element) {
  // Here we already have the HTML element

  element.classList.add("pressed");

  setTimeout(() => {
    element.classList.remove("pressed");
  }, 120);
}

/////////////////////////
// ! Event Listeners
/////////////////////////

// Here Listening to any keydown event on the whole html

document.addEventListener("keydown", (e) => {
  // Listens to keydown event in anywhere of our page
  const pressedKey = e.key.toLowerCase();

  // Sends the value of the key that's pressed (To decide on which sound to play)
  playNote(pressedKey);

  // The clicked box will be highligted
  // The value of pressed key is sent
  keyPressedHighlight(e.key);
});

// Here Listening to any click event on all of the boxes
drum.forEach((pressedElement) => {
  //Used foreach because we have multiple boxes and they all need event listeners

  pressedElement.addEventListener("click", () => {
    // The clicked element is passed to the forEach's parameter
    const clickedKeyText = pressedElement.textContent;

    // Sends the text of the button that's clicked (To decide on which sound to play)
    playNote(clickedKeyText);

    // The clicked box will be highligted
    //The pressed element is sent
    clickedHighlight(pressedElement);
  });
});
