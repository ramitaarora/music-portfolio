const menu = document.getElementById('mobile-menu')

function openMenu() {
    if (menu.className === "d-block") {
        menu.setAttribute('class', 'd-none');
    } else {
        menu.setAttribute('class', 'd-block')
    }
}