interface GlobalData {
    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param {Number} id - ID do player.
     */
    getPlayerDataById(id: number): ScriptPlayerData;

    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param {String} username - Nome do player.
     */
    getPlayerDataByName(username: string): ScriptPlayerData;
}

declare const GlobalData: GlobalData;