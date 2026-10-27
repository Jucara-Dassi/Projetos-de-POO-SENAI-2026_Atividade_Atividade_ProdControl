const maquinas = [];

export function cadastrarMaquina(maquina) {
  maquinas.push(maquina);
  return maquina;
}

export function listarMaquinas() {
  return maquinas;
}

export function buscarMaquinaPorIndice(indice) {
  return maquinas[indice];
}

export function atualizarMaquina(indice, maquina) {
  maquinas[indice] = maquina;
  return maquina;
}

export function excluirMaquina(indice) {
  return maquinas.splice(indice, 1)[0];
}