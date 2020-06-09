import OffcanvasMuscle from './offcanvas/offcanvas'

const transactionTables = document.querySelectorAll('[data-toggle=offcanvas]')

transactionTables.forEach(trigger => {
  const menu = new OffcanvasMuscle(trigger)
})