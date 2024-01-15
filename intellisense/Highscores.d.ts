import { ScriptEntity } from "./types/ScriptEntity";
import { ScriptFurni } from "./types/ScriptFurni";

interface Highscores {
    /**
     * @description Adiciona pontos ao Placar
     * @param {String | ScriptEntity} player - Nick ou Usuário que receberá os pontos.
     * @param {Number} points - Quantidade de pontos a serem adicionados.
    */
    add(player: String | ScriptEntity, points: Number): void;

    /**
     * @description Retorna quantos pontos o grupo tem no Placar
     * @param {String[] | ScriptEntity[]} group - Nicks ou Usuários que serão consultados.
     * @returns {Number}
    */
    getScore(group: String[] | ScriptEntity[]): number;

    /**
     * @description Remove pontos do Placar
     * @param {String | ScriptEntity} player - Nick ou Usuário que perderá os pontos.
     * @param {Number} points - Quantidade de pontos a serem removidos.
    */
    remove(player: String | ScriptEntity, points: Number): void;

    /**
     * @description Adiciona pontos a todo o Grupo no Placar
     * @param {String[] | ScriptEntity[]} player - Nicks ou Usuários que receberam os pontos.
     * @param {Number} points - Quantidade de pontos a serem adicionados.
    */
    addGroup(player: String[] | ScriptEntity[], points: Number): void;

    /**
     * @description Retorna quantos pontos o grupo tem no Placar
     * @param {String[] | ScriptEntity[]} group - Nicks ou Usuários que serão consultados.
     * @returns {Number}
    */
    getGroupScore(group: String[] | ScriptEntity[]): number;

    /**
     * @description Remove pontos de todo o Grupo no Placar
     * @param {String | ScriptEntity} player - Nicks ou Usuários que perderam os pontos.
     * @param {Number} points - Quantidade de pontos a serem removidos.
    */
    removeGroup(player: String | ScriptEntity, points: Number): void;

    /**
     * @description Limpa todos os usuários do Placar
     * @param {Number | ScriptFurni} scoreboard - ID ou Furni do Placar.
    */
    clear(scoreboard: Number | ScriptFurni): void;

    /**
     * @description Limpa todos os usuários do Placar
     * @param {Number | ScriptFurni} scoreboard - ID ou Furni do Placar.
    */
    reset(scoreboard: Number | ScriptFurni): void;
}

export const Highscores: Highscores;