     
 
var countDownDate = new Date("Jan 7, 2023 00:00:00").getTime();

//na svaku 1s updejtuje se vreme
var x = setInterval(function() {

  // sadasnji datum
  var now = new Date().getTime();
    
  // od kog do kog dana se broji
  var distance = countDownDate - now;
    
  // matematicki obracunavanje do datuma 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").innerHTML =
    "<div class=\"days\"> \
  <div class=\"c-number\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"c-number\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"c-number\">" + minutes + "</div>mins</div> \
<div class=\"seconds\"> \
  <div class=\"c-number\">" + seconds + "</div>sec</div> \
</div>";
}, 1000);

setInterval(createSnowFlake, 100);
 function createSnowFlake() {
  const snow_flake = document.createElement('i');
  snow_flake.classList.add('far');
  snow_flake.classList.add('fa-snowflake');
  snow_flake.style.left = Math.random() * window.innerWidth + 'px';
  snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
  snow_flake.style.opacity = Math.random();
  snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
  
  document.body.appendChild(snow_flake);
 
  setTimeout(() => {
    snow_flake.remove();
  }, 5000)
}
function myFunction() {
var r_text = new Array ();
r_text[0] = "The wish will come true";
r_text[1] = "The wish will not come true";
var i = Math.floor(2*Math.random())
alert(r_text[i]);


window.onload=function(){
    document.getElementById("myAudio").play();
  }
}