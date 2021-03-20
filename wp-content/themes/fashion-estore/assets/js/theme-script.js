function fashion_estore_openNav() {
  jQuery(".sidenav").addClass('show');
}
function fashion_estore_closeNav() {
  jQuery(".sidenav").removeClass('show');
}

( function( window, document ) {
  function fashion_estore_keepFocusInMenu() {
    document.addEventListener( 'keydown', function( e ) {
      const fashion_estore_nav = document.querySelector( '.sidenav' );

      if ( ! fashion_estore_nav || ! fashion_estore_nav.classList.contains( 'show' ) ) {
        return;
      }

      const elements = [...fashion_estore_nav.querySelectorAll( 'input, a, button' )],
        fashion_estore_lastEl = elements[ elements.length - 1 ],
        fashion_estore_firstEl = elements[0],
        fashion_estore_activeEl = document.activeElement,
        tabKey = e.keyCode === 9,
        shiftKey = e.shiftKey;

      if ( ! shiftKey && tabKey && fashion_estore_lastEl === fashion_estore_activeEl ) {
        e.preventDefault();
        fashion_estore_firstEl.focus();
      }

      if ( shiftKey && tabKey && fashion_estore_firstEl === fashion_estore_activeEl ) {
        e.preventDefault();
        fashion_estore_lastEl.focus();
      }
    } );
  }

  fashion_estore_keepFocusInMenu();
} )( window, document );

jQuery(document).ready(function() {
	var owl = jQuery('#top-slider .owl-carousel');
		owl.owlCarousel({
			margin: 25,
			nav: true,
			autoplay:true,
			autoplayTimeout:500,
			autoplayHoverPause:true,
			loop: true,
			navText : ['<i class="fa fa-lg fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-lg fa-chevron-right" aria-hidden="true"></i>'],
			responsive: {
			  0: {
			    items: 1
			  },
			  600: {
			    items: 1
			  },
			  1024: {
			    items: 1
			}
		}
	})
})

jQuery(document).ready(function(){
  jQuery("button.cat_btn").click(function(){
    jQuery(".product_cat").toggle();
  });
});