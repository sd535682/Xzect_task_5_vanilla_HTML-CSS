// Navbar
function closeSidebar() {
  document.querySelector(".sidebar").style.display = "none";
}

function openSidebar() {
  document.querySelector(".sidebar").style.display = "block";
}

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

acc[0].classList.add("active");
acc[0].nextElementSibling.style.display = "block";

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Close all panels
    for (var j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
      acc[j].nextElementSibling.style.display = "none";
    }

    // Open the clicked panel
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
