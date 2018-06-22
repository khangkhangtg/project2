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
  var box = document.getElementById("boxRegister");
  if(e.target == box){
    box.style.display = 'none';
  }
}

window.onload = function(){
  var box = document.getElementById("boxRegister");
  var s = document.getElementsByClassName("closeX")[0];
  var showbox = document.getElementsByClassName("themhocvien")[0];
  s.onclick = function(){
    box.style.display = "none";
  }
  showbox.onclick = function(){
    box.style.display = 'block';
  }
}
