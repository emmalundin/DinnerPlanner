//ExampleView Object constructor
var DishListView = function (container,model) {


this.updateSelectedDishes = function(type){ 
		$("#dishListView").html(""); //Tömmer listan av maträtter!!!!!

		var type = document.getElementById('typeSelect').value;
		var dishList = model.getAllDishes(type);

		var div = $("<div class='row-fluid' id='test'>");		

		//J-query for-loop yao
		$.each(dishList,(function(index,dishInfo){
			//bild, text, info
			var eachDiv = $("<div class='eachDiv col-lg-4'>");

			//LÄGG TILL BILD
			var objectImage = $("<img width='150px' height='150px'></a>").attr("src", "images/" + dishInfo["image"]);

			//LÄGG TILL KNAPP!!!!!!!!!!!!!!!!
			var knappDIV = $("<div class='infoButton' id='infoButton'>");
			var knapp = "<button class='selectDishId btn' data-dishId='" + dishInfo.id + "'>" + dishInfo.name + "</button>";

			knapp2 = knappDIV.append(knapp);	

			// LÄGG TILL IMAGETEXT
			var hej2 = $("<div class='descriptionText'>");
			var imageText = dishInfo.description;
			hej2.append(imageText);

			//LÄGG TILL ALLT
			hej = eachDiv.append(objectImage, knapp2, hej2);
			div.append(hej);	

			}));
			container.append(div);
		}

this.updateSelectedDishes();


}