const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogOut");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

btnLogin.addEventListener("click", e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);

    promise.catch(e => console.log(e.message));
});

btnSignUp.addEventListener("click", e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener("click", e => {
    firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log("firebaseUser");
        btnLogout.classList.remove("hide");
    } else {
        console.log("not logged in");
        btnLogout.classList.add("hide");
    }
});

function random(number) {
    return Math.floor(Math.random() * number);
}

function swapButton() {
    var i = random(2);
    var test = showI();
    if (i == 0) {
        button1.innerText = "eng";
        button2.innerText = "thai";
        console.log(test);
    }
    if (i == 1) {
        button1.innerText = "thai";
        button2.innerText = "eng";
        console.log(test);
    }
}

function showI() {
    var x = 5;
    return x;
}