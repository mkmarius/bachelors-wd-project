<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Profesijų klausimynas</title>
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
</head>
<body>
  <div id="app">
      <website-header>
      </website-header>
    <quiz></quiz>
    <website-footer></website-footer>
  </div>
  <script src="{{ mix('/js/app.js') }}">
  </script>
  
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="/js/jsPDF/html.js"></script>
  <script src="/js/jsPDF/jspdf.js"></script>
  <script src="/js/jsPDF/split_text_to_size.js"></script>
  <script src="/js/jsPDF/standard_fonts_metrics.js"></script>
  <script src="/js/jsPDF/html2canvas.js"></script>

</body>
</html>