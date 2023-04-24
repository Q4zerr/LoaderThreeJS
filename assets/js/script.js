// Variables
const loaderThreeJs = document.querySelector('.loader');

window.addEventListener('load', onLoad);

function onLoad() {
  setTimeout(function() {
    loaderThreeJs.addEventListener('animationend', function() {
      loaderThreeJs.style.display = 'none';
    });
    loaderThreeJs.classList.add('disabled');
  }, 3500);
}