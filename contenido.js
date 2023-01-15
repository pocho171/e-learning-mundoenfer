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
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
</div>
        
        `;
          // ...
        }
      });
}



observador();

function aparece(user){
    var user = user;
    var contenido = document.getElementById('contenido');
    if(user.emailVerified){ 
 
        contenido.innerHTML = `
        
        <!-- /* INICIO DE LA ZONA VIP */ -->
        
        <!--alertas colores inicio-->
<div style="margin-top: 0px;width: auto;"><div class="alert alert-success"><b><span style="font-size: large;"><center>Bienvenidos al aula virtual</center></span></b></div></div><!--alertas colores fin-->
<!--panel contenido inicio-->
<div style="margin-top: 10px;"><div style="text-align: left; width: auto"><div class="panel panel-default"><div class="panel-body"><div style="text-align: center;"><span style="font-size: large;"><b>Aula Virtual</b></span></div><div style="margin-left: 10px; margin-right: 10px; text-align: justify;"><span style="font-size: medium;">
</span>
<p>El Aula Virtual es una herramienta que brinda las posibilidades de realizar enseñanza en línea. Es un
entorno privado que permite administrar procesos educativos basados en un sistema de
comunicación mediado por computadoras. De manera que se entiende como Aula Virtual, al espacio
simbólico en el que se produce la relación entre los participantes en un proceso de enseñanza y
aprendizaje que, para interactuar entre sí y acceder a la información relevante, utilizan
prioritariamente un sistema de comunicación mediada por computadoras.</p>
</div></div></div></div></div><!--panel contenido fin--> 

<!-- /* FIN DE LA ZONA VIP */ -->      
        
        
        `;
    } 
}
