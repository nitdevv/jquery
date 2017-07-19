
<?php
$username="root";
$password="";
$hostname = "localhost";
$dbhandle = mysql_connect($hostname, $username, $password)
or die("Unable to connect to MySQL");
$selected = mysql_select_db("nitesh",$dbhandle)
or die("Could not select examples");
$result = mysql_query("SELECT * FROM person_info");
$json_response = array();
while ($row = mysql_fetch_array($result, MYSQL_ASSOC))
 {
  $row_array['name'] = $row['name'];
  $row_array['email'] = $row['email'];
  $row_array['message'] = $row['message'];
  $row_array['date'] = $row['date'];
  array_push($json_response,$row_array);
}
echo json_encode($json_response);
?>
