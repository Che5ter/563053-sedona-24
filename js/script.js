var link = document.querySelector(".searching-hotel-link");
var popup = document.querySelector(".modal-form");
var form = popup.querySelector("form");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var children = popup.querySelector("[name=children]");
var adults = popup.querySelector("[name=adults]");

if (popup.classList.contains("modal-form")) {
  popup.classList.add("modal-off");
};

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("searching-hotel-show");
  popup.classList.remove("searching-hotel-error");
});

form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value) {
    evt.preventDefault();
    popup.classList.remove("searching-hotel-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("searching-hotel-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("searching-hotel-show")) {
      popup.classList.remove("searching-hotel-show");
      popup.classList.remove("searching-hotel-error");
    }
  }
});
