document.addEventListener('DOMContentLoaded',()=>{

    const vetorCartas = [
        {
            nome: 'galant',
            img:'imagens/galant.jpg'
        },
        {
            nome: 'galant',
            img:'imagens/galant.jpg'
        },
        {
            nome: 'holy',
            img:'imagens/holy.jpg'
        },
        {
            nome: 'holy',
            img:'imagens/holy.jpg'
        },
        {
            nome: 'lady',
            img:'imagens/lady.jpg'
        },
        {
            nome: 'lady',
            img:'imagens/lady.jpg'
        },
        {
            nome: 'lilithmon',
            img:'imagens/lilithmon.jpg'
        },
        {
            nome: 'lilithmon',
            img:'imagens/lilithmon.jpg'
        },
        {
            nome: 'mach',
            img:'imagens/mach.jpg'
        },
        {
            nome: 'mach',
            img:'imagens/mach.jpg'
        },
        {
            nome: 'venus',
            img:'imagens/venus.jpg'
        },
        {
            nome: 'venus',
            img:'imagens/venus.jpg'
        },
        {
            nome: 'myo',
            img:'imagens/myo.jpg'
        },
        {
            nome: 'myo',
            img:'imagens/myo.jpg'
        },
        {
            nome: 'omega',
            img:'imagens/omega.jpg'
        },
        {
            nome: 'omega',
            img:'imagens/omega.jpg'
        },
        {
            nome: 'pupp',
            img:'imagens/pupp.jpg'
        },
        {
            nome: 'pupp',
            img:'imagens/pupp.jpg'
        },
        {
            nome: 'war',
            img:'imagens/war.jpg'
        },
        {
            nome: 'war',
            img:'imagens/war.jpg'
        }
    ];

    vetorCartas.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultado = document.querySelector('#pontos');

    var cartasEscolhidas = [];
    var cartasEscolhidasId = [];
    var cartasCertas = [];
    
    function criarTabuleiro(){
        for(let i=0;i<vetorCartas.length;i++){

            var card = document.createElement('img');
            card.setAttribute('src','imagens/verso.jpg');
            card.setAttribute('data-id',i);
            card.addEventListener('click',viraCarta);
            grid.appendChild(card);
        }   
    }

    function checaCorrespondencia(){

        var cartas = document.querySelectorAll('img')
        const opcaoUmId = cartasEscolhidasId[0];
        const opcaoDoisId = cartasEscolhidasId[1];

        if(cartasEscolhidas[0] ===cartasEscolhidas[1]){
            alert("Você tem uma equivalência");
            //cartas[opcaoUmId].setAttribute('src','imagens/white.png');
            //cartas[opcaoDoisId].setAttribute('src','imagens/white.png');
            cartas[opcaoUmId].removeEventListener('click',viraCarta);
            cartas[opcaoDoisId].removeEventListener('click',viraCarta);
            cartasCertas.push(cartasEscolhidas);

        }else{
            cartas[opcaoUmId].setAttribute('src','imagens/verso.jpg');
            cartas[opcaoDoisId].setAttribute('src','imagens/verso.jpg');
        }

        cartasEscolhidas = [];
        cartasEscolhidasId = [];
        resultado.textContent = cartasCertas.length;

        if(cartasCertas.length === vetorCartas.length/2)
            resultado.textContent = 'Parabéns';
    }

    function viraCarta(){
        var cardId = this.getAttribute('data-id');
        cartasEscolhidas.push(vetorCartas[cardId].nome);
        cartasEscolhidasId.push(cardId);
        this.setAttribute('src',vetorCartas[cardId].img);
        
        if(cartasEscolhidas.length === 2)
            setTimeout(checaCorrespondencia,500);
    }

    criarTabuleiro();
});