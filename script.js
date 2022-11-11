/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
let counter = 1;

const advanceContent = () => {
  if (counter < 7) {
    counter++;
    let idToSelect = "#slide-" + counter;
    document.querySelector(idToSelect).classList.remove("hidden");
  }
};

const returnContent = () => {
  if (counter > 1) {
    let idToSelect = "#slide-" + counter;
    document.querySelector(idToSelect).classList.add("hidden");
    counter--;
  }
};

const downloadChecklist = () => {
  let contentToPrint = document.querySelector("#checklist");

  html2canvas(contentToPrint, {}).then((canvas) => {
    let a = document.createElement("a");
    a.download = "checklist.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  });
};

const toggleChecklist = () => {
  let myChecklist = document.querySelector("#checklist");
  myChecklist.classList.toggle("hidden");

  let toggleButton = document.querySelector("#toggle-checklist");
  if (myChecklist.classList.contains("hidden")) {
    toggleButton.innerHTML = "Open Checklist";
  } else {
    toggleButton.innerHTML = "Close Checklist";
  }
};

/* Slide Show avascript */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
