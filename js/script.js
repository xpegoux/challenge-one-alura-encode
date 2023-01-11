// Variáveis referente aos botões de criptografia/descriptografia
var buttonEncode = document.querySelector('#buttonEncode');
var buttonDecode = document.querySelector('#buttonDecode');

// Variáveis para mudar o estado do display:none/inline-block 
var buttonCopy = document.querySelector('.buttonCopy');
var comResultado = document.querySelector('.comResultado');
var semResultado = document.querySelector('.semResultado');

// Saída Input
var digiteSeuTexto = document.querySelector('#digiteTexto');
var textoCodificado = document.querySelector('#textoCodificado');

// Algoritmo para criptografar
const encode = (string) => {
    var alg = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"}; //object alg

    var ler = ""; //receber as vogais criptografadas
    var atual = ""; //recebe o estado atual da string passada no parâmetro da função
    var troca = ""; //recebe a propriedade atual do objeto alg
    var receba = ""; //recebe o valor da propriedade do objeto alg
    var noCrip = ""; //variável de verificação de vogal para exclui-las

    //ler caracteres da string
    for (var i = 0; i < string.length; i++) {
        atual = string[i];

        for (const propriedade in alg) {

            if (atual == propriedade) {

                troca = propriedade;
                receba = alg[troca];
                ler += receba;

            } else {
                noCrip = atual;
            }

        } if (noCrip == "a" || noCrip == "e" || noCrip == "i" || noCrip == "o" || noCrip == "u") {
            noCrip = "";
        } else {
            ler += noCrip;
        }
    }
    return ler;
}

// Algoritmo para descriptografar
const decode = (string) => {
    var alg = {"ai":"a", "enter":"e", "imes":"i", "ober":"o", "ufat":"u"}; //object alg

    var ler = ""; //receber as vogais criptografadas
    var atual = ""; //recebe o estado atual da string passada no parâmetro da função
    var troca = ""; //recebe a propriedade atual do objeto alg
    var retroca = "";
    var receba = ""; //recebe o valor da propriedade do objeto alg
    var noDecrip = ""; //variável de verificação de consoantes para exclui-las

    //ler caracteres da string
    for (var i = 0; i < string.length; i++) {
        atual = string[i];
        receba += atual;

        for (const propriedade in alg) {

        if (receba == propriedade) {

            troca = propriedade;
            retroca = alg[troca]

            ler += retroca;
            receba = "";
            
        } else if (
            receba != "a" && receba !="ai" &&
            receba != "e" && receba != "en" && receba != "ent" && receba != "ente" && receba != "enter" && 
            receba != "i" && receba != "im" && receba != "ime" && receba != "imes" && 
            receba != "o" && receba != "ob" && receba != "obe" && receba != "ober" &&
            receba != "u" && receba != "uf" && receba != "ufa" && receba != "ufat" && receba != ""
            ) {
                noDecrip = receba;
                console.log(noDecrip)
                receba = "";
        } 

        } 
        ler += noDecrip;
        noDecrip = "";
    }

    return ler;
}

//Trocar layout ao lado para mostrar a criptografia
if (buttonEncode) { //Evitar o erro null

    buttonEncode.addEventListener('click', () => {

        if (comResultado.style.display && buttonCopy.style.display === 'none') {
            semResultado.style.display = 'none';
            comResultado.style.display = 'inline-block';
            buttonCopy.style.display = 'inline-block';
        } else {
            semResultado.style.display = 'none';
            comResultado.style.display = 'inline-block';
            buttonCopy.style.display = 'inline-block';
        }

        var criptografar = encode(digiteSeuTexto.value);
        
        if (criptografar.valueOf() == "") {

            alert("Por favor, insira uma palavra ou texto!");
            //texto exemplo para usuario
            digiteSeuTexto.value = "exemplo";
            criptografar = encode(digiteSeuTexto.value)
            textoCodificado.value = criptografar
            digiteSeuTexto.focus();
        } else {
            textoCodificado.value = criptografar;
            digiteSeuTexto.value = "";
            digiteSeuTexto.focus();
        }
    });
}


if (buttonDecode) { //Evitar o erro null

    buttonDecode.addEventListener('click', () => {

        if (comResultado.style.display && buttonCopy.style.display === 'none') {
            semResultado.style.display = 'none';
            comResultado.style.display = 'inline-block';
            buttonCopy.style.display = 'inline-block';
        } else {
            semResultado.style.display = 'none';
            comResultado.style.display = 'inline-block';
            buttonCopy.style.display = 'inline-block';
        }

        var descriptografar = decode(digiteSeuTexto.value);

        if (descriptografar.valueOf() == "") {

            alert("Por favor, insira uma palavra ou texto!");
            //texto exemplo para usuario
            digiteSeuTexto.value = "enterxentermplober";
            descriptografar = decode(digiteSeuTexto.value)
            textoCodificado.value = descriptografar
            digiteSeuTexto.focus();
        } else {
            textoCodificado.value = descriptografar;
            digiteSeuTexto.value = "";
            digiteSeuTexto.focus();
        }
    });
}


/*Copiar texto do resultado*/
if (buttonCopy) {
    buttonCopy.addEventListener('click', () => {

    var copiado = textoCodificado.value;

    navigator.clipboard.writeText(copiado);

    });
}