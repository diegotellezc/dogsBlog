// Modal About me

const btnAdoptions = document.querySelector(".btn__aboutMe")
const modalAboutMe = document.querySelector(".modal__aboutMe")
const btnModalClose = document.querySelector(".modal__close")

btnAdoptions.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("Boton oprimido")
    modalAboutMe.classList.add("modal--show")
})

btnModalClose.addEventListener("click", function (e) {
    e.preventDefault()
    modalAboutMe.classList.remove("modal--show")
})