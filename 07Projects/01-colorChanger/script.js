const buttons = document.querySelectorAll('.button');
//console.log(buttons);//NODE LIST

const body = document.querySelector("body");

//events---any activity
//node list pe forEach lag skta h
buttons.forEach(function (btn) {
    //console.log(btn);
    btn.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
        }

        if (e.target.id === 'blue') {
            body.style.backgroundColor = 'rgb(57, 160, 163)';
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'rgb(240, 228, 123)';
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = 'rgb(239, 72, 214)';
        }
    })
})

