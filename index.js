// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
let vitorias = Number(prompt('Quantas vitórias vc teve?'))
let derrotas = Number(prompt('Quantas derrotas vc teve?'))

function rank(a, b) {
    let nivel = ''
    let saldoVitorias = a-b
    if (saldoVitorias < 10) {
        nivel = "Ferro"
         return`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    }
    if (saldoVitorias > 10 && saldoVitorias <= 20) {
        nivel = "Bronze"
        return`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    }
    if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = "Prata"
        return`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    }
    if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = "Ouro"
        return`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    }
    if (saldoVitorias > 80 && saldoVitorias <= 100) {
        nivel = "Diamante"
       return`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    }
    if (saldoVitorias > 101) {
        nivel = "Lendário"
        return`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel} `
    }

  
}

alert(rank(vitorias,derrotas))

