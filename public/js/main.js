/* Author:

*/
$('document').ready( function() {

  $('#search-accordion').collapse();
  $('#show-filter').button();

  // Toggle active class when button is clicked and trigger filter event
  $('#show-filter .btn').bind( 'click', function() {
    $(this).toggleClass( 'active', !$(this).hasClass('active') ).trigger('filterView');
  });

  // Toggle opacity or display of elements when buttons are activated
  $('#show-filter .btn').bind( 'filterView', function(e) {
    var filter = $(this).attr('id').split('-btn')[0];
    if( filter == 'commonplaces' ) {
      $('.' + filter).toggle('fast', 'swing');
    } else {
      var hidden = $(this).hasClass('active') ? 1 : 0;
      $('.' + filter).animate( {opacity: hidden}, 'fast', 'swing' ); 
    }
    
  });

});


