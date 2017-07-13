<!DOCTYPE html>
<html>
<head>
    <title>ajax assignment</title>
    <script src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
    <link rel="stylesheet" href="style.css" />
    <script src="file.js"></script>
</head>
<body>
  <table id="table">
     <thead>
     <tr>
         <th>Name</th>
         <th>Email</th>
         <th>Message</th>
         <th>Date</th>
     </tr>
      </thead>
      <tbody class="tbody"></tbody>
 </table>
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
                <button id='sub'>Submit</button>
            </form>
        </div>
        <br>
    </div>
</body>
</html>
