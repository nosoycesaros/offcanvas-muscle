export default class OffcanvasMuscle {
  constructor(trigger) {
    this.menu = document.querySelector(`#${trigger.dataset.target}`)

    trigger.addEventListener('click', () => {
      this.toggleMenu()
    })
  }

  toggleMenu() {
    const page = document.querySelector('.wrap')
    
    this.menu.classList.toggle('offcanvas--open')
    page.classList.toggle(
      this.menu.classList.contains('offcanvas--left') ?
        'wrap--open-left' :
        'wrap--open-right'
    )
  }
}