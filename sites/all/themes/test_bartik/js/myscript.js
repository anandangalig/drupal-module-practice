jQuery(document).ready(function($){
  $("p").hover(function(){
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
  });
});

// function myFunction(parameter) {
//   console.log('stuff');
// }
//
//
// var thing;
// myFunction(thing);
//
// function($) {
//   $();
// }(jQuery);
