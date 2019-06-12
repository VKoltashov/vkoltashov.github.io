var write = document.querySelector('.write-us');
var popup = document.querySelector('.modal-rate');
var close = popup.querySelector(".button-close");

write.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.toggle('visually-hidden');
    popup.classList.add('modal-rate-show');

   
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-rate-show");
    popup.classList.toggle('visually-hidden');
    
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-rate-show")) {
        popup.classList.remove("modal-rate-show");
        popup.classList.toggle('visually-hidden');
      }
    }
  });