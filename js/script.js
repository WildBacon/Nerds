var write_us = document.querySelector('.call-form .btn');
var popup = document.querySelector('.modal-content');
var cancel = document.querySelector('.cancel-btn');
var form = document.querySelector('.modal-content form');
var your_name = form.querySelector('#your-name');
var mail = form.querySelector('#your-mail');
var text = form.querySelector('textarea');
var storage = localStorage.getItem('your_name');

write_us.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('modal-content-show');
  your_name.focus();
  
  if (storage) {
    your_name.value = storage;
    mail.focus();
  } else {
    your_name.focus;
  }
});

cancel.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal-content-show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove('modal-content-show');
    }
  }
});

form.addEventListener('submit', function(event) {
  if (!(your_name.value && mail.value && text.value)) {
    event.preventDefault();
    popup.classList.add('modal-error');
} else {
    localStorage.setItem('your_name', your_name.value);
}
});