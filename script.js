$(function(){

    var div = document.createElement("DIV");
    document.body.appendChild(div);
    div.className = "content";

    //create board for tic tac toe
    var table = document.createElement("TABLE");
    div.appendChild(table);
    table.setAttribute("id", "board");

    //setting rows for the table
    var row = table.insertRow(0);



});//end .ready