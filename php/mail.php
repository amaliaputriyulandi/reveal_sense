<?php
//get data from form  
$name = $_POST['name'];
$email = $_POST['email'];
$ulasan = $_POST['ulasan'];
$comments = $_POST['comments'];
// if($comments != NULL){
//     echo "<script>";
//     echo "console.log($comments);";
//     echo "</script>";
// }else{
//     echo "<script>";
//     echo "console.log('gaada');";
//     echo "</script>";
// }
$to = "revealsense.team@gmail.com";
$subject = "Mail From website Reveal Sense";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Subject =" . $ulasan; "\r\n Message =" . $comments;
$headers = "From: noreply@revealsense.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>