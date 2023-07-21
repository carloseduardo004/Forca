//Definindo as possíveis palavras
const palavras = ["mel","dudu","vitor","luana","samira","carlos"]
//Sorteando aleatoriamente uma palavra
const palavraSecreta = palavras[Math.floor(Math.random()*palavras.length)]

const letrasCertas = []
const letrasErradas = []

//Pegar a letra digitada pelo teclado
document.addEventListener("keydown", (e)=>{
    const codigo = e.keyCode;
    if(isletra(codigo)){
        const letra = e.key;
        //Teste se a letra já foi digitada
        if(letrasErradas.includes(letra) || letrasCertas.includes(letra))
        {
            //MOSTRAR AVISO DE REPETIDA
        }else{
            //Teste se a palavra inclui a letra digitada
            if(palavraSecreta.includes(letra)){
                //Teste para evitar elementos repetidos dentro do Array
                if(!letrasCertas.includes(letra)){
                    //Acrescentar a letra digitada no Array
                    letrasCertas.push(letra)
                }
            }else{
                //Teste para evitar elementos repetidos dentro do Array
                if(!letrasErradas.includes(letra)){
                    //Acrescentar a letra digitada no Array
                    letrasErradas.push(letra)
                }                
            }
        }
        atualizarJogo()
    } 
})

//Teste se a tecla é uma letra
function isletra(codigo){
    return codigo >=65 && codigo<=90
}

function atualizarJogo(){

}