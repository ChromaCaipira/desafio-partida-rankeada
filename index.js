// Dados do jogador
let vitorias = 200;
let derrotas = 90;

// Classificações de Nível
function rankLevel(saldo) {
  if (saldo <= 10) {
    return "Ferro";
  } else if (saldo >= 11 && saldo <= 20) {
    return "Bronze";
  } else if (saldo >= 21 && saldo <= 50) {
    return "Prata";
  } else if (saldo >= 51 && saldo <= 80) {
    return "Ouro";
  } else if (saldo >= 81 && saldo <= 90) {
    return "Diamante";
  } else if (saldo >= 91 && saldo <= 100) {
    return "Lendário";
  } else if (saldo >= 101) {
    return "Imortal";
  }
}

let saldoVitorias = vitorias - derrotas;

let nivel = rankLevel(saldoVitorias);

// Saída para o jogador
console.log(
  `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`
);
