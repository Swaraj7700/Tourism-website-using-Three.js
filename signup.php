<!DOCTYPE html>
<html lang="en">

<head>
    <title>Signup</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="css/signup_style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="body">
    <header>
        <div class="m-4">
            <nav class="navbar navbar-expand-lg py-2 navbar-dark bg-transparent">
                <div class="container-fluid">
                    <a href="#" class="navbar-brand">
                        <img src="Images/logo.png" height="50">
                        MERABHARAT
                    </a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a href="index.html" class="nav-link active">HOME</a></li>
                            <li class="nav-item"><a href="/" class="nav-link active">PROFILE</a></li>
                            <li class="nav-item"><a href="about.html" class="nav-link active">ABOUT</a></li>
                            <li class="nav-item"><a href="login.php" class="nav-link active">LOGIN</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="form">
            <form class="needs-validation" action="/MeraBharat/signup.php" method="post" novalidate>
                <div class="form-outline mb-4">
                    <input type="text" id="name" name="name" class="form-control form-control-lg text-black"
                        placeholder="Name" required />
                    <div class="invalid-feedback text-black">
                        Please enter your name.
                    </div>
                </div>
                <div class="form-outline mb-4">
                    <input type="text" id="username" name="username" class="form-control form-control-lg text-black"
                        placeholder="Username" required />
                    <div class="invalid-feedback text-black">
                        Please enter a username.
                    </div>
                </div>
                <div class="form-outline mb-4">
                    <input type="email" id="email" name="email" class="form-control form-control-lg text-black"
                        placeholder="Email address" required />
                    <div class="invalid-feedback text-black">
                        Please enter a valid email address.
                    </div>
                </div>
                <div class="form-outline mb-4">
                    <input type="password" id="password" name="password" class="form-control form-control-lg text-black"
                        placeholder="Password" required />
                    <div class="invalid-feedback text-black">
                        Please enter a password.
                    </div>
                </div>

                <div class="row mb-4">
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
                <div class="text-center">
                    <p class="text-white">Sign up with:</p>
                    <button type="button" class="btn btn-link btn-floating mx-1 text-white">
                        <i class="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1 text-white">
                        <i class="fab fa-google"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1 text-white">
                        <i class="fab fa-twitter"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1 text-white">
                        <i class="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
    </header>
    <footer class="mt-auto">
        &copy; 2023 CopyRight. All rights reserved.
    </footer>
    <script>
        // Enable form validation
        (function () {
            'use strict';

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation');

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault();
                            event.stopPropagation();
                        }

                        form.classList.add('was-validated');
                    }, false);
                });
        })();
    </script>
    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = $_POST['name'];
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        // Connecting to the Database
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "signup";

        // Create a connection
        $conn = mysqli_connect($servername, $username, $password, $database);
        // Die if connection was not successful
        if (!$conn) {
            die("Sorry we failed to connect: " . mysqli_connect_error());
        } else {
            // Submit these to a database
            // Sql query to be executed 
            $sql = "INSERT INTO `info` (`name`, `username`, `email`, `password`,`dt`) VALUES ('$name', '$username', '$email','$password', current_timestamp())";
            $result = mysqli_query($conn, $sql);

            if ($result) {
                echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Success!</strong> Your entry has been submitted successfully!
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>';
            } else {
                // echo "The record was not inserted successfully because of this error ---> ". mysqli_error($conn);
                echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Error!</strong> We are facing some technical issue and your entry ws not submitted successfully! We regret the inconvinience caused!
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>';
            }
        }
    }
    ?>
</body>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Josefin Sans", sans-serif;
    }

    body {
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.15)), url("Images/fort.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }

    @media (max-width: 991.98px) {
        body:not(.show-navbar-collapse) {
            overflow: hidden;
        }
    }

    .home-link {
        color: white;
        text-decoration: solid;
        cursor: pointer;
    }


    .login-page {
        width: 360px;
        padding: 8% 0 0;
        margin: auto;
    }

    .form {
        position: relative;
        z-index: 1;
        background: transparent;
        max-width: 500px;
        max-height: 500px;
        margin: 0 auto 100px;
        padding: 45px;
        text-align: center;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: transparent;
        color: #ffffff;
        padding: 10px 0;
        text-align: center;
    }

    nav {
        width: 100%;
        height: 5vh;
        background-color: white;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-transform: uppercase;
    }
</style>

</html>