
let listBtn=document.getElementById("btn-list");
let pitchBtn=document.getElementById("btn-pitch");
let listTable=document.getElementById("listTable");
let pitch=document.getElementById("pitch");
let footer =document.querySelector('.footer');

listBtn.addEventListener('click',
function showListTable(){
    listTable.style.display="block";
    pitch.style.display="none";
    listBtn.classList.add("btn-active");
    pitchBtn.classList.remove("btn-active");
    footer.style.display="flex";
    
});

pitchBtn.addEventListener('click',
function showPitch(){
        listTable.style.display="none";
        pitch.style.display="block";
        pitchBtn.classList.add("btn-active");
        listBtn.classList.remove("btn-active");
        footer.style.display="none";
});


// timer
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
  document.getElementById("time-left").innerHTML = hours + "h "
  + minutes + "m " +"Left" ; 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-left").innerHTML = "0m 0s Left";
  }
}, 1000);
