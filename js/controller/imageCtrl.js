var knappDIV = function (overallstateCtrl, model, view) {
// Tar IN:
// overallstateCtrl, model, dishinfoView

	this.updateDishListView = function(type){
		var type = document.getElementById('typeSelect').value;
		view.updateSelectedDishes(type);
	}
	
	$(".selectDishId").click(function(){
		var id = $(this).attr("data-dishId");		
		view.update(id);
		overallstateCtrl.switchstate(2);
	});

	$("#back").click(function(){
		overallstateCtrl.switchstate(5);
		$("#ingredients").empty();
	});



}