//Show success message
function showWelcomeMessage() {
    alert("Welcome to My Website!!!");
}
function showMessage() {
    alert("Thank you!! Your message has been sent successfully");
}
function changeTitle() {
    document.getElementById("text").innerHTML = "The title has change";
}
function unChangeTitle() {
    document.getElementById("text").innerHTML = "My First Website";
}
//Change background color
function changeColor() {
    document.body.style.backgroundColor = "lightgreen";
}
//Enable dark moode
function darkMood() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("text").style.color = "white";
    document.querySelector("form").style.backgroundColor = "black";
    document.querySelector("form").style.color = "white";
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


