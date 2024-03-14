<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <style>
    .quiz-section{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 80vh;
      margin: 2rem auto;
      width: 80%;
    }   
    </style>
</head>
<body>
    <div id="app">
    <div class="container">
        <website-header></website-header>
        <section class="quiz-section">
            <quiz-description></quiz-description>
            <quiz-btn></quiz-btn>
        </section>
        <website-footer></website-footer>
      </div>
    </div>
      <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>