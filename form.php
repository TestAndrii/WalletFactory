<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">

    <title>Article Ajax WH-DB.COM</title>
    <meta name="description" content="Article WH-DB.COM. How send ajax form.">
    <meta name="author" content="wh-db.com">

    <script type="text/javascript" src="md5_crypt.js"></script>
    <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jsSHA/2.2.0/sha512.js"></script> -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="ajax.js"></script>

</head>

<body>
    <h1>Ajax</h1>
    <form method="post" id="ajax_form" action="">
        <input type="text" name="name" maxlength="10" placeholder="NAME" /><br>
        <input type="email" name="email" maxlength="10" placeholder="e-mail" /><br>
        <input type="date" name="birthday" maxlength="10" placeholder="birthday" /><br>
        <input type="text" name="comments" maxlength="10" placeholder="comments" /><br>
        <input type="button" id="btn" value="Отправить" />
    </form>

    <br>

    <hr>
    <div id="result_form"></div>
</body>

</html>