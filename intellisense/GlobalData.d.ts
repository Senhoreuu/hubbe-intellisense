interface GlobalData {
    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param id - ID do player.
     * @returns A instância de um ScriptPlayerData.
     */
    getPlayerDataById(id: number): ScriptPlayerData;

    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param username - Nome do player.
     * @returns A instância de um ScriptPlayerData.
     */
    getPlayerDataByName(username: string): ScriptPlayerData;

    /**
     * @description Retorna a instância de um ScriptEntity mesmo não estando no quarto.
     * @param id - Id do player.
     * @returns A instância de um ScriptEntity.
     */
    getPlayerEntityById(id: number): ScriptEntity;

    /**
     * @description Retorna a instância de um ScriptEntity mesmo não estando no quarto.
     * @param username - Nome do player.
     * @returns A instância de um ScriptEntity.
     */
    getPlayerEntityByUsername(username: string): ScriptEntity;

    /**
     * @description Retorna se o player está online.
     * @param id - Id do player.
     */
    isOnlineById(id: number): boolean;

    /**
     * @description Retorna se o player está online.
     * @param username - Nome do player.
     */
    isOnlineByUsername(username: string): boolean;
}

export const GlobalData: GlobalData;