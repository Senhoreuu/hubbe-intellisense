declare interface ScriptPlayerData {
    /**
     * @description Retorna o ID do player.
     */
    getId(): number;

    /**
     * @description Retorna o nome do player.
     */
    getUsername(): string;

    /**
     * @description Retorna o total de conquistas do player.
     */
    getAchievementPoints(): number;

    /**
     * @description Retorna o gênero do player.
     */
    getGender(): string;

    /**
     * @description Retorna o visual do player.
     */
    getFigure(): string;

    /**
     * @description Retorna o missão do player.
     */
    getMotto(): string;

    /**
     * @description Retorna o rank do player.
     */
    getRank(): number;

    /**
     * @description Retorna o total de diamantes do player.
     */
    getDiamonds(): number;

    /**
     * @description Retorna o total de duckets do player.
     */
    getDuckets(): number;

    /**
     * @description Retorna o total de moedas do player.
     */
    getCredits(): number;

    /**
     * @description Retorna o grupo favoritado do player.
     */
    getFavouriteGroup(): number;

    /**
     * @description Retorna o timestamp de registro do player.
     */
    getRegTimestamp(): number;

    /**
     * @description Retorna o timestamp da última vez que o player fez login no hotel.
     */
    getLastOnlineTimestamp(): number;
}