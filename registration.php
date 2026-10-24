<?php

$con = mysqli_connect("localhost", "root", "", "users");

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["fullname"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $event = $_POST["event"];
    $branch = $_POST["branch"];

    $query = "INSERT INTO mydata (name, email, mobile, branch, event)
              VALUES ('$name', '$email', '$mobile', '$branch', '$event')";

    if (mysqli_query($con, $query)) {

        echo "Registration Successful!<br><br>";
        echo "Name: " . $name . "<br>";
        echo "Email: " . $email . "<br>";
        echo "Mobile: " . $mobile . "<br>";
        echo "Event: " . $event . "<br>";
        echo "Branch: " . $branch . "<br>";

    } else {

        echo "INSERT ERROR: " . mysqli_error($con);
    }
}

mysqli_close($con);

?>