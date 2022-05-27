//HACKS MAKES COOKIE BITTER :/ 
function changeImage() {
    var Sound = document.getElementById('music_play');
    if (Sound.src.match("Images/music_speaker.png")) {
        Sound.src = "Images/music_speaker.png";
        Sound.src = "Images/mute_music_speaker.png";
    }
    else {
        Sound.src = "Images/music_speaker.png";
    }

}  

var cookiecount =0;

function add(){
    cookiecount= cookiecount+1
    document.getElementById('high-score').value = cookiecount;
}

const reloadtButton = document.querySelector("#reload");

function reload() {
    reload = location.reload();
}

reloadButton.addEventListener("click", reload, false);


  
    