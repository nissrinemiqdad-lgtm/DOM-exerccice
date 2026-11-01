const buttons = document.querySelectorAll(".btn")


buttons.forEach(button => {
    button.addEventListener('click' , function(event){
        event.currentTarget.textContent = "button cliqué" ;
    });
    
});