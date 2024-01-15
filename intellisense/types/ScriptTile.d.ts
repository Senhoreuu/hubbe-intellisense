export interface ScriptTile {
    /**
     * @description Retorna posição X do piso.
     * @returns {Number}
     */
    getX(): Number;

    /**
     * @description Retorna posição Y do piso.
     * @returns {Number}
     */
    getY(): Number;

    /**
     * @description Retorna posição Z do piso.
     * @returns {Number}
     */
    getZ(): Number;

    /**
     * @description Retorna todos os furnis que estão no piso.
     * @returns {ScriptFurni[]}
     */
    getFurnis(): ScriptFurni[];

    /**
     * @description Retorna todas entidades que estão no piso.
     * @returns {ScriptEntity[]}
     */
    getEntities(): ScriptEntity[];

    /**
     * @description Retorna o Furni que está mais alto no piso.
     * @returns {ScriptFurni}
     */
    getTopFurni(): ScriptFurni[];

    /**
     * @description Retorna a altura andável no piso.
     * @returns {Number}
     */
    getWalkHeight(): Number;

    /**
     * @description Retorna se a um furni com interação de porta no piso.
     * @returns {Boolean}
     */
    hasGate(): Boolean;

    /**
     * @description Retorna se tem algum furni no piso.
     * @returns {Boolean}
     */
    hasFurni(): Boolean;

    /**
     * @description Retorna se tem entidades no piso.
     * @returns {Boolean}
     */
    hasEntities(): Boolean;

    /**
     * @description Retorna se o piso pode ser empilhável.
     * @returns {Boolean}
     */
    canStack(): Boolean;

    /**
     * @description Retorna se pode criar/posicionar furnis no piso.
     * @returns {Boolean}
     */
    canPlaceItem(): Boolean;
}