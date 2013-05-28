/* global console */
require.config({
    paths: {
        jquery: '../components/jquery/jquery'
    },
    shim: {
        'jquery.shuffle': {
            deps: ['jquery'],
            exports: '$'
        }
    }
});


require(['jquery', 'flickrr', 'layoutrr', 'jquery.shuffle'], function ($, flickrr, layoutrr) {
    'use strict';
    // use app here

    var $family = $('#family'),
        $body = $('body'),
        $nav = $('nav a');

    // Shuffle the family
    $family.children().shuffle();

    $(function() {
        // Split award into 2 lines
        var $award = $('#family-header .award'),
            $newAwardType = $('<h2 class="award-type">').insertAfter($award);

            $award.find('abbr').appendTo($newAwardType);

        // Trim whitespace
        $award.html( $award.html().trim() );

        // Add layout classes
        //layoutrr.setup( $family );

        // Flick through effect
        //flickrr.setup( $family );

        // Fade page in
        //$body.removeClass('fadedOut').addClass('fadeIn');

        //layoutrr.destroy();
        //flickrr.destroy();

        console.log($nav);

        // Change page
        $nav.click(function(e) {
            e.preventDefault();
            $body.toggleClass('on-about');
        });
    });



    $(function(){

        var causeRepaintsOn = $("h1, h2, h3, p, li");
        $(window).resize(function() {

            console.log('Resize');

            causeRepaintsOn.each(function(){
                var z = $(this).css("z-index");
                //$(this).css("z-index", z);
            });
        });

    });


});











