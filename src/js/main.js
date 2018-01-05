//loading overlay
$(window).on('load', function() {
    $('#overlay').fadeOut(500);
    setTimeout(function() {
        scrollTo(0, 0);
    }, 0);
});


$(function() {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event){
  event.preventDefault();
  $(this).ekkoLightbox();
});

//BaugetteBox gallery
baguetteBox.run('.main-gallery', {
  animation: 'fadeIn'
});
