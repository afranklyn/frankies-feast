$(document).ready(function() {
  //code goes in here */

  // JavaScript
  window.sr = ScrollReveal();
  sr.reveal('.show-me', { duration: 2000 });

  /*
** Toggle's body class
** change the CSS accordingly: body.menu-visible for a visible menu - body.menu-hidden for a hidden menu
*/
function toggleMenu() {

  // Change the body class
  $('body').toggleClass('menu-visible menu-hidden');

}

// Bind click event to the hamburger button
$('body').on('click', '.toggle-menu', toggleMenu);

});
