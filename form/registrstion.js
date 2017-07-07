$(document).ready(function() {

    $("#sub").click(function() {
        var fname = $('#tex').val();
        var email = $('#email').val();
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
        var pass = $('#Password').val();
        var cpass = $('#comfirmPassword').val();

        if (!fname) {
            alert("please enter first name");
            event.preventDefault();
        } else if (!email) {
            alert("plesae enter email ")
            event.preventDefault();
        } else if (!pattern.test(email)) {
            alert("please enter valid email address");
            event.preventDefault();
        } else if (!pass) {
            alert("please enter password");
            event.preventDefault();
        } else if (!cpass) {
            alert("please enter confirm password");
            event.preventDefault();
        } else if (!$('#chkterms').is(':checked')) {
            alert("please select terms");
            event.preventDefault();
        } else if (pass == cpass) {
            alert("form submit");
        } else {
            alert("password not same");
            event.preventDefault();
        }

    });

});
//          function ValidateEmail(email) {
//   var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//    return expr.test(email);
// };
// $("#sub").click("click", function () {
//     if (!ValidateEmail($("#email").val())) {
//        alert("Invalid email address.");
//     }
//     else {
//        alert("Valid email address.");
//    }
//  });
