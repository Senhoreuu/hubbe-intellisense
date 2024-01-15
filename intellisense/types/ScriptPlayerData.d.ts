export interface ScriptPlayerData {
    /**
     * @return Retorna o ID do player.
     */
    getId(): number;

    /**
     * @return Retorna o nome do player.
     */
    getUsername(): string;

    /**
     * @return Retorna o total de conquistas do player.
     */
    getAchievementPoints(): number;

    /**
     * @return Retorna o gênero do player.
     */
    getGender(): string;

    /**
     * @return Retorna o visual do player.
     */
    getFigure(): string;

    /**
     * @return Retorna o missão do player.
     */
    getMotto(): string;

    /**
     * @return Retorna o rank do player.
     */
    getRank(): number;

    /**
     * @return Retorna o total de diamantes do player.
     */
    getDiamonds(): number;

    /**
     * @return Retorna o total de duckets do player.
     */
    getDuckets(): number;

    /**
     * @return Retorna o total de moedas do player.
     */
    getCredits(): number;

    /**
     * @return Retorna o grupo favoritado do player.
     */
    getFavouriteGroup(): number;

    /**
     * @return Retorna o timestamp de registro do player.
     */
    getRegTimestamp(): number;

    /**
     * @return Retorna o timestamp da última vez que o player fez login no hotel.
     */
    getLastOnlineTimestamp(): number;
}