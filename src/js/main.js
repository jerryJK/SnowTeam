//run BaugetteBox gallery
baguetteBox.run('.main-gallery', {
    animation: 'fadeIn'
});


$(function() {
    // Auto play modal video
    $(".video").click(function() {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });


    //contact form validation

    var form = $('form');
    var inputElements = $('.form-control');
    var name = $('.name');
    var email = $('.email');
    var message = $('.message');
    var alertBox = $('.alert-box');
    var alertBoxMessage = $('.alert-box span');
    var errorMessage = $(".error-message");

    form.on('submit', function(event) {

        event.preventDefault();
        var errors = {};

        if (name.val().length == 0) {
            errors.name = "Please enter your name";
            name.val(errors.name);
            name.css("color", "lightCoral");
        }
        if ((email.val().length == 0) || (email.val().indexOf("@") == -1)) {
            errors.email = "Please enter your email";
            email.val(errors.email);
            email.css("color", "lightCoral");
        }
        if (message.val().length == 0) {
            errors.message = "Please enter your message";
            message.val(errors.message);
            message.css("color", "lightCoral");
        }

        if (!errors.name && !errors.email && !errors.message) {

            // Serialize the form data.
            var formData = form.serialize();

            // Submit the form using AJAX.
            $.ajax({
                    type: 'POST',
                    url: form.attr('action'),
                    data: formData
                })
                .done(function(response) {

                    alertBoxMessage.text("Your message has been sent");
                    alertBox.show();

                    setTimeout(function() {
                        alertBox.hide();
                        alertBoxMessage.text('');
                    }, 2000);

                    // Clear the form.
                    name.val('').blur();
                    email.val('').blur();
                    message.val('').blur();

                })
                .fail(function(data) {
                    console.log("nie wysłano");

                    alertBoxMessage.text('Oops! An error occured and your message could not be sent.');
                    alertBox.show();

                    setTimeout(function() {
                        alertBox.hide();
                        alertBoxMessage.text('');
                    }, 2000);

                })
                .always(function(data) {});
        }


        //reset input error value on focus
        inputElements.on('focus', function() {
            $(this).css('color', 'rgb(134, 142, 150)');
            if (($(this).val().indexOf(errors.name) !== -1) || ($(this).val().indexOf(errors.email) !== -1) || ($(this).val().indexOf(errors.message) !== -1)) {
                $(this).val('');
            }
        })

    });



});
