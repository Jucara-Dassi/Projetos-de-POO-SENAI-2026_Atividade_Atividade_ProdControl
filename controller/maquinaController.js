import {
  Maquina
} from "../model/Maquina.js";
import {
  atualizarMaquina,
  buscarMaquinaPorIndice,
  cadastrarMaquina,
  excluirMaquina,
  listarMaquinas
} from "../repository/maquinaRepository.js";

export function cadastrarNovaMaquina(codigo, nome, setor) {
  return cadastrarMaquina(new Maquina(codigo, nome, setor));
}

export function listarTodasMaquinas() {
  const maquinas = listarMaquinas();
  console.log("\n-- Maquinas --");

  for (let indice = 0; indice < maquinas.length; indice++) {
    const maquina = maquinas[indice];
    console.log(
      `Indice: ${indice} / Codigo: ${maquina.codigo} / Nome: ${maquina.nome} / Setor: ${maquina.setor} / Status: ${maquina.status}`
    );
  }
}

export function buscarMaquina(indice) {
  const maquina = buscarMaquinaPorIndice(indice);
  if (!maquina) {
    console.log(`Maquina nao encontrada no indice ${indice}.`);
    return undefined;
  }

  console.log(
    `Maquina no indice ${indice}: Codigo: ${maquina.codigo} / Nome: ${maquina.nome} / Setor: ${maquina.setor} / Status: ${maquina.status}`
  );
  return maquina;
}

export function atualizarDadosMaquina(indice, codigo, nome, setor) {
  if (!buscarMaquinaPorIndice(indice)) {
    console.log(`Nao foi possivel atualizar: maquina nao encontrada no indice ${indice}.`);
    return undefined;
  }

  return atualizarMaquina(indice, new Maquina(codigo, nome, setor));
}

export function excluirMaquinaPorIndice(indice) {
  if (!buscarMaquinaPorIndice(indice)) {
    console.log(`Nao foi possivel excluir: maquina nao encontrada no indice ${indice}.`);
    return undefined;
  }

  return excluirMaquina(indice);
}

export function ligarMaquina(indice) {
  const maquina = buscarMaquinaPorIndice(indice);
  if (!maquina) {
    console.log(`Nao foi possivel ligar: maquina nao encontrada no indice ${indice}.`);
    return;
  }

  maquina.ligar();
  console.log(`Maquina ${maquina.nome} ligada.`);
}

export function desligarMaquina(indice) {
  const maquina = buscarMaquinaPorIndice(indice);
  if (!maquina) {
    console.log(`Nao foi possivel desligar: maquina nao encontrada no indice ${indice}.`);
    return;
  }

  maquina.desligar();
  console.log(`Maquina ${maquina.nome} desligada.`);
}