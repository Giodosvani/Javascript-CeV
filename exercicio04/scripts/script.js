function gerar() {
    var valor = document.querySelector('#iNum')
    var tab = document.querySelector('#iTab')

    tab.innerHTML= ""
    if (valor.value.length == 0) {
        alert("[ERRO] Por favor, insira um número")
        tab.innerHTML  = "<option>Digite um valor</option>"
    } else {
        let n = Number(valor.value)
        let c = 1

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

    }

}