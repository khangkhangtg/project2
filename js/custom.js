// menu-dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// aside dropdown
function myFunction2() {
  document.getElementById("aside-dropdown-content").classList.toggle("aside-show");
}

window.onclick = function(e) {
  if (!e.target.matches('.aside-dropbtn')) {
    var as_dd = document.getElementById("aside-dropdown-content");
    if (as_dd.classList.contains('aside-show')) {
      as_dd.classList.remove('asid-show');
    }
  }
}