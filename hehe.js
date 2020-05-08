document.title = "disco partay";

var div1 = document.createElement("div");
var h1 = document.createElement("h1");
var h2 = document.createElement("h6");
var h3 = document.createElement("h4");
var h4 = document.createElement("h6");
var btn1 = document.createElement("button");  // Change color btn
var btn2 = document.createElement("button");  // DISCO btn
var btn3 = document.createElement("button");  // Stop DISCO btn
var select = document.createElement("select", songs);
var box = document.createElement("input");
var boxBtn = document.createElement("button");

// Work with the box uploading
box.type = "text";
box.value = "Type in your own song!";
boxBtn.innerHTML = "Submit"

// Array of the songs
var songs = [
    "56709",
    "hotYungThug",
    "LOOPTY LOOP (SLEAZY X bbydino)",
    "Pink Lemonade",
    "surfin\'"
];
// Add each song to the select form.
songs.forEach(s=>{
    var el = document.createElement("option");
    el.textContent = s;
    el.value = s;
    select.appendChild(el);
});

// Customize page
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.padding = "10% 0%";


// Customize buttons
[btn1, btn2, btn3, select, box, boxBtn].forEach(button => {
    button.style.background = "black";
    button.style.color = "white";
    button.style.textAlign = "center";
    button.style.margin = "center";
    button.style.padding = "10px";
    button.style.borderRadius = "20px";
});
btn1.innerHTML = "CLICK ME!";
btn2.innerHTML = "ISS PARTY TIME";
btn3.innerHTML = "PUHLEASE HEAL MY EPILEPSY!";
btn3.style.opacity = "0";  // invisible third button
btn3.style.pointerEvents = "none";  // make the stop button unclickable

// Customize headers
h1.innerHTML = "#000000";
h2.innerHTML = "DISCLAIMER: I AM NOT RESPONSIBLE FOR YOUR ACTIONS."
h3.innerHTML = "SONGS:";
h4.innerHTML = "Type in your own song!";

// Adding each element to the Document Object Model (DOM). NOTICE. the order appended matters
div1.appendChild(h2);
div1.appendChild(btn1);
div1.appendChild(h1);
div1.appendChild(btn2);
div1.appendChild(document.createElement('br'));
div1.appendChild(btn3);
div1.appendChild(document.createElement('br'));
div1.appendChild(h3);
div1.appendChild(select);
div1.appendChild(document.createElement('br'));
div1.appendChild(h4);
div1.appendChild(box);
div1.appendChild(boxBtn);

document.body.appendChild(div1);

// array containing the 16 different hex characters
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

var t;  // needs to be in the scopes of different buttons
var muse = new Audio();

btn1.addEventListener("click", ()=>{
    changeColor();
});

btn2.addEventListener("click", function() {
    h2.innerHTML = "OHHHHH YEAH BABY!!!!!!!";
    btn2.innerHTML = "DANCE PARTAY!";  // change the text of the button
    btn2.style.pointerEvents = "none";  // make the stop button clickable
   
    muse.src = `./audio/${songs[select.selectedIndex]}.mp3`;
    muse.play();
    
    setTimeout(() => {
        btn3.style.pointerEvents = "all";  // make the stop button clickable
        btn3.style.opacity = "1"; // make the stop button visible
    }, 2000);

    clearInterval(t);  // clears the pervious interval before starting another one
    t = setInterval(() => {
        changeColor();
    }, 200);
});

btn3.addEventListener("click", ()=>{
    clearInterval(t);  // stops the flashing by clearing the interval
    btn2.style.pointerEvents = "all";  // make the stop button clickable
    btn3.style.pointerEvents = "none";  // make the stop button unclickable
    btn3.style.opacity = "0"; // make the stop button visible
    h2.element
    muse.pause();

    btn2.innerHTML = "HA! YOU'RE WELCOME!";
    setTimeout(() => {
        btn2.innerHTML = "DANCE PARTAY!";  // change the text of the button for 1 second
    }, 500);
});

// Clear the text box if text was the default text
box.addEventListener('click', ()=>{
    if (box.value == "Type in your own song!") box.value = "";
});
// Submit on ENTER press
box.addEventListener('keyup', e=>{
    e.preventDefault();
    if (e.keyCode === 13) openSearchURL();  // ENTER keycode is 13
});

boxBtn.addEventListener('click', ()=> {
    openSearchURL();
});


// Opens up a new window searching what the text was on youtube
function openSearchURL() {
    if (box.value != "" && box.value != "Type in your own song!")
        window.open(`https://www.youtube.com/results?search_query=${box.value}`);
}

function changeColor() {
    var hex = "#";  // initialize hex color with '#'

    for (var i = 0; i < 6; i++) {
        hex += arr[Math.floor(Math.random()*16)];  // Append 6 random hex character to the color
    }

    h1.innerHTML = hex;
    document.body.style.background = hex;
}