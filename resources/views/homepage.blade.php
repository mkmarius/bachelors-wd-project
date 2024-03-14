<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Multimedija ir kompiuterinis dizainas</title>
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <style>
        .hero-section {
            align-items: center;
            min-height: 80vh;
            width: 90%;
            margin: auto;
            display: flex;
            padding: 2rem 1rem;
            justify-content: center;
            align-items: center;
        }
        .hero-description {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 60%;
        }
        .hero-image {
            display: flex;
            justify-content: center;
            width: 40%;
            max-width: 800px;
        }
        .hero-image img {
            width: 100%;
        }
        .hero-image { 
            margin-bottom: 1rem;
        }
        .home-text {
            margin-bottom: 1rem;
        }
        @media only screen and (min-width: 1050px) and (max-width: 1200px) {
            .hero-section {
                flex-direction: column-reverse;
                flex-wrap: wrap-reverse;
                aling-items: center;
            }

            .hero-image {
                width: 40%;
            }

            .hero-description {
                width: 100%;
            }
        }
        @media only screen and (min-width: 767px) and (max-width: 1050px) {
            .hero-section {
                flex-direction: column-reverse;
                flex-wrap: wrap-reverse;
                aling-items: center;
            }

            .hero-image {
                width: 60%;
            }

            .hero-description {
                width: 100%;
            }
        }

        @media only screen and (max-width: 767px) {
            .hero-section {
                flex-direction: column-reverse;
                width: 100%;
                flex-wrap: wrap-reverse;
                aling-items: center;
            }
            .hero-description {
                width: 100%;
            }
            .hero-image {
                width: 80%;
            }

            .hero-image img {
                width: 100%;
            }
            .hero-image img {
                margin-bottom: -30px;
            }
        }
    </style>
</head>
<body>
    <div id="app">
        <div class="container">
            <website-header></website-header>
            <section class="hero-section">
                <div class="hero-description">
                    <homepage-description></homepage-description>
                    <cta-btns></cta-btns>
                </div>
                <div class="hero-image">
                    <img src="images/designer.png" alt="designer illustration" />
                </div>
            </section>
        </div>
        <website-footer></website-footer>
    </div>
    <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>

