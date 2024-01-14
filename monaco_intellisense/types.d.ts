declare interface IScriptReachable {
    /**
     * @returns Retorna posição X
     */
    getX(): number;

    /**
     * @returns Retorna posição Y
     */
    getY(): number;

    /**
     * @returns {Number} Retorna posição Z
    */
    getZ(): number;
}

declare interface ScriptAchievementProgress {
    /**
     * @returns {number} Retorna o progresso da conquista
     */
    getProgress(): number;

    /**
     * @returns {number} Retorna o level da conquista
     */
    getLevel(): number;
}

declare interface ScriptPlayerData {
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

interface Commands {
    /**
     * @description Registra um comando para ser executado.
     * @param commandName - Nome do comando a ser registrado.
     * @param callback - Função a ser executada quando o comando for chamado.
     */
    register(commandName: string, callback: () => void): void,

    /**
     * @description Remove um comando registrado.
     * @param commandName - Nome do comando a ser removido.
     */
    unregister(commandName: string): void;
}

declare const Commands: Commands;

interface Currency {
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
    giveCreditsById(id: number, amount: number): void;

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
    giveCreditsByUsername(username: string, amount: number): void;

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
    giveDucketsById(id: number, amount: number): void;

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
    giveDucketsByUsername(username: string, amount: number): void;

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
    giveDiamondsById(id: number, amount: number): void;

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
    giveDiamondsByUsername(username: string, amount: number): void;

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
    giveSeasonalPointsByUsername(username: string, amount: number): void;

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
    giveSeasonalPointsById(id: number, amount: number): void;
}

declare const Currency: Currency;

type EventsType = 'userJoin' | 'userLeave' | 'stepOn' | 'stepOff' | 'say' | 'interact' | 'furniSelected' | 'tick' | 'load' | 'dispose' | 'playerSelected' | 'serverMessage' | 'floorItemPlaced' | 'floorItemPickedup';

interface Events {
    /**
     * @description Evento chamado quando uma entidade entra no quarto.
     * @example
     * // Exemplo de uso:
     * Events.on('userJoin', (user) => {
     *   Engine.log(user.getUsername() + ' entrou no quarto!');
     * });
     */
    on(event: 'userJoin', callback: (user: ScriptEntity) => void): void;

    /**
     * @description Evento chamado quando uma entidade sai do quarto.
     * @example
     * // Exemplo de uso:
     * Events.on('userLeave', (user) => {
     *   Engine.log(user.getUsername() + ' saiu do quarto!');
     * });
     */
    on(event: 'userLeave', callback: (user: ScriptEntity) => void): void;

    /**
     * @description Evento chamado quando uma entidade pisa em um mobi.
     * @example
     * // Exemplo de uso:
     * Events.on('stepOn', (user, furni) => {
     *   Engine.log(user.getUsername() + ' pisou em ' + furni.getName());
     * });
     */
    on(event: 'stepOn', callback: (user: ScriptEntity, furni: ScriptFurni) => void): void;

    /**
     * @description Evento chamado quando uma entidade sai de um mobi.
     * @example
     * // Exemplo de uso:
     * Events.on('stepOff', (user, furni) => {
     *   Engine.log(user.getUsername() + ' saiu de ' + furni.getName());
     * });
     */
    on(event: 'stepOff', callback: (user: ScriptEntity, furni: ScriptFurni) => void): void;

    /**
     * @description Evento chamado quando uma entidade fala algo.
     * @example
     * // Exemplo de uso:
     * Events.on('say', (user, message) => {
     *   Engine.log(user.getUsername() + ' disse: ' + message);
     * });
     */
    on(event: 'say', callback: (user: ScriptEntity, message: string) => void): void;

    /**
     * @description Evento chamado quando uma entidade interage com um mobi dando dois cliques.
     * @example
     * // Exemplo de uso:
     * Events.on('interact', (user, furni) => {
     *   Engine.log(user.getUsername() + ' interagiu com ' + furni.getName());
     * });
     */
    on(event: 'interact', callback: (user: ScriptEntity, furni: ScriptFurni) => void): void;

    /**
     * @description Evento chamado quando uma entidade interage com um mobi dando um clique.
     * @example
     * // Exemplo de uso:
     * Events.on('furniSelected', (user, furni) => {
     *   Engine.log(user.getUsername() + ' clicou em ' + furni.getName());
     * });
     */
    on(event: 'furniSelected', callback: (user: ScriptEntity, furni: ScriptFurni) => void): void;

    /**
     * @description Evento chamado a cada tick. (1 tick = 0.5 segundo)
     * @example
     * // Exemplo de uso:
     * Events.on('tick', () => {
     *  Engine.log('tick executado');
     * });
     */
    on(event: 'tick', callback: () => void): void;

    /**
     * @description Evento chamado quando o quarto é carregado.
     * @example
     * // Exemplo de uso:
     * Events.on('load', () => {
     *  Engine.log('quarto carregado');
     * });
     */
    on(event: 'load', callback: () => void): void;

    /**
     * @description Evento chamado quando o quarto é descarregado.
     * @example
     * // Exemplo de uso:
     * Events.on('dispose', () => {
     *  Engine.log('quarto descarregado');
     * });
     */
    on(event: 'dispose', callback: () => void): void;

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
    on(
        event: 'playerSelected',
        callback: (user: ScriptEntity, target: ScriptEntity) => void
    ): void;

    /**
     * @description Evento chamado quando uma mensagem é enviada para o quarto atual.
     * @param {Number} roomId - ID do quarto que enviou.
     * @param {String} event - Nome do evento.
     * @param {String} data - Dados (Qualquer coisa em formato string).
     * 
     * @example
     * // Exemplo de uso:
     * Events.on('serverMessage', (roomId, event, data) => {
     *  Engine.log('Mensagem recebida do quarto ' + roomId);
     *  Engine.log('Evento: ' + event);
     *  Engine.log('Dados: ' + data);
     * });
     */
    on(
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
    on(
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
    on(
        event: 'floorItemPickedup',
        callback: (user: ScriptEntity, furni: ScriptFurni) => void
    ): void;

    /**
     * @description Envia uma mensagem para o quarto especificado.
     * @param {Number} roomId - ID do quarto que receberá a mensagem.
     * @param {String} event - Nome do evento.
     * @param {String} data - Dados (Qualquer coisa em formato string).
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
    sendMessageToRoom(roomId: number, event: string, data: string): void;
}

declare const Events: Events;

interface GlobalData {
    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param - ID do player.
     * @returns A instância de um ScriptPlayerData.
     */
    getPlayerDataById(id: number): ScriptPlayerData;

    /**
     * @description Retorna a instância de um ScriptPlayerData.
     * @param - Nome do player.
     * @returns A instância de um ScriptPlayerData.
     */
    getPlayerDataByName(username: string): ScriptPlayerData;
}

declare const GlobalData: GlobalData;

interface GlobalStorage {
    /**
     * @description Consulta um valor correspondente a chave buscada.
    * @param key - Chave da propriedade a ser buscada.
    * @returns {String | null}
    */
    get(key: string): String | null;

    /** 
     * @description Defini/Atualiza valor correspondente a chave buscada.
    * @param key - Chave da propriedade a definir.
    * @param value - Novo valor a ser definido.
    */
    set(key: String, value: String): void;

    /**
     * @description Deleta valor correspondente a chave buscada.
    * @param key - Chave da propriedade a ser deletada.
    */
    delete(key: String): void;
}

declare const GlobalStorage: GlobalStorage;

interface Highscores {
    /**
     * @description Adiciona pontos ao Placar
     * @param {String | ScriptEntity} player - Nick ou Usuário que receberá os pontos.
     * @param {Number} points - Quantidade de pontos a serem adicionados.
    */
    add(player: String | ScriptEntity, points: Number): void;

    /**
     * @description Retorna quantos pontos o grupo tem no Placar
     * @param {String[] | ScriptEntity[]} group - Nicks ou Usuários que serão consultados.
     * @returns {Number}
    */
    getScore(group: String[] | ScriptEntity[]): number;

    /**
     * @description Remove pontos do Placar
     * @param {String | ScriptEntity} player - Nick ou Usuário que perderá os pontos.
     * @param {Number} points - Quantidade de pontos a serem removidos.
    */
    remove(player: String | ScriptEntity, points: Number): void;

    /**
     * @description Adiciona pontos a todo o Grupo no Placar
     * @param {String[] | ScriptEntity[]} player - Nicks ou Usuários que receberam os pontos.
     * @param {Number} points - Quantidade de pontos a serem adicionados.
    */
    addGroup(player: String[] | ScriptEntity[], points: Number): void;

    /**
     * @description Retorna quantos pontos o grupo tem no Placar
     * @param {String[] | ScriptEntity[]} group - Nicks ou Usuários que serão consultados.
     * @returns {Number}
    */
    getGroupScore(group: String[] | ScriptEntity[]): number;

    /**
     * @description Remove pontos de todo o Grupo no Placar
     * @param {String | ScriptEntity} player - Nicks ou Usuários que perderam os pontos.
     * @param {Number} points - Quantidade de pontos a serem removidos.
    */
    removeGroup(player: String | ScriptEntity, points: Number): void;

    /**
     * @description Limpa todos os usuários do Placar
     * @param {Number | ScriptFurni} scoreboard - ID ou Furni do Placar.
    */
    clear(scoreboard: Number | ScriptFurni): void;

    /**
     * @description Limpa todos os usuários do Placar
     * @param {Number | ScriptFurni} scoreboard - ID ou Furni do Placar.
    */
    reset(scoreboard: Number | ScriptFurni): void;
}

declare const Highscores: Highscores;

interface RoomStorage {
    /**
    * @description Retorna os dados salvos no quarto a partir da chave de busca. 
    * @param {string} key - Chave da propriedade a ser buscada.
    * @returns {string} 
    */
    get(key: string): string;

    /** 
    * @description Define/Atualiza valor correspondente a chave buscada.
    * @param {string} key - Chave da propriedade a definir.
    * @param {string} value - Novo valor a ser definido.
    */
    set(key: string, value: string): void;

    /** 
    * @description Deleta valor correspondente a chave buscada.
    * @param {string} key - Chave da propriedade a ser deletada.
    * @returns {boolean} - Retorna true caso a chave tenha sido deletada com sucesso.
    */
    delete(key: string): boolean;
}

declare const RoomStorage: RoomStorage;

interface ScriptEntity {
    /**
     * @description Retorna o Balão de fala atual da entidade.
     * @returns {number}
     */
    getBubbleId(): number;

    /**
     * @description Retorna o ID da entidade.
     * @returns {number}
     */
    getId(): number;

    /**
     * @description Retorna o nome da Entidade atual.
     * @returns {string}
     */
    getUsername(): string;

    /**
     * @description Retorna a posição X atual da entidade.
     * @returns {number}
     */
    getX(): number;

    /**
     * @description Retorna a posição Y atual da entidade.
     * @returns {number}
     */
    getY(): number;

    /**
     * @description Retorna a atual posição Z da entidade.
     * @returns {number}
     */
    getZ(): number;

    /**
     * @description Retorna a atual rotação da entidade.
     * @returns {number}
     */
    getR(): number;

    /**
     * @description Retorna o tipo da entidade.
     * @returns {string}
     */
    getType(): string;

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
     * @returns {"M" | "F"}
     */
    getGender(): "M" | "F";

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
     * @returns {0 | 1 | 2 | 3 | 4}
     */
    getDance(): 0 | 1 | 2 | 3 | 4;

    /**
     * @description Retorna objeto com status atual da conquista
     * @param {string} achievement
     * @return {ScriptAchievementProgress}
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
     * @description Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param {IScriptReachable} e - Posição a ser comparada.
     * @returns {number}
     */
    distanceTo(e: IScriptReachable): number;

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
     * @description Retorna se esta entidade é igual a entidade fornecida.
     * @param {ScriptEntity} entity - Entidade que será comparada.
     * @returns {boolean}
     */
    equals(entity: ScriptEntity): boolean;

    /**
     * @description Retorna se esta entidade está sobre a mobilia fornecida.
     * @param {IScriptReachable} furni
     * @returns {boolean}
     */
    in(furni: IScriptReachable): boolean;

    /**
     * @description Retorna se a entidade está em alguma das mobilias fornecidas.
     * @param {IScriptReachable[]} furnis - Lista de mobilias a serem comparadas.
     * @returns {boolean}
     */
    inAny(furnis: IScriptReachable[]): boolean;

    /**
     * @description Retorna se a entidade pode se mover.
     * @returns {boolean}
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
     * @param {IScriptReachable} e
     * @returns {boolean}
     */
    touching(e: IScriptReachable): boolean;

    /**
     * @description Adiciona pontos a uma conquista do usuário.
     * @param {string} code - Código da conquista.
     * @param {number} levels - Quantidade de pontos
     */
    progressAchievement(code: string, levels: number): void;

    /**
     * @description Define o balão de fala da entidade.
     * @param {number} bubbleId - Id do balão que será definido.
     */
    setBubble(bubbleId: number): void;

    /**
     * @description Define uma missão a entidade.
     * @param {string} motto - Missão que será definida na entidade.
     */
    setMotto(motto: string): void;

    /**
     * @description Define o visual para entidade.
     * *Não aplicável a Pets*
     * @param {string} gender - Gênero do visual.
     * @param {string} figure - Código do visual.
     */
    setFigure(gender: string, figure: string): void;

    /**
     * @description Define um item de mão para entidade segurar.
     * @param {number} item - Código do item de mão.
     * @param {number} time - Tempo em segundos que a entidade ficará com o item de mão.
     */
    setHandItem(item: number, time: number): void;

    /**
     * @description Define um efeito a entidade.
     * @param {number} effect - Código do efeito.
     */
    setEffect(effect: number): void;

    /**
     * @description Define a entidade pode ser mover.
     * @param {boolean} can - Se a entidade pode ser mover.
     * @param {boolean} effect - Se a entidade deve receber um efeito de congelado.
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

interface ScriptTile {
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

declare const ScriptTile: ScriptTile;

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
     * @param r - Valor da cor representando Vermelha. (0 a 255)
     * @param g - Valor da cor representando Verde. (0 a 255)
     * @param b - Valor da cor representando Azul. (0 a 255)
     * @param intensity - Valor da intensidade que a cor. *(0: Opaco a 255: Transparente)*
     * @param wallOnly - Se a luz deve ficar só nas paredes.
     */
    setMoodLight(activated: boolean, r: number, g: number, b: number, intensity: number, wallOnly: boolean): void;

    /**
     * @description Altera a cor do plano de fundo do quarto. Formato em HSL.
     * @param h - Valor da Matiz (0 a 255)
     * @param s - Valor da Saturação (0 a 255)
     * @param l - Valor do nivel de claridade da cor. (0 a 255)
     */
    setBackgroundTonerColor(h: number, s: number, l: number): void;

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
