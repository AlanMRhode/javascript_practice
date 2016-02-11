$(document).on("keypress", function(){
	
	console.log("ASCII KeyCode = " + event.keyCode);
	console.log("Character = " + String.fromCharCode(event.keyCode));
	
	var keyChar = String.fromCharCode(event.keyCode);

	if(/[a-zA-Z]/.test(keyChar)){
		
		console.log("That's a letter!");
		$("#key-type").text("You pressed a letter!");
	
	} else if (/\d/.test(keyChar)) {
		
		console.log("That's a number!");
		$("#key-type").text("You pressed a number!");
	}
});