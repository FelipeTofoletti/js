function contar() {
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let passo = Number(window.document.getElementById('passo').value)

    do {
        document.getElementById("contador").innerHTML = `${n1}`
        n1++
    } while (n1 >= n2)
}