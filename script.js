let a = document.querySelector("img")
let on = document.querySelector(".btn")
let off = document.querySelector(".btn02")

on.addEventListener("click", function lihgt (){
    a.src="lighton.jpg"
})
off.addEventListener("click", function light (){
    a.src="light_off.jpg"
})
