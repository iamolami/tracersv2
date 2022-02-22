// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const btn = document.querySelector(".w-form__btn");

// Get the <span> element that closes the modal
const closeModal = document.getElementsByClassName("modal__close")[0];

btn.addEventListener('click', (e) => {
    modal.style.display = "block";
    modal.style.opacity = "1";
})

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
  modal.style.display = "none";
  modal.style.opacity = "0";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.style.opacity = "0";
  }
};
