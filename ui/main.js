console.log('Loaded!');

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