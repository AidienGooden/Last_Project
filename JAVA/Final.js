let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


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
