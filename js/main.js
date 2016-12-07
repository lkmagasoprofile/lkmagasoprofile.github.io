(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top -50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    // $('.navbar-collapse ul li a').click(function() {
    //     $('.navbar-toggle:visible').click();
    // });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    function initMap(){
        // var location = new google.maps.LatLng(14.4266345, 120.9997435);

        // var mapCanvas = document.getElementById('map');
        // var mapOptions = {
        //     center: location,
        //     zoom: 4,
        //     panControl: false,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        // }
        // var map = new google.maps.Map(mapCanvas, mapOptions);

        var uluru = {lat: 14.4266345, lng: 120.9997435};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

    }
    
    google.maps.event.addDomListener(window, 'load', initMap);

    

    

})(jQuery); // End of use strict
