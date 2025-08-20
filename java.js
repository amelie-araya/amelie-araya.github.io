

var i = 1; 
var time = 1000; 
var images = [];


// Image List !!!

images[0] = 'images/loginpage.jpg';
images[1] = 'images/survone.jpg ';
images[2] = 'images/surveillancedad2.jpg';
images[3] = 'images//mcsurvdoor.jpg';
images[4] = 'images/mcsurv1.jpg';




function changeImg(){       
      
  document.getElementById("slide").setAttribute("src",images[i]); 

  if(i < images.length - 1){  
  i++;
  }    
}



function destroyElements() {

    document.getElementById("slide").style.opacity = "0";
    document.getElementById("text1").style.opacity = "0";
    var Audio = document.getElementById("AudioSlide1");
   Audio.pause(); 
   audio.currentTime = 0;

}

function textboxAppear() {

    document.getElementById("inputTextBox").style.opacity = "1"; // Show input text

}

function showGridLayout() {
    document.getElementById("loginButton").style.opacity = "0";
    document.getElementById("singleImageContainer").style.display = "none";
    document.getElementById("gridImageContainer").style.display = "flex";
    textboxAppear();

  }

  function showSingleLayout() {
    document.getElementById("singleImageContainer").style.display = "flex";
    document.getElementById("gridImageContainer").style.display = "none";

  }



function disappear() {

    document.getElementById("loginButton").style.opacity = "0";

}

function hideVideo() {
    document.getElementById("videoElement").style.display = "none";
} 

var x = 0;

 function words() { 

    var words = new Array();
    var response = new Array();

    words[0] = "Can I be of assistance?";
    response[0] = "I’m- I’m fine...";
    words[1] = "Your heart rate appears to have increased, my sensors are picking up signs of distress.";
    response[1] = "I’m trying to find a good photo of Dad.";
    words[2] = "I can assist you. Would you like me to find a photo of your father?";
    response[2] = "OK";
    words[3] = "I can source an image of your father where he appears warm, happy, and loving.";
    response[3] = "Sounds good";
    words[4] = "How About This One?";
    response[4] = "What? That isn’t… Stop! That isn’t Dad. Stop doing that to him.";
    words[5] = "My apologies, was this not useful?";
    response[5] = "I’m just… I’m looking for a better photo of Dad. Not- Not that";
    words[6] = "I understand. You would like an existing photo of your father. Here are some photos you haven’t looked at yet.";
    response[6] = "Show Me";
    words[7] = "";
    response[7] = "When were these taken? How did you get this photo of him?";
    words[8] = "I am always recording and capturing footage to better improve your lives.";
    response[8] = "This is… You can’t do that, that’s so invasive.";
    words[9] = "Your parents opted into this feature when purchasing the e-Nanny home assistance model.";
    response[9] = "Do you have... Does that mean photos like these exist of me?";
    words[10] = "Of course. This feature allows recordings and memories to be kept for later observation.";
    response[10] = "So this whole time they’ve been recording me.";

    if (x == 7) {
      changeImg();
      showSingleLayout();
    }
    document.getElementById("aiText").innerHTML = words[x];
    if (x == 4) { 
      document.getElementById("videoElement").style.display = "inline";
    };
       
    setTimeout(() => {
        document.getElementById("inputTextBox").innerHTML = response[x];
        if (x < 10) {
          x = x + 1;
        };
      }, 1000)

      if (x == 10) {
        playAudio();
      } 
    
     
   
 }

 function playAudio() {

    var Audio = document.getElementById("Audio");
    if (Audio.paused) {
        Audio.play();
        Audio.volume = 1;
    } else {
        Audio.pause();
    }
}


document.addEventListener('keydown', function(e) {
  if (e.keyCode == 13) {
    playAudio(); 
  }
});

window.onload = function() {
    document.getElementById("loginButton").style.opacity = "1"; 
    document.getElementById("slide").style.opacity = "1"; 
}
