const user = { // -> objeto
    name: 'josÉ mAriA soUZa SanTos',
    email: 'JOSE.M1@gmail.com',
    age: 38,
    address: 'Beco Diagonal'
}

//for...in - manipular objetos
//for...of - manipular Arrays

for (const key in user) {
    if (key === 'name') {
        const names = user[key].split(' ')//divide o nome onde tem espaços (TRANSFORME String em Array/Vetor)
        user[key] =''

        for (const name of names) {
            const normalizedName = name.toLowerCase()
            const [primeiraLetra, ...restoDoNome] = normalizedName//divide o nome entre a primeira letra e o resto
            
            console.log(primeiraLetra)
            console.log(restoDoNome)

            user[key] = user[key] + primeiraLetra.toUpperCase() + restoDoNome.join('') + ' '//jois transforma um Array/Vetor numa String
            user[key] = user[key].trim()//tira espaços em ecesso
        }
    }
    if (key === 'email') {
        user[key] = user[key].toLowerCase()
    }
}
console.log(user)
