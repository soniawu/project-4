$.noConflict();
(function($) {
  $(document).ready(
    function() {
      var windowWidth = $(window).width();
      var largeImage;
      if ( windowWidth >= 700 ) {
        largeImage = document.getElementById("large-img");
        largeImage.src = "../images/itmd361-1.jpg";
        $('#click-for-view').text('Click a thumbnail for large view');
        $('#thumbnail-img-hdr img').on('click', function(event) {
          if (event.target.tagName === "IMG") {
            largeImage.src = event.target.src;
          }
        })
      }
    })
})(jQuery);
