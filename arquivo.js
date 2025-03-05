//const numero = 20 (const é constante e não pode assumir outro valor no código)
let numero = 20
const numeroFavorito = 7.7
//o JS trata um número como inteiro ou real de acordo com a significancia de sua casa decimal
const estaChovendo = false

console.log(numero)
console.log('oi')

numero = 8
const elevado = Math.pow(numero, 2)

const nome = 'João Gabriel'
console.log(`Oi, ${nome}! Seu número favorito é ${numeroFavorito}`)
console.log(`Está chovendo? ${estaChovendo}`)
console.log(`${numero} elevado ao quadrado é ${elevado}`)//alt+shift+seta pra baixo - clona a última linha

{
    const musicos = ['João Gabriel', 'Beatriz', 'Nicolas']
    console.log(musicos)
}
