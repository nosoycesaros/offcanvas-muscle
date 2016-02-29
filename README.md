# PENDANT TO UPDATE

# Offcanvas Muscle
An offcanvas menu with vanilla javascript and CSS transitions. Looking for a simple and clean solution to create offcanvas left and right menus, we decide to create this little framework, feel free to expand and collaborate. It just works!

<a href='http://owak.co/staging/offcanvas-muscle/' target="_blank">See our Demo</a>

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
<ul class="offcanvas left" id="myLeftMenu">
  ...
</ul>

<div class="site-wrap">
  <a class="offcanvas-trigger" offcanvas-menu="myLeftMenu">Open</a>
  <!-- insert the rest of your page markup here -->
</div>
```
#### Javascript
Later add this function when your DOM is ready:
```
offcanvasMuscle();
```

## Gratitude
http://www.sitepoint.com/pure-css-off-screen-navigation-menu/
To this article which was our starting point for this project
