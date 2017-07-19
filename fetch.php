<?php
$username="root";
$password="";
$hostname = "localhost";
$dbhandle = mysqli_connect($hostname, $username, $password,"nitesh") or die("Unable to connect to MySQL");
$sort=$_POST['sort'];
$sortType=$_POST['sortType'];
$limit=$_POST['limit'];
$offset=$_POST['offset'];
$pageStart = $_POST['pageStart'];
$endLimit = $pageStart + $limit;
$result2 = mysqli_query($dbhandle,"SELECT COUNT(*) as count FROM person_info");
$result = mysqli_query($dbhandle,"SELECT * FROM person_info ORDER BY $sort $sortType LIMIT $pageStart,$limit ");
$json_response = array();
while ($row = mysqli_fetch_array($result))
 {
  $row_array['name'] = $row['name'];
  $row_array['email'] = $row['email'];
  $row_array['message'] = $row['message'];
  $row_array['date'] = $row['date'];
  array_push($json_response,$row_array);
}
$fres=array();
$row2 = mysqli_fetch_array($result2);
$rowCount['count']=$row2['count'];
array_push($fres,$rowCount);
array_push($fres,$json_response);
echo json_encode($fres);
?>

