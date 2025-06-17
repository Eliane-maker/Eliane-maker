 let menu= document.querySelector('#menu-icon');
 let nav = document.querySelector('.nav');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nav.classList.toggle('active');
}
0
window.onscroll = () => {
  menu.classList.remove('bx-x');
  nav.classList.remove('active');
}

function formulaire(){
  let nom = document.getElementById("nom1").value.trim();
  let email = document.getElementById("email1").value.trim();
  let message = document.getElementById("message1").value.trim();

  if( nom ==='' || email ==='' || message ===""){
    alert("Veuillez remplir tous les champs.");
    return;
  }
  if(!email.includes('@') || !email.includes('.')){
    alert("Veullez entrer une adresse mail valide.");
    return;
  }
}

const destinateur = "herodeeliane@gmail.com";
window.location.href = `mailto:${destinateur}? + ${message}`;