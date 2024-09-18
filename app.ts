
// importar a biblioteca implementada com as funções de gerenciamento de histórias criadas no gerenciador-histoias.js

import { editStory, listStories, newJsonStory, removeTitle, searchByTitle, } from "./gerenciador-historias";

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
editStory("mag dormindo",{
    titulo: "mag acordada",
    descricao: "andando",
    responsavel: "Lucas",
    data_conslusao: "18/09/2024",
    resultados: "correndo",
    anexos: []
})






