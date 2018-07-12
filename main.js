$('.avoidanceBox').hide();

$(document).ready(function () {

    /* ************************************ SMOOTH SCROLLING *** */

    $('a[href^="#"]').on('click', function (event) {
        let target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
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

            $('.nav').css({'height': '4rem','padding': '.4rem','align-items': 'center'});

            $('.logo').css({'border-radius': '.3rem', 'padding': '.7rem 1rem 1rem'});

            $('.logoText').text('!Avoid!').
            css({'left': '3.4rem', 'bottom': '.5rem', 'letter-spacing': '.50rem', 'padding-bottom': '2px solid rgba(0, 0, 0, 0.6)'});

            $('.flagDE').css({'border-radius': '0 .7rem 0 .7rem', 'transform': 'rotate(35deg)'});
            $('.flagAT').css({'border-radius': '.7rem 0 .7rem 0', 'transform': 'rotate(-35deg)'});

            $('.flag').css({'width': '35', 'height': '24'});

        } else {

            $('.nav').css({'height': '7rem','padding': '.8rem','align-items': 'flex-end'});

            $('.logo').css({'border-radius': '.8rem .8rem 0 0', 'padding-top': '.4rem'});

            $('.logoText').html('CALL<br>avoidance!').
            css({'left': '1.2rem', 'bottom': '.4rem', 'letter-spacing': '.55rem', 'text-decoration': 'none', 'border-bottom': 'none'});

            $('.flagDE').css({'border-radius': '.7rem 0 .7rem 0', 'transform': 'rotate(0)'});
            $('.flagAT').css({'border-radius': '0 .7rem 0 .7rem', 'transform': 'rotate(0)'});

            $('.flag').css({'width': '53','height': '37'});

        }
    });

    /* ***************************************** SHOW - HIDE *** */

    $('.avoidanceBoxToggler').on('click', function () {
        $('.avoidanceBox').not($(this).next()).slideUp();
        $(this).next().slideToggle(function () {
        });
    });

});

