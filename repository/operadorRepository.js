const operadores = [];

export function cadastrarOperador(operador) {
  operadores.push(operador);
  return operador;
}

export function listarOperadores() {
  return operadores;
}

export function buscarOperadorPorIndice(indice) {
  return operadores[indice];
}

export function atualizarOperador(indice, operador) {
  operadores[indice] = operador;
  return operador;
}

export function excluirOperador(indice) {
  return operadores.splice(indice, 1)[0];
}