const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }