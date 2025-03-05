const idade = 19
const temCNH = true
const podeDirigir = idade >= 18 && temCNH

if (podeDirigir) {
    console.log(`A pessoa está habilitada para conduzir veículo`)
} else {
    console.log(`A pessoa não está habilitada a conduzir`)
}
// if (podeDirigir) {
//     numeroDePassageiros = 4
// } else {
//     numeroDePassageiros = 0
// }
const numeroDePassageiros = podeDirigir ? 4 : 0
console.log({numeroDePassageiros})
