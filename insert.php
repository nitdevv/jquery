<?php
 $username = 'root';
 $password = '';
 $hostname = 'localhost';
 $db       = 'nitesh';
 $con = mysqli_connect('localhost','root',$password,'nitesh');
 if(isset($_POST['name']) || isset($_POST['email'])){
   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];
   $date = $_POST['date'];
   if($name!='' && $email!='' && $message!='' && $date!='')
 {
    $sql = "INSERT INTO person_info (name,email,message,date) values ('$name','$email','$message','$date')";
 }
if(mysqli_query($con, $sql))
{
   echo 'success';
}
 }
?>
