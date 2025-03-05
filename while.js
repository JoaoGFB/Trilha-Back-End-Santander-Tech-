const nomes = ['João Gabriel', 'Diva', 'Antonio', 'Ana Beatriz']
let indiceUsuario = 0
//ctrl+shift+l seleciona todos os nomes de uma variável para editar
//F2 faz a mesma coisa, mas permite mudar em outros arquivos

while (indiceUsuario < nomes.length) {
    console.log(`Olá, ${nomes[indiceUsuario]}`)
    indiceUsuario++
}


const listaNumeros = [25, 88, 71, 192, 333, 222, 10, 11, 62]
const listaPares = []
const listaImpares = []
let indiceNumero = 0

while (indiceNumero < listaNumeros.length) {
    if (listaNumeros[indiceNumero] % 2 === 0) {
        listaPares.push(listaNumeros[indiceNumero])
    } else {
        listaImpares.push(listaNumeros[indiceNumero])
    }
 indiceNumero++
}
console.log(`Lista de pares: ${listaPares}`)
console.log(`Lista de ímpares: ${listaImpares}`)
