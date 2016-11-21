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

/*
		var menu2 = dishList[0];
		this.dishImage.attr("src","./images/" + menu2);
		this.dishName.append(menu2.name);
		this.dishDescription.append(menu2.descpription);


		var menu3 = dishList[0];
		this.dishImage.attr("src","./images/" + menu3);
		this.dishName.append(menu3.name);
		this.dishDescription.append(menu3.descpription);
*/

		//kolla upp event target, så när man klickar på något så händer något view.dishList.click(function()), Kolla example view controller

}

 
