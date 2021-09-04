// Lests para alteração do dom
let title = document.querySelector('#title')
let text1 = document.querySelector('#text1')
let text2 = document.querySelector('#text2')
let sectConteudo = document.querySelector('#sectConteudo')


function redirecionar() {
    window.location.href = "./index.html";
 }

function cifraDeCesar(){

    title.innerHTML = `Cifra de Cesar`

    text1.innerHTML = `Essa é uma das mais simples e conhecidas técnicas de criptografia. É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, que se apresenta no alfabeto abaixo dela um número fixo de vezes. Por exemplo, com uma troca de uma posição, "A" seria substituído por "B", "B" se tornaria "C", e assim por diante. O nome do método é em homenagem a Júlio César, que o usou para se comunicar com os seus generais.

    <div class="forms">
    <form>
        <h1 class="subtitle">Codificar</h1>
        <br>

        <textarea type="text" placeholder="Digite a mensagem a ser criptografada" class="inputTexto" id="textoParaCodificar" ></textarea>

        <p class="textDeslocamento">
        Digite um número de deslocamento
        <input type="number" class="inputNumber" id="deslocamento" />
        </p>

        <p><button type="submit" id="botao" class="btnEnviar">Enviar</button></p>
        
        <br>

        <p id="resultado" class="resultado invisivel"></p>

    </form>
    
    <form>
        <h1 class="subtitle">Decodificar</h1>
        <br>
        <textarea type="text" placeholder="Digite a mensagem criptografada" class="inputTexto" id="textoParaDecodificar" ></textarea>

        <p class="textDeslocamento">
        Digite um número de deslocamento
        <input type="number" class="inputNumber" id="deslocamentoDecodificar" />
        </p>

        <p><button type="submit" id="botaoDecodificar" class="btnEnviar">Enviar</button></p>
        
        <br>

        <p id="resultadoDecodificado" class="resultado invisivel"></p>
    </form>
    <br>
    
    <p><button type="submit" class="btnVoltar" id="voltarHome" onclick="redirecionar()">Voltar para a página inicial</button></p>
            
    </div>
    `

    

    text2.innerHTML = ` `
    
    sectConteudo.innerHTML= ` `

    const botao = document.getElementById('botao')
    const botaoDecodificar = document.getElementById('botaoDecodificar')
      
    botao.addEventListener('click', function(e){
    e.preventDefault()
    let recebeTexto = document.getElementById('textoParaCodificar').value.toLocaleUpperCase().split('')
    
    let deslocamento = document.getElementById('deslocamento').value

    let deslocamentoNumber = parseInt(deslocamento)

    let textoFinal = []
    let numeroFinal

     for(let i = 0; i < recebeTexto.length; i++){
        let letras = recebeTexto[i]
        let numeroInicial = parseInt(letras.charCodeAt(0))
        
        if(numeroInicial === 32){
            numeroFinal = numeroInicial
        }else{
            numeroFinal = numeroInicial + deslocamentoNumber
        }
        
        if(numeroFinal > 90){
            numeroFinal -=26
        }
        
        let recebeTextoFinal = String.fromCharCode(numeroFinal)
        textoFinal.push(recebeTextoFinal)
    }

    let resultado = document.getElementById('resultado')

    resultado.innerText = textoFinal.join('')
    resultado.classList.remove('invisivel')

})

    botaoDecodificar.addEventListener('click', function(e){
        e.preventDefault()
        let recebeTextoD = document.getElementById('textoParaDecodificar').value.toLocaleUpperCase().split('')
        
        let deslocamentoD = document.getElementById('deslocamentoDecodificar').value

        let deslocamentoDNumber = parseInt(deslocamentoD)

        let textoFinalD = []
        let numeroFinalD

        for(let i = 0; i < recebeTextoD.length; i++){
            let letrasD = recebeTextoD[i]
            let numeroInicialD = parseInt(letrasD.charCodeAt(0))
            
            if(numeroInicialD === 32){
                numeroFinalD = numeroInicialD
            }else{
                numeroFinalD = numeroInicialD - deslocamentoDNumber
            }
            
            if(numeroFinalD > 90){
                numeroFinalD -=26
            }
            
            let recebeTextoFinalD = String.fromCharCode(numeroFinalD)
            textoFinalD.push(recebeTextoFinalD)
        }

        let resultadoD = document.getElementById('resultadoDecodificado')

        resultadoD.innerText = textoFinalD.join('')
        resultadoD.classList.remove('invisivel')

    })
}


function base64(){

    title.innerHTML = `Base64`

    text1.innerHTML = `A codificação em Base64 é uma maneira de converter qualquer texto/conteúdo para uma codificação que utiliza apenas 64 caracteres. Provavelmente você já deve ter se deparado com uma string destas por aí. Muitos sites e aplicações web utilizam esta códificação para trocar dados entre páginas "ocultando" informações na URL. Mas aqui, você só vai usar mesmo para mandar as suas mensagem pela coruja, para o seu amiguinho.

    <div class="forms">
    <form>
        <h1 class="subtitle">Codificar</h1>
        <br>

        <textarea type="text" placeholder="Digite a mensagem a ser criptografada" class="inputTextoBase" id="textoParaCodificar" ></textarea>

        <p><button type="submit" id="botao" class="btnEnviar">Enviar</button></p>
        
        <br>

        <p id="resultado" class="resultado invisivel"></p>
    </form>
    
    <form>
        <h1 class="subtitle">Decodificar</h1>
        <br>
        <textarea type="text" placeholder="Digite a mensagem criptografada" class="inputTextoBase" id="textoParaDecodificar" ></textarea>

        <p><button type="submit" id="botaoDecodificar" class="btnEnviar">Enviar</button></p>
        
        <br>

        <p id="resultadoDecodificado" class="resultado invisivel"></p>

        <br>

    </form>

    <p><button type="submit" class="btnVoltar" id="voltarHome" onclick="redirecionar()">Voltar para a página inicial</button></p>
    </div>
    `

    text2.innerHTML = ` `
    
    sectConteudo.innerHTML= ` `

    const botao = document.getElementById('botao')
    const botaoDecodificar = document.getElementById('botaoDecodificar')

    botao.addEventListener('click', function(e){
    e.preventDefault()
    let recebeTexto = document.getElementById('textoParaCodificar').value
    
    let base64 = btoa(recebeTexto)
 
    let resultado = document.getElementById('resultado')

    resultado.innerText = base64
    resultado.classList.remove('invisivel')

})

    botaoDecodificar.addEventListener('click', function(e){
    e.preventDefault()
    let recebeTextoD = document.getElementById('textoParaDecodificar').value
    
    let base64D = atob(recebeTextoD)
 
    let resultadoD = document.getElementById('resultadoDecodificado')

    resultadoD.innerText = base64D
    resultadoD.classList.remove('invisivel')

})

}