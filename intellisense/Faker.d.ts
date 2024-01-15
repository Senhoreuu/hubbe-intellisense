interface Faker {
    /**
     * @description Cria um FakeItem, uma mobilia similar a original
     *  @param baseId - ID da sprite da mobilia original
     *  @param x - Posição X que será gerado
     *  @param y - Posição Y que será gerado
     *  @param z - Posição Z que será gerado
     *  @param r - Rotação que será gerado
     *  @return {FakeFloorItem}
     */
    createFakeItem(baseId: number, x: number, y: number, z: number, r: number): FakeFloorItem;

    /**
     * @description Cria entidade similar a um player real
     * @param name - Nome para o FakePlayer
     * @param x - Posição X que ele irá ser criado
     * @param y - Posição Y que ele irá ser criado
     * @param z - Posição Z que ele irá ser criado
     * @param r - Rotação que ele irá ser criado
     * @returns {FakeEntity}
     */
    createFakePlayer(name: string, x: number, y: number, z: number, r: number): FakeEntity;

    /**
     * @description Cria entidade similar a um player real
     * @param name - Nome para o FakePlayer
     * @param motto - Missão para o FakePlayer
     * @param figure - Figura para o FakePlayer
     * @param gender - Gênero para o FakePlayer
     * @param credits - Créditos para o FakePlayer
     * @param diamonds - Diamantes para o FakePlayer
     * @param duckets - Duckets para o FakePlayer
     * @param x - Posição X que ele irá ser criado
     * @param y - Posição Y que ele irá ser criado
     * @param z - Posição Z que ele irá ser criado
     * @param r - Rotação que ele irá ser criado
     * @returns {FakeEntity}
     */
    createFakePlayer(name: string, motto: string, figure: string, gender: string, credits: number, diamonds: number, duckets: number, x: number, y: number, z: number, r: number): FakeEntity;

    /**
     * @description Cria uma entidade similar a um bot real
     * @param name - Nome para o FakeBot
     * @param x - Posição X que ele irá ser criado
     * @param y - Posição Y que ele irá ser criado
     * @param z - Posição Z que ele irá ser criado
     * @param r - Rotação que ele irá ser criado
     * @returns {FakeEntity}
     */
    createFakeBot(name: string, x: number, y: number, z: number, r: number): FakeEntity;

    /**
     * @description Cria uma entidade similar a um bot real
     * @param name - Nome para o FakeBot
     * @param x - Posição X que ele irá ser criado
     * @param y - Posição Y que ele irá ser criado
     * @param z - Posição Z que ele irá ser criado
     * @param r - Rotação que ele irá ser criado
     * @returns {FakeEntity}
     */
    createFakeBot(name: string, motto: string, figure: string, gender: string, x: number, y: number, z: number, r: number): FakeEntity;

    /**
     * @returns Retorna a lista com todos os items criados
     */
    getLoadedFurnis(): FakeFloorItem[];

    /**
     * @description Remove item determinado
     * @param fakeItem - Item a ser removido
     */
    removeFakeFloorItem(fakeItem: FakeFloorItem): void;

    /**
     * @description Remove uma entidade Fake
     * @param fakeEntity - Entidade Fake a ser removida do quarto
     */
    removeEntity(fakeEntity: FakeEntity): void;

    /**
     * @description Remove todos os items falsos
     */
    removeAllFloorItems(): void;

    /**
     * @description Remove todas as entidades criadas
     */
    removeAllEntities(): void;
}

export const Faker: Faker;