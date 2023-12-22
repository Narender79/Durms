var sound=["./sounds/tom-1.mp3","./sounds/tom-2.mp3","./sounds/tom-3.mp3","./sounds/tom-4.mp3",
"./sounds/snare.mp3","./sounds/crash.mp3","./sounds/kick-bass.mp3"];


document.addEventListener("keypress",function(event){
     var k=event.key;
     makesound(k);
     paint(k);
});

function makesound(key){
     switch (key) {
          case "w":
               var aud= new Audio(sound[0]);
               aud.play();
               break;
          case "a":
               var aud= new Audio(sound[1]);
               aud.play();
               break;
          case "s":
               var aud= new Audio(sound[2]);
               aud.play();
               break;
          case "d":
               var aud= new Audio(sound[3]);
               aud.play();
               break;
          case "j":
               var aud= new Audio(sound[4]);
               aud.play();
               break;
          case "k":
               var aud= new Audio(sound[5]);
               aud.play();
               break;
          case "l":
               var aud= new Audio(sound[6]);
               aud.play();
               break;
          default :
               break;
     }
}

function paint(newevent){
     var painter=document.querySelector("."+newevent);
     var temp=painter;
     painter.classList.add("pressed");
     setTimeout(function(){painter.classList.remove("pressed");},300);
}
