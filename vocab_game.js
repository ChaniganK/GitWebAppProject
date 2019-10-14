const firebaseConfig = {
    apiKey: "AIzaSyAIi3biApr-eepswlSBOvYOd2ayV-E8Jrw",
    authDomain: "webapp-f4240.firebaseapp.com",
    databaseURL: "https://webapp-f4240.firebaseio.com",
    projectId: "webapp-f4240",
    storageBucket: "webapp-f4240.appspot.com",
    messagingSenderId: "489867505638",
    appId: "1:489867505638:web:a34c6bb296e298df03b027",
    measurementId: "G-PWPKPND8DP"
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();


mainVocab = document.querySelector(".mainVocab");
mainVocab.innerHTML = "BUTTER";

highScore = document.querySelector("#highScore");
highScore.innerHTML += "000";

score = document.querySelector("#score");
score.innerHTML += "000";

timeLeft = document.querySelector("#timeLeft");


// Timer //
var timer;

function myTimer(sec) {
    $.wait = function (callback, stoptime) {
        return window.setTimeout(callback, stoptime * 1000);
    };
    var myaddd = sec;
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(function () {
        var secdel = sec--;
        $('#timeLeft').text(secdel);
        if (sec < 0) {
            clearInterval(timer);
            //document.getElementById("timeLeft").innerHTML = "EXPIRED";
            $(".gamePlay").hide();
        }
    }, 1000);
    $("#plusx").click(function () {
        sec += 10; //กดปุ่มแล้ว +10 s
    });
}

$(document).ready(function () {
    $(".countStart").click(function () {
        $(".countStart").hide();
        $(".gameStarted").show();
        myTimer(10);
    });
});