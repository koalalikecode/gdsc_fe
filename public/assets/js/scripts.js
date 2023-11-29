
jQuery(window).on("load", function($) {
    "use strict";



    jQuery('.classes-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows:true,
        autoplay:true,
        autoplaySpeed: 2000,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });


    jQuery('.blog-carousel').slick({
        slidesToShow: 1,
        infinite:true,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows:true,
        autoplaySpeed: 2000
    });


    // RESPONSIVE MOBILE MENU 

    jQuery(".menu-btn").on("click", function(){
      jQuery(this).toggleClass("active");
      jQuery(".responsive-menu").toggleClass("active");
      jQuery("body").toggleClass("scroll-hide");
    });

    jQuery(".responsive-menu ul ul").parent().addClass("menu-item-has-children");
    jQuery(".responsive-menu ul li.menu-item-has-children > a").on("click", function() {
      jQuery(this).parent().toggleClass("active").siblings().removeClass("active");
      jQuery(this).next("ul").slideToggle();
      jQuery(this).parent().siblings().find("ul").slideUp();
      return false;
    });


    // AJAX CONTACT FORM SCRIPT (WORKING CONTACT FORM)

  if(jQuery('#contact-form').length){
    jQuery('#submit').on("click", function(){
      var o = new Object();
      var form = '#contact-form';
      var name = jQuery('#contact-form .name').val();
      var email = jQuery('#contact-form .email').val();
      if(name == '' || email == '') {
        jQuery('#contact-form .response').html('<div class="failed">Please fill the required fields.</div>');
        return false;
      }
      jQuery.ajax({
          url:"mail.php",
          method:"POST",
          data: jQuery(form).serialize(),
          beforeSend:function(){
              jQuery('#contact-form .response').html('<div class="text-info"><img src="assets/img/preloader.gif"> Loading...</div>');
          },
          success:function(data){
              jQuery('form').trigger("reset");
              jQuery('#contact-form .response').fadeIn().html(data);
              setTimeout(function(){
                  jQuery('#contact-form .response').fadeOut("slow");
              }, 5000);
          },
          error:function(){
              jQuery('#contact-form .response').fadeIn().html(data);
          }
      });
    });
  };


});