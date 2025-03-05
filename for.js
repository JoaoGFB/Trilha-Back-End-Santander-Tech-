const listaNumeros = [7, -86, 53, 39, 23, -13, 18, 19]
const usuarios = ['José', 'Maria', 'João', 'Salomé']
//código imperativo (mais próximo da máquina - extenso)
// for (let contador = 0; contador < listaNumeros.length; contador++) {
//     console.log(`${listaNumeros[contador]}`)
// }

//código declarativo 
for (const numero of listaNumeros) {
    console.log(numero)
}

for (const user of usuarios) {
    console.log(user)
}
