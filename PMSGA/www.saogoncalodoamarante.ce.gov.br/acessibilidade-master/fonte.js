$(document).ready(function () {
    $("#botaoAumentar").click(function () {
        fonte('a');
    });
    $("#botaoDiminuir").click(function () {
        fonte('d');
    });
    $("#botaoNormal").click(function () {
        fonte('n');
    });
});

var elementos = ['p', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'dd', 'dl', 'li', 'span', 'strong'];

function fonte(e) {
    if (e == 'a') {
        aumentarFonte();
    }
    if (e == 'd') {
        diminuirFonte();
    }
    if (e == 'n') {
        fonteNormal();
    }

}

function aumentarFonte() {
    
    this.elementos.forEach(function (elemento, indice, array) {
        elemento = $(elemento);
        var fonte = parseInt(elemento.css('font-size'));

        fonte = fonte +5;

        elemento.css("fontSize", fonte);
    });
}

function diminuirFonte() {

    this.elementos.forEach(function (elemento, indice, array) {
        elemento = $(elemento);
        var fonte = parseInt(elemento.css('font-size'));

        fonte--;

        elemento.css("fontSize", fonte);
    });
}

function fonteNormal() {

    this.elementos.forEach(function (elemento, indice, array) {
        elemento = $(elemento);
        var fonte = parseInt(elemento.css('font-size'));

        var body = $("body");
        const fonteNormal = parseInt(body.css('font-size'));

        fonte = fonteNormal;
        
        elemento.css("fontSize", fonte);
    });
}

function fonteNormalOld(){
	document.location.reload(true);
}