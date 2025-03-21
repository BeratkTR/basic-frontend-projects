let amountEl = document.getElementsByTagName("input")[0];
let percentageEl = document.getElementsByTagName("input")[1];
let totalEl = document.querySelector("#total > span");
let button = document.querySelector("button")

const calculate = () => {
    const amount = amountEl.value;
    const percentage = percentageEl.value;
    const total = amount * percentage / 100;

    totalEl.innerHTML = total.toFixed(2);

    if (!amountEl.checkValidity()) {
        document.getElementById("validation1").innerHTML = amountEl.validationMessage;
    }
    if (!percentageEl.checkValidity()) {
        document.getElementById("validation2").innerHTML = percentageEl.validationMessage;
    }
    if (amountEl.checkValidity()) {
        document.getElementById("validation1").innerHTML = "";
    }
    if (percentageEl.checkValidity()) {
        document.getElementById("validation2").innerHTML = "";
    }
}

document.addEventListener("keydown", () => {
    if(event.key === "Enter") button.click();
})