function registrar(){
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .then(function(){
        verficar()
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
      
        var errorMessage = error.message;
      
        console.log(errorCode);
        console.log(errorMessage);
        // ...
       window.alert("Ingresa un e-mail valido o tu contraseña debe tener 6 caracteres como minimo");
      
      });
}

function ingreso(){
    
    var email2 = document.getElementById('email2').value;
    var contrasena2 = document.getElementById('contrasena2').value;
    
    firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...      
      window.alert("Ingresa tus datos de acceso o los ingresados son incorrectos");     
      
      });
}

function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('existe usuario activo')
            aparece(user);
          // User is signed in.
          var displayName = user.displayName;
          
          var email = user.email;
          
          console.log('*****************');
          console.log(user.emailVerified)
          console.log('*****************');
          
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log('no existe usuario activo')
          
          contenido.innerHTML = `
          
          <div class="alert alert-warning alert-dismissible fade show mt-5" role="alert">
  <strong>Hola invitado!</strong> Inicia sesión o <button data-toggle="modal" data-target="#exampleModal" ><u>Registrate</u></button> para ver el contenido. Clic aquí si <button data-toggle="modal" data-target="#exampleModal2" ><u>olvido su contraseña</u></button>
  
</div>
        
        `;
          // ...
        }
      });
}
observador();
function cerrar(){
    firebase.auth().signOut()
    .then(function(){
        console.log('Saliendo...')
    })
    .catch(function(error){
        console.log(error)
    })
}

function verficar(){
    var user = firebase.auth().currentUser;  
    user.sendEmailVerification().then(function() {
      // Email sent.
      console.log('Enviando correo...');
      window.alert("Revise su bandeja de entrada para validar su cuenta");  
    }).catch(function(error) {
      // An error happened.
      console.log(error);      
    }); 
}  
    
    function recuperar(){
    
      var auth = firebase.auth();
      var email3 = document.getElementById('email3').value;

auth.sendPasswordResetEmail(email3).then(function() {
  // Email sent.
  console.log('Enviando contraseña...');
      window.alert("Revise su bandeja de entrada para resetear su contraseña");  
}).catch(function(error) {
  // An error happened.
   console.log(error);  
  window.alert("Ingrese un correo valido o en definitiva ese correo no esta registrado");
});
}
