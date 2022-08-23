
$().ready(function(){
		

	$(".sex label").click(function(){
		$(".sex label").removeClass("on");
		$(this).addClass("on");	
	 
	});

	
});

$( function() {
	$( ".datepicker" ).datepicker({
		showOn: "both", //both,button 옵션중
		buttonImage: "images/btn_calendar.gif",
		
		//buttonText: "Select date"

		
		
		buttonImageOnly:true,
		dateFormat:'yy.mm.dd',
		prevText:'이전 달',
		nextText:'다음 달',
		monthNames:['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesShort:['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		dayNames:['일', '월', '화', '수', '목', '금', '토'],
		dayNamesShort:['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin:['일', '월', '화', '수', '목', '금', '토'],
		showMonthAfterYear:true,
		yearSuffix:'년'
	});
  } );

