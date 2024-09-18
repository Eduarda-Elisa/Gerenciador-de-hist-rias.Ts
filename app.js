"use strict";
// importar a biblioteca implementada com as funções de gerenciamento de histórias criadas no gerenciador-histoias.js
Object.defineProperty(exports, "__esModule", { value: true });
var gerenciador_historias_1 = require("./gerenciador-historias");
// adicionar história
/* newJsonStory("navegação",{
    titulo: 'mag dormindo',
    descricao: 'no sofa',
    responsavel: 'lucas',
    data_conslusao: '17/09/2024',
    resultados: 'sono profundo',
    anexos: []
}) */
// buscar história por título
// searchByTitle("Teste não tem")
// listar histórias
/* listStories() */
// remover histórias por título
// removeTitle("mag dormindo")
// editar história
(0, gerenciador_historias_1.editStory)("mag dormindo", {
    titulo: "mag acordada",
    descricao: "andando",
    responsavel: "Lucas",
    data_conslusao: "18/09/2024",
    resultados: "correndo",
    anexos: []
});
