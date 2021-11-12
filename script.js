const slides = document.querySelectorAll('.slide');

function clearClasses(){
    slides.forEach(element =>{
        element.classList.remove('active');
    });
}


slides.forEach(element => {
    element.addEventListener('click', ()=>{
        clearClasses();
        element.classList.add('active');
    });
});

