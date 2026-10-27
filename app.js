import {
  atualizarDadosMaquina,
  buscarMaquina,
  cadastrarNovaMaquina,
  excluirMaquinaPorIndice,
  ligarMaquina,
  listarTodasMaquinas
} from "./controller/maquinaController.js";
import {
  atualizarDadosOperador,
  buscarOperador,
  cadastrarNovoOperador,
  desativarOperador,
  excluirOperadorPorIndice,
  listarTodosOperadores
} from "./controller/operadorController.js";
import {
  atualizarDadosOrdemProducao,
  buscarOrdemProducao,
  cadastrarNovaOrdemProducao,
  concluirOrdemProducao,
  excluirOrdemProducaoPorIndice,
  iniciarOrdemProducao,
  listarTodasOrdensProducao
} from "./controller/ordemProducaoController.js";

cadastrarNovaMaquina("M1", "Gravadora a laser", "Automacao");
cadastrarNovaMaquina("M2", "Prensa hidraulica", "Estamparia");
cadastrarNovoOperador("OP1", "Maria da Penha", "Operadora producao", "Manha");
cadastrarNovoOperador("OP2", "Jose da Penha", "Tecnico de producao", "Tarde");
cadastrarNovaOrdemProducao("OPR1", "Gravacao de pecas", 1000, "20-10-2026");
cadastrarNovaOrdemProducao("OPR2", "Estampar pecas", 1000, "20-10-2026");

listarTodasMaquinas();
listarTodosOperadores();
listarTodasOrdensProducao();

buscarMaquina(0);
buscarOperador(0);
buscarOrdemProducao(0);

ligarMaquina(0);
desativarOperador(0);
iniciarOrdemProducao(0);
concluirOrdemProducao(0);

atualizarDadosMaquina(1, "M2", "Prensa semi-automatica", "Estamparia");
atualizarDadosOperador(1, "OP2", "Jose da Penha", "Coordenador", "Manha");
atualizarDadosOrdemProducao(1, "OPR2", "Estampar pecas", 1000, "25-10-2026");

excluirMaquinaPorIndice(1);
excluirOperadorPorIndice(1);
excluirOrdemProducaoPorIndice(1);

listarTodasMaquinas();
listarTodosOperadores();
listarTodasOrdensProducao();