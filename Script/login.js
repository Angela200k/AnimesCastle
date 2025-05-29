var email = "angela4@gmail.com"
var senha = "123456"
function validar() {
    alert("entrou no js")
    event.preventDefault();
    var Email = document.getElementById('Email').value;
    var senha = document.getElementById('Password').value;

   
  if(email === "angela4@gmail.com" && senha === "123456") {
       window.location.href = "Home.html";
     } else {
       alert("Email ou senha incorretos!");
 }       
  
}