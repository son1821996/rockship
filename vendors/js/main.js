'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });


  /* ================= SLIDER ========================= */
  window.onload = function () {
    $('.slider3-2').jdSlider({
      wrap: '.slide-inner',
      slideShow: 3,
      slideToScroll: 1,
      isLoop: true,
      responsive: [{
        viewSize: 650,
        settings: {
          slideShow: 2
        }
      }]
    });
  };


  /* CLICK TO VIEW MORE */
var viewMore = function () {
  var x = document.getElementById("view-more");
  if (x.style.display === "block") {
      x.style.display = "none";
      document.querySelector('.view-more-s2').innerHTML = '<a onclick="viewMore()">Show More</a>';
  } else {
      x.style.display = "block";
      document.querySelector('.view-more-s2').innerHTML = '<a onclick="viewMore()">Show Less</a>';
  }
}

/* GRID WHAT WE HAVE DONE */
function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
	item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}


// window.onresize = function () {
//   if (window.innerWidth > 480) {
//     // add/remove class input contact
//     $('.half-input').addClass('is-mobile');
    
//     // FOOTER
//     $('.find-us').addClass('is-mobile');
//     $('.contact').addClass('is-mobile');
//   } else if (window.innerWidth <= 480) {
//     // add/remove class input contact
//     $('.half-input').removeClass('is-mobile');
//     $('.half-input').addClass('is-desktop');
    
//     // FOOTER
//     $('.find-us').remove('is-mobile');
//     $('.find-us').addClass('is-desktop');
//     $('.contact').removeClass('is-mobile');
//     $('.contact').addClass('is-desktop');
//   }
// }
  