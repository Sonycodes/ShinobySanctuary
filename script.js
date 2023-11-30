function changerLangue() {
  var selectLangue = document.getElementById("langue");
  var message = document.getElementById("message");
}

/* this is my responsive dropdown it will open and close */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

document.getElementById("dropbtn").onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// .classlist.toggle :  si la classe "show" est présente, elle sera supprimée, sinon elle sera ajoutée. c'est js qui rajoute le show
//  cette fonction permet d'etre utiliser sur plusieurs objets clicables