function exibeAba(idDaAba) {
  // desativa os .aba-conteudo
  let arrAbas = document.querySelectorAll('.aba-conteudo')
  .forEach(function(el) {
      el.classList.remove('ativo');
    });

  // recupera o artigo que tem o id do link clicado
  const artigoParaExibirEl = document.querySelector("#"+idDaAba);

  // ativa a aba
  artigoParaExibirEl.classList.add('ativo');
}

// opera sobres os elementos selecionados da navegação para adicionar o evento ao clique
const itensDoMenu = document.querySelectorAll('.menu a, .linha a');
itensDoMenu.forEach(function(el) {
  el.addEventListener('click', function(event) {

// pega o href do link que foi clicado
    const idDoLink = event.target.id;
    const idApontadoPeloLink = idDoLink.substr(4);
    exibeAba(idApontadoPeloLink);
  });
});
