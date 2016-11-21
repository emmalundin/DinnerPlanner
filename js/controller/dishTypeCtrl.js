var DishType = function (stateCtrl, model, view, view2) {
	// Tar in overallstateCtrl, model, dishListView, dishinfoView

	//Uppdaterar type(starter, main & dessert)
	$("#typeSelect").change(function(){
		view.updateSelectedDishes(this.type);
		var type = document.getElementById('typeSelect').value;
		view.updateSelectedDishes(type);
	});

	//Uppdaterar nya Id:n, newID skickas som ActiveID till update i dishinfoView
	$('#dishListView').on('click', ".selectDishId", function( event ){
		newId = $(this).attr("data-dishId");
		view2.update(newId);
		stateCtrl.switchstate(2);
  });
}
