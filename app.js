var lambda = null
var mu = null
var Ro = null
var Ls = null
var Ws = null
var Lq = null
var Wq = null
var Pcero = null
var sendBtn = null
var listRo = null
var listLs = null
var listWs = null
var listLq = null
var listWq = null
var listP0 = null

var lambda2 = null
var mu2 = null
var Ro2 = null
var Ls2 = null
var Ws2 = null
var Lq2 = null
var Wq2 = null
var Pcero2 = null
var sendBtn2 = null
var listRo2 = null
var listLs2 = null
var listWs2 = null
var listLq2 = null
var listWq2 = null
var listP02 = null

var lambda3 = null
var mu3 = null
var tita3 = null
var Ro3 = null
var Ls3 = null
var Ws3 = null
var Lq3 = null
var Wq3 = null
var Pcero3 = null
var sendBtn3 = null
var listRo3 = null
var listLs3 = null
var listWs3 = null
var listLq3 = null
var listWq3 = null
var listP03 = null

var sendForm = function (evt) {

    evt.preventDefault()
    if (lambda.value > 0 && mu.value > 0) {
        Ro = parseFloat(lambda.value) / parseFloat(mu.value)
        if (Ro < 1) {
            Ls = parseFloat(lambda.value) / (parseFloat(mu.value) - parseFloat(lambda.value))
            Ws = 1 / (parseFloat(mu.value) - parseFloat(lambda.value))
            Lq = (parseFloat(lambda.value) * parseFloat(lambda.value)) / (parseFloat(mu.value) * (parseFloat(mu.value) - parseFloat(lambda.value)))
            Wq = parseFloat(lambda.value) / (parseFloat(mu.value) * (parseFloat(mu.value) - parseFloat(lambda.value)))
            Pcero = 1 - Ro

            listRo.innerHTML = Ro
            listLs.innerHTML = Ls
            listWs.innerHTML = Ws
            listLq.innerHTML = Lq
            listWq.innerHTML = Wq
            listP0.innerHTML = Pcero

            console.log(Ro)
            console.log(Ls)
            console.log(Ws)
            console.log(Lq)
            console.log(Wq)
            console.log(Pcero)
        } else {
            listRo.innerHTML = Ro
            window.alert('SERVIDOR SATURADO. No se pueden calcular medidas de desempeño')
        }

    }

}




var sendForm2 = function (evt) {

    evt.preventDefault()
    if (lambda2.value > 0 && mu2.value > 0) {
        Ro2 = parseFloat(lambda2.value) / parseFloat(mu2.value)
        if (Ro2 < 1) {
            Lq2 = (Ro2 * Ro2) / (2 * (1 - Ro2))
            Wq2 = Lq2 / (parseFloat(lambda2.value))
            Ws2 = Wq2 + (1 / (parseFloat(mu2.value)))
            Ls2 = (parseFloat(lambda2.value)) * Ws2
            Pcero2 = 1 - Ro2

            listRo2.innerHTML = Ro2
            listLs2.innerHTML = Ls2
            listWs2.innerHTML = Ws2
            listLq2.innerHTML = Lq2
            listWq2.innerHTML = Wq2
            listP02.innerHTML = Pcero2

            console.log(Ro2)
            console.log(Ls2)
            console.log(Ws2)
            console.log(Lq2)
            console.log(Wq2)
            console.log(Pcero2)
        } else {
            listRo2.innerHTML = Ro2
            window.alert('SERVIDOR SATURADO. No se pueden calcular medidas de desempeño')
        }

    }

}



var sendForm3 = function (evt) {

    evt.preventDefault()
    if (lambda3.value > 0 && mu3.value > 0) {
        Ro3 = parseFloat(lambda3.value) / parseFloat(mu3.value)
        tita3 = parseFloat(tita3.value)
        if (Ro3 < 1) {
            Lq3 = (((parseFloat(lambda3.value) * parseFloat(lambda3.value)) * (tita3 * tita3)) + (Ro3 * Ro3)) / (2 * (1 - Ro3))
            Wq3 = Lq3 / parseFloat(lambda3.value)
            Ws3 = Wq3 + (1 / (parseFloat(mu3.value)))
            Ls3 = (Lq3 + Ro3)
            Pcero3 = (1 - Ro3)

            listRo3.innerHTML = Ro3
            listLs3.innerHTML = Ls3
            listWs3.innerHTML = Ws3
            listLq3.innerHTML = Lq3
            listWq3.innerHTML = Wq3
            listP03.innerHTML = Pcero3

            console.log(Ro3)
            console.log(Ls3)
            console.log(Ws3)
            console.log(Lq3)
            console.log(Wq3)
            console.log(Pcero3)
        } else {
            listRo3.innerHTML = Ro3
            window.alert('SERVIDOR SATURADO. No se pueden calcular medidas de desempeño')
        }

    }

}

window.onload = function () {

    lambda = document.getElementById('lambda')
    mu = document.getElementById('mu')

    listRo = document.getElementById('listRo')
    listLs = document.getElementById('listLs')
    listWs = document.getElementById('listWs')
    listLq = document.getElementById('listLq')
    listWq = document.getElementById('listWq')
    listP0 = document.getElementById('listP0')

    sendBtn = document.getElementById('send')
    sendBtn.onclick = sendForm


    lambda2 = document.getElementById('lambda2')
    mu2 = document.getElementById('mu2')

    listRo2 = document.getElementById('listRo2')
    listLs2 = document.getElementById('listLs2')
    listWs2 = document.getElementById('listWs2')
    listLq2 = document.getElementById('listLq2')
    listWq2 = document.getElementById('listWq2')
    listP02 = document.getElementById('listP02')

    sendBtn2 = document.getElementById('send2')
    sendBtn2.onclick = sendForm2


    lambda3 = document.getElementById('lambda3')
    mu3 = document.getElementById('mu3')
    tita3 = document.getElementById('tita3')

    listRo3 = document.getElementById('listRo3')
    listLs3 = document.getElementById('listLs3')
    listWs3 = document.getElementById('listWs3')
    listLq3 = document.getElementById('listLq3')
    listWq3 = document.getElementById('listWq3')
    listP03 = document.getElementById('listP03')

    sendBtn3 = document.getElementById('send3')
    sendBtn3.onclick = sendForm3
}
