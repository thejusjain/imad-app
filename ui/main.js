var button = document.getElementById('counter');

button.onclick = function(){
    //create the request to the server
    var request = new XMLHttpRequest();
    
    //capture vthe response to a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText; 
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();    
            }
        }
    }
  //make the request
    request.open('GET', 'http://thejusjain101.imad.hasura-app.io/counter', true);
    request.send(null);
    
}

//submit name and display

var nameInput = document.getElementById('name');
var iName = nameInput.value;
var submit = document.getElementById('sub_btn');
submit.onclick = function(){
     //create the request to the server
    var request = new XMLHttpRequest();
    
    //capture vthe response to a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                //get the names and render it into the html
                var names = request.responseText;
                names = JSON.parse(names);
                for(var i = 0; i < names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                
                var ul = document.getElementById('list');
                ul.innerHTML = list;
            }
        }
    }
  //make the request
    request.open('GET', 'http://thejusjain101.imad.hasura-app.io/submit-name?name=' + iName, true);
    request.send(null);
    
    
   
}