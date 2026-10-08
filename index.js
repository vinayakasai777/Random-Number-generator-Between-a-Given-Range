const up = document.getElementById("upper-limit");
const down = document.getElementById("lower-limit");
const submit = document.getElementById("submit");
const confirmation = document.getElementById("confirmation");
const generate = document.getElementById("generator");
const number = document.getElementById("number")

let max;
let min;



submit.onclick = function () {
    if (up.value === "" || down.value === "") {
        window.alert("Enter the values of the upper limit and lower limits");
        return;
    }
    max = Number(up.value);
    min = Number(down.value);
    if (Number.isNaN(max) || Number.isNaN(min)) {
        window.alert("Enter proper values of upper-limit and lower-limit");
        up.value = ``;
        down.value = ``;
        return;
    }
    if (min > max) {
        window.alert("The lower-limit value is greater than the upper-limit value, Enter proper values of upper-limit and lower-limit");
        up.value = ``;
        down.value = ``;
        return;
    }
    confirmation.textContent = `The upper-limit is ${max} and the lower-limit is ${min}, click generate to generate a random number between the given limits`;

    console.log(max, min);
}

generate.onclick = function () {
    let randomnum;
    
    randomnum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (Number.isNaN(randomnum)) {
        window.alert("Enter the values of upper-limit , lower-limit and then click submit to generate the random number between the guven limits");
        return;
    }
    number.textContent = randomnum;
    console.log(randomnum)
    return;
}