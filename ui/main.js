var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //make the request to the server
    
    //capture vthe response to a variable
    
    //render the vaiable to input the value to the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}