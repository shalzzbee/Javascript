//any way you can take that element

const clock = document.getElementById('clock')
//or
//const clock= document.querySelector('#clock')




//2parameters
setInterval(() => {
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();

}, 1000);

