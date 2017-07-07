
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
   $('#p1').on('mouseenter mouseleave', function() {
  $('#p1').toggle('event.mouseenter');

});
});
$(document).ready(function() {

            $('.hoverevent').hover(

               function () {
                  $(this).css({"background-color":"red"});
               },

               function () {
                  $(this).css({"background-color":"blue"});
               }
            );

         });
         $(document).ready(function(){
    $("input").focus(function(){
        $("span").css("display", "inline").fadeOut(2000);
    });
});
