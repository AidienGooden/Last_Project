
let slideIndex = 0;

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  // Remove all show and border classes
  removeBorder();
  removeShow();
  // Add border to current tab item
  this.classList.add('tab-border');
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add('show');
}
function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('tab-border');
  });
}

// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
}

// Listen for tab item click
tabItems.forEach(item => {
  item.addEventListener('click', selectItem);
});
/********************************************************************** */
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}


let menuList = document.getElementById("menuList");
menuList.style.height = "0px";

function toggleMenu() {
  let menuList = document.getElementById("menuList")
  if (menuList.style.height == "0px") {
    menuList.style.height = "500px";
  }
  else {
    menuList.style.height = "0px";
  }
}
// window.addEventListener('click', toggleMenu);
/************************************************************************** */
//create XMLHTTPREQUEST object
let xhr = new XMLHttpRequest();

//when state of reuest changes
xhr.onload = function () {

  // if server response === 'ok', create some HTML
  if (xhr.status === 200) {

    let responseObject = JSON.parse(xhr.responseText)

    console.log(responseObject)
    let newCard = ''; // String object to hold "card" info and layout

    // loop through responseObject to obtain all elements
    //and data to add to the "card" on the webpage

    for (let i = 0; i < responseObject.Activities.length; i++) {
      newCard += "<li class ='Activities' style='width:560px'>"
        newCard += "<a href='" + responseObject.Activities[i].Link + "'>"
        //put anchor tag for the href of site linking to
        newCard += "<img  style='height: 200px; width: 260px; cover/center'src='" + responseObject.Activities[i].Image + "'>"
        newCard += "<h3>" + responseObject.Activities[i].Name + "</h3>"
        newCard += "</a>"
        newCard += "</li>"
      }
      document.getElementById('content_Activities').innerHTML += newCard

  }
}
xhr.open('GET', '../JAVA/Activities.Json', true)
//send the request--  argument and send will always be(null)
xhr.send(null)
/******************************************************************************* */
const gallery = document.querySelector('.gallery');
const track = document.querySelector('.gallery-track');
const cards = document.querySelectorAll('.card');
const easing = 0.05;
let startY = 0;
let endY = 0;
let raf;

const lerp = (start,end,t) => start * (1-t) + end * t;

function updateScroll() {
  startY = lerp(startY,endY,easing);
  gallery.style.height = `${track.clientHeight}px`;
  track.style.transform = `translateY(-${startY}px)`;
  activateParallax();
  raf = requestAnimationFrame(updateScroll);
  if (startY.toFixed(1) === window.scrollY.toFixed(1)) cancelAnimationFrame(raf);
}

function startScroll() {
  endY = window.scrollY; 
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(updateScroll);
}

function parallax(card) {
  const wrapper = card.querySelector('.card-image-wrapper');
  const diff = card.offsetHeight - wrapper.offsetHeight;
  const {top} = card.getBoundingClientRect();
  const progress = top / window.innerHeight;
  const yPos = diff * progress;
  wrapper.style.transform = `translateY(${yPos}px)`;
}

const activateParallax = () => cards.forEach(parallax);

function init() {
  activateParallax();
  startScroll();
}

window.addEventListener('load',updateScroll,false);
window.addEventListener('scroll',init,false);
window.addEventListener('resize',updateScroll,false);
