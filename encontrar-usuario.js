const listaNomes = ['João Gabriel', 'Diva', 'Antonio', 'Ana', 'Beatriz']
let encontrouUsuario = false
let atingiuFimDaLista = false
let indiceUsuario = 0

while (!encontrouUsuario && !atingiuFimDaLista) {
    const usuarioAtual = listaNomes[indiceUsuario]
    if (usuarioAtual && usuarioAtual.startsWith('B')) {
        encontrouUsuario = true
        console.log(`Usuário encontrado ${listaNomes[indiceUsuario]}`)
    } 
    if (indiceUsuario >= listaNomes.length) {
        atingiuFimDaLista = true
        console.log(`Usuário não encontrado`)
    }
    indiceUsuario++
}
