
// firebase.auth().onAuthStateChanged(function(user) {
//     if(user){
//         document.title = "PROFILE PAGE";

//         window.location.href = "1.html";
//     }

//     else{
//         document.title = "Login Here"
//         window.location.href = "signup.html";
//     }
// });

firebase.auth().onAuthStateChanged(function(user) {
    if(user){
       
        var user = firebase.auth().currentUser;

        if (user != null) {
            var email_id = user.email;
            document.getElementById("user_email_from_database").innerHTML = email_id;
            
        }
    }
});



function login(){
    var email_address = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(email_address, password).then(function(){
        // console.log('User Created !! ');
        window.location.href = "1.html";

        var user = firebase.auth().currentUser;

    
    }).catch(function(error){
        console.log(error);

    });
    
}



function logout() {
    firebase.auth().signOut().then(function() {
      window.location.href = "signup.html";
    }).catch(function(error) {
      console.log(error);
    });
  }