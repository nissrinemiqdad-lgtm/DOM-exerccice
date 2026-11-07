const button = document.querySelectorAll(".btn")

button.forEach(btn => {
    btn.addEventListener("click" , function(e){
        e.currentTarget.textContent = "cliqez"
    })
});