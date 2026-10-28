<?php
$host = "sql308.infinityfree.com";
$username = "if0_43163767";
$password = "r20k8ch2006m ";
$database = "if0_43163767_eventdb";

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Database connection failed.");
}




if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["fullname"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $event = $_POST["event"];
    $branch = $_POST["branch"];

    $query = "INSERT INTO mydata (name, email, mobile, branch, event)
              VALUES ('$name', '$email', '$mobile', '$branch', '$event')";

    if (mysqli_query($conn, $query)) {

        echo "Registration Successful!<br><br>";
        echo "Name: " . $name . "<br>";
        echo "Email: " . $email . "<br>";
        echo "Mobile: " . $mobile . "<br>";
        echo "Event: " . $event . "<br>";
        echo "Branch: " . $branch . "<br>";

    } else {

        echo "INSERT ERROR: " . mysqli_error($conn);
    }
}

mysqli_close($conn);

?>