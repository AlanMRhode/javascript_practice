$("form").submit(function(){
  if($("#name").val() == ""){
  		alert('Error! Username cannot be blank.');
  } 

  if($("#password").val() === "12345"){
  		alert('Correct!');
  } else{
  		alert('Incorrect password');
  }
 
});
