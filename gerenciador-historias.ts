import * as fs from 'fs';
import {FILE_PATH_BASE} from "./config"
import { Historia } from './models/historia.model';
import { Sistema } from './models/sistema.model';


// Função para ler o arquivo Json
function jsonReading(){
    return JSON.parse(fs.readFileSync(FILE_PATH_BASE, "utf8"))
}

// Função para escrever o arquivo Json
function writeJson(json : string){
    fs.writeFileSync('./historias.json', JSON.stringify(json, null,4))
}

// Função para listar as histórias
 export function listStories(){
    const listJson = jsonReading()

    for(let i = 0; i < listJson[0].sistemas.length; i++){
        for(let j = 0; j < listJson[0].sistemas[i].historias.length; j++){
            console.log(listJson[0].sistemas[i].historias[j])
        }
    }
}

// Função para adicionar uma nova história
export function newJsonStory(nomeSistema : string, historia : Historia){
    const dadosJson = jsonReading()
    
    for(let i = 0; i < dadosJson[0].sistemas.length; i++){
        if(nomeSistema == dadosJson[0].sistemas[i].nome){
            dadosJson[0].sistemas[i].historias.push(historia)
            writeJson(dadosJson)
            return
        }
        
    }
    
    console.log("historia não encontrada")
}

// Função para buscar uma historia por titulo
export function searchByTitle(titulo : string){
    const dadosJson = jsonReading()

    for(let i = 0; i < dadosJson[0].sistemas.length; i++){
        for(let j = 0; j < dadosJson[0].sistemas[i].historias.length; j++){
            if(titulo == dadosJson[0].sistemas[i].historias[j].titulo){
                console.log(dadosJson[0].sistemas[i].historias[j])
                return
            }
        }
    }

    console.log("Titulo não encontrado!")
}

// Função para remover uma história pelo título
export function removeTitle(titulo : string){
    const dadosJson = jsonReading()
    
    for(let i = 0; i < dadosJson[0].sistemas.length; i++){
        for(let j = 0; j< dadosJson[0].sistemas[i].historias.length; j++){
            if(titulo == dadosJson[0].sistemas[i].historias[j].titulo){
                dadosJson[0].sistemas[i].historias.splice( j, 1)

                console.log("História deletada")
                writeJson(dadosJson)
                return
            }
        }
    }

    console.log("História não encontrada!")

}

// função para editar uma história
export function editStory(titulo : string, historia : Historia){
    const dadosJson = jsonReading()

    for(let i = 0; i < dadosJson[0].sistemas.length; i++){
        for(let j = 0; j < dadosJson[0].sistemas[i].historias.length; j++){
            if(titulo == dadosJson[0].sistemas[i].historias[j].titulo){
                dadosJson[0].sistemas[i].historias[j] = historia

                console.log("História Editada!")
                writeJson(dadosJson)
                return
            }
        }
    }

    console.log("Historia não encontrada!")
}

// Exporte as funções permitindo que outros módulos importem e usem essas funções.




