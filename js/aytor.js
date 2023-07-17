
// $('.menu').click (function(){
//     $(this).toggleClass('is-active ');
//   });


//  banner slider 
$('#banner').slick({
    arrows:false,
    dots:true,
    dotsClass:"slick-dots container",
    autoplay: true,
    autoplaySpeed: 3000,
  });
// new product tooltip 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// new product slider 
$('.new-product-slider').slick({
  slidesToShow:4,
  prevArrow:'#product-slider-left',
  nextArrow: '#product-slider-right',
  responsive:[
    {
      breakpoint: 991.9999,
        settings: {
          slidesToShow: 3,
          
        }
    },
    {
      breakpoint: 767.999,
        settings: {
          slidesToShow: 2,
          
        }
    },
    {
      breakpoint: 500,
        settings: {
          slidesToShow: 1,
          
        }
    }
  ]


});
// Deals of the day  slide
$('.deal').slick({
  arrows:false,
  dots:true,
  dotsClass:"deal-dots container",
  slidesToShow:2,
  autoplaySpeed: 3000,
  responsive:[
    {
      breakpoint: 991.9999,
        settings: {
          slidesToShow: 1,
          
        }
    },
  ]
});
  // counter 
  $(".counter")
  .countdown("2024/08/01", function(event) {
    // $(this).text(
    //   event.strftime('%D days %H:%M:%S')
    // );
    $( ".days").html(event.strftime('%D'));
    $( ".hours").html(event.strftime('%H'));
    $( ".min").html(event.strftime('%M'));
    $( ".sec").html(event.strftime('%S'));

  });