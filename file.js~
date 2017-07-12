$(document).ready(function() {
    $("#sub").click(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#msg').val();
        var date = $('#date').val();
        console.log('data');
        $.ajax({
            context: document.body,
            type: "POST",
            url: "insert.php",
            data: {
                "name": name,
                "email": email,
                "message": message,
                "date": date
            },
            success: function(data) {
                if (name != '' && email != '' && message != '' && date != '') {
                    alert("worked");
                    $("#name").val("");
                    $("#email").val("");
                    $("#message").val("");
                    $("#date").val("");
                } else {
                    alert("please fill all the fields")
                }
            }
        });
    });
    return false;
});
$(document).ready(function(){
    setInterval(function(){
        fetchData();
    },1000);  // this will call your fetchData function for every 10 Sec.
});
  function fetchData(){
    $.ajax({
        type: 'POST',
        url: 'fetch.php',
        dataType: "json", //to parse string into JSON object,
        success: function(data) {
            console.log('json');
            if (data) {
              $("td").remove();
                var len = data.length;
                var txt = "";
                if (len > 0) {
                    for (var i = 0; i < len; i++) {
                        if (data[i].name && data[i].email && data[i].message && data[i].date) {
                            txt += "<tr><td>" + data[i].name + "</td><td>" + data[i].email + "</td><td>" + data[i].message + "</td><td>" + data[i].date + "</td></tr>";
                        }
                    }
                    if (txt != "") {
                        $("#table").append(txt).removeClass("hidden");
                    }
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('error: ' + textStatus + ': ' + errorThrown);
        }
    });
    return false; //suppress natural form submission
  }
