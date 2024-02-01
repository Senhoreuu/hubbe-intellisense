// --------------------------- Instances --------------------------- //

type Genders = "M" | "F";
type EntitiesType = "PLAYER" | "BOT" | "PET";
type DancesID = 0 | 1 | 2 | 3 | 4;
type ActionID = 1 | 2 | 3;
type relationships = 1 | 2 | 3 | 4;
type WiredCallback = (entity?: ScriptEntity, furni?: ScriptFurni, entities?: ScriptEntity[], furnis?: ScriptFurni[]) => void;
type BubblesID = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43;

interface IScriptReachable {
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
}

interface ScriptTile {
    /**
     * @description Retorna posição X do piso.
     * @returns {Number} Posição X do piso.
     */
    getX(): Number;

    /**
     * @description Retorna posição Y do piso.
     * @returns {Number} Posição Y do piso.
     */
    getY(): Number;

    /**
     * @description Retorna posição Z do piso.
     * @returns {Number} Posição Z do piso.
     */
    getZ(): Number;

    /**
     * @description Retorna todos os furnis que estão no piso.
     * @returns {ScriptFurni[]} Lista de furnis que estão no piso.
     */
    getFurnis(): ScriptFurni[];

    /**
     * @description Retorna todas entidades que estão no piso.
     * @returns {ScriptEntity[]} Lista de entidades que estão no piso.
     */
    getEntities(): ScriptEntity[];

    /**
     * @description Retorna o Furni que está mais alto no piso.
     * @returns {ScriptFurni} Furni mais alto no piso.
     */
    getTopFurni(): ScriptFurni[];

    /**
     * @description Retorna a altura andável no piso.
     * @returns {Number} Altura andável no piso.
     */
    getWalkHeight(): Number;

    /**
     * @description Retorna se a um furni com interação de porta no piso.
     * @returns {Boolean} Se tem um furni com interação de porta no piso.
     */
    hasGate(): Boolean;

    /**
     * @description Retorna se tem algum furni no piso.
     * @returns {Boolean} Se tem algum furni no piso.
     */
    hasFurni(): Boolean;

    /**
     * @description Retorna se tem entidades no piso.
     * @returns {Boolean} Se tem entidades no piso.
     */
    hasEntities(): Boolean;

    /**
     * @description Retorna se o piso pode ser empilhável.
     * @returns {Boolean} Se o piso pode ser empilhável.
     */
    canStack(): Boolean;

    /**
     * @description Retorna se pode criar/posicionar furnis no piso.
     * @returns {Boolean} Se pode criar/posicionar furnis no piso.
     */
    canPlaceItem(): Boolean;
}

interface ScriptAchievementProgress {
    /**
     * @description Retorna o progresso da conquista
     * @returns {number} O progresso da conquista
     */
    getProgress(): number;

    /**
     * @description Retorna o nível da conquista do usuário
     * @returns {number} O nível da conquista do usuário
     */
    getLevel(): number;
}

interface ScriptPlayerData {
    /**
     * @description Retorna o ID do player.
     * @return {number} O ID do player.
     */
    getId(): number;

    /**
     * @description Retorna o nome do player.
     * @return {string} O nome do player.
     */
    getUsername(): string;

    /**
     * @description Retorna o total de pontos de conquista do player.
     * @return {number} O total de pontos de conquista do player.
     */
    getAchievementPoints(): number;

    /**
     * @description Retorna o gênero do player.
     * @return {Genders} O gênero do player.
     */
    getGender(): Genders;

    /**
     * @description Retorna o visual do player.
     * @return {string} O visual do player.
     */
    getFigure(): string;

    /**
     * @description Retorna a missão do player.
     * @return {string} O missão do player.
     */
    getMotto(): string;

    /**
     * @description Retorna o rank do player.
     * @return {number} O rank do player.
     */
    getRank(): number;

    /**
     * @description Retorna o total de diamantes do player.
     * @return {number} O total de diamantes do player.
     */
    getDiamonds(): number;

    /**
     * @description Retorna o total de duckets do player.
     * @return {number} O total de duckets do player.
     */
    getDuckets(): number;

    /**
     * @description Retorna o total de moedas do player.
     * @return {number} O total de moedas do player.
     */
    getCredits(): number;

    /**
     * @description Retorna o grupo favoritado do player.
     * @return {number} O grupo favoritado do player.
     */
    getFavouriteGroup(): number;

    /**
     * @description Retorna o timestamp de registro do player.
     * @return {number} O timestamp de registro do player.
     */
    getRegTimestamp(): number;

    /**
     * @description Retorna o timestamp da última vez que o player fez login no hotel.
     * @return {number} O timestamp da última vez que o player fez login no hotel.
     */
    getLastOnlineTimestamp(): number;
}

interface FakeFloorItem {
    /**
     * @description Retorna o ID do FakeFurni
     * @returns {number} O ID do FakeFurni
     */
    getId(): number;

    /**
     * @description Retorna a posição X atual do FakeFurni.
     * @returns {number} A posição X atual do FakeFurni.
     */
    getX(): number;

    /**
     * @description Retorna a posição Y atual do FakeFurni.
     * @returns {number} A posição Y atual do FakeFurni.
     */
    getY(): number;

    /**
     * @description Retorna a posição Z (altura) atual do Furni.
     * @returns {number} A posição Z (altura) atual do Furni.
     */
    getZ(): number;

    /**
     * @description Retorna o atual estado do FakeFurni
     * @returns {string} O atual estado do FakeFurni
     */
    getCurrentState(): string;

    /**
     * @description Retorna altura empilhável do FakeFurni.
     * @returns {number} Altura empilhável do FakeFurni.
     */
    getStackHeight(): number;

    /**
     * @description Altera o estado do FakeFurni.
     * @param {string} state - Valor do estado em que o furni será definido.
     * @returns {void}
     */
    setState(state: string): void;

    /**
     * @description Define altura empilhável do FakeFurni.
     * @param {number} height - Altura empilhável que será definida no FakeFurni.
     * @returns {void}
     */
    setStackHeight(height: number): void;

    /**
     * @description Move o FakeFurni para posição fornecida.
     * @param {number} x - Posição X para onde o FakeFurni será movido.
     * @param {number} y - Posição Y para onde o FakeFurni será movido.
     * @param {number} z - Posição Z para onde o FakeFurni será movido.
     * @param {number} r - Rotação definida ao FakeFurni ao ser movido.
     * @param {boolean} force - Se o FakeFurni deve ser movido mesmo que o caminho esteja bloqueado.
     */
    move(x: number, y: number, z: number, r: number, force: boolean): void;
}

interface ScriptEntity {
    /**
     * @description Retorna o Balão de fala atual da entidade.
     * @returns {BubblesID} O Balão de fala atual da entidade.
     */
    getBubbleId(): BubblesID;

    /**
     * @description Retorna o ID da entidade.
     * @returns {number} O ID da entidade.
     */
    getId(): number;

    /**
     * @description Retorna o ID do jogador.
     * @returns {number} O ID do jogador.
     */
    getPlayerId(): number;

    /**
     * @description Retorna o nome da Entidade atual.
     * @returns {string} O nome da Entidade atual.
     */
    getUsername(): string;

    /**
     * @description Retorna a posição X atual da entidade.
     * @returns {number} A posição X atual da entidade.
     */
    getX(): number;

    /**
     * @description Retorna a posição Y atual da entidade.
     * @returns {number} A posição Y atual da entidade.
     */
    getY(): number;

    /**
     * @description Retorna a atual posição Z da entidade.
     * @returns {number} A atual posição Z da entidade.
     */
    getZ(): number;

    /**
     * @description Retorna a atual rotação da entidade.
     * @returns {number} A atual rotação da entidade.
     */
    getR(): number;

    /**
     * @description Retorna o tipo da entidade.
     * @returns {EntitiesType} O tipo da entidade.
     */
    getType(): EntitiesType;

    /**
     * @description Retorna o rank da entidade.
     * @returns {number} O rank da entidade.
     */
    getRank(): number;

    /**
     * @description Retorna a missão da entidade.
     * @returns {string} A missão da entidade.
     */
    getMotto(): string;

    /**
     * @description Retorna o genero da entidade
     * @returns {Genders} O genero da entidade
     */
    getGender(): Genders;

    /**
     * @description Retorna o código do atual visual da entidade.
     * *Não aplicável a Pets*
     * @returns {string} O código do atual visual da entidade.
     */
    getFigure(): string;

    /**
     * @description Retorna o código do efeito atual da entidade.
     * @returns {number} O código do efeito atual da entidade.
     */
    getEffect(): number;

    /**
     * @description Retorna o código do atual item de mão que a entidade está segurando.
     * @returns {number} O código do atual item de mão que a entidade está segurando.
     */
    getHandItem(): number;

    /**
     * @description Retorna a atual dança da entidade.
     * @returns {DancesID} A atual dança da entidade.
     */
    getDance(): DancesID;

    /**
     * @description Retorna objeto com status atual da conquista
     * @param {string} achievement - Código da conquista
     * @return {ScriptAchievementProgress} Objeto com status atual da conquista
     */
    getAchievementProgress(achievement: string): ScriptAchievementProgress;

    /**
     * @description Retorna a quantidade de *Diamantes* da entidade.
     * @returns {number} A quantidade de *Diamantes* da entidade.
     */
    getDiamonds(): number;

    /**
     * @description Retorna a quantidade de *Duckets* da entidade.
     * @returns {number} A quantidade de *Duckets* da entidade.
     */
    getDuckets(): number;

    /**
     * @description Retorna a quantidade de *Moedas* da entidade.
     * @returns {number} A quantidade de *Moedas* da entidade.
    */
    getCredits(): number;

    /**
     * @description Retorna o total de *Ponto de Conquista* da entidade. 
     * @returns {number} O total de *Ponto de Conquista* da entidade.
     */
    getAchievementPoints(): number;

    /**
     * @description Retorna o ID do quarto atual da entidade.
     * @returns {number} O ID do quarto atual da entidade.
     */
    getRoomId(): number;

    /**
     * @description Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param {IScriptReachable} object - Posição a ser comparada.
     * @returns {number} A distancia atual entre esta entidade e a posição fornecida.
     */
    distanceTo(object: IScriptReachable): number;

    /**
     * @description Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param {number} x - Posição X a ser comparada.
     * @param {number} y - Posição Y a ser comparada.
     * @param {number} z - Posição Z a ser comparada.
     * @returns {number} A distancia atual entre esta entidade e a posição fornecida.
     */
    distanceTo(x: number, y: number, z: number): number;

    /**
     * @description Retorna se a entidade é um usuário.
     * @returns {boolean} Se a entidade é um usuário.
     */
    isPlayer(): boolean;

    /**
     * @description Retorna se entidade é um Bot.
     * @returns {boolean} Se entidade é um Bot.
     */
    isBot(): boolean;

    /**
     * @description Retorna se a entidade é um Pet.
     * @returns {boolean} Se a entidade é um Pet.
     */
    isPet(): boolean;

    /**
     * @description Retorna se a entidade está ausente.
     * @returns {boolean} Se a entidade está ausente.
     */
    isIdle(): boolean;

    /**
     * @description Retorna se esta entidade é igual a entidade fornecida.
     * @param {ScriptEntity | null;} entity - Entidade que será comparada.
     * @returns {boolean} Se esta entidade é igual a entidade fornecida.
     */
    equals(entity: ScriptEntity): boolean;

    /**
     * @description Retorna se esta entidade está sobre a mobilia fornecida.
     * @param {IScriptReachable} furni
     * @returns {boolean} Se esta entidade está sobre a mobilia fornecida.
     */
    in(furni: IScriptReachable): boolean;

    /**
     * @description Retorna se a entidade está em alguma das mobilias fornecidas.
     * @param {IScriptReachable[]} furnis - Lista de mobilias a serem comparadas.
     * @returns {boolean} Se a entidade está em alguma das mobilias fornecidas.
     */
    inAny(furnis: IScriptReachable[]): boolean;

    /**
     * @description Retorna se a entidade pode se mover.
     * @returns {boolean} Se a entidade pode se mover.
     */
    canWalk(): boolean;

    /**
     * @description Retorna se a entidade está se movendo.
     * @returns {boolean} Se a entidade está se movendo.
     */
    isWalking(): boolean;

    /**
     * @description Retorna se a entidade possui o emblema no inventário do usuário.
     * *Emblema não precisa estar equipado como favorito.*
     * @param {string} badge - Código do emblema a ser verificado.
     * @returns {boolean} Se a entidade possui o emblema no inventário do usuário.
    */
    hasBadge(badge: string): boolean;

    /**
     * @description Retorna se entidade possui o rank fornecido ou um maior.
     * @param {number} rank - Valor do rank a ser comparado.
     * @returns {boolean} Se entidade possui o rank fornecido ou um maior.
     */
    hasRank(rank: number): boolean;

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
     * @param {IScriptReachable} object
     * @returns {boolean} Se entidade está próxima (tocando) a posição fornecida pelo objeto.
     */
    touching(object: IScriptReachable): boolean;

    /**
     * @description Retorna se entidade possui o item fornecido no inventário.
     * @param {number} spriteId - Código do item a ser verificado.
     * @returns {boolean} Se entidade possui o item fornecido no inventário.
     */
    hasItemBySpriteId(spriteId: number): boolean;

    /**
     * @description Retorna se entidade possui a quantidade do item fornecido no inventário.
     * @param {number} spriteId - Código do item a ser verificado.
     * @param {number} quantity - Quantidade do item a ser verificado.
     * @returns {boolean} Se entidade possui a quantidade do item fornecido no inventário.
     */
    hasItemBySpriteId(spriteId: number, quantity: number): boolean;

    /**
     * @description Adiciona pontos a uma conquista do usuário.
     * @param {string} code - Código da conquista.
     * @param {number} levels - Quantidade de pontos
     * @returns {void}
     */
    progressAchievement(code: string, levels: number): void;

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
     * @returns {void}
     */
    setCanWalk(can: boolean): void;

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
     * @param {number} spriteId - Código do item.
     * @returns {void}
     */
    removeItemBySpriteId(spriteId: number): void;

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
     * @param {number} bubbleId - Balão da mensagem
     * @returns {void}
     */
    say(message: string, shout: boolean, bubbleId: number): void;

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
     * @description Envia um alerta longo ao usuário.
     * @param {string} text - Texto do alerta.
     * @returns {void} 
     */
    alertLong(text: string): void;

    /**
     * @description Entidade olha para o ponto definido.
     * @param {IScriptReachable} object
     * @param {boolean} moveHead = Se a entidade pode mover somente sua cabeça.
     * @returns {void}
     */
    lookTo(object: IScriptReachable, moveHead: boolean): void;

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
     * @description Teletransporta a entidade para posição fornecida no objeto.
     * @param {IScriptReachable} object - Posição em que entidade séra teleportada.
     * @returns {void}
     */
    teleport(object: IScriptReachable): void;

    /**
     * @description Move a entidade até a posição fornecida no objeto.
     * @param {IScriptReachable} object - Posição em que entidade andará.
     * @returns {void}
     */
    walk(object: IScriptReachable): void;

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
    gotoRoom(roomId: number): void;

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

}

interface ScriptFurni {
    /**
     * @description Retorna o ID do Furni.
     * @returns {number} O ID do Furni.
     */
    getId(): number;

    /**
     * @description Retorna o ID do furni da database.
     * @returns {number} O ID do furni da database.
     */
    getDefinitionId(): number;

    /**
    * @description Retorna a posição X atual do Furni.
    * @returns {number} A posição X atual do Furni.
    */
    getX(): number;

    /**
     * @description Retorna a posição Y atual do Furni.
     * @returns {number} A posição Y atual do Furni.
     */
    getY(): number;

    /**
     * @description Retorna a posição Z (altura) atual do Furni.
     * @returns {number} A posição Z (altura) atual do Furni.
     */
    getZ(): number;

    /**
     * @description Retorna a atual rotação do Furni.
     * @returns {number} A atual rotação do Furni.
     */
    getR(): number;

    /**
     * @description Retorna atual estado do furni.
     * @returns {string} O atual estado do furni.
     */
    getCurrentState(): string;

    /**
     * @description Retorna o ID do sprite do furni.
     * @returns {number} O ID do sprite do furni.
     */
    getSprite(): number;

    /**
     * @description Retorna o nome do furni.
     * *O nome que está na database*
     * @returns {string} O nome do furni.
     */
    getName(): string;

    /**
     * @description Retorna o nome público do furni. 
     * *O nome que todos estão vendo no quarto*
     * @returns {string} O nome público do furni.
     */
    getPublicName(): string;

    /**
     * @description Retorna todas as entidades que estão sobre o furni.
     * @returns {ScriptEntity[]} Lista de entidades que estão sobre o furni.
     */
    getEntities(): ScriptEntity[];

    /**
     * @description Retorna o tipo da interação do furni.
     * @returns {string} O tipo da interação do furni.
     */
    getInteractionType(): string;

    /**
     * @description Retorna quantidade de interações que o furni possui.
     * @returns {number} Quantidade de interações que o furni possui.
     */
    getInteractionModesCount(): number;

    /**
    * @description Retorna altura empilhável do furni.
    * @returns {number} Altura empilhável do furni.
    */
    getStackHeight(): number;

    /**
     * @description Retorna a largura do furni.
     * @returns {number} A largura do furni.
     */
    getItemWidth(): number;

    /**
     * @description Retorna o comprimento do Furni.
     * @returns {number} O comprimento do Furni.
     */
    getItemLength(): number;

    /**
     * @description Retorna a altura do Furni.
     * @returns {number} A altura do Furni.
     */
    getItemHeight(): number;

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
     * @description Move o furni até a posição fornecida.
     * @param {number} x - Posição X para onde o furni será movido.
     * @param {number} y - Posição y para onde o furni será movido.
     * @param {number} z - Posição Z para onde o furni será movido.
     * @param {number} rot - Rotação definida ao furni ao ser movido.
     * @param {boolean} force - Se o furni deve ser movido mesmo que o caminho esteja bloqueado.
     * @returns {void}
     */
    move(x: number, y: number, z: number, rot: number, force: boolean): void;

    /**
     * @description Move o furni até a posição fornecida.
     * @param {IScriptReachable} object - Onde o furni será movido.
     * @param {number} rotation - Rotação
     * @returns {void}
     */
    move(object: IScriptReachable, rotation: number): void;

    /**
     * @description Altera o estado do Furni.
     * @param {string} value - Valor do estado em que o furni será definido.
     * @returns {void}
     */
    setState(value: string): void;

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
     * @returns {number} O código do efeito atual da entidade.
     */
    getEffect(): number;

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
     * @param {IScriptReachable} object Posição a ser comparada.
     * @returns {number} A distancia entre a entidade e outra posição fornecida no objeto.
     */
    distanceTo(object: IScriptReachable): number;

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
     * @param {IScriptReachable} object
     * @returns {boolean} Se entidade está próxima (tocando) a posição fornecida pelo objeto.
     */
    touching(object: IScriptReachable): boolean;

    /**
     * @description Retorna se esta entidade está sobre a mobilia fornecida.
     * @param {IScriptReachable} object
     * @returns {boolean} Se esta entidade está sobre a mobilia fornecida.
     */
    in(object: IScriptReachable): boolean;

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
     * @description Define o visual da entidade
     * @param {string} gender - Gênero do visual.
     * @param {string} figure - Código do visual.
     * @returns {void}
     */
    setFigure(gender: string, figure: string): void;

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
     * @param {IScriptReachable} object Posição em que a entidade andará.
     * @returns {void}
     */
    walk(object: IScriptReachable): void;

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
     * @param {IScriptReachable} object Posição em que a entidade.
     * @returns {void}
     */
    teleport(object: IScriptReachable): void;

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
     * @param {IScriptReachable} object Posição em que a entidade.
     * @returns {void}
     */
    lookTo(object: IScriptReachable): void;

    /**
       * @description Faz a entidade dizer uma mensagem.
       * @param {string} message - Mensagem que será dita pela entidade.
       * @param {boolean} shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
       * @param {BubblesID} bubbleId - Balão da mensagem
       * @returns {void}
       */
    say(message: string, shout: boolean, bubbleId: BubblesID): void;

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
}

declare class GlobalStorage {
    /**
     * @description Consulta um valor correspondente a chave buscada.
    * @param {string} key - Chave da propriedade a ser buscada.
    * @returns {String | null} Valor correspondente a chave buscada.
    */
    static get(key: string): String | null;

    /** 
     * @description Defini/Atualiza valor correspondente a chave buscada.
    * @param {string} key - Chave da propriedade a definir.
    * @param {string} value - Novo valor a ser definido.
    * @returns {void}
    */
    static set(key: String, value: String): void;

    /**
     * @description Deleta valor correspondente a chave buscada.
    * @param {string} key - Chave da propriedade a ser deletada.
    * @returns {void}
    */
    static delete(key: String): void;
}

declare class Highscores {
    /**
     * @description Adiciona pontos ao Placar
     * @param {String | ScriptEntity} player - Nick ou Usuário que receberá os pontos.
     * @param {number} points - Quantidade de pontos a serem adicionados.
     * @returns {void}
    */
    static add(player: String | ScriptEntity, points: Number): void;

    /**
     * @description Retorna quantos pontos o grupo tem no Placar
     * @param {String | ScriptEntity} user - Nick ou Usuário que serão consultados.
     * @returns {number} Quantidade de pontos que o grupo tem no Placar
    */
    static getScore(user: String | ScriptEntity): number;

    /**
     * @description Remove pontos do Placar
     * @param {String | ScriptEntity} player - Nick ou Usuário que perderá os pontos.
     * @param {number} points - Quantidade de pontos a serem removidos.
     * @returns {void}
    */
    static remove(player: String | ScriptEntity, points: Number): void;

    /**
     * @description Adiciona pontos a todo o Grupo no Placar
     * @param {String[] | ScriptEntity[]} player - Nicks ou Usuários que receberam os pontos.
     * @param {number} points - Quantidade de pontos a serem adicionados.
     * @returns {void}
    */
    static addGroup(player: String[] | ScriptEntity[], points: Number): void;

    /**
     * @description Retorna quantos pontos o grupo tem no Placar
     * @param {String[] | ScriptEntity[]} group - Nicks ou Usuários que serão consultados.
     * @returns {number} Quantidade de pontos que o grupo tem no Placar
    */
    static getGroupScore(group: String[] | ScriptEntity[]): number;

    /**
     * @description Remove pontos de todo o Grupo no Placar
     * @param {String | ScriptEntity} player - Nicks ou Usuários que perderam os pontos.
     * @param {number} points - Quantidade de pontos a serem removidos.
     * @returns {void}
    */
    static removeGroup(player: String | ScriptEntity, points: Number): void;

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
    * @returns {String | null} Valor correspondente a chave buscada.
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
     *  @return {FakeFloorItem} Retorna o item criado
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
     *  if (!faker) return; // Se o item não existir, não faça nada
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
     *  if (!faker) return; // Se a entidade não existir, não faça nada
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
     * @param {String} linkWebhook - Link do Webhook a receber informações.
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
     * Cancela o delayScript que for passado.
     * @example 
     * const delay = Delay.wait(() => {
     *      Debug.log('Teste')
     * }, 10)
     *
     * Delay.cancel(delay)
     * //Função não executará, pois o delay foi interrompido antes do tempo a ser aguardado.
     * @param {DelayTask} task - Wait/Delay a ser interrompido.
    */
    static cancel(task: DelayTask): void;

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
     * @description Ativa um wired ativador.
     * @param {string} wiredName 
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
    static trigger(wiredName: string, entity?: ScriptEntity, furni?: ScriptFurni, entities?: ScriptEntity[], furnis?: ScriptFurni[]): void;

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
}