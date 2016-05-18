$(function(){

	//setting up player X and player O
	var turnCount = 0;
	
	$("#board").find("td").on("click", function(){
		//check if turnCount is divisible by 2 
		if (turnCount % 2 === 0){
			
			$(this).text("X");

					
		}else{
			
			$(this).text("O");

			}		}

		turnCount++;

	});

	var
		square1 = $("#square1"),
		square2 = $("#square2"),
		square3 = $("#square3"),
		square4 = $("#square4"),
		square5 = $("#square5"),
		square6 = $("#square6"),
		square7 = $("#square7"),
		square8 = $("#square8"),
		square9 = $("#square9");

	//putting all the possible winning combos in arrays
	var winningCombo = 
	//winning row combos
	[[square1, square2, square3], [square4, square5, square6], 
	[square7, square8, square9], 
	//winning diagonal combos
	[square1, square5, square9], [square3, square5, square7],
	//winning column combos
	[square1, square4, square7], [square2, square5, square8], [square3, square6, square9]];



	

    

});//end .ready