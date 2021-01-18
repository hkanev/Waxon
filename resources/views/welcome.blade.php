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

<body id="app">

<div>
    <page-hader></page-hader>

</div>
</body>
</html>
