//DinnerModel Object constructor
var DinnerModel = function() {

	var menu = [];
	var numberOfGuests = 0; //set default number of guests
	var activeDish = this.activeDish = 1;
	var activeID = 1;


	this.setActiveDish = function(id) {
		this.activeDish = id;
		notifyObservers("#selectDishId");

	}

	this.getActiveDish = function() {
		return this.activeDish;

	}

	this.setNumberOfGuests = function(num) {
		if(num>0) {
			numberOfGuests = num;
			notifyObservers();
		}
	};

	this.getNumberOfGuests = function() {
		return parseInt(numberOfGuests);
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		return menu[type];
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		var menuDishes = [];
		for(key in menu) {
			menuDishes.push(this.getDish(menu[key]));
		}
		return menuDishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var ingredients = [];
		for(key in menu) {
			var dish = this.getDish(menu[key]);
			ingredients = ingredients.concat(dish.ingredients);
		}
		return ingredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var ingredients = this.getAllIngredients();
		var sum = 0.;
		for(key in ingredients) {
			sum += parseFloat(ingredients[key].price) * this.getNumberOfGuests();
		}
		return sum;
	}

	this.getDishPrice = function(id) {
		ingredients = this.getDish(id).ingredients;
		var sum = 0;
		for(var i=0; i< ingredients.length; i++){
			sum = sum + ingredients[i].price;
			//console.log(ingredients[i].price);
		}
		return sum;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		menu[this.getDish(id).type] = id;
		notifyObservers();
	}
	
	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var type = this.getDish(id).type;
		if(menu[type] == id) {
			delete menu[type];
			notifyObservers();
		}
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];   
				//100 == "100", 100 === 100
			}
		}
	}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
				'id':4,
		'name':'Toast Skagen',
		'type':'starter',
		'image':'toastskagen.jpg',
		'description':"Toast Skagen is an elegant combination of prawns and other ingredients on a small piece of sautéed bread. Make toast. Put skagenrmix that you bought at ICA on toast. Garnish with dill.",
		'ingredients':[{ 
			'name':'Prawns',
			'quantity':16,
			'unit':'pcs',
			'price':19
			},{
			'name':'mayonaise',
			'quantity':20,
			'unit':'g',
			'price':10
			},{
			'name':'Bread',
			'quantity':1,
			'unit':'slices',
			'price':2
			}]
		},{
						'id':5,
		'name':'Elk carpaccio',
		'type':'starter',
		'image':'elkcarpaccio.jpg',
		'description':"Combine salt, black pepper and half the brown sugar. Place loin in a shallow pan and cover completely with mixture, top and bottom. Cover and refrigerate 8 to 12 hours.",
		'ingredients':[{ 
			'name':'Elk meat',
			'quantity':100,
			'unit':'g',
			'price':20
			},{
			'name':'Olive oil',
			'quantity':40,
			'unit':'tbsp',
			'price':1
			},{
			'name':'Parmesan cheese',
			'quantity':1,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'Spaghetti Carbonara',
		'type':'main dish',
		'image':'SpaghettiCarbonara.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'Garden Salad',
		'type':'main dish',
		'image':'GardenSalad.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'Stekt Str&ouml;mming',
		'type':'main dish',
		'image':'stektstromming.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':104,
		'name':'Falukorv',
		'type':'main dish',
		'image':'falukorv.jpg',
		'description':"Falukorv is a large Swedish sausage made of a grated mixture of pork and beef or veal with potato starch flour and mild spices. Note that Falukorv is a cooked sausage and can as such be eaten as is. Many Swedes slice it and eat it on a sandwich much as you would with a slice of ham.",
		'ingredients':[{ 
			'name':'Falukorv',
			'quantity':1,
			'unit':'pieces',
			'price':1
			},{
			'name':'Potatoes',
			'quantity':3,
			'unit':'pcs',
			'price':2
			},{
			'name':'Onion',
			'quantity':1,
			'unit':'pcs',
			'price':1
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'ChocolateIceCream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'StrawberryIceCream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':203,
		'name':'Crème brûlée',
		'type':'dessert',
		'image':'cremebrulee.jpg',
		'description':"Crème brûlée, also known as burnt cream, crema catalana, or Trinity cream is a dessert consisting of a rich custard base topped with a contrasting layer of hard caramel. It is normally served at room temperature.",
		'ingredients':[{ 
			'name':'cream',
			'quantity':100,
			'unit':'ml',
			'price':3
			},{ 
			'name':'sugar',
			'quantity':10,
			'unit':'ml',
			'price':2
			}]
		}
	];


	/*****************************************  
	      Observable implementation    
	*****************************************/

	var observers = [];

	this.addObserver = function(observer) 
	{
		observers.push(observer);
	}

	var notifyObservers = function(arg) 
	{
		for(var i=0; i<observers.length; i++) 
		{
			observers[i].update(arg);
		}	
	}

}
