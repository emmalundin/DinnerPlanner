var LeftViewCtrl = function(view, model, dishinfoView) {
 
	 $('#plusGuest').click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 dishinfoView.updateguests(model.getNumberOfGuests() + 1);

	 });
	 
	 $('#minusGuest').click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	 dishinfoView.updateguests(model.getNumberOfGuests() - 1);

	 });



}