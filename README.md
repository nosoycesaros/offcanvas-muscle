# Offcanvas Muscle
A responsive menu with vanilla Javascript and CSS transitions. Looking for a simple and clean solution to create offcanvas left and right menus, we decide to create this little framework, feel free to expand and collaborate. It just works!

[See the Demo](http://nosoycesaros.github.io/offcanvas-muscle/)

## Usage
#### Javascript
Later add this function when your DOM is ready:
```js
import OffcanvasMuscle from './offcanvas/offcanvas'

const transactionTables = document.querySelectorAll('[data-toggle=offcanvas]')

transactionTables.forEach(trigger => {
  const menu = new OffcanvasMuscle(trigger)
})
```

#### HTML
The following are the mandatory HTML code that Offcanvas Muscle needs to work
```html
<nav class="offcanvas offcanvas--left" id="left-menu">
...
</nav>

<a class="offcanvas__trigger offcanvas__trigger--left" data-target='left-menu' data-toggle="offcanvas">
</a>
```

## Gratitude
Thanks to <a href="http://www.sitepoint.com/pure-css-off-screen-navigation-menu/">Pure CSS Off-screen Navigation Menu</a> by <a href="https://github.com/austinwulf">Austin Wulf</a> which was our starting point for this project.
