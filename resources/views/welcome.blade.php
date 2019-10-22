<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="css/app.css">
    <style>
        body {
            background-color: #264C85;
        }
    </style>
</head>

<body>
    <div>
        <div class="content">
            <div id="example">
            </div>
        </div>
    </div>
</body>
<script src="js/app.js" type="text/javascript"></script>

</html>