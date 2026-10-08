const up = document.getElementById("upper-limit");
const down = document.getElementById("lower-limit");
const submit = document.getElementById("submit");
const num = document.getElementById("generator");

let max;
let min;

max = Number(max);
min = Number(min);

submit.onclick = function () {
    if (up.value === "" || down.value === "") {
        window.alert("Enter the values of the upper limit and lower limits");
    }
}