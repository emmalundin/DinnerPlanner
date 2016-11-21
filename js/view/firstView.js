var FirstView = function(container, model, id){
	// Left view -  på sidan 

	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	var dishCost = this.dishCost = container.find("#dishCost");
	var chosenDish = this.chosenDish = container.find("#chosenDish");
	var totalCost = this.totalCost = container.find("#totalCost");
	var priceView = this.priceView = container.find("#priceView");


	var activeID = 1;

	this.updateSelectedDishes = function(){

			this.numberOfGuests.html(model.getNumberOfGuests());
			var menu = model.getFullMenu();
			var people = model.getNumberOfGuests();

			
			//när man valt nåt ska denna gå på det id:t man har valt
			var dishes = "";
			if(menu[0]) dishes += "<br/><div>" + menu[0].name + "</div><br/>";
			if(menu[1]) dishes += "<div>" + menu[1].name + "</div><br/>";	
			if(menu[2]) dishes += "<div>" + menu[2].name + "</div><br/>";	
			

			var cost = "";
			if(menu[0]) cost += "<br/><div>" + model.getDishPrice(menu[0].id) * people + " Kr" 
				+ "<button class='btn col-lg-offset-4 removeBtn' data-removeId='" + menu[0].id + "'>x</button></div><br/>";
			if(menu[1]) cost += "<div>" + model.getDishPrice(menu[1].id) * people + " Kr" 
				+ "<button class='btn col-lg-offset-4 removeBtn' data-removeId='" + menu[1].id + "'>x</button></div><br/>";	
			if(menu[2]) cost += "<div>" + model.getDishPrice(menu[2].id) * people + " Kr" 
				+ "<button class='btn col-lg-offset-4 removeBtn' data-removeId='" + menu[2].id + "'>x</button></div><br/>";	

			this.chosenDish.html(dishes);
			this.dishCost.html(cost);

			var totalCost = model.getTotalMenuPrice() + " " + "Kr";
			this.totalCost.html(totalCost);

	}	

	model.addObserver(this);
	//this.updateSelectedDishes();


	this.update = function(arg){
		this.updateSelectedDishes();
		this.totalCost.html(model.getTotalMenuPrice() + " " + "Kr");		
	}


}
