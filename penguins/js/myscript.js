$(document).ready( function(){
	var begin = "url(media/penguin_";
	
	var random1 = Math.ceil(random()*7);
	var url1 = begin + random1 + ".png)";
	var someClass = ".penguin";

	// function setPenguins(){
		
	// 	$(".penguin1").css("background-image", url1); 

	// 	random1 = Math.floor(random()*7) +1;
	// 	alert("Random: " + random1);
	// 	url1 = begin + random1 + ".png)";
	// 	$(".penguin2").css("background-image", url1); 	
	// };

	function random(seed) {
	  if (!seed)
	    seed = new Date().getTime();
		seed = (seed*9301+49297) % 233280;
		return seed/(233280.0);
	}

	var aMound = Math.ceil(random()*7);
	console.log(aMound);

	// $('#3').click( function(){
	// 	$(this).toggleClass('yeti');
	// 	$(this).unbind('click');
	// });
	var selector = "#4";
	$(selector).toggleClass('yeti');

		// alert("Random: " + random1);
		// setPenguins();
	$(".penguin1").click( function (){
		//alert(url1);
		random1 = Math.ceil(random()*7);
		url1 = begin + random1 + ".png)";
		$(this).css("background-image", url1);
		$(this).unbind('click');
		
	});

	$(".penguin2").click( function (){
		//alert(url1);
		random1 = Math.ceil(random()*7);
		url1 = begin + random1 + ".png)";
		$(this).css("background-image", url1);
		$(this).unbind('click');
		
	});		
		
});