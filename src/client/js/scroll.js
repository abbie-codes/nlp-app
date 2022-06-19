//Add Event listener for to start function when scrolling
document.addEventListener("scroll", scrollFunction)

//When document is scrolled by 400px, show button
function scrollFunction() {
  let scrollButton = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export { scrollToTop};
export { scrollFunction};