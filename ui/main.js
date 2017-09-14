var button = document.getElementById('counter');

button.onclick = function(){
    //create the request to the server
    var request = new XMLHttpRequest();
    
    //capture vthe response to a variable
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;                
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();    
            }
        }
    };
  //make the request
    request.open('GET', 'http://thejusjain101.imad.hasura-app.io/counter', true);
    request.send(null);
    
};