const info = document.getElementById("info")
const couleurButton = document.querySelectorAll(".color-btn") 
console.log(info)
console.log(couleurButton);

couleurButton.forEach((color) => {
    color.addEventListener("mouseenter" , () => { 
       info.textContent = `Vous survolez la couleur ${color.textContent}`;
    });
     
});
