var RemoveCtrl = function(ctrl,model,view){
	//Tar in:
	//	var removeCtrl = RemoveCtrl(overallstateCtrl, model, firstView);
	this.update = function(){
		// När confirmknappen klickas ska den läggas till i leftView
		$('.removeBtn').on('click', function( event ){
				remove = $(this).attr('data-removeId');
				model.removeDishFromMenu(remove);
				console.log('removed!');

    	});
	}
	model.addObserver(this);

	this.update();
}