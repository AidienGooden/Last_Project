
let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) { slideIndex = 1 }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


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
    menuList.style.height = "400px";
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

        for (let i = 0; i <responseObject.Activities.length; i++) {
            newCard += "<li class ='Activities'>"
            newCard += "<img style='width:300px' src='" + responseObject.Activities[i].Image + "'"
            newCard +=  "<h3>" + responseObject.Activities[i].Name + "<h3/>"
            newCard += "<a>" + responseObject.Activities[i].Link +  "</a>"
            newCard += "</li>"
        }
        //add new card content to  the webpage
        document.getElementById('content').innerHTML = newCard
    }

}



//prepare the request 
xhr.open('GET', '../JAVA/Index.Json', true)
//send the request--  argument and send will always be(null)
xhr.send(null)