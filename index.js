'use strict'

/* tää ao. Firebasen dokumentaatiosta:
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}  */


// Get a key for a new Post.
var newToDoKey = firebase.database().ref().child('mimmit').push().key;

firebase.database().ref('mimmit/' + newToDoKey).set({
  name: 'Tee sovellus',
  status: false
});

var lomake = document.addEventListener('submit', function(event) {
  event.preventDefault();
console.log(lomake);
})
