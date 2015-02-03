function offcanvasMuscle() {
    var triggers = document.getElementsByClassName('offcanvas-trigger');

    for (var i = 0; i < triggers.length; i++) {
        triggers[i].addEventListener("click", function() {
            var targetMenu = this.getAttribute('offcanvas-menu');
            toggleOffcanvasMuscleMenu(targetMenu);
        });
    }
}

function toggleOffcanvasMuscleMenu(menuId) {
    var myMenu = document.getElementById(menuId);

    myMenu.classList.toggle('open');

    var siteWrap = document.getElementsByClassName('site-wrap')[0];
    siteWrap.classList.toggle('open');

    if (myMenu.classList.contains('left'))
        siteWrap.classList.toggle('left');

    if (myMenu.classList.contains('right'))
        siteWrap.classList.toggle('right');
}
