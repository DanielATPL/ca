$('.avoidanceBox').hide();

$(document).ready(function () {

    /* ************************************ SMOOTH SCROLLING *** */

    $('a[href^="#"]').on('click', function (event) {
        let target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top + 22
            }, 600);
        }
    });

    $('.uparrow, .logo').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /* ******************************** CHANGE NAV ON SCROLL *** */

    $(window).scroll(function () {
        if ($(document).scrollTop() > 790) {

            $('.nav').css({'height': '4rem','padding': '.4rem'});

            $('.logo').css({'border-radius': '.3rem', 'padding': '.5rem 1rem 1rem'});

            $('.logoText').text('!Avoid!').
            css({'left': '3rem', 'letter-spacing': '.50rem', 'padding-bottom': '2px solid rgba(0, 0, 0, 0.6)'});

            $('.flagDE').css('border-radius', '0 .7rem 0 .7rem'); $('.flagAT').css('border-radius', '.7rem 0 .7rem 0');

            $('.flag').css({'width': '35', 'height': '24'});

        } else {

            $('.nav').css({'height': '7rem','padding': '1rem'});

            $('.logo').css({'border-radius': '.8rem .8rem .2rem .2rem', 'padding-top': '.4rem'});

            $('.logoText').html('CALL<br>avoidance!').
            css({'left': '.6rem', 'letter-spacing': '.55rem', 'text-decoration': 'none', 'border-bottom': 'none'});

            $('.flagDE').css('border-radius', '.7rem 0 .7rem 0'); $('.flagAT').css('border-radius', '0 .7rem 0 .7rem');

            $('.flag').css({'width': '53','height': '37'});

        }
    });

    /* ***************************************** SHOW - HIDE *** */

    $('.avoidanceBoxToggler').on('click', function () {
        $(this).next().slideToggle(function () {

        });
    });

});

