// errorCode and errorMessage not sure if needed
// getting ready for login system

firebase.auth().signInWithCustomToken(token).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// ...
  });
firebase.auth().createUserWithEmailAndPassword(email, passoword).catch(function(error) {
	var errorCode = error.code;
	var errorMessage = error.message;
})

firebase.auth().signout().then(function() {

}).catch(function(error) {

})



