interface ScriptFurni {
    /**
     * Retorna o ID do Furni.
     * @returns {number}
     */
    getId(): number;

    /**
     * Retorna o ID do furni da database.
     * @returns {number}
     */
    getDefinitionId(): number;

    /**
    * Retorna a posição X atual do Furni.
    * @returns {number}
    */
    getX(): number;

    /**
     * Retorna a posição Y atual do Furni.
     * @returns {number}
     */
    getY(): number;

    /**
     * Retorna a posição Z (altura) atual do Furni.
     * @returns {number}
     */
    getZ(): number;

    /**
     * Retorna a atual rotação do Furni.
     * @returns {number}
     */
    getR(): number;

    /**
     * Retorna atual estado do furni.
     * @returns {string}
     */
    getState(): string;

    /**
     * Retorna o ID do sprite do furni.
     * @returns {number}
     */
    getSprite(): number;

    /**
     * Retorna o nome do furni.
     * *O nome que está na database*
     * @returns {string}
     */
    getName(): string;

    /**
     * Retorna o nome público do furni. 
     * *O nome que todos estão vendo no quarto*
     * @returns {string}
     */
    getPublicName(): string;

    /**
     * Retorna todas as entidades que estão sobre o furni.
     * @returns {ScriptEntity[]}
     */
    getEntities(): ScriptEntity[];

    /**
     * Retorna o tipo da interação do furni.
     * @returns {string}
     */
    getInteractionType(): string;

    /**
     * Retorna quantidade de interações que o furni possui.
     * @returns {number}
     */
    getInteractionModesCount(): number;

    /**
    * Retorna altura empilhável do furni.
    * @returns {number}
    */
    getStackHeight(): number;

    /**
     * Retorna a largura do furni.
     * @returns {number}
     */
    getItemWidth(): number;

    /**
     * Retorna o comprimento do Furni.
     * @returns {number}
     */
    getItemLength(): number;

    /**
     * Retorna a altura do Furni.
     * @returns {number}
     */
    getItemHeight(): number;

    /**
     * Retorna se a entidades a cima do furni.
     * @returns {boolean}
     */
    hasEntities(): boolean;

    /**
     * Retorna se o furni é sentável por uma entidade.
     * @returns {boolean}
     */
    canSit(): boolean;

    /**
     * Retorna se entidades podem andar sobre o furni.
     * @returns {boolean}
     */
    canWalk(): boolean;

    /**
     * Mostra o furni.
     */
    show(): void;

    /**
     * Esconde o furni.
     */
    hide(): void;

    /**
     * Mostra o furni apenas para a entidade.
     * @param {ScriptEntity} entity - Entidade que irá ver o furni.
     */
    show(entity: ScriptEntity): void;

    /**
     * Esconde o furni apenas para a entidade.
     * @param {ScriptEntity} entity - Entidade que não irá ver o furni.
     */
    hide(entity: ScriptEntity): void;

    /**
     * Ativa a interação do furni.
     */
    toggleState(): void;

    /**
     * Move o furni até a posição fornecida.
     * @param {number} x - Posição X para onde o furni será movido.
     * @param {number} y - Posição y para onde o furni será movido.
     * @param {number} z - Posição Z para onde o furni será movido.
     * @param {number} rot - Rotação definida ao furni ao ser movido.
     */
    move(x: number, y: number, z: number, rot: number): void;

    /**
     * Move o furni até a posição fornecida.
     * @param {IScriptReachable} pos - Onde o furni será movido.
     * @param {number} rotation - Rotação
     */
    move(pos: IScriptReachable, rotation: number): void;

    /**
     * Altera o estado do Furni.
     * @param {string} value - Valor do estado em que o furni será definido.
     */
    setState(value: string): void;

}

declare const ScriptFurni: ScriptFurni;