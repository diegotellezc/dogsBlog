// Modal About me

const btnAboutMe = document.querySelector(".btn__aboutMe")
const modalAboutMe = document.querySelector(".modal__aboutMe")
const btnModalCloseAbout = document.querySelector(".modal__close__aboutme")


btnAboutMe.addEventListener("click", function (e) {
    e.preventDefault()
    modalAboutMe.classList.add("modal--show")
})

btnModalCloseAbout.addEventListener("click", function (e) {
    e.preventDefault()
    modalAboutMe.classList.remove("modal--show")
})



// Modal Adoptions

const btnAdoptions = document.querySelector(".btn__adoptions")
const modalAdoptions = document.querySelector(".modal__adoptions")
const btnModalCloseAdoptions = document.querySelector(".modal__close__adoptions")
const btnModalX = document.querySelector(".modal__x")

btnAdoptions.addEventListener("click", function (e) {
    e.preventDefault()
    modalAdoptions.classList.add("modal--show")
})

btnModalCloseAdoptions.addEventListener("click", function (e) {
    modalAdoptions.classList.remove("modal--show")
})

btnModalX.addEventListener("click", function (e) {
    modalAdoptions.classList.remove("modal--show")
})