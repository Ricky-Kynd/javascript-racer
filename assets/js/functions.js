
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 70)
      cell1.style.backgroundColor = "violet";
      console.log(event);
  });

//This logs the key pressed to find the keycode.
document.onkeyup = function(a) {
  console.log(a.which);
};
