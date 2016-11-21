var Dishes = function (container,model,type) {

	this.dishView = container.find("#dishView");
	this.dishListView = container.find("#dishListView");
	this.dishName = container.find("#dishName");
	this.dishImage = container.find("#dishImage");
	this.dishDescription = container.find("#dishDescription");

	var type = "starter";
	var dishList = model.getAllDishes();
	var menu = model.getFullMenu();

	//starter
	var menu1 = menu[0];
	this.dishImage.attr("src","./images/") + menu1.image;
	this.dishName.append();
	this.dishDescription.append(menu1.discription);
}
