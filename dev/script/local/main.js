const body = document.getElementsByClassName('home')[0];
const menu = document.getElementById('obsidiaMenu');
let iconMenu = document.getElementById('MenuSiteIcon');
let flagMenu = false;

iconMenu.addEventListener("click", () => {
  if (flagMenu === false) {
    menu.classList.add('menuShow');
    flagMenu = true;
  } else {
    menu.classList.remove('menuShow');
    flagMenu = false;
  }
});

// ///////////MENU
window.onscroll = function() {
  menuFXMobile();
};
///////////MENU Mobile

function menuFXMobile() {
  if (window.pageYOffset >= 80) {
    menu.classList.remove('menuShow');
    setTimeout(() => {
      iconMenu.classList.remove('ui_X');
    }, 500);
    flagMenu = false;
  } else {
  }
}

///////////CARDS
$(document).ready(function() {
  $(`.cardServices`).on('click', function(event) {
    var $element = $(this);
    $element.toggleClass('upMenu');
    $element.find('.textInfo').toggleClass('showTextInfo');
    setTimeout(() => {
      $element.find(`.lineInfo`).toggleClass(`lineActive`);
    }, 300);
  });

  //
});

//////////MATERIALIZE
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {});
});