const html = document.querySelector('#html');
const menu_block = document.querySelector('#menu_block');
const menu_icon = document.querySelector('#menu_icon');
const menu_img = document.querySelector('#menu_img');

menu_icon.onclick = () => {
    if (menu_block.classList.toggle('open')) {
        menu_img.src = "/Explorer/images/close.svg";
        html.style.overflowY = 'hidden';
    }
    else{
        menu_img.src = "/Explorer/images/menu.svg";
        html.style.overflowY = 'auto';
    }
}
AOS.init();