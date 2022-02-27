const burger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list')


burger.addEventListener('click', ()=>{
   navList.classList.toggle('active')
})