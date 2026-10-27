const ordensProducao = [];

export function cadastrarOrdemProducao(ordem) {
  ordensProducao.push(ordem);
  return ordem;
}

export function listarOrdensProducao() {
  return ordensProducao;
}

export function buscarOrdemProducaoPorIndice(indice) {
  return ordensProducao[indice];
}

export function atualizarOrdemProducao(indice, ordem) {
  ordensProducao[indice] = ordem;
  return ordem;
}

export function excluirOrdemProducao(indice) {
  return ordensProducao.splice(indice, 1)[0];
}