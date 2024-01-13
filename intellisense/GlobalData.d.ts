interface GlobalData {
    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param - ID do player.
     * @returns A instância de um ScriptPlayerData.
     */
    getPlayerDataById(id: number): ScriptPlayerData;

    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param - Nome do player.
     * @returns A instância de um ScriptPlayerData.
     */
    getPlayerDataByName(username: string): ScriptPlayerData;
}

declare const GlobalData: GlobalData;