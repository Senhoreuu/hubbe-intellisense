import { IScriptReachable } from "./IScriptReachable";
import { ScriptEntity } from "./ScriptEntity";
export interface ScriptFurni {
    /**
     * Retorna o ID do Furni.
     * @returns
     */
    getId(): number;

    /**
     * Retorna o ID do furni da database.
     * @returns
     */
    getDefinitionId(): number;

    /**
    * Retorna a posição X atual do Furni.
    * @returns
    */
    getX(): number;

    /**
     * Retorna a posição Y atual do Furni.
     * @returns
     */
    getY(): number;

    /**
     * Retorna a posição Z (altura) atual do Furni.
     * @returns
     */
    getZ(): number;

    /**
     * Retorna a atual rotação do Furni.
     * @returns
     */
    getR(): number;

    /**
     * Retorna atual estado do furni.
     * @returns
     */
    getState(): string;

    /**
     * Retorna o ID do sprite do furni.
     * @returns
     */
    getSprite(): number;

    /**
     * Retorna o nome do furni.
     * *O nome que está na database*
     * @returns
     */
    getName(): string;

    /**
     * Retorna o nome público do furni. 
     * *O nome que todos estão vendo no quarto*
     * @returns
     */
    getPublicName(): string;

    /**
     * Retorna todas as entidades que estão sobre o furni.
     * @returns {ScriptEntity[]}
     */
    getEntities(): ScriptEntity[];

    /**
     * Retorna o tipo da interação do furni.
     * @returns
     */
    getInteractionType(): string;

    /**
     * Retorna quantidade de interações que o furni possui.
     * @returns
     */
    getInteractionModesCount(): number;

    /**
    * Retorna altura empilhável do furni.
    * @returns
    */
    getStackHeight(): number;

    /**
     * Retorna a largura do furni.
     * @returns
     */
    getItemWidth(): number;

    /**
     * Retorna o comprimento do Furni.
     * @returns
     */
    getItemLength(): number;

    /**
     * Retorna a altura do Furni.
     * @returns
     */
    getItemHeight(): number;

    /**
     * Retorna se a entidades a cima do furni.
     * @returns
     */
    hasEntities(): boolean;

    /**
     * Retorna se o furni é sentável por uma entidade.
     * @returns
     */
    canSit(): boolean;

    /**
     * Retorna se entidades podem andar sobre o furni.
     * @returns
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
     * @param x - Posição X para onde o furni será movido.
     * @param y - Posição y para onde o furni será movido.
     * @param z - Posição Z para onde o furni será movido.
     * @param rot - Rotação definida ao furni ao ser movido.
     * @param force - Se o furni será movido mesmo que tenha entidades sobre ele.
     */
    move(x: number, y: number, z: number, rot: number, force: boolean): void;

    /**
     * Move o furni até a posição fornecida.
     * @param {IScriptReachable} pos - Onde o furni será movido.
     * @param rotation - Rotação
     * @param force - Se o furni será movido mesmo que tenha entidades sobre ele.
     */
    move(pos: IScriptReachable, rotation: number, force: boolean): void;

    /**
     * Altera o estado do Furni.
     * @param value - Valor do estado em que o furni será definido.
     */
    setState(value: string): void;

}