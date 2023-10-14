const tog = document.querySelector('.tog')
const menu = document.querySelector('ul')
const men = document.querySelector('#menu')

tog.addEventListener('click', function(){
    menu.style.display = 'flex';
    men.style.display = 'flex';
    
})

menu.addEventListener('click', function(){
    menu.style.display = 'none';
    men.style.display = 'none';
})