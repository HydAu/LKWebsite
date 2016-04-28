// jQuery fix blog content previews 
/*function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR has 'withCredentials' property only if it supports CORS
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") { // if IE use XDR
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

var request = createCORSRequest("get", "http://localhost:3000/");
if (request) {
    // Define a callback funct,ion
    request.onload = function() {
        //console.log(request.response);
        var title_one = document.getElementById('bg-title-one');
        var title_two = document.getElementById('bg-title-two');
        var title_three = document.getElementById('bg-title-three');
        var title_one_n = one.innerHTML;
        var title_two_n = two.innerHTML;
        var title_three_n = three.innerHTML;
        title_one.innerHTML = title_one_n;
        title_two.innerHTML = title_two_n;
        title_three.innerHTML = title_three_n;
    };
    // Send request
    request.send();
}*/

// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

