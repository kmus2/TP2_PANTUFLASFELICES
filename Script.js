
function expandCard(card) {
    card.classList.toggle('expanded');
    var description = card.querySelector('.description');
    description.style.display = (description.style.display === 'none') ? 'block' : 'none';
}

window.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.imagenSup');

  image.addEventListener('click', () => {
    image.style.transform = 'translateX(50%)';
  });


});

document.addEventListener('DOMContentLoaded', function() {
  const verMasBtns = document.querySelectorAll('.ver-mas');

  verMasBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const parrafoAdicional = this.nextElementSibling;
      parrafoAdicional.style.display = (parrafoAdicional.style.display === 'none') ? 'block' : 'none';
    });
  });
});

var menuItems = document.querySelectorAll("#menu li a");

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("mouseover", function() {
    this.style.fontSize = "44px";
  });
  
  menuItems[i].addEventListener("mouseout", function() {
    this.style.fontSize = "28px";
  });
}