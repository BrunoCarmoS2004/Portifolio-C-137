var btn = document.querySelector('.btn-entrar');
var containers = document.querySelectorAll('#input-geral');

btn.addEventListener('click', function() {
  containers.forEach(function(container) {
    if (container.style.display === 'none');{
        container.style.display = 'flex';
        btn.textContent = "Fazer Login";
    } 
  });
});