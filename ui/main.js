var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //make the request to the server
    var request = new XMLHttpRequest();
    
    //capture vthe response to a variable
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status == 200){
                
            }
        }
    }
    //render the vaiable to input the value to the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}