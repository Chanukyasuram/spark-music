
/*!
    Audiospark Template
    Created on date: 9/24/2023
    Built on date: 10/1/2023
*/


// ## LOADER
window.addEventListener('load', () => {
    setTimeout( () => {
        document.querySelector(".loader-warpper").classList.toggle("loader-warpper-hide");
    }, 2000);
});


// ## NAVBAR MOBILE
function navbarMobileToggle() {
    document.getElementById("navbarMobileToggle").classList.toggle("navbarMobileToggle");
}

// SWITCH MODE
function switchMode() {
    document.body.classList.toggle("switchMode");
    document.getElementById("switchModeBtnDark").classList.toggle("switchModeBtnDarkToggle");
    document.getElementById("switchModeBtnLight").classList.toggle("switchModeBtnLightToggle");

    document.getElementById("logoFooterModeLight").classList.toggle("logoFooterModeLightToggle");
    document.getElementById("logoFooterModeDark").classList.toggle("logoFooterModeDarkToggle");
}

// SEARCH MODE
function searchMode() {
    document.getElementById("searchMode").classList.toggle("searchMode");
    document.getElementById("overlaySearchMode").classList.toggle("overlaySearchMode");
}

// AVATAR DROPDOWN
function avatarDropdown() {
    document.getElementById("avatarDropdown").classList.toggle("avatarDropdown");
}

// SUPPORT & CHAT MODE
function supportChatMode() {
    document.getElementById("supportChatMode").classList.toggle("supportChatMode");
}


// ## BACK TOP
const backTop = document.getElementById("backTop");
const navbarFixed = document.getElementById("navbarFixed");

window.addEventListener("scroll", () => {
    if(window.scrollY > 200) {
        backTop.classList.add("back-top-active");
    } else if(window.scrollY > 50) {
        navbarFixed.classList.add("nav-fixed-active");
    } else {
        backTop.classList.remove("back-top-active");
        navbarFixed.classList.remove("nav-fixed-active");
    }
});


// ## LIKE MUSIC HEADER
function likeMusicHeader() {
    document.getElementById("likeMusicHeader").classList.toggle("likeMusicHeaderToggle");
}
function likeMusicPlay() {
    document.getElementById("likeMusicPlay").classList.toggle("likeMusicPlayToggle");
}


// ## PLAY SOUND/MUSIC PLAYER
// var audio1 = new Audio("C:/Users/hp/Downloads/02 - Balapam Patti - SenSongsMp3.co.mp3");
// var audio1 = new Audio("music/balapam-patti.mp3.mp3");
// var audio2 = new Audio("music/Vennela.mp3");
// var audio3 = new Audio("music/Raavana.mp3");
// var audio4 = new Audio("music/Rolex.mp3");
// var audio5 = new Audio("music/Kaithi.mp3");
// var audio6 = new Audio("music/kurchi.mp3");
// var audio7 = new Audio("music/Ringa.mp3");
// var audio8 = new Audio("music/Nuvvasthanante.mp3");
// var audio9 = new Audio("music/Aa.mp3");
// var audio10 = new Audio("music/Chiru.mp3");

// const audioFiles = [
//     "music/balapam-patti.mp3.mp3",
//     "music/Vennela.mp3",
//     "music/Raavana.mp3",
//     "music/Rolex.mp3",
//     "music/Kaithi.mp3",
//     "music/kurchi.mp3",
//     "music/Ringa.mp3",
//     "music/Nuvvasthanante.mp3",
//     "music/Aa.mp3",
//     "music/Chiru.mp3"
// ];

var audio1 = new Audio("music/balapam-patti.mp3.mp3");
var audio2 = new Audio("music/Vennela.mp3");
var audio3 = new Audio("music/Raavana.mp3");
var audio4 = new Audio("music/Rolex.mp3");
var audio5 = new Audio("music/Kaithi.mp3");
var audio6 = new Audio("music/kurchi.mp3");
var audio7 = new Audio("music/Ringa.mp3");
var audio8 = new Audio("music/prabhas.mp3");
var audio9 = new Audio("music/Aa.mp3");
var audio10 = new Audio("music/Chiru.mp3");

const audios = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10];

function pauseAllExcept(index) {
    audios.forEach((audio, i) => {
        if (i !== index) {
            audio.pause();
            audio.currentTime = 0;
            const btnPlay = document.getElementById(`playBtnPlayCard${i + 1}`);
            const btnPause = document.getElementById(`pauseBtnPlayCard${i + 1}`);
            if (btnPlay && btnPause) {
                btnPlay.classList.remove("playBtnPlayCardToggle");
                btnPause.classList.remove("pauseBtnPlayCardToggle");
            }
        }
    });
}

function playSound1() {
    pauseAllExcept(0);
    audio1.play();
    document.getElementById("playBtnPlayCard1").classList.add("playBtnPlayCardToggle");
    document.getElementById("pauseBtnPlayCard1").classList.add("pauseBtnPlayCardToggle");
}
function pauseSound1() {
    audio1.pause();
    document.getElementById("pauseBtnPlayCard1").classList.remove("pauseBtnPlayCardToggle");
    document.getElementById("playBtnPlayCard1").classList.remove("playBtnPlayCardToggle");
}

function playSound2() {
    pauseAllExcept(1);
    audio2.play();
    document.getElementById("playBtnPlayCard2").classList.add("playBtnPlayCardToggle");
    document.getElementById("pauseBtnPlayCard2").classList.add("pauseBtnPlayCardToggle");
}
function pauseSound2() {
    audio2.pause();
    document.getElementById("pauseBtnPlayCard2").classList.remove("pauseBtnPlayCardToggle");
    document.getElementById("playBtnPlayCard2").classList.remove("playBtnPlayCardToggle");
}
function playSound3() {
    pauseAllExcept(2);
    audio3.play();
    document.getElementById("playBtnPlayCard3").classList.add("playBtnPlayCardToggle");
    document.getElementById("pauseBtnPlayCard3").classList.add("pauseBtnPlayCardToggle");
}
function pauseSound3() {
    audio3.pause();
    document.getElementById("pauseBtnPlayCard3").classList.remove("pauseBtnPlayCardToggle");
    document.getElementById("playBtnPlayCard3").classList.remove("playBtnPlayCardToggle");
}
function playSound4() {
    pauseAllExcept(3);
    audio4.play();
    document.getElementById("playBtnPlayCard4").classList.add("playBtnPlayCardToggle");
    document.getElementById("pauseBtnPlayCard4").classList.add("pauseBtnPlayCardToggle");
}
function pauseSound4() {
    audio4.pause();
    document.getElementById("pauseBtnPlayCard4").classList.remove("pauseBtnPlayCardToggle");
    document.getElementById("playBtnPlayCard4").classList.remove("playBtnPlayCardToggle");
}
function playSound5() {
    pauseAllExcept(4);
    audio5.play();
    document.getElementById("playBtnPlayCard5").classList.add("playBtnPlayCardToggle");
    document.getElementById("pauseBtnPlayCard5").classList.add("pauseBtnPlayCardToggle");
}
function pauseSound5() {
    audio5.pause();
    document.getElementById("pauseBtnPlayCard5").classList.remove("pauseBtnPlayCardToggle");
    document.getElementById("playBtnPlayCard5").classList.remove("playBtnPlayCardToggle");
}
function playSound6() {
    pauseAllExcept(5);
    audio6.play();
    document.getElementById("playBtnPlayCard6").classList.add("playBtnPlayCardToggle");
    document.getElementById("pauseBtnPlayCard6").classList.add("pauseBtnPlayCardToggle");
}
function pauseSound6() {
    audio3.pause();
    document.getElementById("pauseBtnPlayCard6").classList.remove("pauseBtnPlayCardToggle");
    document.getElementById("playBtnPlayCard6").classList.remove("playBtnPlayCardToggle");
}
function playSound7() {
    pauseAllExcept(6);
    audio7.play();
    document.getElementById("playBtnPlayCard7").classList.add("playBtnPlayCardToggle");
    document.getElementById("pauseBtnPlayCard7").classList.add("pauseBtnPlayCardToggle");
}
function pauseSound7() {
    audio7.pause();
    document.getElementById("pauseBtnPlayCard7").classList.remove("pauseBtnPlayCardToggle");
    document.getElementById("playBtnPlayCard7").classList.remove("playBtnPlayCardToggle");
}
function playSound8() {
    pauseAllExcept(7);
    audio8.play();
    document.getElementById("playBtnPlayCard8").classList.add("playBtnPlayCardToggle");
    document.getElementById("pauseBtnPlayCard8").classList.add("pauseBtnPlayCardToggle");
}
function pauseSound8() {
    audio8.pause();
    document.getElementById("pauseBtnPlayCard8").classList.remove("pauseBtnPlayCardToggle");
    document.getElementById("playBtnPlayCard8").classList.remove("playBtnPlayCardToggle");
}
function playSound9() {
    pauseAllExcept(8);
    audio9.play();
    document.getElementById("playBtnPlayCard9").classList.add("playBtnPlayCardToggle");
    document.getElementById("pauseBtnPlayCard9").classList.add("pauseBtnPlayCardToggle");
}
function pauseSound9() {
    audio9.pause();
    document.getElementById("pauseBtnPlayCard9").classList.remove("pauseBtnPlayCardToggle");
    document.getElementById("playBtnPlayCard9").classList.remove("playBtnPlayCardToggle");
}
function playSound10() {
    pauseAllExcept(9);
    audio10.play();
    document.getElementById("playBtnPlayCard10").classList.add("playBtnPlayCardToggle");
    document.getElementById("pauseBtnPlayCard10").classList.add("pauseBtnPlayCardToggle");
}
function pauseSound10() {
    audio3.pause();
    document.getElementById("pauseBtnPlayCard10").classList.remove("pauseBtnPlayCardToggle");
    document.getElementById("playBtnPlayCard10").classList.remove("playBtnPlayCardToggle");
}

// PLAY SOUND
// function playSound() {
//     audio2.pause(); 
//     audio2.currentTime=0;
//     audio1.play();
//     document.getElementById("playBtnPlayCard").classList.add("playBtnPlayCardToggle");
//     document.getElementById("pauseBtnPlayCard").classList.add("pauseBtnPlayCardToggle");
//     document.getElementById("playBtnPlayCard2").classList.remove("playBtnPlayCardToggle");
//     document.getElementById("pauseBtnPlayCard2").classList.remove("pauseBtnPlayCardToggle");
// }

// PAUSE SOUND
// function pauseSound() {
//     audio1.pause();
//     document.getElementById("pauseBtnPlayCard").classList.remove("pauseBtnPlayCardToggle");
//     document.getElementById("playBtnPlayCard").classList.remove("playBtnPlayCardToggle");
// }
function likeMusicPlayer() {
    document.getElementById("likeMusicPlayer").classList.toggle("likeMusicPlayerToggle");
}
// function playSound2() {
//     audio1.pause();
//     audio1.currentTime = 0; // pause other audio
//     audio2.play();
//     document.getElementById("playBtnPlayCard2").classList.add("playBtnPlayCardToggle");
//     document.getElementById("pauseBtnPlayCard2").classList.add("pauseBtnPlayCardToggle");
//     document.getElementById("playBtnPlayCard").classList.remove("playBtnPlayCardToggle");
//     document.getElementById("pauseBtnPlayCard").classList.remove("pauseBtnPlayCardToggle");

// }

// function pauseSound2() {
//     audio2.pause();
//     document.getElementById("pauseBtnPlayCard2").classList.remove("pauseBtnPlayCardToggle");
//     document.getElementById("playBtnPlayCard2").classList.remove("playBtnPlayCardToggle");
// }
// COLLAPSE MUSIC PLAYER
function collapseMusicPlayer() {
    document.getElementById("sectionMusicPlayer").classList.toggle("sectionMusicPlayerToggle");
    document.getElementById("collapseMusicPlayerBtn").classList.toggle("collapseMusicPlayerBtnToggle");
    document.getElementById("expandMusicPlayerBtn").classList.toggle("expandMusicPlayerBtnToggle");
}

// FULL PLAYER
function fullPlayer() {
    document.getElementById("fullPlayer").classList.toggle("fullPlayer");
}
function fullPlayerHeaderDropdown() {
    document.getElementById("fullPlayerHeaderDropdown").classList.toggle("fullPlayerHeaderDropdown");
}

// ## DOWNLOAD
function download() {
    document.getElementById("download").classList.toggle("downloadToggle");

    setTimeout(() => {
        window.location.href = "../musics/1.mp3";
    }, 3000);
}

// NUMBER ALBUMS
//var cardGridLen = document.getElementById("cardGridLen").childElementCount;
//var numAlbums = document.getElementById("numAlbums");
//numAlbums.innerHTML = cardGridLen;