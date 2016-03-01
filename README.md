# Offcanvas Muscle
A responsive menu with vanilla Javascript and CSS transitions. Looking for a simple and clean solution to create offcanvas left and right menus, we decide to create this little framework, feel free to expand and collaborate. It just works!

<a href='http://nosoycesaros.github.io/offcanvas-muscle/' target="_blank">See the Demo</a>

## Usage
#### Files
Include in your code the following files:
```
<link rel="stylesheet" href="path/to/offcanvas-muscle.css">
<script src="path/to/offcanvas-muscle.js"></script>
```

#### HTML
The following are the mandatory HTML code that Offcanvas Muscle needs to work
```
<ul class="offcanvas left" id="offcanvas-left-menu">
  ...
</ul>

<div class="offcanvas-site-wrap">
  <!-- Left Menu Button -->
  <a id="trigger-left-menu" class="nav-button left" offcanvas-menu="offcanvas-left-menu"></a>
  
  <!-- insert the rest of your page markup here -->
</div>
```
#### Javascript
Later add this function when your DOM is ready:
```
/**
 * Create a new object OffcanvasMuscle for each menu
 */
var offcanvasMenu = new OffcanvasMuscle({
  menu: "offcanvas-left-menu",
  button: "trigger-left-menu"
});
```

## Gratitude
Thanks to <a href="http://www.sitepoint.com/pure-css-off-screen-navigation-menu/">Pure CSS Off-screen Navigation Menu</a> by <a href="https://github.com/austinwulf">Austin Wulf</a> which was our starting point for this project.
