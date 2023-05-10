texto = document.getElementById('digitando');

function escrevendo(infomrmacao) {
  
  const arrLetras = infomrmacao.innerHTML.split("");
  infomrmacao.innerHTML = "";
  arrLetras.forEach((letra, i) => {
    setTimeout(() => {
      infomrmacao.innerHTML += letra;
    }, 100 * i);
  });
}

escrevendo(texto);