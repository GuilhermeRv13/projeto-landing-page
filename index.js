var setadireita = window.document.getElementById("setadireita")
var leo = window.document.getElementById("leo")
var samantha = window.document.getElementById("sam")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita(){
    leo.style = "display:none"
    bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex;"
}

function RolarParaEsquerda(){
    leo.style ="display:flex"
    bruna.style = "display:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none"
}