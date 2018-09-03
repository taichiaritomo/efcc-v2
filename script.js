var goToFade = function() {
  document.getElementById("main").classList.add("faded");
//  setTimeout(function() {
//    window.location.href = page;
//  }, 200);
}

window.onload = function () {
  document.getElementById("main").classList.remove("faded");
};