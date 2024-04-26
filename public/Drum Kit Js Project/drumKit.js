//Get the drum buttons
var drumKit = document.querySelectorAll(".drum");

//Assign each button a sound
for(let i = 0; i < drumKit.length; i++){
    //Add click event listener
    drumKit[i].addEventListener("mousedown", function() {
        //Get the letter of the button
        var letter = this.innerHTML;

        //Play sound based on the letter on the button pressed
        PlaySound(letter);
        //Animate the button
        ButtonAnimation(letter);

    });
}

document.addEventListener("keydown", function(event) {
    //Play sound based on key pressed
    PlaySound(event.key);
    //Animate the button
    ButtonAnimation(event.key);
});

function PlaySound(letter) {
    //Checks letter to determine relevant sound
    switch(letter) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default: console.log(letter);
    }
}

function ButtonAnimation(currentKey) {
    //Adds class, then removes after a delay to provide animation
    var activeButton = document.getElementsByClassName(currentKey)[0];
    activeButton.classList.add("pressed");
    setTimeout(() => {activeButton.classList.remove("pressed")}, 100);
}