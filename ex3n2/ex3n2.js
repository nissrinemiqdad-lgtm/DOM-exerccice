const button = document.getElementById("toggle-btn")
const text = document.getElementById("details")

button.addEventListener("click" , ()=>{
if(text.style.display === "none"){
    text.style.display = "block"
}
else{
    text.style.display = "none"
}
})