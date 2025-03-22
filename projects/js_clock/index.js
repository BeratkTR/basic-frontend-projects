const secondHandEl = document.querySelector(".second-hand")
const minHandEl = document.querySelector(".min-hand")
const hourHandEl = document.querySelector(".hour-hand")

const audio = new Audio("./audio/wall-clock-ticking.wav");

const setDate = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60)*360) -90;   //başlangıç kuzey yönü ama 0deg batı yönüne bakıyor
    secondHandEl.style.transform = `rotate(${secondDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = ((min/60)*360) - 90; 
    minHandEl.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour/12)*360) - 90; 
    hourHandEl.style.transform = `rotate(${hourDegrees}deg)`;

    audio.play();
}

setInterval(setDate, 1000);