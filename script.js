
let respuestaCorrecta;
let preguntaActualIndice=0;
let cantDeRespCorrectas=0;
let cantDeRespIncorrectas=0;

class PreguntasYRespuestas {
    constructor(pregunta, respuesta, imagen) {
      this.pregunta = pregunta;
      this.respuesta = respuesta;
      this.imagen = imagen;
    
    }}



  let pregYresp=[]
  
  pregYresp1=new PreguntasYRespuestas ("¿Donde estaba lechuza?",["la copa de un arbol","En la casa de Alita","En un rio cercano"] , "https://i.pinimg.com/236x/e0/2b/5f/e02b5f2c4d1ce9ec8396841244e405fc.jpg");
  pregYresp2 = new PreguntasYRespuestas ("¿Que era eso que produjo que el cielo se  oscuresca y se alarme Alita?", ["una bandada de golondrinas que migraban", "una tormenta", "una nube de humo"], "./imagenes/alitaa.png");
  pregYresp3 = new PreguntasYRespuestas ("¿Que le regalaron las aves a alita? ", ["plumas", "hojas", "flores", "arena"], "https://images.vexels.com/media/users/3/151730/isolated/preview/eba8fb7318a97a03ca5ad6979eac1e80-dibujos-animados-de-aves-del-bosque-by-vexels.png");
  pregYresp4 = new PreguntasYRespuestas ("¿Por que a Alita no le gusto volar por la ciudad?", ["El humo", "El ruido", "llovia", "No le gustaba el paisaje"], "https://webdelmaestro.com/wp-content/uploads/2016/10/Dibujos-de-ciudades.jpg");
  pregYresp.push(pregYresp1);
  pregYresp.push(pregYresp2);
  pregYresp.push(pregYresp3);
  pregYresp.push(pregYresp4);
  
 function  imprimirEnHTMLPregunta(i){
  i=preguntaActualIndice++ 
  const q= pregYresp[i]
   let resp=q.respuesta;
   respuestaCorrecta=resp[0]
   let respuestass;

for(let e = 0; e < q.respuesta.length; e++){
  let respuestaActual=`<p><button onclick="evaluarRespuesta('${resp[e]}', this)" >x</button> <span>${resp[e]}</span></p>`
  respuestass += respuestaActual
  
    }
    
   let htmlPregunta = `<h3> ${q.pregunta}</h3><img src='${q.imagen}'> <div>${respuestass}</div>`;
   document.getElementById("preguntasDeTrivia").innerHTML= htmlPregunta

    if (i==3) {
      var padre=document.getElementById("juegoR1");
      var hijo=padre.lastChild;
      var boton2=document.createElement('button');
      var bootnn=document.createTextNode("Resultado");
      boton2.appendChild(bootnn);
      boton2.setAttribute("id","resultado")

      padre.replaceChild(boton2, hijo)
      document.getElementById("resultado").addEventListener("click",darResultado)
    }
  }
   
   

   function evaluarRespuesta(respuestaa, objeto){
    
     const parenP = objeto.parentNode;
for (let a = 0; a < respuestaa.length; a++) {
  
}

     
  if (respuestaa == respuestaCorrecta){
    parenP.classList.add('correcta'); 
    
   let Correctas= cantDeRespCorrectas++;
  }
  else  {
    parenP.classList.add('incorrecta');
    let Incorrectas=cantDeRespIncorrectas++;
  } }
     
    
    function darResultado(){
      let felicidades= `<h1>felicidades</h1> 
      <br>
      <h3>has terminado la trivia </h3>
      <br>
      <h3>¿Quieres reainiciar la trivia?</h3>`
      document.getElementById("preguntasDeTrivia").innerHTML= felicidades
      var padre=document.getElementById("juegoR1");
      var hijo=padre.lastChild;
      var boton3=document.createElement('button');
      var botnn=document.createTextNode("reiniciar");
      boton3.appendChild(botnn);
      boton3.setAttribute("id","botonTrivia")

      padre.replaceChild(boton3, hijo)
      document.getElementById("botonTrivia").addEventListener("click",imprimirEnHTMLPregunta(preguntaActualIndice))
    }
 
imprimirEnHTMLPregunta(preguntaActualIndice)
 function descifrarMensaje(){
   let mensaje=prompt("S450P25 05J92")
   let mensajeAMayuscula= mensaje.toUpperCase()
   if (mensajeAMayuscula=== "SIEMPRE MEJOR") {
     alert("Muy bien has descifrado el mensaje")
     }
     else {alert("vuelve a interlo")}
 }
//cosas por resolver
 //ver como reiniciar la trivia
 //transformar el prompt a imput
 //ver como sumar las respuestas correctas