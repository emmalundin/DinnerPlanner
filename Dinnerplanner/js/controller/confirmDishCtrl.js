var confirmDishCtrl = function(ctrl,model,view){
	//Tar in:
	//overallstateCtrl,model,dishinfoView,

		// När confirmknappen klickas ska den läggas till i leftView
		$('#confirmDishButton').on('click', function( event ){
				newId = model.getActiveDish();
				console.log(newId);
				model.addDishToMenu(newId);

    	});

}