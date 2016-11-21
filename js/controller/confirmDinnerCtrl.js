var confirmDinnerCtrl = function(ctrl, model, view1, view2){
//knapp så att man kommer till #lastView
//overallstateCtrl, model, firstView, dinnerView
		$('#confirmDinnerButton').on('click', function( event ){
				var menu = model.setActiveDish();
				ctrl.switchstate(3);
				console.log(menu);
				view2.update(menu);
    	});
}
