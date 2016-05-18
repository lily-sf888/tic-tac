$(function(){

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

	//setting up player X and player O
	var turnCount = 0;
	
	$("#board").find("td").on("click", function(){
		//check if turnCount is divisible by 2 
		if (turnCount % 2 === 0){
			
			var text = $(this).text("X");

			addClassX(text);

			
		}else{
			
			var text = $(this).text("O");

			addClassO(text);

			}	

		turnCount++;

	});//end click function

	function addClassX(text){

		var x = text.addClass("x");
		
		checkWinnerX(x);
	};

	function addClassO(text){

		var o = text.addClass("o");

		checkWinnerO(o);

	};

	

	function checkWinnerX(x){
		//check for winning row combos
		if(square1.hasClass("x") && square2.hasClass("x") && square3.hasClass("x")||
		  square4.hasClass("x") && square5.hasClass("x") && square6.hasClass("x") ||
		  square7.hasClass("x") && square8.hasClass("x") && square9.hasClass("x") ||
		  //check for winning diagonal combos
		  square1.hasClass("x") && square5.hasClass("x") && square9.hasClass("x") ||
		  square3.hasClass("x") && square5.hasClass("x") && square7.hasClass("x") ||
		  //check for winning column combos
		  square1.hasClass("x") && square4.hasClass("x") && square7.hasClass("x") ||
		  square2.hasClass("x") && square5.hasClass("x") && square8.hasClass("x") ||
		  square3.hasClass("x") && square6.hasClass("x") && square9.hasClass("x")

			){


			
			alert("Player X wins!");

			$("#board").html("");

		} 

	};//end function checkWinnerX

	function checkWinnerO(o){
		//check for winning row combos
		if(square1.hasClass("o") && square2.hasClass("o") && square3.hasClass("o")||
		  square4.hasClass("o") && square5.hasClass("o") && square6.hasClass("o") ||
		  square7.hasClass("o") && square8.hasClass("o") && square9.hasClass("o") ||
		  //check for winning diagonal combos
		  square1.hasClass("o") && square5.hasClass("o") && square9.hasClass("o") ||
		  square3.hasClass("o") && square5.hasClass("o") && square7.hasClass("o") ||
		  //check for winning column combos
		  square1.hasClass("o") && square4.hasClass("o") && square7.hasClass("o") ||
		  square2.hasClass("o") && square5.hasClass("o") && square8.hasClass("o") ||
		  square3.hasClass("o") && square6.hasClass("o") && square9.hasClass("o")

			){
			
			console.log("Player O wins!");

		} 

	};//end function checkWinnerO


});//end .ready