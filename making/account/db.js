user.updateProfile({
    displayName: "isak",
    photoURL: "#link"
}).then(function() {
    var displayName = user.displayName;
    var photoURL = user.photoURL;
}, function(error) {

});
user.updateProfile({photoURL: null}).then(function() {
    var displayName = user.displayName;
    var photoURL = user.photoURL;
}, function(error) {

});