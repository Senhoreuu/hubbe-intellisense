export interface FakeFloorItem {
    /**
     * @description Retorna o ID do FakeFurni
     */
    getId(): number;

    /**
     * @description Retorna a posição X atual do FakeFurni.
     */
    getX(): number;

    /**
     * @description Retorna a posição Y atual do FakeFurni.
     */
    getY(): number;

    /**
     * @description Retorna a posição Z (altura) atual do Furni.
     */
    getZ(): number;

    /**
     * @description Retorna o atual estado do FakeFurni
     */
    getState(): string;

    /**
     * @description Retorna altura empilhável do FakeFurni.
     */
    getStackHeight(): number;

    /**
     * @description Altera o estado do FakeFurni.
     * @param state - Valor do estado em que o furni será definido.
     */
    setState(state: string): void;

    /**
     * @description Define altura empilhável do FakeFurni.
     * @param height - Altura empilhável que será definida no FakeFurni.
     */
    setStackHeight(height: number): void;

    /**
     * @description Move o FakeFurni para posição fornecida.
     * @param x - Posição X para onde o FakeFurni será movido.
     * @param y - Posição Y para onde o FakeFurni será movido.
     * @param z - Posição Z para onde o FakeFurni será movido.
     * @param r - Rotação definida ao FakeFurni ao ser movido.
     */
    move(x: number, y: number, z: number, r: number): void;
}