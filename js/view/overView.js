var OverView = function(container, model){

	//My dinner på slutet

		this.mainImg = container.find("#mainImg");
		this.headerText = container.find("#headerText");
		this.menuImgs = container.find("#menuImgs");
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
		this.prepName =container.find("#prepName");
		this.starterPrep =container.find("#starterPrep");
		this.mainPrep = container.find("#mainPrep");
		this.dessertPrep = container.find("#dessertPrep");

		this.update = function(type, id){
		var people = model.getNumberOfGuests();
		this.headerText.append("<h3>My dinner: " + people + " people</h3>");

		//Full menu
		var menu = model.getFullMenu();

		//starter
		var menu1 = menu[0];
		this.starter.attr("src","./images/" + menu1.image);
		this.starterName.append("<h3>" + menu1.name + "</h3>");
		this.starterPrep.append("<h3>Preparations" + menu1.description + "</h3>" );

		//main dish
		var menu2 = menu[1];
		this.main.attr("src","./images/" + menu2.image);
		this.mainName.append("<h3>" + menu2.name + "</h3>");
		this.mainPrep.append(menu2.description);

		//dessert
		var menu3 = menu[2];
		this.dessert.attr("src","./images/" + menu3.image);
		this.dessertName.append("<h3>" + menu3.name + "</h3>");
		this.dessertPrep.append(menu3.description);
	}


}
