let slides = document.querySelectorAll(".slides img");
console.log(slides);
let index = 0;
let intervalId = 0;
imageInitialization();
function imageInitialization(){
    if(slides.length>0)
    {
        slides[index].classList.add("display");
        setInterval = (nextSlide , 5000);
    }
}
function showDisplay(){
    slides++;
    slides.forEach( slide => slide.classList.remove("display"));
    slides[index].classList.add("display");
}