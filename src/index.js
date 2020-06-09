import OffcanvasMuscle from './offcanvas/offcanvas'

const offcanvasTriggers = document.querySelectorAll('[data-toggle=offcanvas]')

offcanvasTriggers.forEach(trigger => {
  const menu = new OffcanvasMuscle(trigger)
})