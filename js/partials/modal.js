function vertical_centre(id) {
  if (window.innerHeight > $('#'+id).height()) {
    $('#'+id).css('top',$(window).scrollTop()+((window.innerHeight - $('#'+id).height())/2));
  } else {
    $('#'+id).css('top',$(window).scrollTop()+20);
  }
}

function complete_centre(id) {
  var scroll = $(window).scrollTop();
  console.log($(window).height());
  if ($(window).height() > $('#'+id).outerHeight()) {
    $('#'+id).css('top', ($(window).height() - $('#'+id).outerHeight()) / 2 + scroll);
  } else {
    $('#'+id).css('top',$(window).scrollTop()+20);
  }
  $('#'+id).css({'margin-left' : '-' + $('#'+id).outerWidth() / 2 +'px'});
}; 

// Modal toggle
function modalToggle(id) {
  var display = $('#'+id).css('display');
  if (display=='none') {
    complete_centre(id);
    $('#'+id).css({'visibility' : 'visible', 'display' : 'block'});
    $('#overlay').css({'visibility' : 'visible', 'height' : $(document).height(), 'opacity' : '1'});
  } else {
    $('#'+id).css({'display' : 'none'});
    $('#overlay').css({'visibility' : 'hidden', 'height' : '0', 'opacity' : '0'});
  }
}

// function modalToggleCustom(id, heading) {
//   var display = $('#'+id).css('display');
//   if (display=='none') {
//     $('#overlay').css({'visibility' : 'visible', 'height' : $(document).height(), 'opacity' : '1'});
//     complete_centre(id);
//     $('#' + id + ' #modal-heading').text(heading);
//     $('#'+id).css({'visibility' : 'visible', 'display' : 'block'});
//   } else {
//     $('#'+id).css({'display' : 'none'});
//     $('#overlay').css({'visibility' : 'hidden', 'height' : '0', 'opacity' : '0'});
//   }
// }

$(document).ready(function() {
  $('#overlay').click(function(){
    $('#overlay').css({'visibility' : 'hidden', 'opacity' : '0', 'height' : '0'});
    $('.js--modal').css({'display' : 'none'});
  });
});