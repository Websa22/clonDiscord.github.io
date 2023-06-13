const menuhamburguesa=document.querySelector(".icon_menu")
const nav=document.querySelector(".header_lista")
const eliminar=document.querySelector(".delete")
const sombra=document.querySelector(".sombra")


menuhamburguesa.addEventListener("click",()=>{
    nav.classList.toggle("activo")
    sombra.classList.toggle("active")
})
eliminar.addEventListener("click",()=>{
    nav.classList.remove("activo")
    sombra.classList.remove("active")
})


