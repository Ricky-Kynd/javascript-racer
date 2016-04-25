window.onload = addElement; //when html loads execute the js, i.e addElement function.

function addElement() {
  //create a new div element
  var newDiv = document.createElement("div");
  // add id to created div element // one way of doing it; newDiv.id += "container";
  newDiv.setAttribute('id', 'container');
  //create some content
  var newContent = document.createTextNode("This is a main container in progress");
  //append content to newDiv
  newDiv.appendChild(newContent);
  //add the newly created content before the buttons and into the document
  var currentDiv = document.getElementById("heading");  
  document.body.insertBefore(newDiv, currentDiv);
}

//The function below is used or called along with the onclick function defined in the html
function myFunction() {
  var arg = "People of the nation";
  document.getElementById('result').innerHTML = "Hello " + arg + " !";
}

function start() {
  var id = document.createElement('h1');
  id.id = "big_head";
  var text = document.createTextNode("Welcome to Death Drags");
  id.appendChild(text);
}
