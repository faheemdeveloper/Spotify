let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");

let songItems = Array.from(document.getElementsByClassName("songItem"));



let songs = [
    { songName: "Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Ishq", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Ishq", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Ishq", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove("ri-play-circle-line")
        masterPlay.classList.add("ri-pause-circle-line")
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("ri-pause-circle-line")
        masterPlay.classList.add("ri-play-circle-line")

    }
})


// audioElement.play()
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("ri-pause-circle-line")
        element.classList.add("ri-play-circle-line")

    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("ri-play-circle-line")
        e.target.classList.add("ri-pause-circle-line")
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play()
        masterPlay.classList.remove("ri-play-circle-line")
        masterPlay.classList.add("ri-pause-circle-line")
    })
})

document.getElementById("next").addEventListener("click", () => {
    if(songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play()
        gif.style.opacity = 1;
        masterPlay.classList.remove("ri-play-circle-line")
        masterPlay.classList.add("ri-pause-circle-line")
})

document.getElementById("previous").addEventListener("click", () => {
    if(songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play()
        masterPlay.classList.remove("ri-play-circle-line")
        masterPlay.classList.add("ri-pause-circle-line")
})