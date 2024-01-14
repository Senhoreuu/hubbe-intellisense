declare class GlobalData {
    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param id - ID do player.
     * @returns A instância de um ScriptPlayerData.
     */
    static getPlayerDataById(id: number): ScriptPlayerData;

    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param username - Nome do player.
     * @returns A instância de um ScriptPlayerData.
     */
    static getPlayerDataByName(username: string): ScriptPlayerData;

    /**
     * @description Retorna a instância de um ScriptEntity mesmo não estando no quarto.
     * @param id - Id do player.
     * @returns A instância de um ScriptEntity.
     */
    static getPlayerEntityById(id: number): ScriptEntity;

    /**
     * @description Retorna a instância de um ScriptEntity mesmo não estando no quarto.
     * @param username - Nome do player.
     * @returns A instância de um ScriptEntity.
     */
    static getPlayerEntityByUsername(username: string): ScriptEntity;

    /**
     * @description Retorna se o player está online.
     * @param id - Id do player.
     */
    static isOnlineById(id: number): boolean;

    /**
     * @description Retorna se o player está online.
     * @param username - Nome do player.
     */
    static isOnlineByUsername(username: string): boolean;
}
