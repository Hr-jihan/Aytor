
                                                         // home page 


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


  // venobox for special offers 
  new VenoBox({
    selector: ".iframe-video"
});




                                                        // about page 

  AOS.init();



      // customar section 
       
      $('.customar-slide').slick({
        arrows:false,
        dots:true,
        dotsClass:"customar-dots",
        autoplay: false,
        autoplaySpeed: 3000,
      });



                                                      // shop-detsils page 


     $('.main-slider').slick({
        arrows:false,
        slidesToShow:1,
        asNavFor:".sub-slider",
        fade:true,
      }); 

      $('.sub-slider').slick({
        arrows:false,
        slidesToShow:5,
        asNavFor:".main-slider",
        centerMode:true,
        centerPadding:0,
        focusOnSelect: true,
        

      });



      // counter 

        // UP BUTTON STARTS
let upbtn = document.querySelector(".quantity-up");
let output = document.querySelector(".output");
function upResult() {
  let upNewValue = Number(output.value);
  upNewValue = upNewValue + 1;
  output.value = upNewValue;
}
upbtn.addEventListener('click', upResult);
// UP BUTTON ENDS

// // DOWN BUTTON STARTS
let downbtn = document.querySelector(".quantity-down")
function downResult() {
  let downNewValue =Number(output.value);
  if (downNewValue == 0) {
  return false
  }
  downNewValue = downNewValue - 1;
  output.value = downNewValue;
}
downbtn.addEventListener('click', downResult);
// // DOWN BUTTON ENDS






                                        // blog page start


$('.post-page').slick({
  arrows:true,
  slidesToShow: 1,
  
});



