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
    data.push(responseJson);
    
}




let data = [];

function list() {
    console.log('hi list is working');

    for (let i=0; i < data.length; i++) {
        $( ".picrs" ).append( `<img src="${data[i].message}" alt="random dog pic">` );
        
        
    };
    console.log("inserted?");

}

function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        
        setSelect();
        list();
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