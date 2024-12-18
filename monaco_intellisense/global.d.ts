// --------------------------- Instances --------------------------- //

type Genders = "M" | "F";
type EntitiesType = "PLAYER" | "BOT" | "PET";
type DancesID = 0 | 1 | 2 | 3 | 4;
type ActionID = number;
type relationships = 1 | 2 | 3 | 4;
type WiredCallback = (entity?: ScriptEntity, furni?: ScriptFurni, entities?: ScriptEntity[], furnis?: ScriptFurni[]) => void
type BubblesID = number;
type AnimationTime = number;

declare enum keyCodes {
    CTRL = 1,
    ALT = 2,
    SHIFT = 3,
    UP = 4,
    DOWN = 5,
    LEFT = 6,
    RIGHT = 7
}

interface Effect {
    /**
    * @description Retorna o ID do efeito.
    * @returns {number}
    */
    getEffectId(): number;

    /**
    * @description Retorna quanto tempo resta para o efeito acabar.
    * @returns {number}
    */
    getDuration(): number;
}

interface Counter { }

interface ScriptPosition {
    /**
     * @description Retorna a posição X
     * @returns {number} A posição X
     */
    getX(): number;

    /**
     * @description Retorna a posição Y
     * @returns {number} A posição Y
     */
    getY(): number;

    /**
     * @description Retorna a posição Z
     * @returns {number} A posição Z
    */
    getZ(): number;

    /**
     * @description Retorna a posição R
     * @returns {number} A posição R
     */
    equals(object: ScriptPosition): boolean;
}

interface RoomTile extends ScriptPosition {
    /**
     * @description Retorna o ID do Furni.
     * @returns {number}
     */
    getId(): number;

    /**
     * @description Retorna o ID do furni da database.
     * @returns {number}
     */
    getDefinitionId(): number;

    /**
     * @description Retorna a atual rotação do Furni.
     * @returns {number}
     */
    getR(): number;

    /**
     * @description Retorna atual estado do furni.
     * @returns {string}
     */
    getCurrentState(): string;

    /**
     * @description Retorna o ID do sprite do furni.
     * @returns {number}
     */
    getSprite(): number;

    /**
     * @description Retorna o nome do furni.
     * *O nome que está na database*
     * @returns {string}
     */
    getName(): string;

    /**
     * @description Retorna o nome público do furni. 
     * *O nome que todos estão vendo no quarto*
     * @returns {string}
     */
    getPublicName(): string;

    /**
     * @description Retorna todas as entidades que estão sobre o furni.
     * @returns {ScriptEntity[]}
     */
    getEntities(): ScriptEntity[];

    /**
     * @description Retorna o tipo da interação do furni.
     * @returns {string}
     */
    getInteractionType(): string;

    /**
     * @description Retorna quantidade de interações que o furni possui.
     * @returns {number}
     */
    getInteractionModesCount(): number;

    /**
    * @description Retorna altura empilhável do furni.
    * @returns {number}
    */
    getStackHeight(): number;

    /**
     * @description Retorna a largura do furni.
     * @returns {number}
     */
    getItemWidth(): number;

    /**
     * @description Retorna o comprimento do Furni.
     * @returns {number}
     */
    getItemLength(): number;

    /**
     * @description Retorna a altura do Furni.
     * @returns {number}
     */
    getItemHeight(): number;

    /**
     * @description Retorna a unidade de lote atual do furni.
     * @returns {number}
     */
    getLimitedUnit(): number;

    /**
     * @description Retorna o total de lotes que tem do furni.
     * @returns {number}
     */
    getLimitedTotal(): number;

    /**
     * @description Retorna se a entidades a cima do furni.
     * @returns {boolean} Se a entidades a cima do furni.
     */
    hasEntities(): boolean;

    /**
     * @description Retorna se o furni é sentável por uma entidade.
     * @returns {boolean} Se o furni é sentável por uma entidade.
     */
    canSit(): boolean;

    /**
     * @description Retorna se entidades podem andar sobre o furni.
     * @returns {boolean} Se entidades podem andar sobre o furni.
     */
    canWalk(): boolean;

    /**
     * @description Altera o estado do furni.
     * @param {string} state - Valor do estado em que o furni será definido.
     * @returns {void}
     */
    setState(state: string): void;

    /**
     * @description Altera o estado do furni.
     * @param {number} state - Estado do furni.
     * @returns {void}
     */
    setState(state: number): void;

    /**
     * @description Altera a cor de um mobi colorivel
     * @param {string} colorHexA - Primeira cor. 
     * @param {string} colorHexB - Segunda cor.
     * @returns {void}
     */
    setColor(colorHexA: string, colorHexB: string): void;

    /**
     * @description Mostra o furni.
     * @returns {void}
     */
    show(): void;

    /**
     * @description Esconde o furni.
     * @returns {void}
     */
    hide(): void;

    /**
     * @description Mostra o furni apenas para a entidade.
     * @param {ScriptEntity | null;} entity - Entidade que irá ver o furni.
     * @returns {void}
     */
    show(entity: ScriptEntity): void;

    /**
     * @description Esconde o furni apenas para a entidade.
     * @param {ScriptEntity | null;} entity - Entidade que não irá ver o furni.
     * @returns {void}
     */
    hide(entity: ScriptEntity): void;

    /**
     * @description Ativa a interação do furni.
     * @returns {void}
     */
    toggleState(): void;

    /** 
     * @description Move o furni de parede para a posição fornecida.
     * @param {number} x - Posição X para onde o furni será movido.
     * @param {number} y - Posição Y para onde o furni será movido.
     * @param {number} z - Posição Z para onde o furni será movido. (Apenas inteiros)
     * @param {number} r - Posição R para onde o furni será movido.
     * @param {string} state 
     */
    moveWall(x: number, y: number, z: number, r: number, state: string): void;

    /**
     * @description Move o furni para posição fornecida.
     * @param {ScriptPosition} position - posição para o onde o furni será movido.
     * @param {number} r - Rotação definida ao furni ao ser movido.
     * @param {boolean} force - Se o furni deve ser movido mesmo que o caminho esteja bloqueado.
     * @param {boolean} animation - Se o furni será movido com animacao.
     */
    move(position: ScriptPosition, r: number, force: boolean, animation: boolean): void;

    /**
     * @description Move o furni para posição fornecida.
     * @param {ScriptPosition} position - posição para o onde o furni será movido.
     * @param {number} r - Rotação definida ao furni ao ser movido.
     * @param {boolean} force - Se o furni deve ser movido mesmo que o caminho esteja bloqueado.
     */
    move(position: ScriptPosition, r: number, force: boolean): void;

    /**
     * @description Move o furni para posição fornecida.
     * @param {number} x - Posição X para onde o furni será movido.
     * @param {number} y - Posição Y para onde o furni será movido.
     * @param {number} z - Posição Z para onde o furni será movido.
     * @param {number} r - Rotação definida ao furni ao ser movido.
     * @param {boolean} force - Se o furni deve ser movido mesmo que o caminho esteja bloqueado.
     * @param {boolean} animation - Se o furni será movido com animacao.
     */
    move(x: number, y: number, z: number, r: number, force: boolean, animation: boolean): void;

    /**
     * @description Move o furni para posição fornecida.
     * @param {number} x - Posição X para onde o furni será movido.
     * @param {number} y - Posição Y para onde o furni será movido.
     * @param {number} z - Posição Z para onde o furni será movido.
     * @param {number} r - Rotação definida ao furni ao ser movido.
     * @param {boolean} force - Se o furni deve ser movido mesmo que o caminho esteja bloqueado.
     * @param {boolean} animation - Se o furni será movido com animacao.
     * @param {AnimationTime} animationTime - O tempo de animacao em que o furni sera movido do 50ms ate o 2000ms.
     */
    move(x: number, y: number, z: number, r: number, force: boolean, animation: boolean, animationTime: AnimationTime): void;

    /**
     * @description Move o furni para posição fornecida.
     * @param {number} x - Posição X para onde o furni será movido.
     * @param {number} y - Posição Y para onde o furni será movido.
     * @param {number} z - Posição Z para onde o furni será movido.
     * @param {number} r - Rotação definida ao furni ao ser movido.
     * @param {boolean} force - Se o furni deve ser movido mesmo que o caminho esteja bloqueado.
     */
    move(x: number, y: number, z: number, r: number, force: boolean): void;

    /**
     * @description Move o item de parede para a posição fornecida.
     * @param {number} x1 - Posição X1 para onde o item de parede será movido.
     * @param {number} x2 - Posição X2 para onde o item de parede será movido.
     * @param {number} y1 - Posição Y1 para onde o item de parede será movido.
     * @param {number} y2 - Posição Y2 para onde o item de parede será movido.
     * @param {string} side - Lado para onde o item de parede será movido.
     */
    moveWall(x1: number, x2: number, y1: number, y2: number, side: string): void;

    /**
     * @description Retorna a opacidade do furni. Entre 100 a 0.
     */
    getOpacity(): number;

    /**
     * @description Define a opacidade do furni.
     * @param {number} opacity - Opacidade do furni. Entre 100 a 0.
     * @returns {void}
     */
    setOpacity(opacity: number): void;
}

interface ScriptTile extends ScriptPosition {
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
    getTopFurni(): ScriptFurni;

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

interface ScriptAchievementProgress {
    /**
     * @description Retorna o progresso da conquista
     * @returns {number}
     */
    getProgress(): number;

    /**
     * @description Retorna o nível da conquista do usuário
     * @returns {number}
     */
    getLevel(): number;
}

interface ScriptPlayerData {
    /**
     * @description Retorna o ID do player.
     * @returns {number}
     */
    getId(): number;

    /**
     * @description Retorna o nome do player.
     * @returns {string}
     */
    getUsername(): string;

    /**
     * @description Retorna o total de pontos de conquista do player.
     * @returns {number}
     */
    getAchievementPoints(): number;

    /**
     * @description Retorna o gênero do player.
     * @returns {Genders}
     */
    getGender(): Genders;

    /**
     * @description Retorna o visual do player.
     * @returns {string}
     */
    getFigure(): string;

    /**
     * @description Retorna se o player é VIP.
     * @returns {boolean}
     */
    isVip(): boolean;

    /**
     * @description Retorna a missão do player.
     * @returns {string}
     */
    getMotto(): string;

    /**
     * @description Retorna o rank do player.
     * @returns {number}
     */
    getRank(): number;

    /**
     * @description Retorna o total de diamantes do player.
     * @returns {number}
     */
    getDiamonds(): number;

    /**
     * @description Retorna o total de duckets do player.
     * @returns {number}
     */
    getDuckets(): number;

    /**
     * @description Retorna o total de moedas do player.
     * @returns {number}
     */
    getCredits(): number;

    /**
     * @description Retorna o grupo favoritado do player.
     * @returns {number}
     */
    getFavouriteGroup(): number;

    /**
     * @description Retorna o timestamp de registro do player.
     * @returns {number}
     */
    getRegTimestamp(): number;

    /**
     * @description Retorna o timestamp da última vez que o player fez login no hotel.
     * @returns {number}
     */
    getLastOnlineTimestamp(): number;

    /**
     * @description Retorna o total de pontos de promoção do player.
     * @returns {number}
     */
    getPontosHallPromo(): number;

    /**
     * @description Retorna o total de pontos de presença do player.
     * @returns {number}
     */
    getPontosHallPresenca(): number;

    /**
     * @description Retorna o total de pontos de evento do player.
     * @returns {number}
     */
    getPontosHallEvento(): number;
}

interface FakeFloorItem extends RoomTile {


    /**
     * @description Define altura empilhável do FakeFurni.
     * @param {number} height - Altura empilhável que será definida no FakeFurni.
     * @returns {void}
     */
    setStackHeight(height: number): void;
}

interface BotEntity extends ScriptEntity { }

interface ScriptEntity extends ScriptPosition {
    /**
     * @description Retorna o Balão de fala atual da entidade.
     * @returns {BubblesID}
     */
    getBubbleId(): BubblesID;

    /**
     * @description Retorna o ID da entidade.
     * @returns {number}
     */
    getId(): number;

    /**
     * @description Retorna o ID do jogador.
     * @returns {number}
     */
    getPlayerId(): number;

    /**
     * @description Retorna o nome da Entidade atual.
     * @returns {string}
     */
    getUsername(): string;

    /**
     * @description Retorna a atual rotação da entidade.
     * @returns {number}
     */
    getR(): number;

    /**
     * @description Retorna o tipo da entidade.
     * @returns {EntitiesType}
     */
    getType(): EntitiesType;

    /**
     * @description Retorna o rank da entidade.
     * @returns {number}
     */
    getRank(): number;

    /**
     * @description Retorna a missão da entidade.
     * @returns {string}
     */
    getMotto(): string;

    /**
     * @description Retorna o genero da entidade
     * @returns {Genders}
     */
    getGender(): Genders;

    /**
     * @description Retorna o código do atual visual da entidade.
     * *Não aplicável a Pets*
     * @returns {string}
     */
    getFigure(): string;

    /**
     * @description Retorna o código do efeito atual da entidade.
     * @returns {number}
     */
    getEffect(): number;

    /**
     * @description Retorna o código do atual item de mão que a entidade está segurando.
     * @returns {number}
     */
    getHandItem(): number;

    /**
     * @description Retorna a atual dança da entidade.
     * @returns {DancesID}
     */
    getDance(): DancesID;

    /**
     * @description Retorna objeto com status atual da conquista
     * @param {string} achievement - Código da conquista
     * @returns {ScriptAchievementProgress}
     */
    getAchievementProgress(achievement: string): ScriptAchievementProgress;

    /**
     * @description Retorna a quantidade de *Diamantes* da entidade.
     * @returns {number}
     */
    getDiamonds(): number;

    /**
     * @description Retorna a quantidade de *Duckets* da entidade.
     * @returns {number}
     */
    getDuckets(): number;

    /**
     * @description Retorna a quantidade de *Moedas* da entidade.
     * @returns {number}
    */
    getCredits(): number;

    /**
     * @description Retorna o total de *Ponto de Conquista* da entidade. 
     * @returns {number}
     */
    getAchievementPoints(): number;

    /**
     * @description Retorna o ID do quarto atual da entidade.
     * @returns {number}
     */
    getRoomId(): number;

    /**
     * @description Retorna a tecla que a entidade está pressionando.
     * @description 1 - CTRL
     * @description 2 - ALT
     * @description 3 - SHIFT
     * @description 4 - Seta para cima
     * @description 5 - Seta para baixo
     * @description 6 - Seta para esquerda
     * @description 7 - Seta para direita
     * @returns {number}
     */
    getKeyPressing(): number;

    /**
     * @description Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param {ScriptPosition} object - Posição a ser comparada.
     * @returns {number}
     */
    distanceTo(object: ScriptPosition): number;

    /**
     * @description Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param {number} x - Posição X a ser comparada.
     * @param {number} y - Posição Y a ser comparada.
     * @param {number} z - Posição Z a ser comparada.
     * @returns {number}
     */
    distanceTo(x: number, y: number, z: number): number;

    /**
     * @description Retorna se a entidade é um usuário.
     * @returns {boolean}
     */
    isPlayer(): boolean;

    /**
     * @description Retorna se entidade é um Bot.
     * @returns {boolean}
     */
    isBot(): boolean;

    /**
     * @description Retorna se a entidade é um Pet.
     * @returns {boolean}
     */
    isPet(): boolean;

    /**
     * @description Retorna se a entidade está ausente.
     * @returns {boolean}
     */
    isIdle(): boolean;

    /**
     * @description Retorna se o player é VIP.
     * @returns {boolean}
     */
    isVip(): boolean;

    /**
     * @description Retorna se a entidade está andando para trás.
     * @returns {boolean}
     */
    isMoonwalking(): boolean;

    /**
     * @description Retorna se a entidade está visível no quarto.
     * @returns {boolean}
     */
    isVisibleInRoom(): boolean;
    /**
     * @description Retorna se esta entidade é igual a entidade fornecida.
     * @param {ScriptEntity | null;} entity - Entidade que será comparada.
     * @returns {boolean}
     */
    equals(entity: ScriptEntity): boolean;

    /**
     * @description Retorna se esta entidade está sobre a mobilia fornecida.
     * @param {ScriptPosition} furni
     * @returns {boolean} Se esta entidade está sobre a mobilia fornecida.
     */
    in(furni: ScriptPosition): boolean;

    /**
     * @description Retorna se a entidade está em alguma das mobilias fornecidas.
     * @param {ScriptPosition[]} furnis - Lista de mobilias a serem comparadas.
     * @returns {boolean}
     */
    inAny(furnis: ScriptPosition[]): boolean;

    /**
     * @description Retorna se a entidade pode se mover.
     * @returns {boolean} Se a entidade pode se mover.
     */
    canWalk(): boolean;

    /**
     * @description Retorna se a entidade está se movendo.
     * @returns {boolean}
     */
    isWalking(): boolean;

    /**
     * @description Retorna se a entidade possui o emblema no inventário do usuário.
     * *Emblema não precisa estar equipado como favorito.*
     * @param {string} badge - Código do emblema a ser verificado.
     * @returns {boolean}
    */
    hasBadge(badge: string): boolean;

    /**
     * @description Retorna se entidade possui o rank fornecido ou um maior.
     * @param {number} rank - Valor do rank a ser comparado.
     * @returns {boolean}
     */
    hasRank(rank: number): boolean;

    /**
     * @description Retorna se entidade está próxima (tocando) a posição fornecida.
     * @param {number} x - Posição X a ser comparada.
     * @param {number} y - Posição Y a ser comparada.
     * @param {number} z - Posição Z a ser comparada.
     * @returns {boolean}
     */
    touching(x: number, y: number, z: number): boolean;

    /**
     * @description Retorna se entidade está próxima (tocando) a posição fornecida pelo objeto.
     * @param {ScriptPosition} object
     * @returns {boolean}
     */
    touching(object: ScriptPosition): boolean;

    /**
     * @description Retorna se entidade possui o item fornecido no inventário.
     * @param {number} spriteId - Código do item a ser verificado.
     * @returns {boolean}
     */
    hasItemBySpriteId(spriteId: number): boolean;

    /**
     * @description Retorna se entidade possui a quantidade do item fornecido no inventário.
     * @param {number} spriteId - Código do item a ser verificado.
     * @param {number} quantity - Quantidade do item a ser verificado.
     * @returns {boolean}
     */
    hasItemBySpriteId(spriteId: number, quantity: number): boolean;

    /**
     * @description Retorna a quantidade do item no inventário da entidade.
     * @param {number} spriteId - Código do item a ser verificado.
     * @returns {number}
     */
    getItemCountBySpriteId(spriteId: number): number;

    /**
     * @description Adiciona pontos a uma conquista do usuário.
     * @param {string} code - Código da conquista.
     * @param {number} levels - Quantidade de pontos
     * @returns {void}
     */
    progressAchievement(code: string, levels: number): void;

    /**
     * @description Define a entidade para andar virada para frente ou para trás.
     * @param {boolean} enabled - Se a entidade deve andar virada para trás.
     * @returns {void}
     */
    setMoonwalking(enabled: boolean): void;

    /**
     * @description Define o balão de fala da entidade.
     * @param {BubblesID} bubbleId - Id do balão que será definido.
     * @returns {void}
     */
    setBubbleId(bubbleId: BubblesID): void;

    /**
     * @description Define uma missão a entidade.
     * @param {string} motto - Missão que será definida na entidade.
     * @returns {void}
     */
    setMotto(motto: string): void;

    /**
     * @description Define o visual para entidade.
     * *Não aplicável a Pets*
     * @param {string} gender - Gênero do visual.
     * @param {string} figure - Código do visual.
     * @returns {void}
     */
    setFigure(gender: string, figure: string): void;

    /**
     * @description Define um item de mão para entidade segurar.
     * @param {number} item - Código do item de mão.
     * @param {number} time - Tempo em segundos que a entidade ficará com o item de mão.
     * @returns {void}
     */
    setHandItem(item: number, time: number): void;

    /**
     * @description Define um efeito a entidade.
     * @param {number} effect - Código do efeito.
     * @returns {void}
     */
    setEffect(effect: number): void;

    /**
     * @description Define a entidade pode ser mover.
     * @param {boolean} can - Se a entidade pode ser mover.
     * @param {boolean} effect - Se a entidade vai receber o efeito de congelado.
     * @returns {void}
     */
    setCanWalk(can: boolean, effect: boolean): void;

    /**
     * @description Define uma dança para a entidade.
     * @argument 0: Parado.
     * @argument 1: Hap-Hop
     * @argument 2: Pogo-Mogo
     * @argument 3: Duck Funk
     * @argument 4: Rollie
     * @param {DancesID} danceId - Código da dança
     * @returns {void}
     */
    setDance(danceId: DancesID): void;

    /**
     * @description Define a visibilidade da entidade no quarto.
     * @param {boolean} visible - Se a entidade será visível.
     * @returns {void}
     */
    setVisibleInRoom(visible: boolean): void;

    /**
     * @description Retorna o valor da memoria padrao do usuario em formato string.
     * @returns {string}
     */
    getMemoryValue(): string;

    /**
     * @description Retorna o valor da memoria padrao do usuario em formato double.
     * @returns {number}
     */
    getMemoryValueDouble(): number;

    /** 
     * @description Retorna o valor da chave buscada da memoria do usuario.
     * @param {string} key - Chave de busca.
     * @returns {string}
    */
    getMemoryValue(key: string): string;

    /**
     * @description Seta um valor string na memoria do usuario.
     * @param {string} value - Valor que a memoria padrao do usuario recebera.
     * @returns {void}
     */
    setMemoryValue(value: string): void;

    /**
     * @description Seta uma chave com um valor na memoria do usuario.
     * @param {string} key - A chave que tera o valor.
     * @param {string} value - Valor que a chave tera.
     * @returns {void}
     */
    setMemoryValue(key: string, value: string): void;

    /**
     * @description - Seta um valor number na memoria do usuario.
     * @param value - Valor que a memoria padrao do usuario recebera.
     */
    setMemoryValue(value: number): void;

    /**
     * @description Seta uma chave com um valor na memoria do usuario.
     * @param key - A chave que tera o valor.
     * @param value - Valor que a chave tera.
     */
    setMemoryValue(key: string, value: number): void;

    /**
     * @description Envia um emblema a entidade apenas para o ScriptEntity.
     * @param {string} badge - Código do emblema a ser entregue.
     * @returns {void}
     */
    giveBadge(badge: string): void;

    /**
     * @description Adiciona ao inventário da entidade um item.
     * @param {number} spriteId - Código do item.
     * @returns {void}
     */
    addItemBySpriteId(spriteId: number): void;

    /**
     * @description Adiciona ao inventário da entidade um ou mais itens.
     * @param {number} spriteId - Código do item.
     * @param {number} quantity - Quantidade do item.
     * @returns {void}
     */
    addItemBySpriteId(spriteId: number, quantity: number): void;

    /**
     * @description Remove um item do inventário da entidade.
     * @param {number} itemId - Código do item.
     * @returns {void}
     */
    removeItemByItem(itemId: number): void;

    /**
     * @description Remove um ou mais itens do inventário da entidade.
     * @param {number} spriteId - Código do item.
     * @param {number} quantity - Quantidade do item.
     * @returns {void}
     */
    removeItemBySpriteId(spriteId: number, quantity: number): void;

    /**
     * @description Remove o item de mão da entidade.
     * @returns {void}
     */
    removeHandItem(): void;

    /**
     * @description Remove o efeito da entidade.
     * @returns {void}
     */
    removeEffect(): void;

    /**
     * @description Remove um emblema de um usuário.
     * @param {string} badge - Código do emblema.
     * @returns {void}
     */
    removeBadge(badge: string): void;

    /**
     * @description Faz a entidade dizer uma mensagem.
     * @param {string} message - Mensagem que será dita pela entidade.
     * @param {boolean} shout - Se o personagem deve gritar a mensagem. (Mensagem em negrito)
     * @param {BubblesID} bubbleId - Balão da mensagem
     * @returns {void}
     */
    say(message: string, shout: boolean, bubbleId: BubblesID): void;

    /**
     * @description Faz a entidade dizer uma mensagem.
     * @param {string} message - Mensagem que será dita pela entidade.
     * @returns {void}
     */
    say(message: string): void;

    /**
     * @description Faz a entidade dizer uma mensagem.
     * @param {string} message - Mensagem que será dita pela entidade.
     * @param {BubblesID} bubbleId - Balão da mensagem
     * @returns {void}
     */
    say(message: string, bubble: BubblesID): void;

    /**
     * @description Envia uma mensagem que aparecerá somente para está entidade.
     * @param {string} message - Mensagem a ser enviada.
     * @returns {void}
     */
    message(message: string): void;

    /**
     * @description Envia uma mensagem que aparecerá somente para está entidade.
     * @param {string} message - Mensagem a ser enviada.
     * @param {BubblesID} bubble - Balão da mensagem.
     * @returns {void}
     */
    message(message: string, bubble: BubblesID): void;

    /**
     * @description Sussura uma mensagem para outra entidade.
     * @param {ScriptEntity | null;} to - Entidade que receberá a mensagem.
     * @param {string} message - Mensagem que será enviada.
     * @param {BubblesID} bubbleId - Balão da mensagem.
     * @returns {void}
     */
    whisper(to: ScriptEntity, message: string, bubbleId: BubblesID): void;

    /**
     * @description Envia um alerta ao usuário.
     * @param {string} text - Texto do alerta.
     * @returns {void}
     */
    alert(text: string): void;

    /**
     * @deprecated
     * @description Envia um alerta longo ao usuário.
     * @param {string} text - Texto do alerta.
     * @returns {void} 
     */
    alertLong(text: string): void;

    /**
     * @description Entidade olha para o ponto definido.
     * @param {ScriptPosition} object
     * @param {boolean} moveHead = Se a entidade pode mover somente sua cabeça.
     * @returns {void}
     */
    lookTo(object: ScriptPosition, moveHead: boolean): void;

    /**
     * @description Esta entidade olha para outra entidade.
     * @param {ScriptEntity | null;} entity - Entidade que será o alvo.
     * @returns {void}
     */
    lookTo(entity: ScriptEntity): void;

    /**
     * @description Entidade olha para o ponto definido.
     * @param {number} x - Posição X que entidade irá olhar.
     * @param {number} y - Posição Y que entidade irá olhar.
     * @param {boolean} moveHead - Se a entidade pode mover somente sua cabeça.
     * @returns {void}
     */
    lookTo(x: number, y: number, moveHead: boolean): void;

    /**
     * @description Teletransporta a entidade para posição fornecida.
     * @param {number} x - Posição X em que entidade será levada.
     * @param {number} y - Posição Y em que entidade será levada.
     * @param {number} z - Posição Z em que entidade será levada.
     * @param {number} r - Rotação definida para a entidade.
     * @returns {void}
     */
    teleport(x: number, y: number, z: number, r: number): void;

    /**
     * @description Teletransporta a entidade para posição fornecida.
     * @param {number} x - Posição X em que entidade será levada.
     * @param {number} y - Posição Y em que entidade será levada.
     * @param {number} r - Rotação definida para a entidade.
     * @returns {void}
     */
    teleport(x: number, y: number, r: number): void;

    /**
     * @description Teletransporta a entidade para posição fornecida.
     * @param {number} x - Posição X em que entidade será levada.
     * @param {number} y - Posição Y em que entidade será levada.
     * @returns {void}
     */
    teleport(x: number, y: number): void;

    /**
     * @description Teletransporta a entidade para posição fornecida no objeto.
     * @param {ScriptPosition} object - Posição em que entidade séra teleportada.
     * @returns {void}
     */
    teleport(object: ScriptPosition): void;

    /**
     * @description Move a entidade até a posição fornecida no objeto.
     * @param {ScriptPosition} object - Posição em que entidade andará.
     * @returns {void}
     */
    walk(object: ScriptPosition): void;

    /**
     * @description Move a entidade até a posição fornecida.
     * *Entidade só irá se mover caso o caminho esteja livre até o ponto fornecido*
     * @param {number} x - Posição X em que entidade andará.
     * @param {number} y - Posição Y em que entidade andará.
     */
    walk(x: number, y: number): void;

    /**
     * @description Faz com que a entidade pare de andar.
     * @returns {void}
    */
    cancelWalk(): void;

    /**
     * @description Entidade faz uma ação determinada
     * @argument 1: Acenar
     * @argument 2: Mandar Beijo
     * @abstract 3: Rir
     * @param {ActionID} action - Número da ação
    */
    action(action: ActionID): void;

    /**
     * @description Faz a entidade se levantar.
     * @returns {void}
     */
    std(): void;

    /**
     * @description Faz a entidade deitar.
     * @returns {void}
     */
    lay(): void;

    /**
     * @description Faz a entidade sentar.
     * @returns {void}
     */
    sit(): void;

    /**
     * @description Expulsa a entidade do quarto.
     * @returns {void}
     */
    kick(): void;

    /**
     * @description Leva a entidade para outro quarto.
     * *Entidade será levada mesmo que haja campanhia/senha*
     * @param {number} roomId - ID do quarto alvo.
     * @returns {void}
     */
    goToRoom(roomId: number): void;

    /**
     * @description Envia uma notificação para o usuário.
     * @param {string} icon - Código do icone para a notificação.
     * @param {string} message - Mensagem pra notificação.
     * @returns {void}
    */
    notification(icon: string, message: string): void;

    /**
     * @description Exibe um video para este usuário
     * @param {string} url - Url do video no Youtube.
     * @param {boolean} force - Se o comando deve forçar a exibição do video, mesmo que o usuário tenha desabilitado.
     * @returns {void}
     */
    youtube(url: string, force: boolean): void;

    /**
     * @description Remove a UI especificada da client do usuário.
     * @param {string} eventName - Nome do evento que está registrado.
     * @param {string} data - Dados que serão enviados (vazio)
     * @returns {void}
     */
    disposeUI(eventName: string, data: string): void;

    /**
     * @description Remove todas as UIs da client do usuário.
     * @returns {void}
     */
    disposeUIAll(): void;

    /**
     * @description Carrega a UI para o usuário.
     * @param {string} scriptName - Nome da pasta onde o arquivo está localizado.
     * @param {string} fileName - Nome do arquivo html que contém os dados da UI.
     * @returns {void}
     */
    loadUI(scriptName: string, fileName: string): void;

    /**
     * @description Envia uma mensagem para a client do usuário.
     * @param {string} eventName - Nome do evento que está registrado
     * @param data - Dados que serão enviados
     * @returns {void}
     */
    sendUIMessage(eventName: string, data: string): void;

    /**
     * @description Retorna se o user está utilizando um teletransporte ao entrar no quarto.
     * @returns {boolean}
     */
    isTeleporting(): boolean;

    /**
     * @description Retorna se o user está utilizando um teletransporte.
     * @returns {boolean}
     */
    usingTeleportItem(): boolean;

    /**
     * @description Retorna se o usuário pode interagir com mobis.
     * @returns {boolean}
     */
    canInteract(): boolean;

    /**
     * @description Retorna se o usuário pode interagir com o mobi.
     * @param {number} itemId - ID do mobi
     */
    canInteract(itemId: number): boolean;

    /**
     * @description Define se o usuário pode interagir com mobis.
     * @param {boolean} canInteract - Se o usuário pode interagir com mobis.
     */
    setCanInteract(canInteract: boolean): void;

    /**
     * @description Define os mobis que o usuário não pode interagir.
     * @param {number[]} itemsId - ID dos mobis que o usuário não pode interagir.
     */
    setNonInteractableItems(itemsId: number[]): void;

    /**
     * @description Retorna todos os códigos de emblemas que o usuário possui.
     * @returns {string[]}
     */
    getBadges(): string[];

    /**
     * @description Retorna todos os amigos do usuário.
     * @returns {Friend[]}
     */
    getFriends(): Friend;
}

interface Friend {
    /**
     * @description Retorna se o usuário está em algum quarto.
     * @returns {boolean}
     */
    isInRoom(): boolean;

    /**
     * @description Retorna se o usuário está online.
     * @returns {boolean}
     */
    isOnline(): boolean;

    /**
     * @description Retorna o PlayerData do usuário.
     * @returns {ScriptPlayerData}
     */
    getAvatar(): ScriptPlayerData;

    /**
     * @description Retorna o id do usuário.
     * @returns {number}
     */
    getUserId(): number;
}

interface ScriptFurniWall extends RoomTile { }

interface ScriptFurni extends RoomTile {
    /**
     * @description Altera a altura atual do mobi.
     * @param {number} height - Altura modificada do mobi.
     * @returns {void}
     */
    changeHeight(height: number): void;

    /**
     * @description Altera se o mobi pode ser empilhado ou não.
     * @param {boolean} stackeable - Se o mobi pode ser empilhado.
     * @returns {void}
     */
    changeStackeable(stackeable: boolean): void;

    /**
     * @description Altera se o mobi pode ser sentável ou não.
     * @param {boolean} seatable - Se o mobi pode ser sentável.
     * @returns {void}
     */
    changeSeatable(seatable: boolean): void;

    /**
     * @description Altera se o mobi pode ser andável ou não.
     * @param {boolean} walkable - Se o mobi pode ser andável.
     * @returns {void}
     */
    changeWalkable(walkable: boolean): void;

    /**
     * @description Altera a quantidade de estados que o mobi tem.
     * @param {number} cycleCount - Quantidade de estados que o mobi terá.
     * @returns {void}
     */
    changeCycleCount(cycleCount: number): void;

    /**
     * @description Volta o mobi para a altura original.
     * @returns {void}
     */
    changeHeight(): void;

    /**
     * @description Volta o mobi para o modo empilhável original.
     * @returns {void}
     */
    changeStackeable(): void;

    /**
     * @description Volta o mobi para o modo sentável original.
     * @returns {void}
     */
    changeSeatable(): void;

    /**
     * @description Volta o mobi para o modo andável original.
     * @returns {void}
     */
    changeWalkable(): void;

    /**
     * @description Volta o mobi para a quantidade de estados original.
     * @returns {void}
     */
    changeCycleCount(): void;
}

interface FakeEntity {
    /**
     * @description Adiciona relacionamento a entidade
     * @param {number} entityId - ID da entidade
     * 1: Coração (Heart)
     * 2: Sorriso (Smile)
     * 3: Bobba (Bobba)
     * 4: Merda (Poop)
     * @param {relationships} relationship - Relação entre entidade e FakeEntity
     * @returns {void}
     */
    addRelationship(entityId: number, relationship: relationships): void;

    /**
     * @description Retorna ID da FakeEntity
     * @returns {number} ID da FakeEntity
     */
    getId(): number;

    /**
     * @description Retorna username atual da entidade
     * @returns {string} Username atual da entidade
     */
    getUsername(): string;

    /**
     * @description Retorna a posição x atual da FakeEntity.
     * @returns {number} A posição x atual da FakeEntity.
     */
    getX(): number;

    /**
     * @description Retorna a posição Z atual da FakeEntity.
     * @returns {number} A posição Z atual da FakeEntity.
     */
    getZ(): number;

    /**
     * @description Retorna a posição Y atual da FakeEntity.
     * @returns {number} A posição Y atual da FakeEntity.
     */
    getY(): number;

    /**
     * @description Retorna a rotação atual do FakeEntity.
     * @returns {number} A rotação atual do FakeEntity.
     */
    getR(): number;

    /**
     * @description Retorna o código do atual visual da entidade.
     * @returns {string} O código do atual visual da entidade.
     */
    getFigure(): string;

    /**
     * @description Retorna missão atual da entidade
     * @returns {string} Missão atual da entidade
     */
    getMotto(): string;

    /**
     * @description Retorna o código do efeito atual da entidade.
     * @returns {Effect} O código do efeito atual da entidade.
     */
    getEffect(): Effect;

    /**
     * @description Retorna o código do atual item de mão que a entidade está segurando.
     * @returns {number} O código do atual item de mão que a entidade está segurando.
     */
    getHandItem(): number;

    /**
     * @description Retorna a atual dança da entidade.
     * @returns {number} A atual dança da entidade.
     */
    getDance(): number;

    /**
     * @description Retorna a quantidade de diamantes que a entidade possui.
     * @returns {number} A quantidade de diamantes que a entidade possui.
     */
    getDiamonds(): number;

    /**
     * @description Retorna a quantidade de duckets que a entidade possui.
     * @returns {number} A quantidade de duckets que a entidade possui.
     */
    getDuckets(): number;

    /**
     * @description Retorna a quantidade de créditos que a entidade possui.
     * @returns {number} A quantidade de créditos que a entidade possui.
     */
    getCredits(): number;

    /**
     * @description Retorna a distancia entre a entidade e outra posição fornecida no objeto.
     * @param {ScriptPosition} object Posição a ser comparada.
     * @returns {number} A distancia entre a entidade e outra posição fornecida no objeto.
     */
    distanceTo(object: ScriptPosition): number;

    /**
     * @description Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param {number} x - Posição X a ser comparada.
     * @param {number} y - Posição Y a ser comparada.
     * @param {number} z - Posição Z a ser comparada.
     * @returns {number} A distancia atual entre esta entidade e a posição fornecida.
     */
    distanceTo(x: number, y: number, z: number): number;

    /**
     * @description Retorna se entidade é um FakeBot.
     * @returns {boolean} Se entidade é um FakeBot.
     */
    isBot(): boolean;

    /**
     * @description Retorna se entidade está próxima (tocando) a posição fornecida.
     * @param {number} x - Posição X a ser comparada.
     * @param {number} y - Posição Y a ser comparada.
     * @param {number} z - Posição Z a ser comparada.
     * @returns {boolean} Se entidade está próxima (tocando) a posição fornecida.
     */
    touching(x: number, y: number, z: number): boolean;

    /**
     * @description Retorna se entidade está próxima (tocando) a posição fornecida pelo objeto.
     * @param {ScriptPosition} object
     * @returns {boolean} Se entidade está próxima (tocando) a posição fornecida pelo objeto.
     */
    touching(object: ScriptPosition): boolean;

    /**
     * @description Retorna se esta entidade está sobre a mobilia fornecida.
     * @param {ScriptPosition} object
     * @returns {boolean} Se esta entidade está sobre a mobilia fornecida.
     */
    in(object: ScriptPosition): boolean;

    /**
     * @description Retorna se a entidade está se movendo.
     * @returns {boolean} Se a entidade está se movendo.
     */
    isWalking(): boolean;

    /**
     * @description Define nome para a entidade
     * @param {string} username - Nome que será definido.
     * @returns {void}
     */
    setUsername(username: string): void;

    /**
     * @description Define nova missão na entidade
     * @param {string} motto - Missão que será definida.
     * @returns {void}
     */
    setMotto(motto: string): void;

    /**
     * @description Define um efeito a entidade.
     * @param {number} effect - Código do efeito.
     * @returns {void}
     */
    setEffect(effect: number): void;

    /**
     * @description Define um item de mão para entidade segurar.
     * @param {number} item - Código do item de mão.
     * @returns {void}
     */
    setHandItem(item: number): void;

    /**
     * @description Define uma dança para a entidade.
     * 0: Parado.
     * 1: Hap-Hop
     * 2: Pogo-Mogo
     * 3: Duck Funk
     * 4: Rollie
     * @param {DancesID} danceId - Código da dança
     * @returns {void}
     */
    setDance(danceId: DancesID): void;

    /**
     * @description Remove efeito (:enable 0)
     * @returns {void}
     */
    removeEffect(): void;

    /**
     * @description Remove o item de mão da entidade.
     * @returns {void}
     */
    removeHandItem(): void;

    /**
     * @description Faz com que a entidade pare de andar.
     * @returns {void}
     */
    cancelWalk(): void;

    /**
     * @description Adiciona um emblema no perfil do Bot
     * @param {string} badge - Código do emblema a ser adicionado.
     * @returns {void}
    */
    addBadge(badge: string): void;

    /**
     * @description Entidade faz uma ação determinada
     * 1: Acenar
     * 2: Mandar Beijo
     * 3: Rir
     * @param {ActionID} action - Número da ação
     * @returns {void}
    */
    action(action: ActionID): void;

    /**
     * @description Move a entidade até a posição fornecida.
     * @description Entidade só irá se mover caso o caminho esteja livre até o ponto fornecido*
     * @param {number} x - Posição X em que entidade andará.
     * @param {number} y - Posição Y em que entidade andará.
     * @returns {void}
     */
    walk(x: number, y: number): void;

    /**
     * @param {ScriptPosition} object Posição em que a entidade andará.
     * @returns {void}
     */
    walk(object: ScriptPosition): void;

    /**
     * @description Teletransporta a entidade para posição fornecida.
     * @param {number} x - Posição X em que entidade será teleportada.
     * @param {number} y - Posição Y em que entidade será teleportada.
     * @param {number} z - Posição Z em que entidade será teleportada.
     * @param {number} r - Rotação definida para a entidade.
     * @returns {void}
     */
    teleport(x: number, y: number, z: number, r: number): void;

    /**
     * @description Teletransporta a entidade para posição fornecida no objeto.
     * @param {ScriptPosition} object Posição em que a entidade.
     * @returns {void}
     */
    teleport(object: ScriptPosition): void;

    /**
     * @description Entidade olha para o ponto definido.
     * @param {number} x - Posição X que entidade irá olhar.
     * @param {number} y - Posição Y que entidade irá olhar.
     * @param {boolean} moveHead - Se a entidade pode mover somente sua cabeça.
     * @returns {void}
     */
    lookTo(x: number, y: number, moveHead: boolean): void;

    /**
     * @description Entidade olha para o ponto definido.
     * @param {ScriptPosition} object Posição em que a entidade.
     * @returns {void}
     */
    lookTo(object: ScriptPosition): void;

    /**
     * @description Faz a entidade dizer uma mensagem.
     * @param {string} message - Mensagem que será dita pela entidade.
     * @param {boolean} shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
     * @param {BubblesID} bubbleId - Balão da mensagem
     * @returns {void}
    */
    say(message: string, shout: boolean, bubbleId: BubblesID): void;

    /**
     * @description Faz a entidade dizer uma mensagem.
     * @returns {void}
     */
    say(message: string): void;

    /**
       * @description Sussurra uma mensagem para outra entendide.
       * @param to - Entidade que receberá a mensagem.
       * @param {string} message - Mensagem que será enviada.
       * @param {BubblesID} bubbleId - Balão da mensagem.
       * @returns {void}
       */
    whisper(to: ScriptEntity, message: string, bubbleId: BubblesID): void;

    /**
     * @description Faz a entidade levantar
     * @returns {void}
     */
    std(): void;

    /**
     * @description Faz a entidade sentar
     * @returns {void}
     */
    sit(): void;

    /**
     * @description Faz a entidade deitar
     * @returns {void}
     */
    lay(): void;
}

interface WebhookMessage {
    /**
     * @description Define a mensagem que será enviada junto ao Webhook
     * @param {string} bodyMessage - Mensagem que será enviada junto ao Webhook
     * @returns {WebhookMessage}
     */
    setRawMessage(bodyMessage: string): WebhookMessage;

    /**
     * @description Define o titulo no Embed do Webhook
     * @param {string} title - Titulo que será definido no Embed do Webhook
     * @returns {WebhookMessage}
    */
    setTitle(title: string): WebhookMessage;

    /**
     * @description Define a descrição no Embed do Webhook
     * @param {string} description - Descrição que será definida no Embed do Webhook
     * @returns {WebhookMessage}
    */
    setDescription(description: string): WebhookMessage;

    /**
     * @description Define a imagem no Embed do Webhook
     * @param {string} link - Link da imagem que será definida no Embed do Webhook
     * @returns {WebhookMessage}
    */
    setImageUrl(link: string): WebhookMessage;

    /**
     * @description Define a imagem da Thumbnail no Embed do Webhook
     * @param {string} link - Link da Thumbnail que será definida no Embed do Webhook
     * @returns {WebhookMessage}
    */
    setThumbnailUrl(link: string): WebhookMessage;

    /**
     * @description Define a cor no Embed do Webhook
     * @param {number} decimalColor - Cor em decimal
     * @returns {WebhookMessage}
    */
    setColor(decimalColor: number): WebhookMessage;

    /**
     * @description Adiciona um campo com titulo e descrição no Embed do Webhook
     * @param {string} titleField - Titulo do campo
     * @param {string} valueField - Descrição do campo
     * @returns {WebhookMessage}
    */
    addField(titleField: string, valueField: string): WebhookMessage;

    /**
     * @description Envia o Webhook.
     * @returns {void}
     */
    queue(): void;
}

interface DelayTask {
    /** 
    * @description Retorna quantidade de ticks que restam para o termino do temporizador.
    * @returns {Number} 
    */
    getTicksRemain(): number;
}

interface CommandCallback {
    /**
     * @description Função que será executada quando o comando for chamado.
     * @param {ScriptEntity | null;} entity - Entidade que chamou o comando.
     * @param {string} message - Argumentos passados no comando.
     * @returns {void}
     */
    (entity: ScriptEntity, message: string): void;
}

// --------------------------- Classes --------------------------- //

declare class Commands {
    /**
     * @description Registra um comando para ser executado.
     * @param {string} commandName - Nome do comando a ser registrado.
     * @param {boolean} needStart - Se o comando precisa iniciar na frase.
     * @param {CommandCallback} callback - Função a ser executada quando o comando for chamado.
     * 
     * @example
     * // exemplo de uso:
     * Commands.register('comando', true, (entity, message) => {
     *  entity.say('Olá, ' + entity.getUsername() + '!');
     * });
     * @returns {void}
     */
    static register(commandName: string, needStart: boolean, callback: CommandCallback): void;

    /**
     * @description Registra um comando para ser executado.
     * @param {string} commandName - Nome do comando a ser registrado.
     * @param {CommandCallback} callback - Função a ser executada quando o comando for chamado.
     * 
     * @example
     * // exemplo de uso:
     * Commands.register('comando', (entity, message) => {
     *  entity.say('Olá, ' + entity.getUsername() + '!');
     * });
     * @returns {void}
     */
    static register(commandName: string, callback: CommandCallback): void;

    /**
     * @description Remove um comando registrado.
     * @param {string} commandName - Nome do comando a ser removido.
     * 
     * @example
     * // exemplo de uso:
     * Commands.unregister('comando');
     * @returns {void}
     */
    static unregister(commandName: string): void;
}

declare class Currency {
    /**
     * @description Adiciona a quantidade de Créditos a carteira do usuário.
     * @param {number} id - Id do usuário que receberá os Créditos.
     * @param {number} amount - Quantidade de Créditos a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar créditos):
     * Currency.giveCreditsById(1, 100);
     * 
     * // exemplo de uso (subtrair créditos):
     * Currency.giveCreditsById(1, -100);
     * @returns {void}
    */
    static giveCreditsById(id: number, amount: number): void;

    /**
     * @description Adiciona a quantidade de Créditos a carteira do usuário.
     * @param {string} username - Nome do usuário que receberá os Créditos.
     * @param {number} amount - Quantidade de Créditos a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar créditos):
     * Currency.giveCreditsByUsername('username', 100);
     * 
     * // exemplo de uso (subtrair créditos):
     * Currency.giveCreditsByUsername('username', -100);
     * @returns {void}
    */
    static giveCreditsByUsername(username: string, amount: number): void;

    /**
     * @description Adiciona a quantidade de Duckets a carteira do usuário.
     * @param {number} id - Id do usuário que receberá os Duckets.
     * @param {number} amount - Quantidade de Duckets a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar duckets):
     * Currency.giveDucketsById(1, 100);
     * 
     * // exemplo de uso (subtrair duckets):
     * Currency.giveDucketsById(1, -100);
    * @returns {void}
    */
    static giveDucketsById(id: number, amount: number): void;

    /**
     * @description Adiciona a quantidade de Duckets a carteira do usuário.
     * @param {string} username - Nome do usuário que receberá os Duckets.
     * @param {number} amount - Quantidade de Duckets a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar duckets):
     * Currency.giveDucketsByUsername('username', 100);
     * 
     * // exemplo de uso (subtrair duckets):
     * Currency.giveDucketsByUsername('username', -100);
    * @returns {void}
    */
    static giveDucketsByUsername(username: string, amount: number): void;

    /**
     * @description Adiciona a quantidade de Diamantes a carteira do usuário.
     * @param {number} id - Id do usuário que receberá os Diamantes.
     * @param {number} amount - Quantidade de Diamantes a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar diamantes):
     * Currency.giveDiamondsById(1, 100);
     * 
     * // exemplo de uso (subtrair diamantes):
     * Currency.giveDiamondsById(1, -100);
    * @returns {void}
    */
    static giveDiamondsById(id: number, amount: number): void;

    /**
     * @description Adiciona a quantidade de Diamantes a carteira do usuário.
     * @param {string} username - Nome do usuário que receberá os Diamantes.
     * @param {number} amount - Quantidade de Diamantes a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar diamantes):
     * Currency.giveDiamondsByUsername('username', 100);
     * 
     * // exemplo de uso (subtrair diamantes):
     * Currency.giveDiamondsByUsername('username', -100);
    * @returns {void}
    */
    static giveDiamondsByUsername(username: string, amount: number): void;

    /**
     * @description Adiciona a quantidade de Pontos Sazonais a carteira do usuário.
     * @param {string} username - Nome do usuário que receberá os Pontos Sazonais.
     * @param {number} amount - Quantidade de Pontos Sazonais a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar pontos sazonais):
     * Currency.giveSeasonalPointsByUsername('username', 100);
     * 
     * // exemplo de uso (subtrair pontos sazonais):
     * Currency.giveSeasonalPointsByUsername('username', -100);
    * @returns {void}
    */
    static giveSeasonalPointsByUsername(username: string, amount: number): void;

    /**
     * @description Adiciona a quantidade de Pontos Sazonais a carteira do usuário.
     * @param {number} id - Id do usuário que receberá os Pontos Sazonais.
     * @param {number} amount - Quantidade de Pontos Sazonais a ser entregue.
     * 
     * @example
     * // exemplo de uso (adicionar pontos sazonais):
     * Currency.giveSeasonalPointsById(1, 100);
     * 
     * // exemplo de uso (subtrair pontos sazonais):
     * Currency.giveSeasonalPointsById(1, -100);
    * @returns {void}
    */
    static giveSeasonalPointsById(id: number, amount: number): void;

    /**
    * @description Faz o pagamento de evento ao usuario
     * @param {number} id - Id do usuário que receberá o pagamento.
     * @param {number} amount - Quantidade de créditos a ser entregue.
     * @returns {void}
     */
    static payById(id: number, amount: number): void;

    /**
     * @description Faz o pagamento de evento ao usuario
     * @param {string} username - Nome do usuário que receberá o pagamento.
     * @param {number} amount - Quantidade de créditos a ser entregue.
     * @returns {void}
     */
    static payByUsername(username: string, amount: number): void;
}

declare class Events {
    /**
     * @description Evento chamado quando uma entidade entra no quarto.
     * @example
     * // Exemplo de uso:
     * Events.on('userJoin', (user) => {
     *   Engine.log(user.getUsername() + ' entrou no quarto!');
     * });
    * @returns {void}
    */
    static on(event: 'userJoin', callback: (user: ScriptEntity) => void): void;

    /**
     * @description Evento chamado quando a client do usuário envia uma mensagem para o quarto.
     * @param {string} event
     * @param callback
     * @returns {void}
     */
    static on(event: 'uiMessage', callback: (user: ScriptEntity, eventName: string, data: string) => void): void;

    /**
     * @description Evento chamado quando uma entidade sai do quarto.
     * @example
     * // Exemplo de uso:
     * Events.on('userLeave', (user) => {
     *   Engine.log(user.getUsername() + ' saiu do quarto!');
     * });
    * @returns {void}
    */
    static on(event: 'userLeave', callback: (user: ScriptEntity) => void): void;

    /**
     * @description Evento chamado quando uma entidade pisa em um mobi.
     * @example
     * // Exemplo de uso:
     * Events.on('stepOn', (user, furni) => {
     *   Engine.log(user.getUsername() + ' pisou em ' + furni.getName());
     * });
    * @returns {void}
    */
    static on(event: 'stepOn', callback: (user: ScriptEntity, furni: ScriptFurni) => void): void;

    /**
     * @description Evento chamado quando uma entidade sai de um mobi.
     * @example
     * // Exemplo de uso:
     * Events.on('stepOff', (user, furni) => {
     *   Engine.log(user.getUsername() + ' saiu de ' + furni.getName());
     * });
    * @returns {void}
    */
    static on(event: 'stepOff', callback: (user: ScriptEntity, furni: ScriptFurni) => void): void;

    /**
     * @description Evento chamado quando uma entidade fala algo.
     * @example
     * // Exemplo de uso:
     * Events.on('say', (user, message) => {
     *   Engine.log(user.getUsername() + ' disse: ' + message);
     * });
    * @returns {void}
    */
    static on(event: 'say', callback: (user: ScriptEntity, message: string) => void): void;

    /**
     * @description Evento chamado quando uma entidade interage com um mobi dando dois cliques.
     * @example
     * // Exemplo de uso:
     * Events.on('interact', (user, furni) => {
     *   Engine.log(user.getUsername() + ' interagiu com ' + furni.getName());
     * });
    * @returns {void}
    */
    static on(event: 'interact', callback: (user: ScriptEntity, furni: ScriptFurni) => void): void;

    /**
     * @description Evento chamado quando uma entidade interage com um mobi dando um clique.
     * @example
     * // Exemplo de uso:
     * Events.on('furniSelected', (user, furni) => {
     *   Engine.log(user.getUsername() + ' clicou em ' + furni.getName());
     * });
    * @returns {void}
    */
    static on(event: 'furniSelected', callback: (user: ScriptEntity, furni: ScriptFurni) => void): void;

    /**
     * @description Evento chamado a cada tick. (1 tick = 0.5 segundo)
     * @example
     * // Exemplo de uso:
     * Events.on('tick', () => {
     *  Engine.log('tick executado');
     * });
    * @returns {void}
    */
    static on(event: 'tick', callback: Function): void;

    /**
     * @description Evento chamado quando o quarto é carregado.
     * @example
     * // Exemplo de uso:
     * Events.on('load', () => {
     *  Engine.log('quarto carregado');
     * });
    * @returns {void}
    */
    static on(event: 'load', callback: Function): void;

    /**
     * @description Evento chamado quando o quarto é descarregado.
     * @example
     * // Exemplo de uso:
     * Events.on('dispose', () => {
     *  Engine.log('quarto descarregado');
     * });
    * @returns {void}
    */
    static on(event: 'dispose', callback: Function): void;

    /**
     * @description Evento chamado quando um player é selecionado.
     * @param {ScriptEntity | null;} user - Usuário que selecionou.
     * @param {ScriptEntity | null;} target - Usuário que foi selecionado.
     * @example
     * // Exemplo de uso:
     * Events.on('playerSelected', (user, target) => {
     *  Engine.log(user.getUsername() + ' clicou em ' + target.getUsername());
     * });
    * @returns {void}
    */
    static on(
        event: 'playerSelected',
        callback: (user: ScriptEntity, target: ScriptEntity) => void
    ): void;

    static on(
        event: 'floorClicked',
        callback: (user: ScriptEntity, position: ScriptPosition) => void
    )

    static on(
        event: 'floorItemMoved',
        callback: (user: ScriptEntity, furni: ScriptFurni, rotation: boolean) => void
    )

    static on(
        event: 'keyDown',
        callback: (user: ScriptEntity, key: keyCodes) => void
    )

    static on(
        event: 'keyUp',
        callback: (user: ScriptEntity, key: keyCodes) => void
    )

    static on(
        event: "userIdle",
        callback: (user: ScriptEntity) => void
    )

    static on(
        event: "userWakeUp",
        callback: (user: ScriptEntity) => void
    )

    static on(
        event: "walk",
        callback: (user: ScriptEntity) => void
    )

    /**
     * @description Evento chamado quando uma mensagem é enviada para o quarto atual.
     * @param roomId - ID do quarto que enviou.
     * @param event - Nome do evento.
     * @param data - Dados (Qualquer coisa em formato string).
     * 
     * @example
     * // Exemplo de uso:
     * Events.on('serverMessage', (roomId, event, data) => {
     *  Engine.log('Mensagem recebida do quarto ' + roomId);
     *  Engine.log('Evento: ' + event);
     *  Engine.log('Dados: ' + data);
     * });
    * @returns {void}
    */
    static on(
        event: 'serverMessage',
        callback: (roomId: number, event: string, data: string) => void
    ): void;

    /**
     * @description Evento chamado quando um mobi é colocado no quarto.
     * @param {ScriptEntity | null;} user - Usuário que colocou.
     * @param {ScriptFurni} furni - Mobi que foi colocado.
     * @example
     * // Exemplo de uso:
     * Events.on('floorItemPlaced', (user, furni) => {
     *  Engine.log(user.getUsername() + ' colocou ' + furni.getName());
     * });
    * @returns {void}
    */
    static on(
        event: 'floorItemPlaced',
        callback: (user: ScriptEntity, furni: ScriptFurni) => void
    ): void;

    /**
     * @description Evento chamado quando um mobi é removido do quarto.
     * @param {ScriptEntity | null;} user - Usuário que removeu.
     * @param {ScriptFurni} furni - Mobi que foi removido.
     * @example
     * // Exemplo de uso:
     * Events.on('floorItemRemoved', (user, furni) => {
     *  Engine.log(user.getUsername() + ' removeu ' + furni.getName());
     * });
    * @returns {void}
    */
    static on(
        event: 'floorItemPickedup',
        callback: (user: ScriptEntity, furni: ScriptFurni) => void
    ): void;

    /**
     * @description Evento chamado quando um bot é selecionado.
     * @param event - Nome do evento.
     * @param callback - Função a ser executada quando o evento for chamado.
     * returns {void}
     * @example
     * // Exemplo de uso:
     * Events.on('botSelected', (user, bot) => {
     *  Engine.log(user.getUsername() + ' clicou em ' + bot.getUsername());
     * });
     */
    static on(
        event: 'botSelected',
        callback: (user: ScriptEntity, bot: BotEntity) => void
    ): void;

    /**
     * @description Envia uma mensagem para o quarto especificado.
     * @param roomId - ID do quarto que receberá a mensagem.
     * @param event - Nome do evento.
     * @param data - Dados (Qualquer coisa em formato string).
     * 
     * @example
     * // Exemplo de uso:
     * Events.sendMessageToRoom(123, 'evento', 'dados');
     * 
     * // Exemplo de uso:
     * Events.sendMessageToRoom(123, 'evento', JSON.stringify({ foo: 'bar' }));
     * 
     * // Exemplo de uso:
     * Events.sendMessageToRoom(123, 'evento',  JSON.stringify([{ foo: 'bar'}]));
    * @returns {void}
    */
    static sendMessageToRoom(roomId: number, event: string, data: string): void;
}

declare class GlobalData {
    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param {number} id - ID do player.
     * 
     * @example
     * // Exemplo de uso:
     * const playerData = GlobalData.getPlayerDataById(1);
     * @returns {ScriptPlayerData | null;} A instância de um ScriptPlayerData.
     */
    static getPlayerDataById(id: number): ScriptPlayerData | null;

    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param {string} username - Nome do player.
     * 
     * @example
     * // Exemplo de uso:
     * const playerData = GlobalData.getPlayerDataByName('username');
     * @returns {ScriptPlayerData | null;} A instância de um ScriptPlayerData.
     */
    static getPlayerDataByName(username: string): ScriptPlayerData | null;

    /**
     * @description Retorna a instância de um ScriptEntity mesmo não estando no quarto.
     * @param {number} id - Id do player.
     * 
     * @example
     * // Exemplo de uso:
     * const playerEntity = GlobalData.getPlayerEntityById(1);
     * @returns {ScriptEntity | null} A instância de um ScriptEntity.
     */
    static getPlayerEntityById(id: number): ScriptEntity | null;

    /**
     * @description Retorna a instância de um ScriptEntity mesmo não estando no quarto.
     * @param {string} username - Nome do player.
     * 
     * @example
     * // Exemplo de uso:
     * const playerEntity = GlobalData.getPlayerEntityByName('username'); // null caso não exista
     * @returns {ScriptEntity | null} A instância de um ScriptEntity.
     */
    static getPlayerEntityByUsername(username: string): ScriptEntity | null;

    /**
     * @description Retorna se o player está online.
     * @param {number} id - Id do player.
     * 
     * @example
     * // Exemplo de uso:
     * const isOnline = GlobalData.isPlayerOnlineById(1); // true ou false
     * @returns {boolean} Se o player está online.
     */
    static isOnlineById(id: number): boolean;

    /**
     * @description Retorna se o player está online.
     * @param {string} username - Nome do player.
     * 
     * @example
     * // Exemplo de uso:
     * const isOnline = GlobalData.isPlayerOnlineByUsername('username'); // true ou false
     * @returns {boolean} Se o player está online.
     */
    static isOnlineByUsername(username: string): boolean;

    /**
     * @description Retorna a instância de um quarto
     * @param {number} id - Id do quarto.
     * @returns {Room | null} A instância de um quarto.
     */
    static getRoomById(id: number): RoomInstance | null;

    /**
     * @description Retorna todos os raros e preços.
     * @returns {Map<number, number>} Todos os raros e preços.
     * @example
     * // Exemplo de uso:
     * const rares = GlobalData.getAllRares();
     * for (const [definitionId, price] of rares) {
     *      Engine.log('Raro: ' + definitionId + ' Preço: ' + price);
     * }
    */
    static getAllRares(): Map<number, number>;

    /**
     * @description Retorna o preço de um raro.
     * @param definitionId - ID definitivo do mobi.
     * @returns {number} Preço do raro.
     * @example
     * // Exemplo de uso:
     * const price = GlobalData.getRarePriceByDefinitionId(1);
     * Engine.log('Preço do raro: ' + price);
     */
    static getRarePriceByDefinitionId(definitionId: number): number;
}

interface RoomInstance {
    /**
    * @description Retorna o ID do quarto
    * @returns {number} o ID do quarto
    */
    getId(): number;

    /**
     * @description Retorna o nome atual do quarto.
     * @returns {number} o nome atual do quarto.
     */
    getName(): string;

    /**
     * @description Retorna o nome do dono do quarto
     * @returns {number} o nome do dono do quarto
     */
    getOwnerUsername(): string;

    /**
     * @description Retorna o ID do dono do quarto
     * @returns {number} o ID do dono do quarto
     */
    ownerId(): number;

    /**
     * @description Retorna o nome do grupo do quarto
     * @returns {number} a quantidade de usuários do quarto
     */
    userCount(): number;

    /**
     * @description Retorna o usuário correspondente ao ID.
     * @param {number} id - ID do usuário buscado.
     * @returns {ScriptEntity | null;} o usuário correspondente ao ID.
     */
    getPlayerById(id: number): ScriptEntity | null;

    /**
     * @description Retorna o usuário correspondente ao Nome.
     * @param {string} name - Nome do usuário buscado.
     * @returns {ScriptEntity | null;} o usuário correspondente ao Nome.
     */
    getPlayerByName(name: string): ScriptEntity | null;

    /**
     * @description Retorna o bot correspondente ao Nome.
     * @param {string} name - Nome do Bot a ser buscado.
     * @returns {ScriptEntity | null;} o bot correspondente ao nome.
     */
    getBotByName(name: string): ScriptEntity | null;

    /**
     * @description Retorna uma lista com todos os usuários do quarto..
     * @returns {ScriptEntity[]} uma lista com todos os usuários do quarto.
     */
    getAllPlayers(): ScriptEntity[];

    /**
     * @description Retorna o temporizador correspondente ao ID. Caso não exista, será retornado null.
     * @returns {Counter | null} o temporizador correspondente ao ID.
     */
    getCounter(furniId: number): Counter | null;

    /**
     * @description Retorna uma lista com todos as entidades na posição fornecida.
     * @param {number} x - Posição X buscada.
     * @param {number} y - Posição Y buscada.
     * @returns {ScriptEntity[]} todas entidades que estão na posição fornecida.
     */
    getEntitiesByCoord(x: number, y: number): ScriptEntity[];

    /**
     * @description Retorna uma lista com todas as entidades presentes na mobilia.
     * @param {ScriptFurni} furni - Mobilia a ser consultada.
     * @returns {ScriptEntity[]} uma lista com todas as entidades presentes na mobilia.
     */
    getEntitiesByFurni(furni: ScriptFurni): ScriptEntity[];

    /**
     * @description Retorna uma lista com todas as entidades presentes nas mobilias.
     * @param {ScriptFurni[]} furnis - Mobilias a serem consultadas.
     * @returns uma lista de todas as entidades presentes nas mobilias.
     */
    getEntitiesByFurnis(furnis: ScriptFurni[]): ScriptFurni[];

    /**
     * @description Retorna o piso da posição fornecida.
     * @param {number} x - Posição X do piso.
     * @param {number} y - Posição y do piso.
     * @returns {ScriptTile} o Piso da posição fornecida.
     */
    getTile(x: number, y: number): ScriptTile | null;

    /**
     * @param {number} id - ID da mobilia a ser buscada.
     * @description Retorna a mobilia correspondente ao ID.
     */
    getFurniById(id: number): ScriptFurni | null;

    /**
     * @description Retorna uma lista de mobilias que estão no piso
     * @param {number} x - Posição X do piso.
     * @param {number} y - Posição y do piso.
     * @returns {ScriptFurni[]} uma lista de mobilias que estão no piso
     */
    getFurniByTile(x: number, y: number): ScriptFurni[];

    /**
     * @description Retorna uma lista com todos as mobilias do tipo definido.
     * @param {number} sprite - Código base da mobilia buscada.
     * @returns {ScriptFurni[]} uma lista com todos as mobilias do tipo definido.
     */
    getAllFurnisBySpriteId(sprite: number): ScriptFurni[];

    /**
     * @description Retorna se o floor existe
     * @param {number} x - Posição X do piso.
     * @param {number} y - Posição X do piso.
     * @returns {boolean} se o floor existe
     */
    tileExists(x: number, y: number): Boolean;

    /** 
     * @description Retorna se o usuário tem direitos no quarto.
     * @param {number} id - Id da entidade a ser verificada.
     * @returns {boolean} se o usuário tem direitos no quarto.
    */
    hasRights(id: number): boolean;

    /**
     * @description Dá Direitos ao usuário *ID*.
     * @param {number} id - Id do usuário que receberá Direitos.
     * @returns {void}
     */
    addRights(id: number): void;

    /**
     * @description Retira os Direitos do usuário *ID*.
     * @param {number} id - Id do usuário que perderá Direitos.
     * @returns {void}
     */
    removeRights(id: number): void;

    /** 
     * @description Retorna estado atual do atravessar.
     * @returns {boolean} estado atual do atravessar.
     */
    getWalkThrough(): boolean;

    /**
     * @description Retorna estado atual da diagonal.
     * @returns {boolean} estado atual da diagonal.
     */
    getDiagonal(): boolean;

    /**
     * @description Retorna o atual estado do mute no quarto.
     * @returns {boolean} o atual estado do mute no quarto.
     */
    getRoomMute(): boolean;

    /**
     * @description Define o nome do quarto
     * @param {string} name - Novo nome que será definido ao quarto.
     * @returns {void}
     */
    setName(name: string): void;

    /**
     * @description Desliga/liga a luz do quarto.
     * @param {boolean} activated - Se a luz deve ser desligada ou ligada.
     * @returns {void}
     */
    setMoodLight(activated: boolean): void;

    /**
     * @description Altera a cor e estado da luz do quarto.
     * @param {boolean} activated - Se a luz deve ser desligada ou ligada.
     * @param {string} hex - Cor em hexadecimal que a luz deve ficar.
     * @param {number} intensity - Valor da intensidade que a cor. *(0: Opaco a 255: Transparente)*
     * @param {boolean} wallOnly - Se a luz deve ficar só nas paredes.
     * @returns {void}
     */
    setMoodLight(activated: boolean, hex: string, intensity: number, wallOnly: boolean): void;

    /**
     * @description Altera a cor do plano de fundo do quarto. Formato em HSL.
     * @param {string} hex - Cor em hexadecimal que o plano de fundo deve ficar.
     * @returns {void}
     */
    setBackgroundTonerColor(hex: string): void;

    /**
     * @description Define a velocidade dos Rollers no quarto.
     * @param {number} speed - Velocidade dos rollers.
     * @returns {void}
     */
    setRollerSpeed(speed: number): void;

    /**
     * @description Define a diagonal
     * @param {boolean} allow - Valor que irá definir se será habilitado ou desabilitado.
     * @returns {void}
     */
    setDiagonal(allow: boolean): void;

    /**
     * @description Define o atravessar
     * @param {boolean} allow - Valor que irá definir se será habilitado ou desabilitado.
     * @returns {void}
     */
    setWalkThrough(allow: boolean): void;

    /**
     * @description Define mute do quarto
     * @param {boolean} mute - Valor que irá definir se será mutado ou desmutado.
     * @returns {void}
     */
    setRoomMute(mute: boolean): void;

    /**
     * @description Define uma senha para trancar o quarto.
     * @param {string} password - Senha a ser definida.
     */
    setPassword(password: string): void;

    /**
     * @description Define campanhia.
     * @returns {void} 
     */
    setDoorbell(): void;

    /**
     * @description Envia notificação para todos do quarto
     * @param {string} icon - Código do icone que irá aparecer na notificação
     * @param {string} message - Mensagem que irá aparecer na notificação.
     * @returns {void}
     */
    notification(icon: string, message: string): void;

    /**
     * @description Envia um alerta para todos do quarto
     * @param {string} message - Mensagem que irá aparecer no alerta.
     * @returns {void}
     */
    alert(message: string): void;

    /**
     * @description Abre o quarto
     * @returns {void}  
     */
    open(): void;

    /**
     * @description Envia TTS para todos os usuários
     * @param {string} text - Texto a ser lido pela voz sintetizada
     * @returns {void}
     */
    tts(text: string): void;

    /**
     * @param {string} link - Link do video do Youtube.
     * @returns Reproduz video do Youtube para todos os usuários do quarto.
     */
    youtube(link: string): void;
}

declare class GlobalStorage {
    /**
     * @description Consulta um valor correspondente a chave buscada.
    * @param {string} key - Chave da propriedade a ser buscada.
    * @returns {string | null} Valor correspondente a chave buscada.
    */
    static get(key: string): string | null;

    /** 
     * @description Defini/Atualiza valor correspondente a chave buscada.
    * @param {string} key - Chave da propriedade a definir.
    * @param {string} value - Novo valor a ser definido.
    * @returns {void}
    */
    static set(key: string, value: string): void;

    /**
     * @description Deleta valor correspondente a chave buscada.
    * @param {string} key - Chave da propriedade a ser deletada.
    * @returns {void}
    */
    static delete(key: string): void;
}

declare class Highscores {
    /**
     * @description Adiciona pontos ao Placar
     * @param {string | ScriptEntity} player - Nick ou Usuário que receberá os pontos.
     * @param {number} points - Quantidade de pontos a serem adicionados.
     * @returns {void}
    */
    static add(player: string | ScriptEntity, points: Number): void;

    /**
     * @description Retorna quantos pontos o grupo tem no Placar
     * @param {string | ScriptEntity} user - Nick ou Usuário que serão consultados.
     * @returns {number} Quantidade de pontos que o grupo tem no Placar
    */
    static getScore(user: string | ScriptEntity): number;

    /**
     * @description Retorna todos os pontos que tem no Placar
     * @param {Number} furni - id do placar.
     * @returns {Map<string, Number>} Quantidade de pontos que o grupo tem no Placar.
    */
    static getScoreAll(furni: Number): Map<string, number>;

    /**
     * @description Remove pontos do Placar
     * @param {string | ScriptEntity} player - Nick ou Usuário que perderá os pontos.
     * @param {number} points - Quantidade de pontos a serem removidos.
     * @returns {void}
    */
    static remove(player: string | ScriptEntity, points: Number): void;

    /**
     * @description Adiciona pontos a todo o Grupo no Placar
     * @param {string[] | ScriptEntity[]} player - Nicks ou Usuários que receberam os pontos.
     * @param {number} points - Quantidade de pontos a serem adicionados.
     * @returns {void}
    */
    static addGroup(player: string[] | ScriptEntity[], points: Number): void;

    /**
     * @description Retorna quantos pontos o grupo tem no Placar
     * @param {string[] | ScriptEntity[]} group - Nicks ou Usuários que serão consultados.
     * @returns {number} Quantidade de pontos que o grupo tem no Placar
    */
    static getGroupScore(group: string[] | ScriptEntity[]): number;

    /**
     * @description Remove pontos de todo o Grupo no Placar
     * @param {string | ScriptEntity} player - Nicks ou Usuários que perderam os pontos.
     * @param {number} points - Quantidade de pontos a serem removidos.
     * @returns {void}
    */
    static removeGroup(player: string | ScriptEntity, points: Number): void;

    /**
     * @description Limpa todos os usuários do Placar
     * @param {Number | ScriptFurni} scoreboard - ID ou Furni do Placar.
     * @returns {void}
    */
    static clear(scoreboard: Number | ScriptFurni): void;

    /**
     * @description Limpa todos os usuários do Placar
     * @param {Number | ScriptFurni} scoreboard - ID ou Furni do Placar.
     * @returns {void}
    */
    static reset(scoreboard: Number | ScriptFurni): void;
}

declare class RoomStorage {
    /**
    * @description Retorna os dados salvos no quarto a partir da chave de busca. 
    * @param {string} key - Chave da propriedade a ser buscada.
    * @returns {string | null} Valor correspondente a chave buscada.
    */
    static get(key: string): string;

    /** 
    * @description Define/Atualiza valor correspondente a chave buscada.
    * @param {string} key - Chave da propriedade a definir.
    * @param {string} value - Novo valor a ser definido.
    * @returns {void}
    */
    static set(key: string, value: string): void;

    /** 
    * @description Deleta valor correspondente a chave buscada.
    * @param {string} key - Chave da propriedade a ser deletada.
    * @returns {boolean} - Retorna true caso a chave tenha sido deletada com sucesso.
    */
    static delete(key: string): boolean;
}

declare class Room {
    /**
     * @description Retorna o ID do quarto
     * @returns {number} o ID do quarto
     */
    static getId(): number;

    /**
     * @description Retorna o nome atual do quarto.
     * @returns {number} o nome atual do quarto.
     */
    static getName(): string;

    /**
     * @description Retorna o nome do dono do quarto
     * @returns {number} o nome do dono do quarto
     */
    static getOwnerUsername(): string;

    /**
     * @description Retorna o ID do dono do quarto
     * @returns {number} o ID do dono do quarto
     */
    static ownerId(): number;

    /**
     * @description Retorna o nome do grupo do quarto
     * @returns {number} a quantidade de usuários do quarto
     */
    static userCount(): number;

    /**
     * @description Retorna o usuário correspondente ao ID.
     * @param {number} id - ID do usuário buscado.
     * @returns {ScriptEntity | null;} o usuário correspondente ao ID.
     */
    static getPlayerById(id: number): ScriptEntity | null;

    /**
     * @description Retorna o usuário correspondente ao Nome.
     * @param {string} name - Nome do usuário buscado.
     * @returns {ScriptEntity | null;} o usuário correspondente ao Nome.
     */
    static getPlayerByName(name: string): ScriptEntity | null;

    /**
     * @description Retorna o bot correspondente ao Nome.
     * @param {string} name - Nome do Bot a ser buscado.
     * @returns {ScriptEntity | null;} o bot correspondente ao nome.
     */
    static getBotByName(name: string): ScriptEntity | null;

    /**
     * @description Retorna uma lista com todos os usuários do quarto..
     * @returns {ScriptEntity[]} uma lista com todos os usuários do quarto.
     */
    static getAllPlayers(): ScriptEntity[];

    /**
     * @description Retorna uma lista com todos as entidades na posição fornecida.
     * @param {number} x - Posição X buscada.
     * @param {number} y - Posição Y buscada.
     * @returns {ScriptEntity[]} todas entidades que estão na posição fornecida.
     */
    static getEntitiesByCoord(x: number, y: number): ScriptEntity[];

    /**
     * @description Retorna uma lista com todas as entidades presentes na mobilia.
     * @param {ScriptFurni} furni - Mobilia a ser consultada.
     * @returns {ScriptEntity[]} uma lista com todas as entidades presentes na mobilia.
     */
    static getEntitiesByFurni(furni: ScriptFurni): ScriptEntity[];

    /**
     * @description Retorna uma lista com todas as entidades presentes nas mobilias.
     * @param {ScriptFurni[]} furnis - Mobilias a serem consultadas.
     * @returns uma lista de todas as entidades presentes nas mobilias.
     */
    static getEntitiesByFurnis(furnis: ScriptFurni[]): ScriptFurni[];

    /**
     * @description Retorna o piso da posição fornecida.
     * @param {number} x - Posição X do piso.
     * @param {number} y - Posição y do piso.
     * @returns {ScriptTile} o Piso da posição fornecida.
     */
    static getTile(x: number, y: number): ScriptTile | null;

    /**
     * @param {number} id - ID da mobilia a ser buscada.
     * @description Retorna a mobilia correspondente ao ID.
     */
    static getFurniById(id: number): ScriptFurni | null;

    /**
     * @description Retorna uma lista de mobilias que estão no piso
     * @param {number} x - Posição X do piso.
     * @param {number} y - Posição y do piso.
     * @returns {ScriptFurni[]} uma lista de mobilias que estão no piso
     */
    static getFurniByTile(x: number, y: number): ScriptFurni[];

    /**
     * @description Retorna uma lista com todos as mobilias do tipo definido.
     * @param {number} sprite - Código base da mobilia buscada.
     * @returns {ScriptFurni[]} uma lista com todos as mobilias do tipo definido.
     */
    static getAllFurnisBySpriteId(sprite: number): ScriptFurni[];

    /**
     * @description Retorna uma lista com todos os itens do quarto.
     * @returns {ScriptFurni[]} uma lista com todos os itens do quarto.
     */
    static getAllFurnis(): ScriptFurni[];

    /**
     * @description Retorna se o floor existe
     * @param {number} x - Posição X do piso.
     * @param {number} y - Posição X do piso.
     * @returns {boolean} se o floor existe
     */
    static tileExists(x: number, y: number): Boolean;

    /** 
     * @description Retorna se o usuário tem direitos no quarto.
     * @param {number} id - Id da entidade a ser verificada.
     * @returns {boolean} se o usuário tem direitos no quarto.
    */
    static hasRights(id: number): boolean;

    /**
     * @description Dá Direitos ao usuário *ID*.
     * @param {number} id - Id do usuário que receberá Direitos.
     * @returns {void}
     */
    static addRights(id: number): void;

    /**
     * @description Retira os Direitos do usuário *ID*.
     * @param {number} id - Id do usuário que perderá Direitos.
     * @returns {void}
     */
    static removeRights(id: number): void;

    /** 
     * @description Retorna estado atual do atravessar.
     * @returns {boolean} estado atual do atravessar.
     */
    static getWalkThrough(): boolean;

    /**
     * @description Retorna estado atual da diagonal.
     * @returns {boolean} estado atual da diagonal.
     */
    static getDiagonal(): boolean;

    /**
     * @description Retorna o atual estado do mute no quarto.
     * @returns {boolean} o atual estado do mute no quarto.
     */
    static getRoomMute(): boolean;

    /**
     * @description Define o nome do quarto
     * @param {string} name - Novo nome que será definido ao quarto.
     * @returns {void}
     */
    static setName(name: string): void;

    /**
     * @description Desliga/liga a luz do quarto.
     * @param {boolean} activated - Se a luz deve ser desligada ou ligada.
     * @returns {void}
     */
    static setMoodLight(activated: boolean): void;

    /**
     * @description Altera a cor e estado da luz do quarto.
     * @param {boolean} activated - Se a luz deve ser desligada ou ligada.
     * @param {string} hex - Cor em hexadecimal que a luz deve ficar.
     * @param {number} intensity - Valor da intensidade que a cor. *(0: Opaco a 255: Transparente)*
     * @param {boolean} wallOnly - Se a luz deve ficar só nas paredes.
     * @returns {void}
     */
    static setMoodLight(activated: boolean, hex: string, intensity: number, wallOnly: boolean): void;

    /**
     * @description Altera a cor do plano de fundo do quarto. Formato em HSL.
     * @param {string} hex - Cor em hexadecimal que o plano de fundo deve ficar.
     * @returns {void}
     */
    static setBackgroundTonerColor(hex: string): void;

    /**
     * @description Define a velocidade dos Rollers no quarto.
     * @param {number} speed - Velocidade dos rollers.
     * @returns {void}
     */
    static setRollerSpeed(speed: number): void;

    /**
     * @description Define a diagonal
     * @param {boolean} allow - Valor que irá definir se será habilitado ou desabilitado.
     * @returns {void}
     */
    static setDiagonal(allow: boolean): void;

    /**
     * @description Define o atravessar
     * @param {boolean} allow - Valor que irá definir se será habilitado ou desabilitado.
     * @returns {void}
     */
    static setWalkThrough(allow: boolean): void;

    /**
     * @description Define mute do quarto
     * @param {boolean} mute - Valor que irá definir se será mutado ou desmutado.
     * @returns {void}
     */
    static setRoomMute(mute: boolean): void;

    /**
     * @description Define uma senha para trancar o quarto.
     * @param {string} password - Senha a ser definida.
     */
    static setPassword(password: string): void;

    /**
     * @description Define campanhia.
     * @returns {void} 
     */
    static setDoorbell(): void;

    /**
     * @description Envia notificação para todos do quarto
     * @param {string} icon - Código do icone que irá aparecer na notificação
     * @param {string} message - Mensagem que irá aparecer na notificação.
     * @returns {void}
     */
    static notification(icon: string, message: string): void;

    /**
     * @description Envia um alerta para todos do quarto
     * @param {string} message - Mensagem que irá aparecer no alerta.
     * @returns {void}
     */
    static alert(message: string): void;

    /**
     * @description Abre o quarto
     * @returns {void}  
     */
    static open(): void;

    /**
     * @description Envia TTS para todos os usuários
     * @param {string} text - Texto a ser lido pela voz sintetizada
     * @returns {void}
     */
    static tts(text: string): void;

    /**
     * @param {string} link - Link do video do Youtube.
     * @returns Reproduz video do Youtube para todos os usuários do quarto.
     */
    static youtube(link: string): void;

    /**
     * @description Retorna se o quarto tem os wireds desabilitados.
     * @returns {boolean} se o quarto tem os wireds desabilitados.
     */
    static isDisableWired(): boolean;

    /**
     * @description Retorna se o quarto está blqueado de interações.
     * @returns {boolean} se o quarto está blqueado de interações.
     */
    static isBlockedRoom(): boolean;
}

declare class Faker {
    /**
     * @description Cria um FakeItem, uma mobilia similar a original
     *  @param {number} baseId - ID da sprite da mobilia original
     *  @param {number} x - Posição X que será gerado
     *  @param {number} y - Posição Y que será gerado
     *  @param {number} z - Posição Z que será gerado
     *  @param {number} r - Rotação que será gerado
     * 
     * @example
     * // Exemplo de uso:
     * Events.on('load', () => {
     *  const faker = Faker.createFakeItem(1, 0, 0, 0, 0); // Cria um item falso na posição 0, 0, 0, 0
     * });
     *  @returns {FakeFloorItem} Retorna o item criado
     */
    static createFakeItem(baseId: number, x: number, y: number, z: number, r: number): FakeFloorItem;

    /**
     * @description Cria entidade similar a um player real
     * @param {string} name - Nome para o FakePlayer
     * @param {number} x - Posição X que ele irá ser criado
     * @param {number} y - Posição Y que ele irá ser criado
     * @param {number} z - Posição Z que ele irá ser criado
     * @param {number} r - Rotação que ele irá ser criado
     * 
     * @example
     * // Exemplo de uso:
     * Events.on('load', () => {
     *  const faker = Faker.createFakePlayer('Senhoreu', 0, 0, 0, 0); // Cria um player falso na posição 0, 0, 0, 0
     * });
     * @returns {FakeEntity} Retorna o player criado
     */
    static createFakePlayer(name: string, x: number, y: number, z: number, r: number): FakeEntity;

    /**
     * @description Cria entidade similar a um player real
     * @param {string} name - Nome para o FakePlayer
     * @param {string} motto - Missão para o FakePlayer
     * @param {string} figure - Figura para o FakePlayer
     * @param {string} gender - Gênero para o FakePlayer
     * @param {number} credits - Créditos para o FakePlayer
     * @param {number} diamonds - Diamantes para o FakePlayer
     * @param {number} duckets - Duckets para o FakePlayer
     * @param {number} x - Posição X que ele irá ser criado
     * @param {number} y - Posição Y que ele irá ser criado
     * @param {number} z - Posição Z que ele irá ser criado
     * @param {number} r - Rotação que ele irá ser criado
     * 
     * @example
     * // Exemplo de uso:
     * Events.on('load', () => {
     *  const faker = Faker.createFakePlayer('Senhoreu', 'Sou um FakePlayer', 'hd-180-1.ch-255-92.lg-285-82.sh-295-62', 'M', '1000', '1000', '1000', 0, 0, 0, 0); // Cria um player falso na posição 0, 0, 0, 0
     * });
     * @returns {FakeEntity} Retorna o player criado
     */
    static createFakePlayer(name: string, motto: string, figure: string, gender: string, credits: number, diamonds: number, duckets: number, x: number, y: number, z: number, r: number): FakeEntity;

    /**
     * @description Cria uma entidade similar a um bot real
     * @param {string} name - Nome para o FakeBot
     * @param {number} x - Posição X que ele irá ser criado
     * @param {number} y - Posição Y que ele irá ser criado
     * @param {number} z - Posição Z que ele irá ser criado
     * @param {number} r - Rotação que ele irá ser criado
     * 
     * @example
     * // Exemplo de uso:
     * Events.on('load', () => {
     *  const faker = Faker.createFakeBot('Senhoreu', 0, 0, 0, 0); // Cria um bot falso na posição 0, 0, 0, 0
     * });
     * @returns {FakeEntity} Retorna o bot criado
     */
    static createFakeBot(name: string, x: number, y: number, z: number, r: number): FakeEntity;

    /**
     * @description Cria uma entidade similar a um bot real
     * @param {string} name - Nome para o FakeBot
     * @param {number} x - Posição X que ele irá ser criado
     * @param {number} y - Posição Y que ele irá ser criado
     * @param {number} z - Posição Z que ele irá ser criado
     * @param {number} r - Rotação que ele irá ser criado
     * 
     * @example
     * // Exemplo de uso:
     * Events.on('load', () => {
     *  const faker = Faker.createFakeBot('Senhoreu', 0, 0, 0, 0); // Cria um bot falso na posição 0, 0, 0, 0
     * });
     * @returns {FakeEntity} Retorna o bot criado
     */
    static createFakeBot(name: string, motto: string, figure: string, gender: string, x: number, y: number, z: number, r: number): FakeEntity;

    /**
     * @description Um array com todos os itens falsos criados
     * 
     * @example
     * // Exemplo de uso:
     * Commands.register('furnis', true, (user, message) => {
     *  const fakeFurnis = Faker.getLoadedFurnis(); // Retorna um array com todos os itens criados
     *  Debug.log(fakeFurnis); // Exibe no log todos os itens criados
     * });
     * @returns {FakeFloorItem[]} Retorna a lista com todos os itens criados
     */
    static getLoadedFurnis(): FakeFloorItem[];

    /**
     * @description Remove item determinado
     * @param {FakeFloorItem} fakeItem - Item a ser removido
     * 
     * @example
     * // Exemplo de uso:
     * 
     * let faker = null;
     * Events.on('load', () => {
     *  faker = Faker.createFakeItem(1, 0, 0, 0, 0); // Cria um item falso na posição 0, 0, 0, 0
     * });
     * 
     * Commands.register('remove', true, (user, message) => {
     *  if (!faker) returns; // Se o item não existir, não faça nada
     * 
     *  Faker.removeFakeFloorItem(faker); // Remove o item criado
     *  faker = null; // Limpa a variável
     * });
     * @returns {void}
     */
    static removeFakeFloorItem(fakeItem: FakeFloorItem): void;

    /**
     * @description Remove uma entidade Fake
     * @param {FakeEntity} fakeEntity - Entidade Fake a ser removida do quarto
     * 
     * @example
     * // Exemplo de uso:
     * let faker = null;
     * Events.on('load', () => {
     *  faker = Faker.createFakePlayer('Senhoreu', 0, 0, 0, 0); // Cria um player falso na posição 0, 0, 0, 0
     * });
     * 
     * Commands.register('remove', true, (user, message) => {
     *  if (!faker) returns; // Se a entidade não existir, não faça nada
     * 
     *  Faker.removeEntity(faker); // Remove a entidade criado
     *  faker = null; // Limpa a variável
     * });
     * @returns {void}
     */
    static removeEntity(fakeEntity: FakeEntity): void;

    /**
     * @description Remove todos os itens falsos
     * 
     * @example
     * // Exemplo de uso:
     * Commands.register('removeall', true, (user, message) => {
     *  Faker.removeAllFloorItems(); // Remove todos os itens falsos
     * });
     * @returns {void}
     */
    static removeAllFloorItems(): void;

    /**
     * @description Remove todas as entidades criadas
     * 
     * @example
     * // Exemplo de uso:
     * Commands.register('removeall', true, (user, message) => {
     *  Faker.removeAllEntities(); // Remove todas as entidades criadas
     * });
     * @returns {void}
     */
    static removeAllEntities(): void;

}

declare class Debug {
    /**
     * @description Envia mensagem de debug para todos os usuários do quarto.
     * @param {any} object Conteúdo
     */
    static d(object: any): void;

    /** 
     * @description Envia mensagem de debug para todos os usuários do quarto.
     * @param {any} object Conteúdo
    */
    static debug(object: any): void;

    /**
     * @description Registra uma mensagem no log do quarto. (*:script log*)
     * @param {any} object Conteúdo
    */
    static log(object: any): void;

    /**
     * @description Registra uma mensagem no log do quarto. (*:script log*)
     * @param {any} object Conteúdo
     */
    static e(object: any): void;

    /**
     * @description Limpa o registro de mensagens no log do quarto. (*:script log*)
     * @returns {void}
     */
    static clearLog(): void;
}

declare class Webhook {
    /**
     * @description Cria um novo Webhook direcionado ao link.
     * @param {string} linkWebhook - Link do Webhook a receber informações.
     * 
     * @example
     * // Exemplo de uso:
     * const webhook = new Webhook('https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvxwyz');
     * @returns {WebhookMessage}
    */
    static sendTo(linkWebhook: string): WebhookMessage;
}

declare class Delay {
    /**
     * @param {Function} callback - Função executada após o tempo determinado ter passado.
     * @param {number} ticks - Quantidade de ticks a aguardar até a execução da função 
     * @example
     * // Exemplo de uso:
     * Delay.wait(() => {
     *  //Executado após 1 segundo de espera.
     * }, 2)
     * @returns {DelayTask} Retorna o delayScript criado.
    */
    static wait(callback: Function, ticks: number): DelayTask;

    /**
     * Executa uma função no intervalo de tempo.
     * @example
     * Delay.interval(() => {
     *  //Executado a cada 1 segundo.
     * }, 2)
     * @param {Function} callback - Função executada sempre que o tempo determinado ter passado.
     * @param {number} ticks - Quantidade de ticks a aguardar até a execução da função
    */
    static interval(callback: Function, ticks: number): DelayTask;

    /**
     * Executa uma função no intervalo de tempo.
     * @example
     * Delay.shortWait(() => {
     *  //Executado a cada 50 milisegundos.
     * }, 1)
     * @param {Function} callback - Função executada sempre que o tempo determinado ter passado.
     * @param {number} ticks - Quantidade de mili ticks a aguardar até a execução da função.
    */
    static shortWait(callback: Function, milliseconds: number): DelayTask;

    /**
     * Executa uma função no intervalo de tempo.
     * @example
     * Delay.shortInterval(() => {
     *  //Executado a cada 50 milisegundos.
     * }, 1)
     * @param {Function} callback - Função executada sempre que o tempo determinado ter passado.
     * @param {number} ticks - Quantidade de mili ticks a aguardar até a execução da função.
    */
    static shortInterval(callback: Function, milliseconds: number): DelayTask;

    /**
     * Cancela o delayScript que for passado.
     * @example 
     * const delay = Delay.wait(() => {
     *      Debug.log('Teste')
     * }, 10)
     *
     * Delay.cancel(delay)
     * //Função não executará, pois o delay foi interrompido antes do tempo a ser aguardado.
     * @param {DelayTask} task - Wait/Delay a ser interrompido.
     * @returns {void}
    */
    static cancel(task: DelayTask): void;

    /**
     * @description Cancela todos os delays criados
     * @example
     * Delay.wait(() => {}, 100);
     * Delay.interval(() => {}, 1);
     * 
     * Delay.cancelAll(); // cancela os dois delays criados.
     * @returns {void}
     */
    static cancelAll(): void;

    /**
     * Converte segundos em uma quantia de ticks correspondente.
     * @example
     * Delay.wait(() => {
     *      //Executado após 10 segundos.
     * }, Delay.seconds(10))
     * @static 
     * @param {number} sec - Quantidade de segundos a serem convertidos em ticks.
    */
    static seconds(sec: number): number;
}

declare class Wired {
    /**
     * @description Recebe eventos dos wired de efeito que possuem o eventName.
     * @param eventName - Nome do evento que está no Efeito.
     * @param {WiredCallback} callback - Callback executado ao comando ser utilizado. Caso seja ativado por um usuário, callback recebe o usuário como parametro.
     * @example
     * // Exemplo de uso:
     * Wired.on('eventName', (user) => {
     *  Debug.log('Evento recebido do wired');
     * });
     * @returns {void}
    */
    static on(eventName: string, callback: WiredCallback): void;

    /**
     * @description Começa o evento da cota.
     * @param {string} eventName - Nome do evento que vai ser chamado quando o quarto estiver pronto para iniciar o evento.
     * @param {() => void} callback - Callback executado ao comando ser utilizado.
     * @example
     * // Exemplo de uso:
     * Wired.on('startEvent', () => {
     * Debug.log('Evento da cota iniciado');
     * });
     */
    static on(eventName: 'startEvent', callback: () => void): void;

    /**
     * @description Ativa um wired ativador.
     * @param {string} wiredName - codigo do wired.
     * @param {ScriptEntity} entity - Entidade que ativou o wired.
     * @param {ScriptFurni} furni - Mobilia que ativou o wired.
     * @param {ScriptEntity[]} entities - Entidades do seletor.
     * @param {ScriptFurni[]} furnis - Mobilias do seletor.
     * 
     * @example
     * // Exemplo de uso:
     * Wired.trigger('wiredName', entity, furni, entities, furnis);
     * // entity opcional, furni opcional, entities opcional, furnis opcional
     * @returns {void}
     */
    static trigger(wiredName: string, entity: ScriptEntity, furni: ScriptFurni, entities: ScriptEntity[], furnis: ScriptFurni[]): void;

    /**
     * @description Ativa um wired ativador.
     * @param {string} wiredName - codigo do wired.
     * 
     * @example
     * // Exemplo de uso:
     * Wired.trigger('wiredName');
     * @returns {void}
     */
    static trigger(wiredName: string): void;

    /**
     * @description Ativa um wired ativador.
     * @param {string} wiredName - codigo do wired.
     * @param {ScriptEntity} entity - Entidade que ativou o wired.
     * 
     * @example
     * // Exemplo de uso:
     * Wired.trigger('wiredName', entity);
     * @returns {void}
     */
    static trigger(wiredName: string, entity: ScriptEntity): void;

    /**
     * @description Ativa um wired ativador.
     * @param {string} wiredName - codigo do wired.
     * @param {ScriptEntity} entity - Entidade que ativou o wired.
     * @param {ScriptFurni} furni - Mobilia que ativou o wired.
     * 
     * @example
     * // Exemplo de uso:
     * Wired.trigger('wiredName', entity, furni);
     * @returns {void}
     */
    static trigger(wiredName: string, entity: ScriptEntity, furni: ScriptFurni): void;

    /**
     * @description Define o valor de um disquete.
     * @param {string} disqueteName - Nome do disquete.
     * @param {number} value - Valor a ser definido.
     * 
     * @example
     * // Exemplo de uso:
     * Wired.setMemoryValue('memoria', 1); // Define o valor do disquete 'memoria' para 1
     * @returns {void}
     */
    static setMemoryValue(disqueteName: string, value: number): void;

    /**
 * @description Define o valor de um disquete.
 * @param {string} disqueteName - Nome do disquete.
 * @param {string} value - Valor a ser definido.
 * 
 * @example
 * // Exemplo de uso:
 * Wired.setMemoryValue('memoria', 'a'); // Define o valor do disquete 'memoria' para 'a'
 * @returns {void}
 */
    static setMemoryValue(disqueteName: string, value: string): void;

    /**
     * @description Retorna o valor da memoria em formato number.
     * @param {string} disqueteName - Nome do disquete.
     * @returns {number}
     */
    static getMemoryValueDouble(disqueteName: string): number;

    /**
     * @description Retorna o valor da memoria em formato string.
     * @param disqueteName - Nome do disquete.
     * @returns {string}
     */
    static getMemoryValue(disqueteName: string): string;

    /**
     * @description Ínicia o próximo evento da cota.
     * @returns {void}
     */
    static nextEvent(): void;
}

declare class Utils {
    static allRotations(x1: number, y1: number, distance: number): ScriptPosition[];

    static calculatePosition(x1: number, y1: number, rotation: number, reverse: number, distance: number): ScriptPosition;

    static calculateRotation(x1: number, y1: number, x2: number, y2: number, reverse: number): number;

    static chebyshevDistance(x1: number, y1: number, x2: number, y2: number): number;

    static isDiagonal(rotation: number): boolean;

    static positionBehind(x1: number, y1: number, rotation: number, distance: number): ScriptPosition;

    static positionInFront(x1: number, y1: number, rotation: number, distance: number): ScriptPosition;

    static safeStr(text: string): string;
}
