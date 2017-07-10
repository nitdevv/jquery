
        $(document).ready(function() {
    var max_fields = 20;
    var wrapper = $(".input");
    var add_button = $(".add_field_button");

    var x = 1;
    $(add_button).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append('<div><lable>property image:</lable><input type="file" name="mytext[]"id="field_' + x + '" value="Text ' + x + '"/> <input type="button" value="remove"class="remove_field"/></div>');

        }
    });

    $(wrapper).on("click", ".remove_field", function(e) { //user click on remove text
        if (x > 1) {
            $(this).parent('div').remove(); //remove text box
            x--; //decrement textbox
        }
        return false;

    });
});
        
   
