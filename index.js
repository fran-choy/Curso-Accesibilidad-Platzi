window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);
  document
    .querySelector(".send-button")
    .addEventListener("click", validateForm);
  document.querySelectorAll(".project").forEach(element => {
    element.addEventListener("click", e => openModal(e));
  });
  document.body.addEventListener("click", e => {
    if(e.target.className.includes('modal-container')){
        closeModal()
    }
  });
  window.addEventListener('keyup', (e) => {
    if(e.keyCode === 27 || e.code === 'Escape'){
      closeModal()    
    }
  })
  document.querySelector(".modal-button").addEventListener('click', ()=> closeModal())
};

/** Esta funcion se llama cuando la persona hace click en la fecha derecha del carousel para navegar a la derecha */
function clickRight() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft < -270) { //si el valor de izquierda es menor a -270, para de mover el contenido
    return;
  }
  let newValue = currentLeft - 270; //270 toma en cuenta el tamaño de la imagen mas sus margines
  document.querySelector(".project-container").style.left = `${newValue}px`;
  switch (newValue) {
    case -270:
      document.querySelector('.project1').setAttribute("tabindex", "-1");
      document.querySelector('.project1-container').setAttribute("aria-hidden", "true");
      document.querySelector('.project4').removeAttribute("tabindex");
      document.querySelector('.project4-container').removeAttribute("aria-hidden"); 
      break;
    case -540:
      document.querySelector('.project2').setAttribute("tabindex", "-1");
      document.querySelector('.project2-container').setAttribute("aria-hidden", "true");
      document.querySelector('.project5').removeAttribute("tabindex");
      document.querySelector('.project5-container').removeAttribute("aria-hidden");
      break;
      default:
        break;
  }
}

/** Esta funcion se llama cuando la persona hace click en la fecha izquierda del carousel para navegar a la izquierda */
function clickLeft() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft === 0) { //si el valor de izquiera es 0, retornar para no seguir movierno el contenido
    return;
  }
  let newValue = currentLeft + 270;
  document.querySelector(".project-container").style.left = `${newValue}px`;
  switch (newValue) {
    case -270:
      document.querySelector('.project5').setAttribute("tabindex", "-1");
      document.querySelector('.project5-container').setAttribute("aria-hidden", "true");
      document.querySelector('.project2').removeAttribute("tabindex");
      document.querySelector('.project2-container').removeAttribute("aria-hidden"); 
      break;
    case 0:
      document.querySelector('.project4').setAttribute("tabindex", "-1");
      document.querySelector('.project4-container').setAttribute("aria-hidden", "true");
      document.querySelector('.project1').removeAttribute("tabindex");
      document.querySelector('.project1-container').removeAttribute("aria-hidden"); 
      break;
      default:
        break;
  } 
}

function validateForm(e) {
  e.preventDefault();
  const nameField = document.querySelector('#nombre')
  if(nameField.value === ''){
    document.getElementById("name-error").innerHTML = "se necesita un nombre"
  }else{
    showNotification()
  }
}

/** Esta funcion se llama cuando la persona hace click en el boton de enviar del formulario de contacto */
function showNotification() {
  document.querySelector('#name-error').innerHTML = "";
  document.querySelector(".form-container").reset();
  document.querySelector(".notification").style.display = "flex";
  document.querySelector('.notification').innerHTML = 'El formulario fue enviado sin errores'
  setTimeout(function() {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}

/** Esta funcion se llama cuando la persona hace click en cualquier porjecto del carousel */
function openModal(e) {
  document.querySelector(".modal-container").style.display = "flex";
  document.querySelector(".modal-header").focus();
}

/** Esta funcion se llama para cerrar el modal */
function closeModal() {
    document.querySelector(".modal-container").style.display = "none";
}
