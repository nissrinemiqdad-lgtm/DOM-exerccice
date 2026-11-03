const bouton = document.getElementById("btn");

btn.addEventListener("click",function(e) {
  e.target.textContent = "C'est cliqué !";
});