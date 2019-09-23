'use strict';

function getDogPic() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson =>
            consoleResponse(responseJson))

        .catch(error => alert('not working'));
    
}

function consoleResponse(responseJson) {
    console.log(responseJson);
    
    
}




let data = [];

function list() {
    console.log('hi list is working');

    if (selection < namer) {
        data.push(responseJson.message);
    }

    else {
        console.log(push);
    };
}

function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        
        setSelect();
    });
}


function setSelect() {
    let namer = document.getElementById('myForm').value;
    console.log(namer);
    
    for (let selection = 0; selection < namer; selection++) {
        getDogPic();
        
    }
    
    console.log(data);

 
   
}



$(function() {
    console.log('Go ahead User Submit');
    submitForm();
    
});