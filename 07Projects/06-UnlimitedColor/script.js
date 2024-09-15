//generate a random color

const ranColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#'
    //generate hex code
    for (let i = 0; i < 6; i++) {//#FFFFFF 6 values hoti hai color me
        color += hex[Math.floor(Math.random() * 16)]; //hex[i]
    }
    return color;
};


//console.log(ranColor());  //0 to 15 values will come

let interval;

const startChangingColor = function () {
    if (!interval) {//if null hai tbhi 
        interval = setInterval(changeBGColor, 1000);
    }

    function changeBGColor() {
        document.body.style.backgroundColor = ranColor();
    }
};

document.querySelector("#start")
    .addEventListener('click', startChangingColor)


const stopChangingColor = function () {
    clearInterval(interval);
    interval = null;//memory bach gyi wrna baar baar overwrite hori thi
};

document.querySelector("#stop")
    .addEventListener('click', stopChangingColor)




