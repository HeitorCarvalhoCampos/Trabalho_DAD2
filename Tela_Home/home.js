function openNav() {
    document.getElementById("my_menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("my_menu").style.width = "0";
}


 // Obtenha o modal
 var modal = document.getElementById("myModal");

 // Obtenha o link que abre o modal
 var link = document.getElementById("openModal");

 // Obtenha o elemento <span> que fecha o modal
 var span = document.getElementsByClassName("close")[0];

 // Quando o usuário clicar no link, abra o modal
 link.onclick = function(event) {
     event.preventDefault(); // Impede o comportamento padrão do link
     modal.style.display = "block";
 }

 // Quando o usuário clicar no <span> (x), feche o modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // Quando o usuário clicar em qualquer lugar fora do modal, feche-o
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }