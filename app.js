

/*backend */


/* backend iniciar sesion*/

  // Your web app's Firebase configuration 
  var firebaseConfig = {
    apiKey: "AIzaSyBFZrNv9k1D9EAntwODLUIogJOsB2sgo_I",
    authDomain: "apklogin01.firebaseapp.com",
    databaseURL: "https://apklogin01.firebaseio.com",
    projectId: "apklogin01",
    storageBucket: "apklogin01.appspot.com",
    messagingSenderId: "349646733853",
    appId: "1:349646733853:web:c178ade15c94b5348fbcf4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

     const auth = firebase.auth();

     function signUp(){
 
        var email = document.getElementById("email");
        var password = document.getElementById("password");
       
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
       
        console.log("Registrarse");
       }
       
       
       
       function signIn(){
       
        var email = document.getElementById("email");
        var password = document.getElementById("password");
       
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
       
       
       
       
       }
       
       
       function signOut(){
       
        auth.signOut();
        console.log("Cerrar");
       
       }
       
       
       
       auth.onAuthStateChanged(function(user){
       
        if(user){
         
         var email = user.email;
         console.log("Usuario Activo " + email);
         
         //Take user to a different or home page
     
         //is signed in
         
        }else{
         
         console.log("Sin Usuario Activo");
         //no user is signed in
        }

     });



function postToGoogle() {
    var field1 = $("#field1").val();
    var field2 = $("#field2").val();
    
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfc2Dun_dHHCinP8jxm0A-EfpA1msf-xaolSd56ZPdAdW3pxg/formResponse?",
        data: {"entry.2130089420": field1, "entry.714290169": field2},
        type: "POST",
        dataType: "xml",
        success: function(d)
        {
        },
        error: function(x, y, z)
            {

                $('#success-msg').show();
                $('#form').hide();
                
            }
    });
    return false;
}
