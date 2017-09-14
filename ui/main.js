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
var name = nameInput.value;
var submit = document.getElementById('sub_btn');
submit.onclick = function(){
    //make request to the server 
    
    //get the names and render it into the html
    var listItems = ['name1','name2','name3','name4'];
    list = '';
    
    for(var i = 0; i < listItems.length; i++) {
        list += '<li>' + listItems[i] + '</li>';
    }
    
    var ul = document.getElementById()
}