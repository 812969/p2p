$(document).ready(function(e){
/*ͷ��*/
 $(".logo dl dd").click(function(){
    $(".logo dl dd .city").toggle();
    return false;	
 })
 $(document).click(function(){
   $(".logo dl dd .city").hide();
 })
/*�ӵ���*/
 $(window).scroll(function(){
   var sT = $(document).scrollTop();
   if(sT>=131){
     $(".sub_menu").show();
   }else{
     $(".sub_menu").hide();
   }
 })
/*���ض���*/
 $(".back ul .xinxi").hover(function(){
   $(this).addClass("hover");
   $(".back ul .xinxi p").addClass("hover");
   $(".back ul .xinxi span").show();
 },function(){
   $(this).removeClass("hover");
   $(".back ul .xinxi p").removeClass("hover");
   $(".back ul .xinxi span").hide();
 })
 
 $(window).scroll(function(){
   var wh = $(window).height();
   var st = $(document).scrollTop();
   
   if(st<=wh){
     $(".back ul .back_btn").slideUp();
   }else{
     $(".back ul .back_btn").slideDown();
   }
   
 })
 
 $(".back ul .back_btn").hover(function(){
   $(this).addClass("hover");
 },function(){
   $(this).removeClass("hover");
 })
 
 $(".back ul .back_btn").click(function(){
   $("html,body").stop().animate({"scrollTop":0},0);
    })
  $(".wenhua_1 ul li").click(function(){
		var abc=$(this).index();
		$(this).addClass("hover").siblings().removeClass("hover");
		$(".touzi_con .touzi_one").eq(abc).show().siblings().hide();
	 })
 $(".weima_1").click(function(){
	 $(".sao").toggleClass("hover")
	 return false;
	 })
 $(document).click(function(){
	 $(".sao").removeClass("hover");
	 })
 $(".weima_2").click(function(){
	 $(".sao1").toggleClass("hover")
	 return false;
	 })
   $(document).click(function(){
	 $(".sao1").removeClass("hover");
	 })

})