console.log('Loaded!');

//cahnge HTML element
var element = document.getElementById("main-text");
element.innerHTML = "New Value";


//move image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
     marginLeft = marginLeft + 2;
     img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
}

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function (){
  
  //create the request
  //var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  
  
  //Render the variable in the span element
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString(); 
    
};