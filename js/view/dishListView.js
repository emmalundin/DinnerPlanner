//ExampleView Object constructor
var DishListView = function (container,model) {

	this.updateSelectedDishes = function(type){
		$("#dishListView").html(""); //Tömmer listan av maträtter!!!!!

		var type = document.getElementById('typeSelect').value;
		var dishList = model.getAllDishes(type);

		var div = $("<div class='row-fluid' id='test'>");

		//J-query for-loop
		$.each(dishList,(function(index,dishInfo){
			//image, text, info
				var eachDiv = $("<div class='eachDiv col-lg-4'>");

				//Adds image
				var objectImage = $("<img width='150px' height='150px'></a>").attr("src", "images/" + dishInfo["image"]);

				//Adds button
				var infoButtonDiv = $("<div class='infoButton' id='infoButton'>");
				var selectDishButton = "<button class='selectDishId btn' data-dishId='" + dishInfo.id + "'>" + dishInfo.name + "</button>";

				selectedDishes = infoButtonDiv.append(selectDishButton);

				//Ads imagetext
				var descriptionText = $("<div class='descriptionText'>");
				var imageText = dishInfo.description;
				descriptionText.append(imageText);

				//Adds all
				dishList = eachDiv.append(objectImage, selectedDishes, descriptionText);
				div.append(dishList);
			});

			container.append(div);
	}

this.updateSelectedDishes();

}
