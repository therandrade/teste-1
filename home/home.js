let pontos = 0;

document.getElementById('pontos').addEventListener('click', function (){

pontos += 10
document.getElementById('pontuação').textContent = 'Pontuação:' + pontos;

});