const dateEl = document.getElementsByTagName("input")[0];
const resultEl = document.querySelector("#result > span");
const button = document.getElementsByTagName("button")[0]

// date verme
const today = new Date().toISOString().split("T")[0];
dateEl.max = today;

const calculate = () => {
    const today = new Date();
    const birth = new Date(dateEl.value);  // date alma

    let age = today.getFullYear() - birth.getFullYear();
    if(today.getMonth() < birth.getMonth()) age--;
    else if(today.getMonth() == birth.getMonth() && today.getDate() < birth.getDate()) age--;

    resultEl.innerHTML = age;
}


document.addEventListener("keydown", () => {
    if(event.key === "Enter"){
        button.click();
    }  
})