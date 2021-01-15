/*
 * Copyright (c) 2020 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/
import 'owl.carousel';
import 'magnific-popup';
import WOW from 'wowjs';
import simpleParallax from 'swiper' ;
jQuery(document).ready(function(){

	"use strict";

	function waxon_tm_about_animations(){

		var image = document.getElementsByClassName('thumbnail');
		new simpleParallax(image, {
			delay:5,
			overflow: true,
			orientation:'down'
		});

		var image2 = document.getElementsByClassName('thumbnail-2');
		new simpleParallax(image2, {
			delay:5,
			overflow: true,
			orientation:'right'
		});

		var image3 = document.getElementsByClassName('thumbnail-3');
		new simpleParallax(image3, {
			delay:5
		});

		var image4 = document.getElementsByClassName('thumbnail-4');
		new simpleParallax(image4, {
			delay:5,
			orientation:'right'
		});
	}
	waxon_tm_about_animations();

	// -----------------------------------------------------
	// --------------------    WOW JS    -------------------
	// -----------------------------------------------------

    new WOW.WOW({ live: false}).init();

	// -----------------------------------------------------
	// -----------------   SWIPER SLIDER    ----------------
	// -----------------------------------------------------

	function waxon_tm_hero_slider(){

		var section		= $('.fn_cs_personal_slider');
		section.each(function(){
			var element				= $(this);
			var mainSliderSelector	= element.find('.swiper-container');
			var transform 			= 'Y';
			var direction 			= 'horizontal';
			var	interleaveOffset 	= 0.5;
			if(direction === 'horizontal'){
				transform 			= 'X';
			}
			// Main Slider
			var mainSliderOptions 	= {
				loop: true,
				speed: 1500,
				autoplay:{
					delay:5000
				},
				slidesPerView: 1,
				direction: direction,
				loopAdditionalSlides: 10,
				watchSlidesProgress: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					init: function(){
						this.autoplay.stop();
					},
					imagesReady: function(){
						this.autoplay.start();
					},
					progress: function(){
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress 	= swiper.slides[i].progress,
							innerOffset 		= swiper.width * interleaveOffset,
							innerTranslate 		= slideProgress * innerOffset;
							$(swiper.slides[i]).find(".main_image").css({transform: "translate"+transform+"(" + innerTranslate + "px)"});
						}
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".main_image").style.transition =
							speed + "ms";
						}
					}
				}
			};
			new Swiper(mainSliderSelector, mainSliderOptions);
		});

	}
	waxon_tm_hero_slider();

	// -------------------------------------------------
	// -------------  SLIDER KENBURN  ------------------
	// -------------------------------------------------

	function waxon_tm_kenburn_slider(){

		var mySlider	= jQuery('.vegas-slide-inner');

		if(mySlider.length){
			var dataImages	= jQuery('.vegas-slide-inner').data('images');
			var nameArray	= dataImages.split(',');
			var html	= [];

		    for(var i=0;i<nameArray.length;i++){
			   html.push({src:nameArray[i]});
		    }
		   jQuery(function() {
			  jQuery('.waxon_tm_hero .overlay_slider').vegas({
			  timer:false,
			  animation: [ 'kenburnsUp', 'kenburnsLeft', 'kenburnsRight'],
			  delay:7000,
			  slides: html
			  });
		   });

		}

	}
	waxon_tm_kenburn_slider();

	// -------------------------------------------------
	// -------------------  ANCHOR ---------------------
	// -------------------------------------------------

	// jQuery('.anchor_nav').onePageNav();

	// -------------------------------------------------
	// -------------------  FILTER OPENER --------------
	// -------------------------------------------------

	function waxon_tm_filter_opener(){

		var button	= jQuery('.waxon_tm_portoflio .portfolio_filter .wrapper a');
		var list	= jQuery('.waxon_tm_portoflio .portfolio_filter ul li');

		button.on('click',function(){
			var element = jQuery(this);
			if(element.hasClass('opened')){
				element.removeClass('opened');
				list.removeClass('opened');
			}else{
				element.addClass('opened');
				list.each(function(i){
					var ele = jQuery(this);
					setTimeout(function(){ele.addClass('opened');},i*100);
				});
			}
			return false;
		});
	}
	waxon_tm_filter_opener();

	// -----------------------------------------------------
	// -----------   TESTIMONIAL HOVER    ------------------
	// -----------------------------------------------------

	function waxon_tm_testimonials_effect(){

		var list	= jQuery('.waxon_tm_testimonials .testi_inner .right .image_list ul li');

		list.on('mouseenter',function(){
			var element = jQuery(this);
			var elIndex = element.index()+1;
			list.removeClass('active');
			element.addClass('active');
			element.closest('.waxon_tm_testimonials').find('.quote_list ul li').removeClass('active');
			element.closest('.waxon_tm_testimonials').find('.quote_list ul li:nth-child('+elIndex+')').addClass('active');
		});
	}
	waxon_tm_testimonials_effect();

	// -----------------------------------------------------
	// --------------------    JARALLAX    -----------------
	// -----------------------------------------------------

	function waxon_tm_jarallax(){

		jQuery('.jarallax').each(function(){
			var element			= jQuery(this);
			var	customSpeed		= element.data('speed');

			if(customSpeed !== "undefined" && customSpeed !== ""){
				customSpeed = customSpeed;
			}else{
				customSpeed 	= 0.5;
			}

			element.jarallax({
				speed: customSpeed,
				automaticResize: true
			});
		});
	}
	waxon_tm_jarallax();

	// -----------------------------------------------------
	// ---------------   MOBILE MENU    --------------------
	// -----------------------------------------------------

	function edrea_tm_hamburger(){

	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.waxon_tm_mobile_menu .dropdown');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}
	edrea_tm_hamburger();

	// -----------------------------------------------------
	// --------------   TOPBAR BACKGROUND    ---------------
	// -----------------------------------------------------

	function waxon_tm_nav_bg(){

		jQuery(window).on('scroll',function(){
			var topbar	 		= jQuery('.waxon_tm_topbar,.waxon_tm_topbar_single');
			var WinOffset		= jQuery(window).scrollTop();

			if(WinOffset >= 100){
				topbar.addClass('animate');
			}else{
				topbar.removeClass('animate');
			}
		});
	}
	waxon_tm_nav_bg();

	// -----------------------------------------------------
	// ------------------   CURSOR    ----------------------
	// -----------------------------------------------------

	function waxon_tm_cursor(){

		var myCursor	= jQuery('.mouse-cursor');

		if(myCursor.length){
			if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");
			let n, i = 0,
				o = !1;
			window.onmousemove = function (s) {
				o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
			}, $("body").on("mouseenter", "a, .cursor-pointer", function () {
				e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
			}), $("body").on("mouseleave", "a, .cursor-pointer", function () {
				$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
			}), e.style.visibility = "visible", t.style.visibility = "visible"
		}
		}
	};
	waxon_tm_cursor();

	// -----------------------------------------------------
	// ----------------    OWL CAROUSEL    -----------------
	// -----------------------------------------------------

	function waxon_tm_partners(){

		var carousel			= jQuery('.waxon_tm_service .owl-carousel');

		var rtlMode	= false;

		if(jQuery('body').hasClass('rtl')){
			rtlMode = 'true';
		}

		carousel.owlCarousel({
			loop: true,
			items: 2,
			lazyLoad: false,
			margin: 70,
			autoplay: true,
			autoplayTimeout: 7000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:2},
				1040:{items:3},
				1200:{items:3},
				1600:{items:3},
				1920:{items:3}
			}
		});
		waxon_tm_imgtosvg();
	}
	waxon_tm_partners();

	// -----------------------------------------------------
	// ---------------    IMAGE TO SVG    ------------------
	// -----------------------------------------------------

	function waxon_tm_imgtosvg(){

		jQuery('img.svg').each(function(){

			var jQueryimg 		= jQuery(this);
			var imgClass		= jQueryimg.attr('class');
			var imgURL			= jQueryimg.attr('src');

			jQuery.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var jQuerysvg = jQuery(data).find('svg');

				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

				// Replace image with new SVG
				jQueryimg.replaceWith(jQuerysvg);

			}, 'xml');

		});
	}
	waxon_tm_imgtosvg();

	// -----------------------------------------------------
	// --------------------   POPUP    ---------------------
	// -----------------------------------------------------

	function waxon_tm_popup(){

		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
		jQuery('.popup-youtube').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		});
	}
	waxon_tm_popup();

	// -----------------------------------------------------
	// ---------------   DATA IMAGES    --------------------
	// -----------------------------------------------------

	function waxon_tm_data_images(){

		var data			= jQuery('*[data-img-url]');

		data.each(function(){
			var element			= jQuery(this);
			var url				= element.data('img-url');
			element.css({backgroundImage: 'url('+url+')'});
		});
	}
	waxon_tm_data_images();

	// -------------------------------------------------
	// -----------------    PORTFOLIO    ---------------
	// -------------------------------------------------

	// filterable

	function waxon_tm_portfolio(){

		if(jQuery().isotope) {

			// Needed variables
			var list 		 = jQuery('.waxon_tm_portoflio .portfolio_inner ul');
			var filter		 = jQuery('.waxon_tm_portoflio .portfolio_filter ul');

			if(filter.length){
				// Isotope Filter
				filter.find('a').on('click', function(){
					var selector = jQuery(this).attr('data-filter');
					list.isotope({
						filter				: selector,
						animationOptions	: {
							duration			: 750,
							easing				: 'linear',
							queue				: false
						}
					});
					return false;
				});

				// Change active element class
				filter.find('a').on('click', function() {
					filter.find('a').removeClass('current');
					jQuery(this).addClass('current');
					return false;
				});
			}
		}
	}
	waxon_tm_portfolio();

	// function waxon_tm_myload(){
		// setTimeout(function(){
		// 	jQuery('.waxon_tm_preloader').addClass('loaded');
		// }, 1000);
		// setTimeout(function(){
		// 	jQuery('.waxon_tm_hero .background .myOverlay').addClass('loaded');
		// }, 2000);
		// setTimeout(function(){
		// 	jQuery('.waxon_tm_topbar').addClass('opened');
		// }, 3000);
        //
		// setTimeout(function(){
		// 	waxon_tm_isotope();
		// }, 5000);
	// }

	// -----------------------------------------------------
	// --------------    ISOTOPE MASONRY    ----------------
	// -----------------------------------------------------

	function waxon_tm_isotope(){

		var masonry = $('.masonry');
		if($().isotope){
			masonry.each(function(){
				$(this).isotope({
				  itemSelector: '.masonry_item',
				  masonry: {

				  }
				});
			});
		}
	}
	waxon_tm_isotope();

	// -------------------------------------------------
	// -------------  RESIZE FUNCTION  -----------------
	// -------------------------------------------------

	jQuery(window).on('resize',function(){
		waxon_tm_isotope();
		waxon_tm_portfolio();
	});

	// -------------------------------------------------
	// -------------  LOAD FUNCTION  -------------------
	// -------------------------------------------------
});
