jQuery('document').ready( function($) {

    // settings panel
    $('.toggler').on('click', function() {
        $(this).parents('.config-settings').toggleClass('open');
    });

    $('.lb-setting').on('click', function() {
        $(this).toggleClass('disabled');

        if ($(this).hasClass('disabled')) {
            $(this).children('.glyphicon').addClass('glyphicon-remove-circle');
            $(this).children('.glyphicon').removeClass('glyphicon-ok-circle');
            $('.lightbox').addClass('disabled');
        } else {
            $(this).children('.glyphicon').removeClass('glyphicon-remove-circle');
            $(this).children('.glyphicon').addClass('glyphicon-ok-circle');
            $('.lightbox').removeClass('disabled');
        }
    });

    // the gallery filters
    $('.gallery-filters li').on('click', function() {
        $('.gallery-filters li').removeClass('active');
        $(this).addClass('active');
        filter = $(this).attr('gallery-filter');

        $('.gallery-img-holder').each( function() {
            if (filter == 'all') {
                $(this).fadeIn(); 
            } else {
                $(this).hide();
                if ($(this).attr('filter-category') == filter) {
                    $(this).fadeIn();
                }
            }
        });
    });

    // the lightbox functionality
    $('.gallery-img-holder').on('click', function() {
        if ($('.lightbox').hasClass('disabled')) {
            return;
        }
        var ClickedImgSrc = $(this).children('img').attr('src');
        var theLightboxImage = $('.lightbox>.img-container>img'); 
        theLightboxImage.attr('src', ClickedImgSrc);
        $('.lightbox .close-btn').css('left', theLightboxImage.width()/2);
        $('.lightbox').addClass('open');
    });

    // close the lightbox
    $('.lightbox .close-btn').on('click', function() {
        $('.lightbox').removeClass('open');
    });
});