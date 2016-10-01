//Ação do menu abrir
document.querySelector('.menu-abrir').onclick = function(){
	document.documentElement.classList.add('menu-ativo');
};

//Ação do menu fechar
document.querySelector('.menu-fechar').onclick = function(){
	document.documentElement.classList.remove('menu-ativo');
};

//Parte escura do fundo
document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};