$(document).ready(function () {

    $("#primary_nav_wrap ul ul ul").each(function () {
        $(this).prev('a').append('<i class="fa fa-angle-left navigator"></i>');
    });

    $("#primary_nav_wrap ul:first").find('a').each(function () {
        if ($(this).next('ul').length > 0) {
            $(this).after('<i class="fa fa-angle-down menu-arrow-down"></i>');
        }
    });

    $("#primary_nav_wrap ul ul").hover(
        function () {
            $(this).prevUntil('li').addClass('hover-effect');
        },
        function () {
            $(this).prevUntil('li').removeClass('hover-effect');
        }
    );

    $(".xs-menu ul:first").find('a').each(function () {
        if ($(this).next('ul').length > 0) {
            $(this).after('<i class="fa fa-angle-down menu-arrow-down"></i>');
        }
    });

    $(".xs-menu .menu-arrow-down").click(function () {
        $(this).next('ul').slideToggle();
    });
    $(".menu-handle").click(function () {
        $(".xs-menu nav").slideToggle();
    });

    $(".box-container").hover(
        function () {
        $(this).find('img').eq(0).addClass('hover-first');
        $(this).find('img').eq(1).addClass('hover-last');
    },
        function () {
        $(this).find('img').eq(0).removeClass('hover-first');
        $(this).find('img').eq(1).removeClass('hover-last');
    }
    );

    $(".blog-section").hover(
        function () {
            $(this).find('h3').addClass('hover-effect');
        },
        function () {
            $(this).find('h3').removeClass('hover-effect');
        }
    );

    $("footer .blog-section").hide();
    $("footer .blog-section").eq(0).show();
    var footer_blog = 0;
    var footer_blog_len = $(".footer .blog-section").length;
    slide_timer = setInterval(function () {
        footer_blog++;
        if (footer_blog >= footer_blog_len) {
            footer_blog = 0;
        }
        $("footer .blog-section").fadeOut();
        $("footer .blog-section").eq(footer_blog).fadeIn();
    }, 3000);

});