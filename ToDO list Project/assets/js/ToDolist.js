// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on fa-trash-o to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// input
 $("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grab new ToDo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li, add li to ul.
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>");
	}
});

 // toggle input
$(".fa-list").click(function(){
	$("input[type='text']").fadeToggle();
});


