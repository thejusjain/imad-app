console.log('Loaded!');

var button = document.getElementById('counter');
button.onclick = function (){
  
  //create the request
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE){
        //take some action
        if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();    
        }
    }
  };
  
  //make the request
  request.open('GET','http://thejusjain101.imad.hasura-app.io/counter',true);
  request.send(null);
 
  
    
};