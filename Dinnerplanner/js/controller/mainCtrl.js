var OverallstateCtrl = function(viewList, divNames, model){

	for (var i=0; i<divNames.length; i++){
		$(divNames[i]).hide();
	}

	$(divNames[7]).show();

	this.currentState = 0;

	this.switchstate = function(x){
		//console.log(x);
		for (var i=0; i<divNames.length; i++){
			$(divNames[i]).hide();
		}

		if(x){
			$(divNames[x]).show();
			if(x===5 || x===2)
				$(divNames[1]).show();
			if(x===5)
				$(divNames[6]).show();

		}

	}



}

