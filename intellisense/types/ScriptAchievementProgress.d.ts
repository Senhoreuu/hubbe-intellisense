export interface ScriptAchievementProgress {
    /**
     * @returns {number} Retorna o progresso da conquista
     */
    getProgress(): number;

    /**
     * @returns {number} Retorna o level da conquista
     */
    getLevel(): number;
}