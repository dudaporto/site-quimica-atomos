let imagens=[
	'/1.jpg',
	'/2.jpg',
	'/3.jpg',
	'/4.jpg'
];

let indiceDaFotoAtual = 0;
let botao_anterior= document.querySelectorAll('.anterior');
let botao_proximo= document.querySelectorAll('.proximo');

for(i=0; i<botao_anterior.length; i++){
botao_anterior[i].addEventListener('click', function(e){
		let teorico= document.querySelector('.ativo').id;
		let diretorioImagens= 'imgs/galeria_' + teorico;
    if (indiceDaFotoAtual===0){
      indiceDaFotoAtual=3;
    }
    else{
      indiceDaFotoAtual--;
    }

		let idDoSlide= 's'+teorico;
		let slide_atual=document.querySelector("#"+idDoSlide);
		slide_atual.src=diretorioImagens+imagens[indiceDaFotoAtual];
	});
}


for(i=0; i<botao_proximo.length; i++){
botao_proximo[i].addEventListener('click', function(e){
	let teorico= document.querySelector('.ativo').id;
	let diretorioImagens= 'imgs/galeria_' + teorico;
    if (indiceDaFotoAtual===3){
      indiceDaFotoAtual=0;
    }
    else{
      indiceDaFotoAtual++;
    }
		let idDoSlide= 's'+teorico;
		let slide_atual=document.querySelector("#"+idDoSlide);
		slide_atual.src=diretorioImagens+imagens[indiceDaFotoAtual];
});
}
