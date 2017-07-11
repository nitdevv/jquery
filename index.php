<!DOCTYPE html>
<html>
<head>
  <title>ajax assignment</title>
    <script src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
    <link rel="stylesheet" href="style.css"/>

    <script>
        $(document).ready(function() {
            $("#sub").click(function(e) {
                e.preventDefault();
                var name = $('#name').val();
                var email = $('#email').val();
                var message = $('#msg').val();
                var date = $('#date').val();
                console.log('date');
                $.ajax({
                    context: document.body,
                    type: "POST",
                    url: "http://localhost/ajax/insert.php",
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
    </script>
</head>

<body>
  <div class="container">
      <div class="main">
    <form id="form" action='' method='post'>
            <label>Name :</label>
            <input type='text' name='name' placeholder='user name' id='name' required>
            <br>
            <label>Email :</label>
            <input type='email' name='email' placeholder='email' id='email' required>
            <br>
            <label>Message :</label>

            <input type='text' name='message' placeholder='message' id='msg' required>
            <br>
            <label>Date :</label>
            <input type='date' name='date' placeholder='date' id='date' required>

             <button id='sub'>Insert</button>
    </form>
  </div>
</div>
</body>
</html>
