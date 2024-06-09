var numberofdrums= document.querySelectorAll(".drum").length;

for(var i=0;i<numberofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonname= this.innerHTML;//innerHTML will take all the Html tags as well as thee text inside the tags

        makeSound(buttonname);  //makeSound is a function that has been called later on for making the sound

        buttonanimation(buttonname);//buttonAnimation is  a function that will execute the animation

    });
}
document.addEventListener("keydown", function(event){
    makeSound(event.key); //event.key returns the string value of the physical key that was pressed
    buttonanimation(event.key);

})

function makeSound(key){
    switch(key){
        case("w"):
        var audio= new Audio("sounds/tom-1.mp3");
               audio.play();
        break;
        case("a"):
            var audio1= new Audio("sounds/tom-2.mp3");
              audio1.play();
            break;
        case("s"):
        var audio2= new Audio("sounds/tom-3.mp3");
             audio2.play();
        break;
        case("d"):
        var audio3= new Audio("sounds/tom-4.mp3");
             audio3.play();
             break;

        case("j"):
             var audio4= new Audio("sounds/snare.mp3");
                  audio4.play();
                  break;
        case("k"):
                  var audio5= new Audio("sounds/crash.mp3");
                       audio5.play();
                break;
        case("l"):
                var audio6 = new Audio("sounds/kick-bass.mp3");
                audio6.play();
    }

}


function buttonanimation(currentKey){ //cure
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    
}