var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var slidenav = document.getElementById('show');
var body = document.getElementById('body');
var bannrContent = document.getElementById('bannr-content');

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('b');
  slidenav.classList.toggle('show');
  body.classList.toggle('fixed');
  bannrContent.classList.toggle('blur-heading');
});

var contactBtn = document.getElementById("contact-us-btn");
var contactForm = document.getElementById("contact-form");

contactBtn.addEventListener('click', function() {
  contactForm.classList.toggle('contact-open');
  
});



function revealLine() {
  var revealsLine = document.querySelectorAll(".line-grow");

  for (var i = 0; i < revealsLine.length; i++) {

    var windowHeight = window.innerHeight;
    var elementTop = revealsLine[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsLine[i].classList.add("active");
    } else {
      revealsLine[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealLine);

function addactive() {
  var addclass = document.querySelectorAll("#add-active");

  for (var i = 0; i < addclass.length; i++) {

    var windowHeight = window.innerHeight;
    var elementTop = addclass[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      addclass[i].classList.add("active");
    } else {
      addclass[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", addactive);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {

      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
 
  

var imgarr=["./images/news2.jpg","./images/partner.jpg","./images/healthcare.jpg"];
var logoImgarr=["./images/anyhour.png","./images/pattern.png","./images/finger-paint.png"];
var headingarr=["Any Hour","Pattern","Fingerpaint"];
var infoarr=["Any Hour provides world-class home services, while also bringing new opportunities to tradespeople through significant investments in training, development, community, and culture.","Pattern helps world-class consumer companies accelerate their presence on eCommerce and leading global eCommerce marketplaces, leveraging proprietary technology, tools, and global teams.","Fingerpaint’s mission is to help developers of novel therapeutics get much-needed therapies into the hands of the consumers that need them most."];
var i = 0;
function slide() {
    document.getElementById("slide-img").src = imgarr[i];
    document.getElementById("heading").innerText=headingarr[i];
    document.getElementById("info").innerText=infoarr[i];
    document.getElementById("logoImg").src=logoImgarr[i];
    i++;
    if (i >= imgarr.length && i>=headingarr.length && i>= infoarr.length && i>= logoImgarr.length) {
        i = 0;
    }
}
setInterval("slide()", 4000);



let count1= 1;
// let endvalue=48;
function countdem(){
  count1++;
  let endvalue=48;
    document.querySelector(".counter").innerHTML=count1;
    if(count1 == endvalue){
      
    clearInterval(counter1);
    document.querySelector(".counter").innerText="48";
  }
}
var counter1 =setInterval(countdem,50)

var counter2 =setInterval(countdem1,50)
let count2= 1;
function countdem1(){
  count2++;
  document.querySelector(".counter1").innerHTML=count2;
  if(count2 == 50){
    clearInterval(counter2);
  }
}
