<!DOCTYPE html>
<html>
<head>
    <title>ajax assignment</title>
    <script src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
    <link rel="stylesheet" href="style.css" />
    <script src="file.js"></script>
</head>
<body>
  <div>
  <table id="table" class="sortable">
     <thead id="heading">
     <tr>
         <th id="Name_1">Name</th>
         <th>Email</th>
         <th>Message</th>
         <th>Date</th>
     </tr>
      </thead>
      <tbody class="tbody" id="results">

      </tbody>
 </table>
 <div id ="yoo">
 <div id='page_navigation'></div>
<span id="nextValue">next</span></div>
 </div>
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
