document.addEventListener("DOMContentLoaded", function(event) {
  var elem = document.querySelector('.carousel');
  var flkty = new Flickity( elem, {
    // options
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    draggable: false
  });

  var images = document.querySelectorAll('.carousel-cell');
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click' || 'touch', function() {
      flkty.next( true, true );
    });
  }
});


