
var audio=[];
let prevbutton = document.querySelector("#buttonz");
let timestamp=document.querySelector("#timestamp");
let nextbutton = document.querySelector("#buttonq");





function reset() {
  
  for(let i=0;i<5;i++){
    audio[i].pause();
    
      }


}




function autonext () {

  
  reset();
  
    if(y>=4){
  y=0;
    }
    else{
      y=y+1;
    }
    audio[y].play();
    timeupdate();
    document.getElementById("buttonx").className = "far fa-3x  fa-pause-circle";
    console.log(y);

}



function timeupdate(){
  


  
audio[y].ontimeupdate=function(e){
  
  let comper =audio[y].currentTime*100/audio[y].duration;
  comper=Math.floor(comper);
  console.log(comper);
  
timestamp.value=comper;



}
}







audio[0]=new Audio();
audio[0].src="Tu-hai-Kahan.mp3";


audio[1]=new Audio();
audio[1].src="rabta.mp3";



audio[2]=new Audio();
audio[2].src="terazikr.mp3";

audio[3]=new Audio();
audio[3].src="milnehaimujhseaayi.mp3";

audio[4]=new Audio();
audio[4].src="hasshass.mp3";


var x;
var y=0;

function change(iconID,x){


    if(document.getElementById(iconID).className==="far fa-2x  fa-play-circle"){
      document.getElementById(iconID).className = "far fa-2x  fa-pause-circle";
      
   audio[x].play();
    }
    else {
      document.getElementById(iconID).className = "far fa-2x  fa-play-circle";
   audio[x].pause();
    }
    
  }





nextbutton.onclick=function(){
  reset();
  
    if(y>=4){
  y=0;
    }
    else{
      y=y+1;
    }
    audio[y].play();
    console.log(y);
    timeupdate();
    document.getElementById("buttonx").className = "far fa-3x  fa-pause-circle";
    
  }
  

  


prevbutton.onclick=function(){
  reset();
  
  if(y<=0){
y=4;
  }
  else{
    y=y-1;
  }
  console.log(y);
  timeupdate();
  audio[y].play();
  document.getElementById("buttonx").className = "far fa-3x  fa-pause-circle";
}

// console.log(y);

timestamp.value="0";

audio[y].ontimeupdate=function(e){

  



  let comper =audio[y].currentTime*100/audio[y].duration;
  comper=Math.floor(comper);
  //  console.log(comper);
timestamp.value=comper;

}


// console.log(timestamp);
timestamp.onclick=function(e){
 
//  console.log(timestamp.input);

  audio[y].currentTime=(timestamp.value/100)*audio[y].duration;
}



  
function change_(iconID){
  reset();

  if(document.getElementById(iconID).className=="far fa-3x  fa-play-circle"){
    document.getElementById(iconID).className = "far fa-3x  fa-pause-circle";
    
 audio[y].play();
  }
  else {
    document.getElementById(iconID).className = "far fa-3x  fa-play-circle";
 audio[y].pause();
  }

}

