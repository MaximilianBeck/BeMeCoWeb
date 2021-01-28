const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const lines = document.querySelectorAll(".hamburger .line");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  lines.forEach(link => {
    link.classList.toggle("open");
  });
  lines.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
// CP Map //

function mymap() {
  var mapProp = {
    center: new google.maps.LatLng(),
    zoom: 5
  };
  var map = new google.maps.Map(document.getElementById("ct-sc-map"), mapProp);
}
