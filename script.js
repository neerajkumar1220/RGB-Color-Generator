const color_box=document.getElementById('Color_box');
const redslider=document.getElementById('redslider');
const blueslider=document.getElementById('blueslider');
const greenslider=document.getElementById('greenslider');
const redvalues=document.getElementById('red_value');
const bluevalues=document.getElementById('blue_value');
const greenvalues=document.getElementById('green_value');
const inputtype=document.getElementById('inputtype');

redslider=addEventListener('input',updateclor);
blueslider=addEventListener('input',updateclor);
greenslider=addEventListener('input',updateclor);


function updateclor(){
    const redvalue= redslider.value;
    const bluevalue= blueslider.value;
    const greenvalue= greenslider.value;

    const rgbcolor= `rgb(${redvalue},${bluevalue},${greenvalue})`
    console.log(rgbcolor);
    color_box.style.background=rgbcolor;
    redvalues.textContent=redvalue;
    bluevalues.textContent=bluevalue;
    greenvalues.textContent=greenvalue;
    inputtype.textContent=rgbcolor;
}

updateclor();



