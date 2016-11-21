var MyDinner = function(container, model){
		

		this.headerText =container.find("#headerText");
		this.starter = container.find("#starter");
		this.main = container.find("#main");
		this.dessert = container.find("#dessert");
		this.menuImgs = container.find("#menuImgs");
		this.starterName = container.find("#starterName");
		this.mainName = container.find("#mainName");
		this.dessertName = container.find("#dessertName");
		this.totalMenuPrice = container.find("#totalMenuPrice");
		this.starterPrice = container.find("#starterPrice");
		this.mainPrice = container.find("#mainPrice");
		this.dessertPrice = container.find("#dessertPrice");

this.update = function(type, id){ 
		var people = model.getNumberOfGuests();
		this.headerText.append("<h3>My dinner: " + people + " people</h3>");


		//Full menu
		var menu = model.getFullMenu();


		//starter
		var menu1 = menu[0];
		this.starter.attr("src","./images/" + menu1.image);
		this.starterName.append(menu1.name);
		this.starterPrice.append(model.getDishPrice(menu1.id) *people + "kr");


		//main dish
		var menu2 = menu[1];
		this.main.attr("src","./images/" + menu2.image);
		this.mainName.append(menu2.name);
		this.mainPrice.append(model.getDishPrice(menu2.id) *people + "kr");


		//dessert
		var menu3 = menu[2];
		this.dessert.attr("src","./images/" + menu3.image);
		this.dessertName.append(menu3.name);
		this.dessertPrice.append(model.getDishPrice(menu3.id) * people + "kr");

		
		this.totalMenuPrice.append("Total cost: " + model.getTotalMenuPrice() + "kr");
	}

}
