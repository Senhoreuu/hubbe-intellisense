interface ScriptEntity {
    /**
     * Retorna o Balão de fala atual da entidade.
     * @returns {number}
     */
    getBubbleId(): number;

    /**
     * Retorna o ID da entidade.
     * @returns {number}
     */
    getId(): number;

    /**
     * Retorna o nome da Entidade atual.
     * @returns {string}
     */
    getUsername(): string;

    /**
     * Retorna a posição X atual da entidade.
     * @returns {number}
     */
    getX(): number;

    /**
     * Retorna a posição Y atual da entidade.
     * @returns {number}
     */
    getY(): number;

    /**
     * Retorna a atual posição Z da entidade.
     * @returns {number}
     */
    getZ(): number;

    /**
     * Retorna a atual rotação da entidade.
     * @returns {number}
     */
    getR(): number;

    /**
     * Retorna o tipo da entidade.
     * @returns {string}
     */
    getType(): string;

    /**
     * Retorna o rank da entidade.
     * @returns {number}
     */
    getRank(): number;

    /**
     * Retorna a missão da entidade.
     * @returns {string}
     */
    getMotto(): string;

    /**
     * Retorna o genero da entidade
     * @returns {"M" | "F"}
     */
    getGender(): "M" | "F";

    /**
     * Retorna o código do atual visual da entidade.
     * *Não aplicável a Pets*
     * @returns {string}
     */
    getFigure(): string;

    /**
     * Retorna o código do efeito atual da entidade.
     * @returns {number}
     */
    getEffect(): number;

    /**
     * Retorna o código do atual item de mão que a entidade está segurando.
     * @returns {number}
     */
    getHandItem(): number;

    /**
     * Retorna a atual dança da entidade.
     * @returns {0 | 1 | 2 | 3 | 4}
     */
    getDance(): 0 | 1 | 2 | 3 | 4;

    /**
     * Retorna objeto com status atual da conquista
     * @param {string} achievement
     * @return {ScriptAchievementProgress}
     */
    getAchievementProgress(achievement: string): ScriptAchievementProgress;

    /**
     * Retorna a quantidade de *Diamantes* da entidade.
     * @returns {number}
     */
    getDiamonds(): number;

    /**
     * Retorna a quantidade de *Duckets* da entidade.
     * @returns {number}
     */
    getDuckets(): number;

    /**
     * Retorna a quantidade de *Moedas* da entidade.
     * @returns {number}
    */
    getCredits(): number;

    /**
     * Retorna o total de *Ponto de Conquista* da entidade. 
     * @returns {number}
     */
    getAchievementPoints(): number;

    /**
     * Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param {IScriptReachable} e - Posição a ser comparada.
     * @returns {number}
     */
    distanceTo(e: IScriptReachable): number;

    /**
     * Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param {number} x - Posição X a ser comparada.
     * @param {number} y - Posição Y a ser comparada.
     * @param {number} z - Posição Z a ser comparada.
     * @returns {number}
     */
    distanceTo(x: number, y: number, z: number): number;

    /**
     * Retorna se a entidade é um usuário.
     * @returns {boolean}
     */
    isPlayer(): boolean;

    /**
     * Retorna se entidade é um Bot.
     * @returns {boolean}
     */
    isBot(): boolean;

    /**
     * Retorna se a entidade é um Pet.
     * @returns {boolean}
     */
    isPet(): boolean;

    /**
     * Retorna se a entidade está ausente.
     * @returns {boolean}
     */
    isIdle(): boolean;

    /**
     * Retorna se esta entidade é igual a entidade fornecida.
     * @param {ScriptEntity} entity - Entidade que será comparada.
     * @returns {boolean}
     */
    equals(entity: ScriptEntity): boolean;

    /**
     * Retorna se esta entidade está sobre a mobilia fornecida.
     * @param {IScriptReachable} furni
     * @returns {boolean}
     */
    in(furni: IScriptReachable): boolean;

    /**
     * Retorna se a entidade está em alguma das mobilias fornecidas.
     * @param {IScriptReachable[]} furnis - Lista de mobilias a serem comparadas.
     * @returns {boolean}
     */
    inAny(furnis: IScriptReachable[]): boolean;

    /**
     * Retorna se a entidade pode se mover.
     * @returns {boolean}
     */
    canWalk(): boolean;

    /**
     * Retorna se a entidade está se movendo.
     * @returns {boolean}
     */
    isWalking(): boolean;

    /**
     * Retorna se a entidade possui o emblema no inventário do usuário.
     * *Emblema não precisa estar equipado como favorito.*
     * @param {string} badge - Código do emblema a ser verificado.
     * @returns {boolean}
    */
    hasBadge(badge: string): boolean;

    /**
     * Retorna se entidade possui o rank fornecido ou um maior.
     * @param {number} rank - Valor do rank a ser comparado.
     * @returns {boolean}
     */
    hasRank(rank: number): boolean;

    /**
     * Retorna se entidade está próxima (tocando) a posição fornecida.
     * @param {number} x - Posição X a ser comparada.
     * @param {number} y - Posição Y a ser comparada.
     * @param {number} z - Posição Z a ser comparada.
     * @returns {boolean}
     */
    touching(x: number, y: number, z: number): boolean;

    /**
     * Retorna se entidade está próxima (tocando) a posição fornecida pelo objeto.
     * @param {IScriptReachable} e
     * @returns {boolean}
     */
    touching(e: IScriptReachable): boolean;

    /**
     * Adiciona pontos a uma conquista do usuário.
     * @param {string} code - Código da conquista.
     * @param {number} levels - Quantidade de pontos
     */
    progressAchievement(code: string, levels: number): void;

    /**
     * Define o balão de fala da entidade.
     * @param {number} bubbleId - Id do balão que será definido.
     */
    setBubble(bubbleId: number): void;

    /**
     * Define uma missão a entidade.
     * @param {string} motto - Missão que será definida na entidade.
     */
    setMotto(motto: string): void;

    /**
     * Define o visual para entidade.
     * *Não aplicável a Pets*
     * @param {string} gender - Gênero do visual.
     * @param {string} figure - Código do visual.
     */
    setFigure(gender: string, figure: string): void;

    /**
     * Define um item de mão para entidade segurar.
     * @param {number} item - Código do item de mão.
     */
    setHandItem(item: number): void;

    /**
     * Define um efeito a entidade.
     * @param {number} effect - Código do efeito.
     */
    setEffect(effect: number): void;

    /**
     * Define um valor de memória ao usuário.
     * @param {number} value - Valor da memória.
     */
    setMemoryValue(value: number): void;

    /**
     * Define a entidade pode ser mover.
     * @param {boolean} can - Se a entidade pode ser mover.
     * @param {boolean} effect - Se a entidade deve receber um efeito de congelado.
     */
    setCanWalk(can: boolean): void;

    /**
     * Define uma dança para a entidade.
     * 0: Parado.
     * 1: Hap-Hop
     * 2: Pogo-Mogo
     * 3: Duck Funk
     * 4: Rollie
     * @param {0 | 1 | 2 | 3 | 4} danceId - Código da dança
     */
    setDance(danceId: 0 | 1 | 2 | 3 | 4): void;

    /**
     * Envia um emblema a entidade.
     * *Restrito a usuários.*
     * @param {string} badge - Código do emblema a ser entregue.
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
     * @param {string} badge - Código do emblema.
     */
    removeBadge(badge: string): void;

    /**
     * Faz a entidade dizer uma mensagem.
     * @param {string} message - Mensagem que será dita pela entidade.
     * @param {boolean} shout - Se o personagem deve gritar a mensagem. (Mensagem em negrito)
     * @param {number} bubbleId - Balão da mensagem
     */
    say(message: string, shout: boolean, bubbleId: number): void;

    /**
     * Envia uma mensagem que aparecerá somente para está entidade.
     * @param {string} message - Mensagem a ser enviada.
     * @param {number} bubble - Balão da mensagem.
     */
    message(message: string, bubble: number): void;

    /**
     * Sussura uma mensagem para outra entidade.
     * @param {ScriptEntity} to - Entidade que receberá a mensagem.
     * @param {string} message - Mensagem que será enviada.
     * @param {number} bubbleId - Balão da mensagem.
     */
    whisper(to: ScriptEntity, message: string, bubbleId: number): void;

    /**
     * Envia um alerta ao usuário.
     * @param {string} text - Texto do alerta.
     */
    alert(text: string): void;

    /**
     * Envia um alerta longo ao usuário.
     * @param {string} text - Texto do alerta.
     */
    alertLong(text: string): void;

    /**
     * Entidade olha para o ponto definido.
     * @param {IScriptReachable} object
     * @param {boolean} moveHead = Se a entidade pode mover somente sua cabeça.
     */
    lookTo(object: IScriptReachable, moveHead: boolean): void;

    /**
     * Esta entidade olha para outra entidade.
     * @param {ScriptEntity} entity - Entidade que será o alvo.
     */
    lookTo(entity: ScriptEntity): void;

    /**
     * Entidade olha para o ponto definido.
     * @param {number} x - Posição X que entidade irá olhar.
     * @param {number} y - Posição Y que entidade irá olhar.
     * @param {boolean} moveHead - Se a entidade pode mover somente sua cabeça.
     */
    lookTo(x: number, y: number, moveHead: boolean): void;

    /**
     * Teletransporta a entidade para posição fornecida.
     * @param {number} x - Posição X em que entidade seŕa levada.
     * @param {number} y - Posição Y em que entidade seŕa levada.
     * @param {number} z - Posição Z em que entidade seŕa levada.
     * @param {number} r - Rotação definida para a entidade.
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
     * @param {number} x
     * @param {number} y
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
     * @param {number} action - Número da ação
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
     * @param {number} roomId - ID do quarto alvo.
     */
    gotoRoom(roomId: number): void;

    /**
     * Envia uma notificação para o usuário.
     * @param {string} icon - Código do icone para a notificação.
     * @param {string} message - Mensagem pra notificação.
    */
    notification(icon: string, message: string): void;

    /**
     * Exibe um video para este usuário
     * @param {string} url - Url do video no Youtube.
     * @param {boolean} force - Se o comando deve forçar a exibição do video, mesmo que o usuário tenha desabilitado.
     */
    youtube(url: string, force: boolean): void;


}

declare const ScriptEntity: ScriptEntity;