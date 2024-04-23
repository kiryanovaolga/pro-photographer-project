
// Code for BURGER__MENU
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("nav--active")
  burger.classList.toggle("burger--active")
  document.body.classList.toggle("stop-scroll")
});

// --------------------------------------------------------------------------

//Code for MODAL__PAGE(PopUP) 
const allFormBtn = document.getElementById("call-form");
const modalCallForm = document.getElementById("modal-call-form");

// Открываем модальное окно
allFormBtn.addEventListener("click", function () {
  modalCallForm.classList.add("modal-parent--open")
});

// Закрываем модальное окно
modalCallForm.querySelector(".modal").addEventListener("click", function (event) {
  event._isClick = true
})

modalCallForm.addEventListener("click", function (event) {
  if (event._isClick === true) return

  modalCallForm.classList.remove("modal-parent--open")
})

// Закрываем модальное окно при нажатии на Esc
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalCallForm.classList.remove("modal-parent--open")
  }
})
// ---------------------------------------------------------------------------

//SWIPER
const swiper = new Swiper("#gallery", {
  // чтобы перекл. бесконечно
  loop: true,
  // сколько слайдов отображать на экране
  slidesPerView: 3,
  // расстояние
  spaceBetween: 20,

  // Привязываем кнопки переключения к слайдеру
  navigation: {
    prevEl: "#gallery-prev",
    nextEl: "#gallery-next"
  }

})





