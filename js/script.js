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
		square9 = $("#square9"),

		squareArray = [square1, square2, square3, square4, square5, square6, square7, square8, square9];
			
	//setting up counters
	var 
		turnCount = 0,
		countPlayerX = 0,
		countPlayerO = 0,
		countTies = 0;
						
	$("#board").find("td").on("click", function(){

		/*if(!$td.text()) {
				turnCount++;*/

		var
			$td = $(this),
			letter = "O";

		if(!$td.text()) {
			turnCount++;
		}
		
		//check if turnCount is divisible by 2 and change to letter "X"
		if (turnCount % 2 === 0){

			letter = "X";
		}
		//"X" or "O" will appear upon click
		$td.text(letter);
		
		//adding class to square for finding winning combo
		$td.addClass(letter);
		
		//calling function to check if it's a winning combo
		checkWinner(letter);

	});//end click function
		
	function checkWinner(letter){

		//check for winning row combos
		if (square1.hasClass(letter) && square2.hasClass(letter) && square3.hasClass(letter)||
		  square4.hasClass(letter) && square5.hasClass(letter) && square6.hasClass(letter) ||
		  square7.hasClass(letter) && square8.hasClass(letter) && square9.hasClass(letter) ||
		  //check for winning diagonal combos
		  square1.hasClass(letter) && square5.hasClass(letter) && square9.hasClass(letter) ||
		  square3.hasClass(letter) && square5.hasClass(letter) && square7.hasClass(letter) ||
		  //check for winning column combos
		  square1.hasClass(letter) && square4.hasClass(letter) && square7.hasClass(letter) ||
		  square2.hasClass(letter) && square5.hasClass(letter) && square8.hasClass(letter) ||
		  square3.hasClass(letter) && square6.hasClass(letter) && square9.hasClass(letter)

			){ 
				
				swal("Player " + letter + " wins!");

				//add to winner's total score count
				if (letter === "X"){
					
					$("#count1").html(countPlayerX += 1);
					
				} else {
				
					$("#count3").html(countPlayerO += 1);
				} 

				emptyBoard();
		}

		//check if there's a tie in the game by counting the clicks on the squares
		if (turnCount === 9){

		    swal("It's a tie!");

			$("#count2").html(countTies += 1);

			emptyBoard();
		}

	};//end function checkWinner

	//empty board game
	function emptyBoard(){
		
		turnCount = 0;
		
		for (i=0; i < squareArray.length; i++){

			squareArray[i].text("");

			squareArray[i].removeClass().addClass("square-display");
		}

	};

	$("#new-game").click(function(){

		location.reload();

	});

	$("#new-game").css("cursor", "pointer");

});//end .ready