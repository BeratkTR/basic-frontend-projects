function playSound(event){
    // console.log(event)
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`)
    const key = document.querySelector(`.key[data-key='${event.keyCode}']`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
}

function removeTransition(event){
    // console.log(event)
    if(event.propertyName === "box-shadow"){
        this.classList.remove("playing")   // arrow functions does not have "this" !!!!!!!!!
        // console.log(this)
    }
}


window.addEventListener("keydown", playSound)

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

document.addEventListener("visibilitychange", () => {
    console.log(event);

    if(document.hidden) document.title = "NOOO😭 PLS COME BACK"; 
    else document.title = "Drum Kit";       
})