//to create a card-style ui using html css and js

var button = document.querySelector('.btn')
var invert=1;

button.addEventListener('click',function(){
    if(invert==1){
        button.textContent="following";
        button.style.backgroundColor="green";
        invert=0;
    }
    else{
        button.textContent="Follow";
        button.style.backgroundColor="transparent";

        invert=1;
    }

    
})