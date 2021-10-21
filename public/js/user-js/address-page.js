const a = document.querySelector('.modal');
const b = document.querySelector('.display-address');
const c = document.querySelector('.add-address-card button');

c.addEventListener('click', () => {
    a.classList.remove('modal');
    b.style.display = "none";
})