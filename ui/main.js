console.log('Loaded!');

//cahnge HTML element
var element = document.getElementById("main-text");
element.innerHTML = "New Value";


//move image
var img = document.getElementById('madi');
    img.onclick = function () {
        img.style.marginLeft = '100px';
    }