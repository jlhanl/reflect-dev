//jQuery

$( document ).ready(function() {

  $('.feature').mouseover(function() {
    $(this).css('border-left', '3px solid #F8E450');
  });

  $('.feature').mouseout(function() {
    $(this).css('border-left', 'none');
  });



  $('#search').mouseover(function() {
    $("#searchimg").attr('src', '../images/searchfeat.png');
  });

  $('#seek').mouseover(function() {
    $("#searchimg").attr('src', '../images/seek.png');
  });

  $('#volunteer').mouseover(function() {
    $("#searchimg").attr('src', '../images/volunteer.png');
  });

  // $('#accordion').accordion( {
  //   collapsible: true
  // });

});