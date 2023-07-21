//Definindo as possíveis palavras
const palavras = ["mel","dudu","vitor","luana","samira","carlos"]
//Sorteando aleatoriamente uma palavra
const palavraSecreta = palavras[Math.floor(Math.random()*palavras.length)]

const letrasCertas = []
const letrasErradas = []
const teclas = document.querySelectorAll(".letter")
const imgs = document.querySelectorAll(".img")
const Modal = document.querySelector("#Modal");
mostrarLetrasCertas()

//Pegar a letra digitada pelo teclado
document.addEventListener("keydown", (e)=>{
    const codigo = e.keyCode;
    if(Modal.style.display ===""){
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
    }
})

//Teste se a tecla é uma letra
function isletra(codigo){
    return codigo >=65 && codigo<=90
}

function atualizarJogo(){
    mostrarLetrasCertas()
    mostrarTeclasCertas()
    mostrarTeclasErradas()
    desenharForca()
    checarJogo()
}


function mostrarLetrasCertas(){
    const palavra = document.querySelector(".word")
    palavra.innerHTML = ""
    palavraSecreta.split("").forEach(letra =>{
        if(letrasCertas.includes(letra)){
            palavra.innerHTML += '<span>'+letra+'<span>'
        }else{
            palavra.innerHTML += '<span>_<span>'
        }
    })
}

function mostrarTeclasCertas(){
    teclas.forEach(tecla=>{
        if(letrasCertas.includes(tecla.innerHTML.toLowerCase())){
            tecla.classList.add("right")
        }
    })
}

function mostrarTeclasErradas(){
    teclas.forEach(tecla=>{
        if(letrasErradas.includes(tecla.innerHTML.toLocaleLowerCase())){
            tecla.classList.add("wrong")
        }
    })
}

function desenharForca(){
    for(i=0;i<letrasErradas.length;i++){
        imgs[i+1].style.display = "block";
        for(k=0;k<=letrasErradas.length-1;k++){
            imgs[k].style.display="none"
        }
    }
}

function checarJogo(){
    perdeu()
    ganhou()
}

function perdeu(){
    if(letrasErradas.length === imgs.length-1){
       modal("Que pena... Você perdeu. :(")
    }
}
function ganhou(){
    if (document.querySelector(".word").innerText === palavraSecreta){
        modal("Parabéns, você ganhou! :)")
    }
}

function modal(text){
  const frase = document.querySelector(".frase");
  frase.innerText = text  
  Modal.style.display = "block";
}

function jogarNovamente() {
    location.reload()
}