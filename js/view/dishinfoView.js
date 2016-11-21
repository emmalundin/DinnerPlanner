var DishInfo = function(container, model, id){
	// Information about the dish, with ingredients and preparations

	var activeID = 1;
	var dish = null;

	this.update = function(activeID){
		this.prepImg =container.find("#prepImg");
		this.prepName =container.find("#prepName");
		this.prep =container.find("#prep");
		this.ingDiv =container.find("#ingredients");
		this.ingCost =container.find("#ingCost");
		this.people = container.find("#people");
		this.confirmDishButton = container.find("#confirmDishButton");

		dish = model.getDish(activeID);
		model.setActiveDish(activeID);

		var people = model.getNumberOfGuests();
		this.prepImg.attr("src","./images/" + dish.image);
		this.prepName.html(dish.name);
		this.prep.html(dish.description);
		this.people.html(" for " + people + " people</h3>");

		var ingredients = dish.ingredients;
		var htmlStr = "";
		var ingCost = 0;
		var confirmDishButtonID = dish.id;

		for (i in ingredients){
			htmlStr = ingredients[i].name + " " + ingredients[i].quantity * people
						+ " " + ingredients[i].unit + " " + ingredients[i].price * people + "kr<br/>";
			ingCost += ingredients[i].price * people;
			this.ingDiv.append(htmlStr);
		}

	this.updateguests = function(activeID){

		var people = model.getNumberOfGuests();
		this.prepImg.attr("src","./images/" + dish.image);
		this.prepName.html(dish.name);
		this.prep.html(dish.description);
		this.people.html(" for " + people + " people</h3>");

		$("#ingredients").empty();

		var ingredients = dish.ingredients;
		var htmlStr = "";
		var ingCost = 0;
		var confirmDishButtonID = dish.id;

		for (i in ingredients){
			htmlStr = ingredients[i].name + " " + ingredients[i].quantity * people
						+ " " + ingredients[i].unit + " " + ingredients[i].price * people + "kr<br/>";
			ingCost += ingredients[i].price * people;
			this.ingDiv.append(htmlStr);
		}

		this.ingCost.html("<br/>Total cost: " + ingCost + "kr");
	}

		this.ingCost.html("<br/>Total cost: " + ingCost + "kr");
	}
}
