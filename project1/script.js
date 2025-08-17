var circle =document.querySelector('.circle')

var button1 = document.querySelector('#btn1')
var invert = 1;

button1.addEventListener('click', function(){
    if (invert==1){
        circle.style.backgroundColor="yellow";
        button1.textContent="OFF";
        invert=0;
    }
    else{
        circle.style.backgroundColor="transparent";
        button1.textContent="ON";
        invert=1;

    }

}
)



