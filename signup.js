function SignUpFunction(){
    email = document.getElementById("signup_email_field").value;
    pswd = document.getElementById("signup_pass_field").value;

    firebase.auth().createUserWithEmailAndPassword(email, pswd).then(function(){
        // console.log('User Created !! ');
        window.location.href = "1.html";

        var user = firebase.auth().currentUser;

    
    }).catch(function(error){
        window.alert(error.message);
        console.log('Error !!!');
    });

}

firebase.auth().onAuthStateChanged(user => {
    if(user){
        window.open('index.html', target="_self");
        document.title = "PROFILE PAGE";

    }
})