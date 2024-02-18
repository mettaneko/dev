const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const scroll1 = window.scrollY;

var parent = document.getElementById("body")

if (screenWidth <= 520) {
  parent.removeChild(document.getElementById("plus"))
}
if (screenWidth > 520) {
  parent.removeChild(document.getElementById("plus-mobile"))
  parent.removeChild(document.getElementById("plus-mobile"))
  parent.removeChild(document.getElementById("plus-mobile"))
  parent.removeChild(document.getElementById("plus-mobile"))
}