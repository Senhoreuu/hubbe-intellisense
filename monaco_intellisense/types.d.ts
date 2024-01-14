// --------------------------- Instances --------------------------- //

interface IScriptReachable {
    /**
     * @returns Retorna posição X
     */
    getX(): number;

    /**
     * @returns Retorna posição Y
     */
    getY(): number;

    /**
     * @returns Retorna posição Z
    */
    getZ(): number;
}

interface ScriptTile {
    /**
     * @description Retorna posição X do piso.
     * @returns
     */
    getX(): Number;

    /**
     * @description Retorna posição Y do piso.
     * @returns
     */
    getY(): Number;

    /**
     * @description Retorna posição Z do piso.
     * @returns
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
     * @returns
     */
    getWalkHeight(): Number;

    /**
     * @description Retorna se a um furni com interação de porta no piso.
     * @returns
     */
    hasGate(): Boolean;

    /**
     * @description Retorna se tem algum furni no piso.
     * @returns
     */
    hasFurni(): Boolean;

    /**
     * @description Retorna se tem entidades no piso.
     * @returns
     */
    hasEntities(): Boolean;

    /**
     * @description Retorna se o piso pode ser empilhável.
     * @returns
     */
    canStack(): Boolean;

    /**
     * @description Retorna se pode criar/posicionar furnis no piso.
     * @returns
     */
    canPlaceItem(): Boolean;
}

interface ScriptAchievementProgress {
    /**
     * @returns Retorna o progresso da conquista
     */
    getProgress(): number;

    /**
     * @returns Retorna o level da conquista
     */
    getLevel(): number;
}

interface ScriptPlayerData {
    /**
     * @return Retorna o ID do player.
     */
    getId(): number;

    /**
     * @return Retorna o nome do player.
     */
    getUsername(): string;

    /**
     * @return Retorna o total de conquistas do player.
     */
    getAchievementPoints(): number;

    /**
     * @return Retorna o gênero do player.
     */
    getGender(): string;

    /**
     * @return Retorna o visual do player.
     */
    getFigure(): string;

    /**
     * @return Retorna o missão do player.
     */
    getMotto(): string;

    /**
     * @return Retorna o rank do player.
     */
    getRank(): number;

    /**
     * @return Retorna o total de diamantes do player.
     */
    getDiamonds(): number;

    /**
     * @return Retorna o total de duckets do player.
     */
    getDuckets(): number;

    /**
     * @return Retorna o total de moedas do player.
     */
    getCredits(): number;

    /**
     * @return Retorna o grupo favoritado do player.
     */
    getFavouriteGroup(): number;

    /**
     * @return Retorna o timestamp de registro do player.
     */
    getRegTimestamp(): number;

    /**
     * @return Retorna o timestamp da última vez que o player fez login no hotel.
     */
    getLastOnlineTimestamp(): number;
}

interface FakeFloorItem {
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

interface ScriptEntity {
    /**
     * @description Retorna o Balão de fala atual da entidade.
     * @returns
     */
    getBubbleId(): number;

    /**
     * @description Retorna o ID da entidade.
     * @returns
     */
    getId(): number;

    /**
     * @description Retorna o nome da Entidade atual.
     * @returns
     */
    getUsername(): string;

    /**
     * @description Retorna a posição X atual da entidade.
     * @returns
     */
    getX(): number;

    /**
     * @description Retorna a posição Y atual da entidade.
     * @returns
     */
    getY(): number;

    /**
     * @description Retorna a atual posição Z da entidade.
     * @returns
     */
    getZ(): number;

    /**
     * @description Retorna a atual rotação da entidade.
     * @returns
     */
    getR(): number;

    /**
     * @description Retorna o tipo da entidade.
     * @returns
     */
    getType(): string;

    /**
     * @description Retorna o rank da entidade.
     * @returns
     */
    getRank(): number;

    /**
     * @description Retorna a missão da entidade.
     * @returns
     */
    getMotto(): string;

    /**
     * @description Retorna o genero da entidade
     * @returns {"M" | "F"}
     */
    getGender(): "M" | "F";

    /**
     * @description Retorna o código do atual visual da entidade.
     * *Não aplicável a Pets*
     * @returns
     */
    getFigure(): string;

    /**
     * @description Retorna o código do efeito atual da entidade.
     * @returns
     */
    getEffect(): number;

    /**
     * @description Retorna o código do atual item de mão que a entidade está segurando.
     * @returns
     */
    getHandItem(): number;

    /**
     * @description Retorna a atual dança da entidade.
     * @returns {0 | 1 | 2 | 3 | 4}
     */
    getDance(): 0 | 1 | 2 | 3 | 4;

    /**
     * @description Retorna objeto com status atual da conquista
     * @param achievement
     * @return {ScriptAchievementProgress}
     */
    getAchievementProgress(achievement: string): ScriptAchievementProgress;

    /**
     * @description Retorna a quantidade de *Diamantes* da entidade.
     * @returns
     */
    getDiamonds(): number;

    /**
     * @description Retorna a quantidade de *Duckets* da entidade.
     * @returns
     */
    getDuckets(): number;

    /**
     * @description Retorna a quantidade de *Moedas* da entidade.
     * @returns
    */
    getCredits(): number;

    /**
     * @description Retorna o total de *Ponto de Conquista* da entidade. 
     * @returns
     */
    getAchievementPoints(): number;

    /**
     * @description Retorna o ID do quarto atual da entidade.
     * @returns - ID do quarto atual da entidade.
     */
    getRoomId(): number;

    /**
     * @description Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param {IScriptReachable} e - Posição a ser comparada.
     * @returns
     */
    distanceTo(e: IScriptReachable): number;

    /**
     * @description Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param x - Posição X a ser comparada.
     * @param y - Posição Y a ser comparada.
     * @param z - Posição Z a ser comparada.
     * @returns
     */
    distanceTo(x: number, y: number, z: number): number;

    /**
     * @description Retorna se a entidade é um usuário.
     * @returns
     */
    isPlayer(): boolean;

    /**
     * @description Retorna se entidade é um Bot.
     * @returns
     */
    isBot(): boolean;

    /**
     * @description Retorna se a entidade é um Pet.
     * @returns
     */
    isPet(): boolean;

    /**
     * @description Retorna se a entidade está ausente.
     * @returns
     */
    isIdle(): boolean;

    /**
     * @description Retorna se esta entidade é igual a entidade fornecida.
     * @param {ScriptEntity} entity - Entidade que será comparada.
     * @returns
     */
    equals(entity: ScriptEntity): boolean;

    /**
     * @description Retorna se esta entidade está sobre a mobilia fornecida.
     * @param {IScriptReachable} furni
     * @returns
     */
    in(furni: IScriptReachable): boolean;

    /**
     * @description Retorna se a entidade está em alguma das mobilias fornecidas.
     * @param {IScriptReachable[]} furnis - Lista de mobilias a serem comparadas.
     * @returns
     */
    inAny(furnis: IScriptReachable[]): boolean;

    /**
     * @description Retorna se a entidade pode se mover.
     * @returns
     */
    canWalk(): boolean;

    /**
     * @description Retorna se a entidade está se movendo.
     * @returns
     */
    isWalking(): boolean;

    /**
     * @description Retorna se a entidade possui o emblema no inventário do usuário.
     * *Emblema não precisa estar equipado como favorito.*
     * @param badge - Código do emblema a ser verificado.
     * @returns
    */
    hasBadge(badge: string): boolean;

    /**
     * @description Retorna se entidade possui o rank fornecido ou um maior.
     * @param rank - Valor do rank a ser comparado.
     * @returns
     */
    hasRank(rank: number): boolean;

    /**
     * @description Retorna se entidade está próxima (tocando) a posição fornecida.
     * @param x - Posição X a ser comparada.
     * @param y - Posição Y a ser comparada.
     * @param z - Posição Z a ser comparada.
     * @returns
     */
    touching(x: number, y: number, z: number): boolean;

    /**
     * @description Retorna se entidade está próxima (tocando) a posição fornecida pelo objeto.
     * @param {IScriptReachable} e
     * @returns
     */
    touching(e: IScriptReachable): boolean;

    /**
     * @description Adiciona pontos a uma conquista do usuário.
     * @param code - Código da conquista.
     * @param levels - Quantidade de pontos
     */
    progressAchievement(code: string, levels: number): void;

    /**
     * @description Define o balão de fala da entidade.
     * @param bubbleId - Id do balão que será definido.
     */
    setBubble(bubbleId: number): void;

    /**
     * @description Define uma missão a entidade.
     * @param motto - Missão que será definida na entidade.
     */
    setMotto(motto: string): void;

    /**
     * @description Define o visual para entidade.
     * *Não aplicável a Pets*
     * @param gender - Gênero do visual.
     * @param figure - Código do visual.
     */
    setFigure(gender: string, figure: string): void;

    /**
     * @description Define um item de mão para entidade segurar.
     * @param item - Código do item de mão.
     * @param time - Tempo em segundos que a entidade ficará com o item de mão.
     */
    setHandItem(item: number, time: number): void;

    /**
     * @description Define um efeito a entidade.
     * @param effect - Código do efeito.
     */
    setEffect(effect: number): void;

    /**
     * @description Define a entidade pode ser mover.
     * @param can - Se a entidade pode ser mover.
     * @param effect - Se a entidade deve receber um efeito de congelado.
     */
    setCanWalk(can: boolean): void;

    /**
     * @description Define uma dança para a entidade.
     * @argument 0: Parado.
     * @argument 1: Hap-Hop
     * @argument 2: Pogo-Mogo
     * @argument 3: Duck Funk
     * @argument 4: Rollie
     * @param {0 | 1 | 2 | 3 | 4} danceId - Código da dança
     */
    setDance(danceId: 0 | 1 | 2 | 3 | 4): void;

    /**
     * Envia um emblema a entidade.
     * *Restrito a usuários.*
     * @param badge - Código do emblema a ser entregue.
     */
    giveBadge(badge: string): void;

    /**
     * Remove o item de mão da entidade.
     */
    removeHandItem(): void;

    /**
     * Remove o efeito da entidade.
     */
    removeEffect(): void;

    /**
     * Remove um emblema de um usuário.
     * @param badge - Código do emblema.
     */
    removeBadge(badge: string): void;

    /**
     * Faz a entidade dizer uma mensagem.
     * @param message - Mensagem que será dita pela entidade.
     * @param shout - Se o personagem deve gritar a mensagem. (Mensagem em negrito)
     * @param bubbleId - Balão da mensagem
     */
    say(message: string, shout: boolean, bubbleId: number): void;

    /**
     * Envia uma mensagem que aparecerá somente para está entidade.
     * @param message - Mensagem a ser enviada.
     * @param bubble - Balão da mensagem.
     */
    message(message: string, bubble: number): void;

    /**
     * Sussura uma mensagem para outra entidade.
     * @param {ScriptEntity} to - Entidade que receberá a mensagem.
     * @param message - Mensagem que será enviada.
     * @param bubbleId - Balão da mensagem.
     */
    whisper(to: ScriptEntity, message: string, bubbleId: number): void;

    /**
     * Envia um alerta ao usuário.
     * @param text - Texto do alerta.
     */
    alert(text: string): void;

    /**
     * Envia um alerta longo ao usuário.
     * @param text - Texto do alerta.
     */
    alertLong(text: string): void;

    /**
     * Entidade olha para o ponto definido.
     * @param {IScriptReachable} object
     * @param moveHead = Se a entidade pode mover somente sua cabeça.
     */
    lookTo(object: IScriptReachable, moveHead: boolean): void;

    /**
     * Esta entidade olha para outra entidade.
     * @param {ScriptEntity} entity - Entidade que será o alvo.
     */
    lookTo(entity: ScriptEntity): void;

    /**
     * Entidade olha para o ponto definido.
     * @param x - Posição X que entidade irá olhar.
     * @param y - Posição Y que entidade irá olhar.
     * @param moveHead - Se a entidade pode mover somente sua cabeça.
     */
    lookTo(x: number, y: number, moveHead: boolean): void;

    /**
     * Teletransporta a entidade para posição fornecida.
     * @param x - Posição X em que entidade seŕa levada.
     * @param y - Posição Y em que entidade seŕa levada.
     * @param z - Posição Z em que entidade seŕa levada.
     * @param r - Rotação definida para a entidade.
     */
    teleport(x: number, y: number, z: number, r: number): void;

    /**
     * Teletransporta a entidade para posição fornecida no objeto.
     * @param {IScriptReachable} o
     */
    teleport(o: IScriptReachable): void;

    /**
     * Move a entidade até a posição fornecida no objeto.
     * @param {IScriptReachable} o
     */
    walk(o: IScriptReachable): void;

    /**
     * Move a entidade até a posição fornecida.
     * *Entidade só irá se mover caso o caminho esteja livre até o ponto fornecido*
     * @param x
     * @param y
     */
    walk(x: number, y: number): void;

    /**
     * Faz com que a entidade pare de andar.
    */
    cancelWalk(): void;

    /**
     * Entidade faz uma ação determinada
     * 1: Acenar
     * 2: Mandar Beijo
     * 3: Rir
     * @param action - Número da ação
    */
    action(action: number): void;

    /**
     * Faz a entidade se levantar.
     */
    std(): void;

    /**
     * Faz a entidade deitar.
     */
    lay(): void;

    /**
     * Faz a entidade sentar.
     */
    sit(): void;

    /**
     * Expulsa a entidade do quarto.
     */
    kick(): void;

    /**
     * Leva a entidade para outro quarto.
     * *Entidade será levada mesmo que haja campanhia/senha*
     * @param roomId - ID do quarto alvo.
     */
    gotoRoom(roomId: number): void;

    /**
     * Envia uma notificação para o usuário.
     * @param icon - Código do icone para a notificação.
     * @param message - Mensagem pra notificação.
    */
    notification(icon: string, message: string): void;

    /**
     * Exibe um video para este usuário
     * @param url - Url do video no Youtube.
     * @param force - Se o comando deve forçar a exibição do video, mesmo que o usuário tenha desabilitado.
     */
    youtube(url: string, force: boolean): void;


}

interface ScriptFurni {
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
     * @param force - Se o furni deve ser movido mesmo que o caminho esteja bloqueado.
     */
    move(x: number, y: number, z: number, rot: number, force: boolean): void;

    /**
     * Move o furni até a posição fornecida.
     * @param {IScriptReachable} pos - Onde o furni será movido.
     * @param rotation - Rotação
     */
    move(pos: IScriptReachable, rotation: number): void;

    /**
     * Altera o estado do Furni.
     * @param value - Valor do estado em que o furni será definido.
     */
    setState(value: string): void;

}

interface FakeEntity {
    /**
     * @description - Adiciona relacionamento a entidade
     * @param entityId - ID da entidade
     * @param relationship - Relação entre entidade e FakeEntity
     * 1: Coração (Heart)
     * 2: Sorriso (Smile)
     * 3: Bobba (Bobba)
     * 4: Merda (Poop)
     */
    addRelationship(entityId: number, relationship: 1 | 2 | 3 | 4): void;

    /**
     * Retorna ID da FakeEntity
     * @returns
     */
    getId(): number;

    /**
     * Retorna username atual da entidade
     * @returns
     */
    getUsername(): string;

    /**
     * Retorna a posição x atual da FakeEntity.
     * @returns
     */
    getX(): number;

    /**
     * Retorna a posição Z atual da FakeEntity.
     * @returns
     */
    getZ(): number;

    /**
     * Retorna a posição Y atual da FakeEntity.
     * @returns
     */
    getY(): number;

    /**
     * Retorna a rotação atual do FakeEntity.
     * @returns
     */
    getR(): number;

    /**
     * Retorna o código do atual visual da entidade.
     * @returns
     */
    getFigure(): string;

    /**
     * Retorna missão atual da entidade
     * @returns
     */
    getMotto(): string;

    /**
     * Retorna o código do efeito atual da entidade.
     * @returns
     */
    getEffect(): number;

    /**
     * Retorna o código do atual item de mão que a entidade está segurando.
     * @returns
     */
    getHandItem(): number;

    /**
     * Retorna a atual dança da entidade.
     * @returns
     */
    getDance(): number;

    /**
     * @description Retorna a quantidade de diamantes que a entidade possui.
     * @returns
     */
    getDiamonds(): number;

    /**
     * Retorna a quantidade de duckets que a entidade possui.
     * @returns
     */
    getDuckets(): number;

    /**
     * Retorna a quantidade de créditos que a entidade possui.
     * @returns
     */
    getCredits(): number;

    /**
     * Retorna a distancia entre a entidade e outra posição fornecida no objeto.
     * @param e - 
     * @returns
     */
    distanceTo(e: IScriptReachable): number;

    /**
     * Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param x - Posição X a ser comparada.
     * @param y - Posição Y a ser comparada.
     * @param z - Posição Z a ser comparada.
     * @returns
     */
    distanceTo(x: number, y: number, z: number): number;

    /**
     * Retorna se entidade é um FakeBot.
     * @returns Boolean
     */
    isBot(): boolean;

    /**
     * Retorna se entidade está próxima (tocando) a posição fornecida.
     * @param x - Posição X a ser comparada.
     * @param y - Posição Y a ser comparada.
     * @param z - Posição Z a ser comparada.
     * @returns Boolean
     */
    touching(x: number, y: number, z: number): boolean;

    /**
     * Retorna se entidade está próxima (tocando) a posição fornecida pelo objeto.
     * @param e
     * @returns Boolean
     */
    touching(e: IScriptReachable): boolean;

    /**
     * Retorna se esta entidade está sobre a mobilia fornecida.
     * @param obj
     * @returns Boolean
     */
    in(obj: IScriptReachable): boolean;

    /**
     * Retorna se a entidade está se movendo.
     * @returns Boolean
     */
    isWalking(): boolean;

    /**
     * Define nome para a entidade
     * @param username - Nome que será definido.
     */
    setUsername(username: string): void;

    /**
     * Define o visual da entidade
     * @param gender - Gênero do visual.
     * @param figure - Código do visual.
     */
    setFigure(gender: string, figure: string): void;

    /**
     * Define nova missão na entidade
     * @param motto - Missão que será definida.
     */
    setMotto(motto: string): void;

    /**
     * Define um efeito a entidade.
     * @param e - Código do efeito.
     */
    setEffect(e: number): void;

    /**
     * Define um item de mão para entidade segurar.
     * @param h - Código do item de mão.
     */
    setHandItem(h: number): void;

    /**
     * Define uma dança para a entidade.
     * 0: Parado.
     * 1: Hap-Hop
     * 2: Pogo-Mogo
     * 3: Duck Funk
     * 4: Rollie
     * @param danceId - Código da dança
     */
    setDance(danceId: 0 | 1 | 2 | 3 | 4): void;

    /**
     * Remove efeito (:enable 0)
     */
    removeEffect(): void;

    /**
     * Remove o item de mão da entidade.
     */
    removeHandItem(): void;

    /**
     * Faz com que a entidade pare de andar.
     */
    cancelWalk(): void;

    /**
     * Adiciona um emblema no perfil do Bot
     * @param badge - Código do emblema a ser adicionado.
    */
    addBadge(badge: string): void;

    /**
     * Entidade faz uma ação determinada
     * 1: Acenar
     * 2: Mandar Beijo
     * 3: Rir
     * @param action - Número da ação
    */
    action(action: 1 | 2 | 3): void;

    /**
     * Move a entidade até a posição fornecida.
     * Entidade só irá se mover caso o caminho esteja livre até o ponto fornecido*
     * @param x
     * @param y
     */
    walk(x: number, y: number): void;

    /**
     * @param object
     */
    walk(object: IScriptReachable): void;

    /**
     * Teletransporta a entidade para posição fornecida.
     * @param x - Posição X em que entidade seŕa levada.
     * @param y - Posição Y em que entidade seŕa levada.
     * @param z - Posição Z em que entidade seŕa levada.
     * @param r - Rotação definida para a entidade.
     */
    teleport(x: number, y: number, z: number, r: number): void;

    /**
     * Teletransporta a entidade para posição fornecida no objeto.
     * @param object
     */
    teleport(object: IScriptReachable): void;

    /**
     * Entidade olha para o ponto definido.
     * @param x - Posição X que entidade irá olhar.
     * @param y - Posição Y que entidade irá olhar.
     * @param moveHead - Se a entidade pode mover somente sua cabeça.
     */
    lookTo(x: number, y: number, moveHead: boolean): void;

    /**
     * Entidade olha para o ponto definido.
     * @param r
     */
    lookTo(pos: IScriptReachable): void;

    /**
       * Faz a entidade dizer uma mensagem.
       * @param message - Mensagem que será dita pela entidade.
       * @param shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
       * @param bubbleId - Balão da mensagem
       */
    say(message: string, shout: boolean, bubbleId: number): void;

    /**
       * Sussura uma mensagem para outra entendide.
       * @param to - Entidade que receberá a mensagem.
       * @param message - Mensagem que será enviada.
       * @param bubbleId - Balão da mensagem.
       */
    whisper(to: ScriptEntity, message: string, bubbleId: number): void;

    /**
     * Faz a entidade levantar
     */
    std(): void;

    /**
     * Faz a entidade sentar
     */
    sit(): void;

    /**
     * Faz a entidade deitar
     */
    lay(): void;


}

interface WebhookMessage {
    /**
     * @description Define a mensagem que será enviada junto ao Webhook
     * @param bodyMessage
     */
    setRawMessage(bodyMessage: string): WebhookMessage;

    /**
     * @description Define o titulo no Embed do Webhook
     * @param title
     */
    setTitle(title: string): WebhookMessage;

    /**
     * @description Define a descrição no Embed do Webhook
     * @param description
     */
    setDescription(description: string): WebhookMessage;

    /**
     * @description Define a imagem no Embed do Webhook
     * @param link
     */
    setImageUrl(link: string): WebhookMessage;

    /**
     * @description Define a imagem da Thumbnail no Embed do Webhook
     * @param link
     */
    setThumbnailUrl(link: string): WebhookMessage;

    /**
     * @description Define a cor no Embed do Webhook
     * @param decimalColor - Cor em decimal
     */
    setColor(decimalColor: number): WebhookMessage;

    /**
     * @description Adiciona um campo com titulo e descrição no Embed do Webhook
     * @param titleField
     * @param valueField
     */
    addField(titleField: string, valueField: string): WebhookMessage;

    /**
     * Envia o Webhook.
     */
    queue(): WebhookMessage;
}

interface DelayTask {
    /** 
    * Returna quantidade de ticks que restam para o termino do temporizador.
    * @returns {Number} 
    */
    getTicksRemain(): number;
}


// --------------------------- Classes --------------------------- //

declare class Commands {
    /**
     * @description Registra um comando para ser executado.
     * @param commandName - Nome do comando a ser registrado.
     * @param callback - Função a ser executada quando o comando for chamado.
     */
    static register(commandName: string, callback: () => void): void;

    /**
     * @description Remove um comando registrado.
     * @param commandName - Nome do comando a ser removido.
     */
    static unregister(commandName: string): void;
}

declare class Currency {
    /**
     * Adiciona a quantidade de Créditos a carteira do usuário.
     * @param id - Id do usuário que receberá os Créditos.
     * @param amount - Quantidade de Créditos a ser entregue.
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
     * @param username - Nome do usuário que receberá os Créditos.
     * @param amount - Quantidade de Créditos a ser entregue.
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
     * @param id - Id do usuário que receberá os Duckets.
     * @param amount - Quantidade de Duckets a ser entregue.
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
     * @param username - Nome do usuário que receberá os Duckets.
     * @param amount - Quantidade de Duckets a ser entregue.
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
     * @param id - Id do usuário que receberá os Diamantes.
     * @param amount - Quantidade de Diamantes a ser entregue.
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
     * @param username - Nome do usuário que receberá os Diamantes.
     * @param amount - Quantidade de Diamantes a ser entregue.
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
     * @param username - Nome do usuário que receberá os Pontos Sazonais.
     * @param amount - Quantidade de Pontos Sazonais a ser entregue.
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
     * @param id - Id do usuário que receberá os Pontos Sazonais.
     * @param amount - Quantidade de Pontos Sazonais a ser entregue.
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

//type EventsType = 'userJoin' | 'userLeave' | 'stepOn' | 'stepOff' | 'say' | 'interact' | 'furniSelected' | 'tick' | 'load' | 'dispose' | 'playerSelected' | 'serverMessage' | 'floorItemPlaced' | 'floorItemPickedup';

declare class Events {
    //static on(event: EventsType, callback: (...args: any[]) => void): void;    


    /**
     * @description Evento chamado quando uma entidade entra no quarto.
     * @example
     * // Exemplo de uso:
     * Events.on('userJoin', (user) => {
     *   Engine.log(user.getUsername() + ' entrou no quarto!');
     * });
     */
    static on(event: 'userJoin', callback: (user: ScriptEntity) => void): void;

    /**
     * @description Evento chamado quando uma entidade sai do quarto.
     * @example
     * // Exemplo de uso:
     * Events.on('userLeave', (user) => {
     *   Engine.log(user.getUsername() + ' saiu do quarto!');
     * });
     */
    static on(event: 'userLeave', callback: (user: ScriptEntity) => void): void;

    /**
     * @description Evento chamado quando uma entidade pisa em um mobi.
     * @example
     * // Exemplo de uso:
     * Events.on('stepOn', (user, furni) => {
     *   Engine.log(user.getUsername() + ' pisou em ' + furni.getName());
     * });
     */
    static on(event: 'stepOn', callback: (user: ScriptEntity, furni: ScriptFurni) => void): void;

    /**
     * @description Evento chamado quando uma entidade sai de um mobi.
     * @example
     * // Exemplo de uso:
     * Events.on('stepOff', (user, furni) => {
     *   Engine.log(user.getUsername() + ' saiu de ' + furni.getName());
     * });
     */
    static on(event: 'stepOff', callback: (user: ScriptEntity, furni: ScriptFurni) => void): void;

    /**
     * @description Evento chamado quando uma entidade fala algo.
     * @example
     * // Exemplo de uso:
     * Events.on('say', (user, message) => {
     *   Engine.log(user.getUsername() + ' disse: ' + message);
     * });
     */
    static on(event: 'say', callback: (user: ScriptEntity, message: string) => void): void;

    /**
     * @description Evento chamado quando uma entidade interage com um mobi dando dois cliques.
     * @example
     * // Exemplo de uso:
     * Events.on('interact', (user, furni) => {
     *   Engine.log(user.getUsername() + ' interagiu com ' + furni.getName());
     * });
     */
    static on(event: 'interact', callback: (user: ScriptEntity, furni: ScriptFurni) => void): void;

    /**
     * @description Evento chamado quando uma entidade interage com um mobi dando um clique.
     * @example
     * // Exemplo de uso:
     * Events.on('furniSelected', (user, furni) => {
     *   Engine.log(user.getUsername() + ' clicou em ' + furni.getName());
     * });
     */
    static on(event: 'furniSelected', callback: (user: ScriptEntity, furni: ScriptFurni) => void): void;

    /**
     * @description Evento chamado a cada tick. (1 tick = 0.5 segundo)
     * @example
     * // Exemplo de uso:
     * Events.on('tick', () => {
     *  Engine.log('tick executado');
     * });
     */
    static on(event: 'tick', callback: () => void): void;

    /**
     * @description Evento chamado quando o quarto é carregado.
     * @example
     * // Exemplo de uso:
     * Events.on('load', () => {
     *  Engine.log('quarto carregado');
     * });
     */
    static on(event: 'load', callback: () => void): void;

    /**
     * @description Evento chamado quando o quarto é descarregado.
     * @example
     * // Exemplo de uso:
     * Events.on('dispose', () => {
     *  Engine.log('quarto descarregado');
     * });
     */
    static on(event: 'dispose', callback: () => void): void;

    /**
     * @description Evento chamado quando um player é selecionado.
     * @param {ScriptEntity} user - Usuário que selecionou.
     * @param {ScriptEntity} target - Usuário que foi selecionado.
     * @example
     * // Exemplo de uso:
     * Events.on('playerSelected', (user, target) => {
     *  Engine.log(user.getUsername() + ' clicou em ' + target.getUsername());
     * });
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
     */
    static on(
        event: 'serverMessage',
        callback: (roomId: number, event: string, data: string) => void
    ): void;

    /**
     * @description Evento chamado quando um mobi é colocado no quarto.
     * @param {ScriptEntity} user - Usuário que colocou.
     * @param {ScriptFurni} furni - Mobi que foi colocado.
     * @example
     * // Exemplo de uso:
     * Events.on('floorItemPlaced', (user, furni) => {
     *  Engine.log(user.getUsername() + ' colocou ' + furni.getName());
     * });
     */
    static on(
        event: 'floorItemPlaced',
        callback: (user: ScriptEntity, furni: ScriptFurni) => void
    ): void;

    /**
     * @description Evento chamado quando um mobi é removido do quarto.
     * @param {ScriptEntity} user - Usuário que removeu.
     * @param {ScriptFurni} furni - Mobi que foi removido.
     * @example
     * // Exemplo de uso:
     * Events.on('floorItemRemoved', (user, furni) => {
     *  Engine.log(user.getUsername() + ' removeu ' + furni.getName());
     * });
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
     */
    static sendMessageToRoom(roomId: number, event: string, data: string): void;
}

declare class GlobalData {
    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param id - ID do player.
     * @returns A instância de um ScriptPlayerData.
     */
    static getPlayerDataById(id: number): ScriptPlayerData;

    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param username - Nome do player.
     * @returns A instância de um ScriptPlayerData.
     */
    static getPlayerDataByName(username: string): ScriptPlayerData;

    /**
     * @description Retorna a instância de um ScriptEntity mesmo não estando no quarto.
     * @param id - Id do player.
     * @returns A instância de um ScriptEntity.
     */
    static getPlayerEntityById(id: number): ScriptEntity;

    /**
     * @description Retorna a instância de um ScriptEntity mesmo não estando no quarto.
     * @param username - Nome do player.
     * @returns A instância de um ScriptEntity.
     */
    static getPlayerEntityByUsername(username: string): ScriptEntity;

    /**
     * @description Retorna se o player está online.
     * @param id - Id do player.
     */
    static isOnlineById(id: number): boolean;

    /**
     * @description Retorna se o player está online.
     * @param username - Nome do player.
     */
    static isOnlineByUsername(username: string): boolean;
}

declare class GlobalStorage {
    /**
     * @description Consulta um valor correspondente a chave buscada.
    * @param key - Chave da propriedade a ser buscada.
    * @returns {String | null}
    */
    static get(key: string): String | null;

    /** 
     * @description Defini/Atualiza valor correspondente a chave buscada.
    * @param key - Chave da propriedade a definir.
    * @param value - Novo valor a ser definido.
    */
    static set(key: String, value: String): void;

    /**
     * @description Deleta valor correspondente a chave buscada.
    * @param key - Chave da propriedade a ser deletada.
    */
    static delete(key: String): void;
}

declare class Highscores {
    /**
     * @description Adiciona pontos ao Placar
     * @param {String | ScriptEntity} player - Nick ou Usuário que receberá os pontos.
     * @param points - Quantidade de pontos a serem adicionados.
    */
    static add(player: String | ScriptEntity, points: Number): void;

    /**
     * @description Retorna quantos pontos o grupo tem no Placar
     * @param {String[] | ScriptEntity[]} group - Nicks ou Usuários que serão consultados.
     * @returns
    */
    static getScore(group: String[] | ScriptEntity[]): number;

    /**
     * @description Remove pontos do Placar
     * @param {String | ScriptEntity} player - Nick ou Usuário que perderá os pontos.
     * @param points - Quantidade de pontos a serem removidos.
    */
    static remove(player: String | ScriptEntity, points: Number): void;

    /**
     * @description Adiciona pontos a todo o Grupo no Placar
     * @param {String[] | ScriptEntity[]} player - Nicks ou Usuários que receberam os pontos.
     * @param points - Quantidade de pontos a serem adicionados.
    */
    static addGroup(player: String[] | ScriptEntity[], points: Number): void;

    /**
     * @description Retorna quantos pontos o grupo tem no Placar
     * @param {String[] | ScriptEntity[]} group - Nicks ou Usuários que serão consultados.
     * @returns
    */
    static getGroupScore(group: String[] | ScriptEntity[]): number;

    /**
     * @description Remove pontos de todo o Grupo no Placar
     * @param {String | ScriptEntity} player - Nicks ou Usuários que perderam os pontos.
     * @param points - Quantidade de pontos a serem removidos.
    */
    static removeGroup(player: String | ScriptEntity, points: Number): void;

    /**
     * @description Limpa todos os usuários do Placar
     * @param {Number | ScriptFurni} scoreboard - ID ou Furni do Placar.
    */
    static clear(scoreboard: Number | ScriptFurni): void;

    /**
     * @description Limpa todos os usuários do Placar
     * @param {Number | ScriptFurni} scoreboard - ID ou Furni do Placar.
    */
    static reset(scoreboard: Number | ScriptFurni): void;
}

declare class RoomStorage {
    /**
    * @description Retorna os dados salvos no quarto a partir da chave de busca. 
    * @param key - Chave da propriedade a ser buscada.
    * @returns 
    */
    static get(key: string): string;

    /** 
    * @description Define/Atualiza valor correspondente a chave buscada.
    * @param key - Chave da propriedade a definir.
    * @param value - Novo valor a ser definido.
    */
    static set(key: string, value: string): void;

    /** 
    * @description Deleta valor correspondente a chave buscada.
    * @param key - Chave da propriedade a ser deletada.
    * @returns - Retorna true caso a chave tenha sido deletada com sucesso.
    */
    static delete(key: string): boolean;
}

interface Room {
    /**
     * @returns Retorna o ID do quarto
     */
    getId(): number;

    /**
     * @returns Retorna o nome atual do quarto.
     */
    getName(): number;

    /**
     * @returns Retorna o nome do dono do quarto
     */
    getOwnerUsername(): number;

    /**
     * @returns Retorna o ID do dono do quarto
     */
    ownerId(): number;

    /**
     * @returns Retorna a quantidade de usuários do quarto
     */
    userCount(): number;

    /**
     * @param id - ID do usuário buscado.
     * @returns Retorna o usuário correspondente ao ID.
     */
    getPlayerById(id: number): ScriptEntity;

    /**
     * @param name - Nome do usuário buscado.
     * @returns Retorna o usuário correspondente ao Nome.
     */
    getPlayerByName(name: string): ScriptEntity;

    /**
     * @param name - Nome do Bot a ser buscado.
     * @returns Retorna o bot correspondente ao nome.
     */
    getBotByName(name: string): ScriptEntity;

    /**
     * @returns Retorna uma lista com todos os usuários do quarto.
     */
    getAllPlayers(): ScriptEntity[];

    /**
     * @param x - Posição X buscada.
     * @param y - Posição Y buscada.
     * @returns Retorna todas entidades que estão na posição fornecida.
     */
    getEntitiesByCoord(x: number, y: number): ScriptEntity[];

    /**
     * @param furni - Mobilia a ser consultada.
     * @returns Retorna uma lista com todas as entidades presentes na mobilia.
     */
    getEntitiesByFurni(furni: ScriptFurni): ScriptEntity[];

    /**
     * @param furnis - Mobilias a serem consultadas.
     * @returns Retorna uma lista de todas as entidades presentes nas mobilias.
     */
    getEntitiesByFurnis(furnis: ScriptFurni[]): ScriptFurni[];

    /**
     * @param x - Posição X do piso.
     * @param y - Posição y do piso.
     * @returns Retorna o Piso da posição fornecida.
     */
    getTile(x: number, y: number): ScriptTile;

    /**
     * @param id - ID da mobilia a ser buscada.
     * Retorna a mobilia correspondente ao ID.
     */
    getFurniById(id: number): ScriptFurni;

    /**
     * Retorna uma lista de mobilias que estão no piso
     * @param x - Posição X do piso.
     * @param y - Posição y do piso.
     * @returns {ScriptFurni[]}
     */
    getFurniByTile(x: number, y: number): ScriptFurni[];

    /**
     * @returns Retorna uma lista com todos as mobilias do tipo definido.
     * @param sprite - Código base da mobilia buscada.
     */
    getAllFurnisBySpriteId(sprite: number): ScriptFurni[];

    /**
     * @param x - Posição X do piso.
     * @param y - Posição X do piso.
     * @returns Retorna se o floor existe
     */
    tileExists(x: number, y: number): Boolean;

    /** 
     * @param id - Id da entidade a ser verificada.
     * @returns Retorna se o usuário tem direitos no quarto.
    */
    hasRights(id: number): boolean;

    /**
     * @param id - Id do usuário que receberá Direitos.
     * @returns Dá Direitos ao usuário *ID*.
     */
    addRights(id: number): void;

    /**
     * @description Retira os Direitos do usuário *ID*.
     * @param id - Id do usuário que perderá Direitos.
     */
    removeRights(id: number): void;

    /** 
     * @description Retorna estado atual do atravessar.
     */
    getWalkThrough(): boolean;

    /**
     * @description Retorna estado atual da diagonal.
     */
    getDiagonal(): boolean;

    /**
     * @description Retorna o atual estado do mute no quarto.
     */
    getRoomMute(): boolean;

    /**
     * @description Define o nome do quarto
     * @param name - Novo nome que será definido ao quarto.
     */
    setName(name: string): void;

    /**
     * @description Desliga/liga a luz do quarto.
     * @param activated - Se a luz deve ser desligada ou ligada.
     */
    setMoodLight(activated: boolean): void;

    /**
     * @description Altera a cor e estado da luz do quarto.
     * @param activated - Se a luz deve ser desligada ou ligada.
     * @param hex - Cor em hexadecimal que a luz deve ficar.
     * @param intensity - Valor da intensidade que a cor. *(0: Opaco a 255: Transparente)*
     * @param wallOnly - Se a luz deve ficar só nas paredes.
     */
    setMoodLight(activated: boolean, hex: string, intensity: number, wallOnly: boolean): void;

    /**
     * @description Altera a cor do plano de fundo do quarto. Formato em HSL.
     * @param hex - Cor em hexadecimal que o plano de fundo deve ficar.
     */
    setBackgroundTonerColor(hex: string): void;

    /**
     * @description Define a velocidade dos Rollers no quarto.
     * @param speed - Velocidade dos rollers.
     */
    setRollerSpeed(speed: number): void;

    /**
     * @description Define a diagonal
     * @param allow - Valor que irá definir se será habilitado ou desabilitado
     */
    setDiagonal(allow: boolean): void;

    /**
     * @description Define o atravessar
     * @param allow - Valor que irá definir se será habilitado ou desabilitado
     */
    setWalkThrough(allow: boolean): void;

    /**
     * @description Define mute do quarto
     * @param mute - Valor que irá definir se será mutado ou desmutado.
     */
    setRoomMute(mute: boolean): void;

    /**
     * @description Define uma senha para trancar o quarto.
     * @param password - Senha a ser definida.
     */
    setPassword(password: string): void;

    /**
     * @description Define campanhia 
     */
    setDoorbell(): void;

    /**
     * @description Envia notificação para todos do quarto
     * @param icon - Código do icone que irá aparecer na notificação
     * @param message - Mensagem que irá aparecer na notificação.
     */
    notification(icon: string, message: string): void;

    /**
     * @param message - Mensagem que irá aparecer no alerta.
     * @description Envia um alerta para todos do quarto
     */
    alert(message: string): void;

    /**
     * @returns Abre o quarto
     */
    open(): void;

    /**
     * @param text - Texto a ser lido pela voz sintetizada
     * @returns Envia TTS para todos os usuários
     */
    tts(text: string): void;

    /**
     * @param link - Link do video do Youtube.
     * @returns Reproduz video do Youtube para todos os usuários do quarto.
     */
    youtube(link: string): void;
}

declare const Room: Room;


declare class Faker {
    /**
     * @description Cria um FakeItem, uma mobilia similar a original
     *  @param baseId - ID da sprite da mobilia original
     *  @param x - Posição X que será gerado
     *  @param y - Posição Y que será gerado
     *  @param z - Posição Z que será gerado
     *  @param r - Rotação que será gerado
     *  @return {FakeFloorItem}
     */
    static createFakeItem(baseId: number, x: number, y: number, z: number, r: number): FakeFloorItem;

    /**
     * @description Cria entidade similar a um player real
     * @param name - Nome para o FakePlayer
     * @param x - Posição X que ele irá ser criado
     * @param y - Posição Y que ele irá ser criado
     * @param z - Posição Z que ele irá ser criado
     * @param r - Rotação que ele irá ser criado
     * @returns {FakeEntity}
     */
    static createFakePlayer(name: string, x: number, y: number, z: number, r: number): FakeEntity;

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
    static createFakePlayer(name: string, motto: string, figure: string, gender: string, credits: number, diamonds: number, duckets: number, x: number, y: number, z: number, r: number): FakeEntity;

    /**
     * @description Cria uma entidade similar a um bot real
     * @param name - Nome para o FakeBot
     * @param x - Posição X que ele irá ser criado
     * @param y - Posição Y que ele irá ser criado
     * @param z - Posição Z que ele irá ser criado
     * @param r - Rotação que ele irá ser criado
     * @returns {FakeEntity}
     */
    static createFakeBot(name: string, x: number, y: number, z: number, r: number): FakeEntity;

    /**
     * @description Cria uma entidade similar a um bot real
     * @param name - Nome para o FakeBot
     * @param x - Posição X que ele irá ser criado
     * @param y - Posição Y que ele irá ser criado
     * @param z - Posição Z que ele irá ser criado
     * @param r - Rotação que ele irá ser criado
     * @returns {FakeEntity}
     */
    static createFakeBot(name: string, motto: string, figure: string, gender: string, x: number, y: number, z: number, r: number): FakeEntity;

    /**
     * @returns Retorna a lista com todos os items criados
     */
    static getLoadedFurnis(): FakeFloorItem[];

    /**
     * @description Remove item determinado
     * @param fakeItem - Item a ser removido
     */
    static removeFakeFloorItem(fakeItem: FakeFloorItem): void;

    /**
     * @description Remove uma entidade Fake
     * @param fakeEntity - Entidade Fake a ser removida do quarto
     */
    static removeEntity(fakeEntity: FakeEntity): void;

    /**
     * @description Remove todos os items falsos
     */
    static removeAllFloorItems(): void;

    /**
     * @description Remove todas as entidades criadas
     */
    static removeAllEntities(): void;
}

declare class Debug {
    /**
     * Envia mensagem de debug para todos os usuários do quarto.
     * @param object Conteúdo
     */
    static d(object: any): void;

    /** 
     * Envia mensagem de debug para todos os usuários do quarto.
     * @param object Conteúdo
    */
    static debug(object: any): void;

    /**
     * Registra uma mensagem no log do quarto. (*:script log*)
     * @param object Conteúdo
    */
    static log(object: any): void;

    /**
     * Registra uma mensagem no log do quarto. (*:script log*)
     * @param object Conteúdo
     */
    static e(object: any): void;

    /**
     * Limpa o registro de mensagens no log do quarto. (*:script log*)
     */
    static clearLog(): void;
}

declare class Webhook {
    /**
     * @description Cria um novo Webhook direcionado ao link.
     * @param {String} linkWebhook - Link do Webhook a receber informações.
     * @returns {WebhookMessage}
    */
    static sendTo(linkWebhook: string): WebhookMessage;
}

declare class Delay {
    /**
     * @example
     * Delay.wait(() => {
     *  //Executado após 1 segundo de espera.
     * }, 2)
     * @param callback - Função executada após o tempo determinado ter passado.
     * @param ticks - Quantidade de ticks a aguardar até a execução da função 
    */
    wait(callback: () => void, ticks: number): DelayTask;

    /**
     * Executa uma função no intervalo de tempo.
     * @example
     * Delay.interval(() => {
     *  //Executado a cada 1 segundo.
     * }, 2)
     * @param callback - Função executada sempre que o tempo determinado ter passado.
     * @param ticks - Quantidade de ticks a aguardar até a execução da função
    */
    interval(callback: () => void, ticks: number): DelayTask;

    /**
     * Cancela o delayScript que for passado.
     * @example 
     * const delay = Delay.wait(() => {
     *      Debug.log('Teste')
     * }, 10)
     *
     * Delay.cancel(delay)
     * //Função não executará, pois o delay foi interrompido antes do tempo a ser aguardado.
     * @param task - Wait/Delay a ser interrompido.
    */
    cancel(task: DelayTask): void;

    /**
     * Converte segundos em uma quantia de ticks correspondente.
     * @example
     * Delay.wait(() => {
     *      //Executado após 10 segundos.
     * }, Delay.seconds(10))
     * @static 
     * @param sec - Quantidade de segundos a serem convertidos em ticks.
    */
    seconds(sec: number): number;
}

declare class Wired {
    /**
     * Recebe eventos dos wired de efeito que possuem o eventName.
     * @param eventName - Nome do evento que está no Efeito.
     * @param callback - Callback executado ao comando ser utilizado. Caso seja ativado por um usuário, callback recebe o usuário como parametro.
    */
    on(eventName: string, callback: Function): void;

    /**
     * Ativa um wired ativador.
     * @param wiredName 
     * @param entity 
     */
    trigger(wiredName: string, entity: ScriptEntity): void;
}