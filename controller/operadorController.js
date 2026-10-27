import {
  Operador
} from "../model/Operador.js";
import {
  atualizarOperador,
  buscarOperadorPorIndice,
  cadastrarOperador,
  excluirOperador,
  listarOperadores
} from "../repository/operadorRepository.js";

export function cadastrarNovoOperador(matricula, nome, funcao, turno) {
  return cadastrarOperador(new Operador(matricula, nome, funcao, turno));
}

export function listarTodosOperadores() {
  const operadores = listarOperadores();
  console.log("\n-- Operadores --");

  for (let indice = 0; indice < operadores.length; indice++) {
    const operador = operadores[indice];
    console.log(
      `Indice: ${indice} / Matricula: ${operador.matricula} / Nome: ${operador.nome} / Funcao: ${operador.funcao} / Turno: ${operador.turno} / Status: ${operador.status}`
    );
  }
}

export function buscarOperador(indice) {
  const operador = buscarOperadorPorIndice(indice);
  if (!operador) {
    console.log(`Operador nao encontrado no indice ${indice}.`);
    return undefined;
  }

  console.log(
    `Operador no indice ${indice}: Matricula: ${operador.matricula} / Nome: ${operador.nome} / Funcao: ${operador.funcao} / Turno: ${operador.turno} / Status: ${operador.status}`
  );
  return operador;
}

export function atualizarDadosOperador(indice, matricula, nome, funcao, turno) {
  if (!buscarOperadorPorIndice(indice)) {
    console.log(`Nao foi possivel atualizar: operador nao encontrado no indice ${indice}.`);
    return undefined;
  }

  return atualizarOperador(indice, new Operador(matricula, nome, funcao, turno));
}

export function excluirOperadorPorIndice(indice) {
  if (!buscarOperadorPorIndice(indice)) {
    console.log(`Nao foi possivel excluir: operador nao encontrado no indice ${indice}.`);
    return undefined;
  }

  return excluirOperador(indice);
}

export function ativarOperador(indice) {
  const operador = buscarOperadorPorIndice(indice);
  if (!operador) {
    console.log(`Nao foi possivel ativar: operador nao encontrado no indice ${indice}.`);
    return;
  }

  operador.ativar();
  console.log(`Operador ${operador.nome} ativado.`);
}

export function desativarOperador(indice) {
  const operador = buscarOperadorPorIndice(indice);
  if (!operador) {
    console.log(`Nao foi possivel desativar: operador nao encontrado no indice ${indice}.`);
    return;
  }

  operador.desativar();
  console.log(`Operador ${operador.nome} desativado.`);
}