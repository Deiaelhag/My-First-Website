function showMessage(){
    alert("Hello Evreone!!!");
}
function changeTitle1() {
    document.getElementById("text").innerHTML = "The title has change";
}
function changeTitle2() {
    document.getElementById("text").innerHTML = "Welcome to my Website!";
}
function changeColor() {
    document.body.style.backgroundColor = "lightgreen";
}
function darkMood() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("text").style.color = "white";
}
function hideText() {
    document.getElementById("demo").style.display = "none";
}
function showText() {
    document.getElementById("demo").style.display = "block";
}
function reloadPage() {
    location.reload();
}


