const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const sliderElement = document.querySelectorAll(".sliderElement")
let index = 1

sliderElement[0].style.translate = "0"
btnNext.addEventListener("click", ()=>{
    if (index < sliderElement.length) {
        for (let i = 0; i < sliderElement.length; i++) {
            sliderElement[i].style.translate = "100px"
        }
        sliderElement[index].style.translate = "0"
        index++
     } else {
        sliderElement[0].style.translate = "0"
        sliderElement[3].style.translate = "100px"
        index = 1
        
     }
})
/*
btnPrev.addEventListener("click", ()=>{
    if (0 < index && index < sliderElement.length) {
        for (let i = sliderElement.length - 1; i > -1; i--) {
            sliderElement[i].style.translate = "100px"
        }
        sliderElement[index].style.translate = "0"
        index--
     } else {
        for (let i = sliderElement.length - 1; -1 < i; i--) {
            sliderElement[i].style.translate = "100px"
        }
        sliderElement[index].style.translate = "0"
        index = sliderElement.length - 1 
     }
})
*/