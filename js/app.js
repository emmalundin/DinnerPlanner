$(function() {
	//The global variable so we can access it from other controller and views
	//window.stage = "starter";
	
	//We instantiate our model
	var model = new DinnerModel();

	//model.setNumberOfGuests(5);
	var firstView = new FirstView($("#leftView"),model);
	var dishinfoView = new DishInfo($("#prepView"),model);
	var dinnerView = new MyDinner($("#lastView"),model);
	var overView = new OverView($("#overView"),model);
	//var dishView = new DishView($("#dishView"), model);
	var dishListView = new DishListView($("#dishListView"), model);
	//var dishView = new DishListView($("#dishView"), model);
	//var dishesView = new Dishes($("#dishView"),model);
	//var exampleView = new ExampleView($("#exampleView"), model);

	var viewList = [firstView, dishinfoView, dinnerView, overView, dishListView];
	var divNames = [ '#','#leftView', '#prepView' , '#lastView' , '#overView' , '#dishListView', '#dishView' , '#startPage' , '#startInfo'];

	// Controllers!
	var overallstateCtrl = new OverallstateCtrl(viewList, divNames, model);
	var knapp = new Startknapp(overallstateCtrl,model);
	var dropdown = new DishType(overallstateCtrl, model, dishListView, dishinfoView);
	var imageButton = new knappDIV(overallstateCtrl, model, dishinfoView);
	var PlusMinusButtons = new LeftViewCtrl(overallstateCtrl, model, dishinfoView);
	var confirmDish = new confirmDishCtrl(overallstateCtrl,model,dishinfoView);
	var confirmDinner = new confirmDinnerCtrl(overallstateCtrl,model,firstView,dinnerView);
	var removeCtrl = new RemoveCtrl(overallstateCtrl, model, firstView);

});	
