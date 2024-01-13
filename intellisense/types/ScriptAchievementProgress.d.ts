declare interface ScriptAchievementProgress {
    /**
     * Retorna o progresso da conquista
     * @returns {number}
     */
    getProgress(): number;

    /**
     * Retorna o level da conquista
     * @returns {number}
     */
    getLevel(): number;
}