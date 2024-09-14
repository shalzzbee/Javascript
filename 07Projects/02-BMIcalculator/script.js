const form = document.querySelector("form");

//this use case will give you empty value in string
//const ht = parseInt(document.querySelector('#height').value);


form.addEventListener('submit', function (e) {
    e.preventDefault()
    //string value to int
    const ht = parseInt(document.querySelector('#height').value);
    const wt = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if (ht === "" || ht < 0 || isNaN(ht)) {
        results.innerHTML = "Please give a valid height"
    }

    else if (wt === "" || wt < 0 || isNaN(wt)) {
        results.innerHTML = "Please give a valid weight"
    }

    else {
        const bmi = (wt / ((ht * ht) / 10000)).toFixed(2);//till 2 decimal places
        //result
        results.innerHTML = `<span>${bmi}</span>`
    }
});

