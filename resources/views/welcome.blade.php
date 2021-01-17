<!DOCTYPE html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="Spintip">
    <meta name="author" content="Spintip Author">

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>{{ config('app.name', 'Spintip') }}</title>

    <!-- FONTS -->
    <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">

    <!-- Styles -->
    {{--    <link rel="stylesheet" type="text/css" href="theme/css/plugins.css" />--}}
    {{--    <link rel="stylesheet" type="text/css" href="theme/css/mycolors.css" />--}}
    {{--    <link rel="stylesheet" type="text/css" href="theme/css/darkMode.css" />--}}
    {{--    <link rel="stylesheet" type="text/css" href="theme/css/rtl.css" />--}}
    {{--    <link rel="stylesheet" type="text/css" href="theme/css/mycss.css" />--}}
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">

    <!-- Scripts -->
    <script src="{{ asset('js/theme.js') }}" defer></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>

<body id="app"> <!-- FOR DARK MODE: Add class "dark" Example: <body class="dark">  FOR RTL MODE: Add class "rtl" Example: <body class="rtl"> -->


<div class="waxon_tm_all_wrap" data-magic-cursor="" data-color="">
    <!-- MAGIC CURSOR VALUES: "", hide -->
    <!-- COLOR VALUES: blue, green, brown, pink, orange, black, white, purple, sky, cadetBlue, crimson, olive, red -->
        <page-hader></page-hader>
    <!-- TOPBAR -->
{{--    <div class="waxon_tm_topbar opened">--}}
{{--        <div class="container">--}}
{{--            <div class="topbar_inner">--}}
{{--                <div class="logo">--}}
{{--                    <a href="#">--}}
{{--                        <img class="light" src="img/logo/logo.png" alt="" />--}}
{{--                        <img class="dark" src="img/logo/dark.png" alt="" />--}}
{{--                    </a>--}}
{{--                </div>--}}
{{--                <div class="menu">--}}
{{--                    <div class="links">--}}
{{--                        <ul class="anchor_nav">--}}
{{--                            <li class="current">--}}
{{--                                <a href="#home">--}}
{{--                                    <span class="first">Home</span>--}}
{{--                                    <span class="second">Home</span>--}}
{{--                                </a>--}}
{{--                            </li>--}}
{{--                            <li>--}}
{{--                                <a href="#about">--}}
{{--                                    <span class="first">About</span>--}}
{{--                                    <span class="second">About</span>--}}
{{--                                </a>--}}
{{--                            </li>--}}
{{--                            <li>--}}
{{--                                <a href="#portfolio">--}}
{{--                                    <span class="first">Portfolio</span>--}}
{{--                                    <span class="second">Portfolio</span>--}}
{{--                                </a>--}}
{{--                            </li>--}}
{{--                            <li>--}}
{{--                                <a href="#news">--}}
{{--                                    <span class="first">News</span>--}}
{{--                                    <span class="second">News</span>--}}
{{--                                </a>--}}
{{--                            </li>--}}
{{--                            <li>--}}
{{--                                <a href="#contact">--}}
{{--                                    <span class="first">Contact</span>--}}
{{--                                    <span class="second">Contact</span>--}}
{{--                                </a>--}}
{{--                            </li>--}}
{{--                        </ul>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
<!-- /TOPBAR -->
</div>
</body>
</html>
