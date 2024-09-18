"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listStories = listStories;
exports.newJsonStory = newJsonStory;
exports.searchByTitle = searchByTitle;
exports.removeTitle = removeTitle;
exports.editStory = editStory;
var fs = require("fs");
var config_1 = require("./config");
// Função para ler o arquivo Json
function jsonReading() {
    return JSON.parse(fs.readFileSync(config_1.FILE_PATH_BASE, "utf8"));
}
// Função para escrever o arquivo Json
function writeJson(json) {
    fs.writeFileSync('./historias.json', JSON.stringify(json, null, 4));
}
// Função para listar as histórias
function listStories() {
    var listJson = jsonReading();
    for (var i = 0; i < listJson[0].sistemas.length; i++) {
        for (var j = 0; j < listJson[0].sistemas[i].historias.length; j++) {
            console.log(listJson[0].sistemas[i].historias[j]);
        }
    }
}
// Função para adicionar uma nova história
function newJsonStory(nomeSistema, historia) {
    var dadosJson = jsonReading();
    for (var i = 0; i < dadosJson[0].sistemas.length; i++) {
        if (nomeSistema == dadosJson[0].sistemas[i].nome) {
            dadosJson[0].sistemas[i].historias.push(historia);
            writeJson(dadosJson);
            return;
        }
    }
    console.log("historia não encontrada");
}
// Função para buscar uma historia por titulo
function searchByTitle(titulo) {
    var dadosJson = jsonReading();
    for (var i = 0; i < dadosJson[0].sistemas.length; i++) {
        for (var j = 0; j < dadosJson[0].sistemas[i].historias.length; j++) {
            if (titulo == dadosJson[0].sistemas[i].historias[j].titulo) {
                console.log(dadosJson[0].sistemas[i].historias[j]);
                return;
            }
        }
    }
    console.log("Titulo não encontrado!");
}
// Função para remover uma história pelo título
function removeTitle(titulo) {
    var dadosJson = jsonReading();
    for (var i = 0; i < dadosJson[0].sistemas.length; i++) {
        for (var j = 0; j < dadosJson[0].sistemas[i].historias.length; j++) {
            if (titulo == dadosJson[0].sistemas[i].historias[j].titulo) {
                dadosJson[0].sistemas[i].historias.splice(j, 1);
                console.log("História deletada");
                writeJson(dadosJson);
                return;
            }
        }
    }
    console.log("História não encontrada!");
}
// função para editar uma história
function editStory(titulo, historia) {
    var dadosJson = jsonReading();
    for (var i = 0; i < dadosJson[0].sistemas.length; i++) {
        for (var j = 0; j < dadosJson[0].sistemas[i].historias.length; j++) {
            if (titulo == dadosJson[0].sistemas[i].historias[j].titulo) {
                dadosJson[0].sistemas[i].historias[j] = historia;
                console.log("História Editada!");
                writeJson(dadosJson);
                return;
            }
        }
    }
    console.log("Historia não encontrada!");
}
// Exporte as funções permitindo que outros módulos importem e usem essas funções.
