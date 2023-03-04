// function contar() {

//     let inicio = document.querySelector('#iInicio').value
//     let fim = document.querySelector('#iFim').value
//     let passo = document.querySelector('#ipasso').value

//     var res = document.querySelector('#res')

//     var c = Number(inicio)

//     while (c <= fim) {
//         c = inicio + passo
//         console.log(inicio)
//     }


// }

function contar() {

    let inicio = document.querySelector('#iInicio')
    let fim = document.querySelector('#iFim')
    let passo = document.querySelector('#ipasso')

    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Erro')
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando: <br>"

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo invalido. Inserindo valor 1')
            p = 1
        }

        if (i < f) {
        for (let c = i ; c <= f ; c += p) {
            res.innerHTML += `${c} \u{1f449} `
        }
       
    } else {
        for (let c = i ; c >= f ; c -= p) {
            res.innerHTML += `${c} \u{1f449}`
        }
    }
        res.innerHTML += `\u{1F574}`
    }   


}
