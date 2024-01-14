declare class Currency {
    /**
     * Adiciona a quantidade de Créditos a carteira do usuário.
     * @param {number} id - Id do usuário que receberá os Créditos.
     * @param {number} amount - Quantidade de Créditos a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar créditos):
     * Currency.giveCreditsById(1, 100);
     * 
     * // exemplo de uso (subtrair créditos):
     * Currency.giveCreditsById(1, -100);
     */
    static giveCreditsById(id: number, amount: number): void;

    /**
     * Adiciona a quantidade de Créditos a carteira do usuário.
     * @param {string} username - Nome do usuário que receberá os Créditos.
     * @param {number} amount - Quantidade de Créditos a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar créditos):
     * Currency.giveCreditsByUsername('username', 100);
     * 
     * // exemplo de uso (subtrair créditos):
     * Currency.giveCreditsByUsername('username', -100);
     */
    static giveCreditsByUsername(username: string, amount: number): void;

    /**
     * Adiciona a quantidade de Duckets a carteira do usuário.
     * @param {number} id - Id do usuário que receberá os Duckets.
     * @param {number} amount - Quantidade de Duckets a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar duckets):
     * Currency.giveDucketsById(1, 100);
     * 
     * // exemplo de uso (subtrair duckets):
     * Currency.giveDucketsById(1, -100);
    */
    static giveDucketsById(id: number, amount: number): void;

    /**
     * Adiciona a quantidade de Duckets a carteira do usuário.
     * @param {string} username - Nome do usuário que receberá os Duckets.
     * @param {number} amount - Quantidade de Duckets a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar duckets):
     * Currency.giveDucketsByUsername('username', 100);
     * 
     * // exemplo de uso (subtrair duckets):
     * Currency.giveDucketsByUsername('username', -100);
    */
    static giveDucketsByUsername(username: string, amount: number): void;

    /**
     * Adiciona a quantidade de Diamantes a carteira do usuário.
     * @param {number} id - Id do usuário que receberá os Diamantes.
     * @param {number} amount - Quantidade de Diamantes a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar diamantes):
     * Currency.giveDiamondsById(1, 100);
     * 
     * // exemplo de uso (subtrair diamantes):
     * Currency.giveDiamondsById(1, -100);
    */
    static giveDiamondsById(id: number, amount: number): void;

    /**
     * Adiciona a quantidade de Diamantes a carteira do usuário.
     * @param {string} username - Nome do usuário que receberá os Diamantes.
     * @param {number} amount - Quantidade de Diamantes a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar diamantes):
     * Currency.giveDiamondsByUsername('username', 100);
     * 
     * // exemplo de uso (subtrair diamantes):
     * Currency.giveDiamondsByUsername('username', -100);
    */
    static giveDiamondsByUsername(username: string, amount: number): void;

    /**
     * Adiciona a quantidade de Pontos Sazonais a carteira do usuário.
     * @param {string} username - Nome do usuário que receberá os Pontos Sazonais.
     * @param {number} amount - Quantidade de Pontos Sazonais a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar pontos sazonais):
     * Currency.giveSeasonalPointsByUsername('username', 100);
     * 
     * // exemplo de uso (subtrair pontos sazonais):
     * Currency.giveSeasonalPointsByUsername('username', -100);
    */
    static giveSeasonalPointsByUsername(username: string, amount: number): void;

    /**
     * Adiciona a quantidade de Pontos Sazonais a carteira do usuário.
     * @param {number} id - Id do usuário que receberá os Pontos Sazonais.
     * @param {number} amount - Quantidade de Pontos Sazonais a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar pontos sazonais):
     * Currency.giveSeasonalPointsById(1, 100);
     * 
     * // exemplo de uso (subtrair pontos sazonais):
     * Currency.giveSeasonalPointsById(1, -100);
    */
    static giveSeasonalPointsById(id: number, amount: number): void;
}