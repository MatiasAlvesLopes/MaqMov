const btnOpenMenu = document.getElementById('open-menu')
const btnCloseMenu = document.getElementById('close-menu')
const menu = document.getElementById('menu')

btnOpenMenu.addEventListener('click',
    function(){
        menu.classList.add('on')
    }
);

btnCloseMenu.addEventListener('click',
    function(){
        menu.classList.remove('on')
    }
)