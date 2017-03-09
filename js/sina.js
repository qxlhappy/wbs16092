$(function(){
	// var  swiper1 = new  Swiper(".header-active",{
	var  swiper1 = new  Swiper("#header",{
		// freeMode:true;
		freeMode:true,
		slidesPerView:"auto",
	});  


	// $("#header .swiper-wrapper").click(function(){
		// 对每个文字加一个功能
	$("#header .swiper-slide").click(function(){
		// $("#header  .swiper-slide").removeClass('active');    写错了
		// $(".header-active").addClass('active');

		$("#header .swiper-slide").removeClass("header-active");
		$(this).addClass("header-active");
	});

	var  swiper2 = new  Swiper("#banner",{
	// 	pagination=".swiper-pagination"
	pagination:".swiper-pagination",
	//点击小点点有效果
	paginationClickable:true,
	lopp:true,
	autoplay:3000,

	// });
	// $("#banner").bind("click",function(){

		
		
	})
	





})


