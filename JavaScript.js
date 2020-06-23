//  document.querySelector("button") is eventTarget
//  in this case it only select the first button

var buttons_aval = document.querySelectorAll(".drum");
var drum_sounds = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];
var drum_kinds = ["crash", "kick-bass", "snares", "tom-1", "tom-2", "tom-3", "tom-4"];


for (i = 0; i < buttons_aval.length; i++) {
    
    drum_kinds[i] = new Audio(drum_sounds[i]);

    // for EventListener - click
    buttons_aval[i].addEventListener("click", function() {

        // this is key step: this.innerHTML
        var buttonInnerHTML = this.innerHTML;
        // this.style.color = "white";

        make_sound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

        
    });

}

    // for keyboard click
        document.addEventListener('keydown', function (event) {
        make_sound(event.key);
        buttonAnimation(event.key);

        });

// function to deliver sounds
function make_sound (click_press) {
    switch (click_press) {


        case "k":
            drum_kinds[0].pause();
            drum_kinds[0].currentTime = 0;
            drum_kinds[0].play();
            break;

        
        case "l":
            drum_kinds[1].pause();
            drum_kinds[1].currentTime = 0;
            drum_kinds[1].play();
            break;

        
        case "j":
            drum_kinds[2].pause();
            drum_kinds[2].currentTime = 0;
            drum_kinds[2].play();
            break;


        case "w":
            drum_kinds[3].pause();
            drum_kinds[3].currentTime = 0;
            drum_kinds[3].play();
            break;

        
        case "a":
            drum_kinds[4].pause();
            drum_kinds[4].currentTime = 0;
            drum_kinds[4].play();
            break;

        
        case "s":
            drum_kinds[5].pause();
            drum_kinds[5].currentTime = 0;
            drum_kinds[5].play();
            break;      

        
        case "d":
            drum_kinds[6].pause();
            drum_kinds[6].currentTime = 0;
            drum_kinds[6].play();
            break;   
    
        default: console.log(click_press);
    }

}

// animations for pressing.wa

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}
