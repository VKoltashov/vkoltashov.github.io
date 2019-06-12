var mapLink = document.querySelector('.map');

  var mapPopup = document.querySelector('.modal-map');
  var mapClose = mapPopup.querySelector('.modal-close');
  
  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.toggle('visually-hidden');
    mapPopup.classList.add('modal-rate-show');
  });

  mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-rate-show');
    mapPopup.classList.toggle('visually-hidden');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains('modal-show')) {
        popup.classList.remove('modal-rate-show');
        popup.classList.toggle('visually-hidden');
      }
    }
  });