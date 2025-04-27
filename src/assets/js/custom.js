$(document).ready(function(e) {
	$(".loader").fadeOut()	
	
    $(".mobile_nav").click(function() {
        $("nav .menu-main-menu-container").toggleClass("nav_right")
        $(this).toggleClass("close_menu")
    })
	
	 $(".sub-menu-toggle").click(function () {
             $(".sub-menu").toggleClass("displ_block");
			$(".menu-item-has-children").toggleClass("after_nv");
        })
		
	
	
		
	
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});
$(window).scroll(function () {
        $(this).scrollTop() > 800 ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut();
    }),
    $(".scrollup").click(function () {
        return $("html, body").animate({ scrollTop: 0 }, 300), !1;
    })

});

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 20);
          };
})();

var speed = 3000;
(function currencySlide(){
    var currencyPairWidth = $('.tools-icon:first-child').outerWidth();
    $(".tools-icon-row1").animate({marginLeft:-currencyPairWidth},speed, 'linear', function(){
                $(this).css({marginLeft:0}).find(".tools-icon:last").after($(this).find(".tools-icon:first"));
        });
        requestAnimationFrame(currencySlide);
})();


    $(document).ready(function(){
       $(".accordion").on("click", ".heading", function() {

       $(this).toggleClass("active").next().slideToggle();

       $(".contents").not($(this).next()).slideUp(300);
                    
       $(this).siblings(li).removeClass("active");
       });
      });
           
$(document).ready(function() {
 	 
 $('.all_categories').owlCarousel({
   loop: true,
   margin:20,
	nav: true,
   responsiveClass: true,
   responsive: {
	           0: {items: 1,
                  },
              600:{items:1,
                  },
                  1000: {
                    items: 3,
                    margin:20,
					autoplay:true,
					autoplayTimeout:3000,
					autoplayHoverPause:true
                  }
                }
   });

})




 $(".sign_up").click(function (event) {

                    event.preventDefault();

                    $('html,body').animate({ scrollTop: $(this.hash).offset().top-50 }, 1000);

});


document.addEventListener( 'wpcf7mailsent', function( event ) {
  location = 'https://escortmarketing.agency/thank-you/';
}, false );

 $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.side_faq').addClass("sticky_2");
        } else {
            $('.side_faq').removeClass("sticky_2");
        }
    });


