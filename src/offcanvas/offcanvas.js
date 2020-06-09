export default class OffcanvasMuscle {
  constructor(trigger) {
    this.menu = document.querySelector(`#${trigger.dataset.target}`)

    trigger.addEventListener('click', () => {
      this.toggleMenu()
    })
  }

  toggleMenu() {
    const page = document.querySelector('.offcanvas__wrap')
    
    this.menu.classList.toggle('offcanvas--open')
    page.classList.toggle(
      this.menu.classList.contains('offcanvas--left') ?
        'offcanvas__wrap--open-left' :
        'offcanvas__wrap--open-right'
    )
  }
}