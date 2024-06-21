const hamburguerButton = document.querySelector("#hamburguer-button")
const closeButton = document.querySelector("#close-button")
const responsiveNavBar = document.querySelector("#responsive-navBar")

closeButton.addEventListener("click", ()=>{
    responsiveNavBar.classList.add("displayNone")
})

hamburguerButton.addEventListener("click", ()=>{
    responsiveNavBar.classList.remove("displayNone")
})