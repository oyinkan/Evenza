//[Master Javascript]

//Project:	Divine Art - Multipage Html Responsive Template
//Version:	1.1
//Last change:	17/03/2017
//Primary use:	Divine Art - Multipage Html Responsive Template 


//Template script here
// Counter
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// widgetClientTestimonial on blog page widget
	$(document).ready(function(){
    "use strict"; // Start of use strict
        $('.widgetClientTestimonial').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })
		}); // End of use strict
  
// prettyPhoto

	$("a[rel^='prettyPhoto[gallery1]']").prettyPhoto();	


	



