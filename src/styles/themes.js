const button = document.querySelector('.pui-button');
button.addEventListener('click', function() {
  
  this.classList.add('clicked');
  
  setTimeout(() => {
    this.classList.remove('clicked');
  }, 400);
});