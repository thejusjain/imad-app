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



var submit = document.getElementById('sub_btn');
submit.onclick = function() {

     //create the request
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE){
        //take some action
        if(request.status === 200){
            //capture the list of names and render it 
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for (var i = 0; i < names.length; i++ ){
                list = '<li>' + names[i] + '</li>';
                
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
        }
    }
  };
  
  //make the request
  request.open('GET','http://thejusjain101.imad.hasura-app.io/submit-name?name=' + inputName, true);
  request.send(null);
    //make a request

    var nameInput = document.getElementById('name');
    var inputName = nameInput.value; 
    //capture the list of names and render it 
    var names = ['name1', 'name2', 'name3','name4'];
    var list = '';
    for (var i = 0; i < names.length; i++ ){
        list = '<li>' + names[i] + '</li>';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
}