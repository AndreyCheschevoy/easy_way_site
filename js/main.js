
$(document).ready(function(){
//nav to top
      $(window).scroll(function() {
          if($(this).scrollTop() >= 20) {
              $('.navbar').addClass('stickytop');
          }
          else{
              $('.navbar').removeClass('stickytop');
          }
      });
//tabs


//
$('.single-item').slick({
    infinite      : true,
    slidesToShow  : 4,
    slidesToScroll: 1,
    autoplay      : true,
    autoplaySpeed : 3000,
    arrows        : false,
    responsive    : [{

    breakpoint: 1025,
    settings  : {
        slidesToShow  : 3,
        slidesToScroll: 1
    }

  },
  {

    breakpoint: 600,
    settings  : {
        slidesToShow  : 1,
        slidesToScroll: 1
    }

  },
  {

    breakpoint: 426,
    settings  : {
        slidesToShow  : 1,
        slidesToScroll: 1
    }

  }, {

    breakpoint: 300,
    settings  : "unslick"  // destroys slick

  }]
});

$(".catalog-nav li a").click(function(){
    $('.single-item').slick('slickNext');
})

//slider servise  
    $('.slider').slick({
        infinite      : true,
        slidesToShow  : 4,
        slidesToScroll: 1,
        responsive    : [{
    
        breakpoint: 1025,
        settings  : {
            slidesToShow  : 3,
            slidesToScroll: 1,
            arrows        : false,
            autoplay      : true,
            autoplaySpeed : 4000
        }
    
      }, {
    
        breakpoint: 700,
        settings  : {
            slidesToShow  : 1,
            slidesToScroll: 1,
            autoplay      : true,
            autoplaySpeed : 4000
        }
    
      }, {
    
        breakpoint: 300,
        settings  : "unslick"  // destroys slick
    
      }]
    }); 
    
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button    = $(event.relatedTarget)   // Button that triggered the modal
        var recipient = button.data('whatever')  // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-body .buy-product').val(recipient)
      })
});
