import {
  OrdemProducao
} from "../model/OrdemProducao.js";
import {
  atualizarOrdemProducao,
  buscarOrdemProducaoPorIndice,
  cadastrarOrdemProducao,
  excluirOrdemProducao,
  listarOrdensProducao
} from "../repository/ordemProducaoRepository.js";

export function cadastrarNovaOrdemProducao(numero, produto, quantidade, prazo) {
  return cadastrarOrdemProducao(new OrdemProducao(numero, produto, quantidade, prazo));
}

export function listarTodasOrdensProducao() {
  const ordensProducao = listarOrdensProducao();
  console.log("\n-- Ordens de producao --");

  for (let indice = 0; indice < ordensProducao.length; indice++) {
    const ordem = ordensProducao[indice];
    console.log(
      `Indice: ${indice} / Numero: ${ordem.numero} / Produto: ${ordem.produto} / Quantidade: ${ordem.quantidade} / Prazo: ${ordem.prazo} / Status: ${ordem.status}`
    );
  }
}

export function buscarOrdemProducao(indice) {
  const ordem = buscarOrdemProducaoPorIndice(indice);
  if (!ordem) {
    console.log(`Ordem de producao nao encontrada no indice ${indice}.`);
    return undefined;
  }

  console.log(
    `Ordem no indice ${indice}: Numero: ${ordem.numero} / Produto: ${ordem.produto} / Quantidade: ${ordem.quantidade} / Prazo: ${ordem.prazo} / Status: ${ordem.status}`
  );
  return ordem;
}

export function atualizarDadosOrdemProducao(indice, numero, produto, quantidade, prazo) {
  if (!buscarOrdemProducaoPorIndice(indice)) {
    console.log(`Nao foi possivel atualizar: ordem nao encontrada no indice ${indice}.`);
    return undefined;
  }

  return atualizarOrdemProducao(
    indice,
    new OrdemProducao(numero, produto, quantidade, prazo)
  );
}

export function excluirOrdemProducaoPorIndice(indice) {
  if (!buscarOrdemProducaoPorIndice(indice)) {
    console.log(`Nao foi possivel excluir: ordem nao encontrada no indice ${indice}.`);
    return undefined;
  }

  return excluirOrdemProducao(indice);
}

export function iniciarOrdemProducao(indice) {
  const ordem = buscarOrdemProducaoPorIndice(indice);
  if (!ordem) {
    console.log(`Nao foi possivel iniciar: ordem nao encontrada no indice ${indice}.`);
    return;
  }

  ordem.iniciar();
  console.log(`Ordem ${ordem.numero} iniciada.`);
}

export function concluirOrdemProducao(indice) {
  const ordem = buscarOrdemProducaoPorIndice(indice);
  if (!ordem) {
    console.log(`Nao foi possivel concluir: ordem nao encontrada no indice ${indice}.`);
    return;
  }

  ordem.concluir();
  console.log(`Ordem ${ordem.numero} concluida.`);
}