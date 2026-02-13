declare const Room: Room;
declare const Events: Events;
declare const Commands: Commands;
declare const Faker: Faker;
declare const Highscores: Highscores;
declare const GlobalData: GlobalData;
declare const RoomStorage: RoomStorage;
declare const GlobalStorage: GlobalStorage;
declare const Debug: Debug;
declare const Delay: Delay;
declare const Wired: Wired;
declare const Webhook: Webhook;
declare const Utils: Utils;
declare const Pathfinder: Pathfinder;
declare const Sound: Sound;
declare const Variables: Variables;
declare const Database: ScriptDatabaseController;
declare const Currency: Currency;
declare const Trade: Trade;
declare const Furnis: Furnis;
declare const Campaign: Campaign;
declare const HubbeIA: HubbeIA;

/**
 * @interface Room
 * @description Ponto central de controle do ambiente. Gerencia permissões, configurações 
 * visuais (Moodlight), acesso (senhas) e busca de itens ou jogadores no quarto.
 */
interface Room {
    /**
     * Obtém o ID único do quarto.
     * @returns O ID do quarto.
     * @example
     * const roomId = room.getId();
     * Debug.log(`ID do quarto: ${roomId}`);
     */
    getId(): number;

    /**
     * Verifica se um jogador possui direitos no quarto.
     * Inclui direitos concedidos explicitamente e direitos de controle total de rank.
     * @param id O ID do jogador.
     * @returns `true` se o jogador tiver direitos, `false` caso contrário.
     * @example
     * const playerId = 123;
     * if (room.hasRights(playerId)) {
     *     Debug.log(`Jogador ${playerId} tem direitos no quarto.`);
     * } else {
     *     Debug.log(`Jogador ${playerId} não tem direitos no quarto.`);
     * }
     */
    hasRights(id: number): boolean;

    /**
     * Adiciona direitos a um jogador no quarto.
     * O jogador receberá notificações e atualizações de permissão.
     * @param playerId O ID do jogador para adicionar direitos.
     * @example
     * const newRightsPlayerId = 456;
     * room.addRights(newRightsPlayerId);
     * Debug.log(`Direitos concedidos ao jogador ${newRightsPlayerId}.`);
     */
    addRights(playerId: number): void;

    /**
     * Remove os direitos de um jogador no quarto.
     * O jogador perderá as permissões de controle do quarto e receberá notificações.
     * @param playerId O ID do jogador para remover direitos.
     * @example
     * const playerToRemoveRights = 456;
     * room.removeRights(playerToRemoveRights);
     * Debug.log(`Direitos removidos do jogador ${playerToRemoveRights}.`);
     */
    removeRights(playerId: number): void;

    /**
     * Verifica se o recurso de "walkthrough" (caminhar através de entidades) está ativo no quarto.
     * @returns `true` se o walk-through estiver ativo, `false` caso contrário.
     * @example
     * if (room.getWalkThrough()) {
     *     Debug.log("Walk-through está ativado neste quarto.");
     * } else {
     *     Debug.log("Walk-through está desativado neste quarto.");
     * }
     */
    getWalkThrough(): boolean;

    /**
     * Define o estado do recurso de "walkthrough" (caminhar através de entidades) no quarto.
     * @param active `true` para ativar o walk-through, `false` para desativar.
     * @example
     * // Ativa o walk-through
     * room.setWalkThrough(true);
     * Debug.log("Walk-through ativado.");
     *
     * // Desativa o walk-through
     * room.setWalkThrough(false);
     * Debug.log("Walk-through desativado.");
     */
    setWalkThrough(active: boolean): void;

    /**
     * Verifica se o movimento diagonal está permitido no quarto.
     * @returns `true` se o movimento diagonal estiver permitido, `false` caso contrário.
     * @example
     * if (room.getDiagonal()) {
     *     Debug.log("Movimento diagonal permitido.");
     * } else {
     *     Debug.log("Movimento diagonal desativado.");
     * }
     */
    getDiagonal(): boolean;

    /**
     * Define se o movimento diagonal é permitido no quarto.
     * @param diagonal `true` para permitir o movimento diagonal, `false` para desativar.
     * @example
     * // Permite o movimento diagonal
     * room.setDiagonal(true);
     * Debug.log("Movimento diagonal definido como permitido.");
     *
     * // Desativa o movimento diagonal
     * room.setDiagonal(false);
     * Debug.log("Movimento diagonal definido como desativado.");
     */
    setDiagonal(diagonal: boolean): void;

    /**
     * Verifica se o quarto está mudo (impedindo jogadores de falar).
     * @returns `true` se o quarto estiver mudo, `false` caso contrário.
     * @example
     * if (room.getRoomMute()) {
     *     Debug.log("O quarto está atualmente mudo.");
     * } else {
     *     Debug.log("O quarto não está mudo.");
     * }
     */
    getRoomMute(): boolean;

    /**
     * Define o estado de silenciamento do quarto.
     * Quando `mute` é `true`, todos os jogadores (exceto os desmutados manualmente) são silenciados.
     * Quando `mute` é `false`, todos os jogadores que não estavam silenciados manualmente podem falar.
     * @param mute `true` para silenciar o quarto, `false` para desmutar.
     * @example
     * // Silencia o quarto
     * room.setRoomMute(true);
     * Debug.log("Quarto silenciado.");
     *
     * // Desmuta o quarto
     * room.setRoomMute(false);
     * Debug.log("Quarto desmutado.");
     */
    setRoomMute(mute: boolean): void;

    /**
     * Define o nome do quarto.
     * Esta ação salvará as mudanças e enviará atualizações para todos os jogadores no quarto.
     * @param name O novo nome do quarto.
     * @example
     * const newRoomName = "Minha Nova Sala Incrível";
     * room.setName(newRoomName);
     * Debug.log(`O nome do quarto foi alterado para: ${newRoomName}`);
     */
    setName(name: string): void;

    /**
     * Ativa ou desativa o moodlight do quarto.
     * Esta função assume que um moodlight existe e atualiza seu estado.
     * @param active `true` para ativar, `false` para desativar.
     * @example
     * // Ativa o moodlight
     * room.setMoodLight(true);
     * Debug.log("Moodlight ativado.");
     *
     * // Desativa o moodlight
     * room.setMoodLight(false);
     * Debug.log("Moodlight desativado.");
     */
    setMoodLight(active: boolean): void;

    /**
     * Configura o moodlight do quarto com opções detalhadas.
     * @param active `true` para ativar, `false` para desativar.
     * @param color A cor em formato hexadecimal (ex: "#RRGGBB").
     * @param intensity A intensidade do moodlight.
     * @param wallOnly `true` se o moodlight deve afetar apenas as paredes, `false` caso contrário.
     * @example
     * // Ativa o moodlight com cor azul, intensidade média e afetando apenas as paredes
     * room.setMoodLight(true, "#0000FF", 128, true);
     * Debug.log("Moodlight configurado para azul (paredes apenas) com intensidade média.");
     *
     * // Desativa o moodlight
     * room.setMoodLight(false, "#FFFFFF", 0, false);
     * Debug.log("Moodlight desativado e resetado.");
     */
    setMoodLight(active: boolean, color: string, intensity: number, wallOnly: boolean): void;

    /**
     * Define a cor do "Background Toner" do quarto.
     * Esta função procura um item "Background Toner" e atualiza sua cor.
     * @param color A cor em formato hexadecimal (ex: "#RRGGBB").
     * @example
     * // Define o toner de fundo para vermelho
     * room.setBackgroundTonerColor("#FF0000");
     * Debug.log("Cor do Background Toner definida para vermelho.");
     *
     * // Define o toner de fundo para verde
     * room.setBackgroundTonerColor("#00FF00");
     * Debug.log("Cor do Background Toner definida para verde.");
     */
    setBackgroundTonerColor(color: string): void;

    /**
     * Define a velocidade dos rollers no quarto.
     * @param speed O nível de velocidade dos rollers (geralmente de 0 a 2).
     * @example
     * // Define a velocidade dos rollers para o nível 1
     * room.setRollerSpeed(1);
     * Debug.log("Velocidade dos rollers definida para 1.");
     */
    setRollerSpeed(speed: number): void;

    /**
     * Define a senha de acesso ao quarto.
     * O quarto será configurado para o tipo de acesso "PASSWORD".
     * @param password A senha a ser definida.
     * @example
     * const newPassword = "minhasenhasecreta";
     * room.setPassword(newPassword);
     * Debug.log("Senha do quarto definida.");
     */
    setPassword(password: string): void;

    /**
     * Ativa ou desativa o "doorbell" (campainha) do quarto.
     * Quando `active` é `true`, o acesso é via campainha. Quando `false`, o acesso é aberto.
     * @param active `true` para ativar o doorbell, `false` para desativar.
     * @example
     * // Ativa o doorbell
     * room.setDoorbell(true);
     * Debug.log("Doorbell ativado. Os usuários precisarão solicitar entrada.");
     *
     * // Desativa o doorbell (torna o quarto aberto)
     * room.setDoorbell(false);
     * Debug.log("Doorbell desativado. O quarto está aberto para todos.");
     */
    setDoorbell(active: boolean): void;

    /**
     * Envia uma notificação para todos os jogadores no quarto.
     * @param icon O ícone da notificação.
     * @param message A mensagem da notificação.
     * @example
     * room.notification("info", "Bem-vindos ao meu quarto!");
     * Debug.log("Notificação enviada.");
     */
    notification(icon: string, message: string): void;

    /**
     * Envia um alerta para todos os jogadores no quarto.
     * @param message A mensagem do alerta.
     * @example
     * room.alert("Atenção! Evento começando em breve!");
     * Debug.log("Alerta enviado.");
     */
    alert(message: string): void;

    /**
     * Torna o quarto de acesso "aberto", desativando o doorbell.
     * É um atalho para `setDoorbell(false)`.
     * @example
     * room.open();
     * Debug.log("O quarto foi aberto.");
     */
    open(): void;

    /**
     * Abre um vídeo do YouTube para todos os jogadores no quarto.
     * @param url A URL do vídeo do YouTube.
     * @example
     * room.youtube("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
     * Debug.log("Vídeo do YouTube iniciado.");
     */
    youtube(url: string): void;

    /**
     * Transmite um evento de UI de script para todos os clientes no quarto, com dados JSON.
     * Os clientes podem então responder a este evento com JavaScript personalizado.
     * @param eventName O nome do evento UI.
     * @param data Um objeto de dados que será serializado para JSON.
     * @example
     * // Envia um evento "updateScore" com dados
     * room.broadcastUI("updateScore", { userId: 123, score: 100 });
     * Debug.log("Evento 'updateScore' com dados transmitido.");
     */
    broadcastUI(eventName: string, data: object): void;

    /**
     * Transmite um evento de UI de script para todos os clientes no quarto, sem dados adicionais.
     * @param eventName O nome do evento UI.
     * @example
     * // Envia um evento "refreshUI"
     * room.broadcastUI("refreshUI");
     * Debug.log("Evento 'refreshUI' transmitido.");
     */
    broadcastUI(eventName: string): void;

    /**
     * Obtém uma entidade de jogador pelo seu ID.
     * @param id O ID do jogador.
     * @returns A entidade do jogador, ou `null` se não for encontrada.
     * @example
     * const playerEntity = room.getPlayerById(123);
     * if (playerEntity) {
     *     Debug.log(`Encontrado jogador: ${playerEntity.getName()}`);
     * }
     */
    getPlayerById(id: number): ScriptPlayerEntity | null;

    /**
     * Obtém uma entidade de jogador pelo seu nome de usuário.
     * @param username O nome de usuário do jogador.
     * @returns A entidade do jogador, ou `null` se não for encontrada.
     * @example
     * const playerEntity = room.getPlayerByName("CometPlayer");
     * if (playerEntity) {
     *     Debug.log(`Encontrado jogador: ${playerEntity.getName()}`);
     * }
     */
    getPlayerByName(username: string): ScriptPlayerEntity | null;

    /**
     * Obtém o nome do quarto.
     * @returns O nome do quarto.
     * @example
     * const roomName = room.getName();
     * Debug.log(`Nome do quarto: ${roomName}`);
     */
    getName(): string;

    /**
     * Obtém o nome de usuário do proprietário do quarto.
     * @returns O nome de usuário do proprietário.
     * @example
     * const ownerName = room.getOwnerUsername();
     * Debug.log(`Proprietário do quarto: ${ownerName}`);
     */
    getOwnerUsername(): string;

    /**
     * Obtém o ID do proprietário do quarto.
     * @returns O ID do proprietário.
     * @example
     * const ownerId = room.ownerId();
     * Debug.log(`ID do proprietário do quarto: ${ownerId}`);
     */
    ownerId(): number;

    /**
     * Obtém a contagem atual de jogadores no quarto.
     * @returns O número de jogadores no quarto.
     * @example
     * const count = room.userCount();
     * Debug.log(`Número de jogadores no quarto: ${count}`);
     */
    userCount(): number;

    /**
     * Obtém uma entidade de bot pelo seu nome.
     * @param name O nome do bot.
     * @returns A entidade do bot, ou `null` se não for encontrada.
     * @example
     * const botEntity = room.getBotByName("MeuBot");
     * if (botEntity) {
     *     Debug.log(`Encontrado bot: ${botEntity.getName()}`);
     * }
     */
    getBotByName(name: string): ScriptEntity | null;

    /**
     * Obtém uma lista de todas as entidades de jogadores presentes no quarto.
     * @returns Uma lista de entidades de jogadores.
     * @example
     * const players = room.getAllPlayers();
     * Debug.log(`Jogadores no quarto: ${players.map(p => p.getName()).join(', ')}`);
     */
    getAllPlayers(): ScriptPlayerEntity[];

    /**
     * Obtém uma lista de todos os itens de chão (furnis) no quarto.
     * @returns Uma lista de itens de chão.
     * @example
     * const furnis = room.getAllFurnis();
     * Debug.log(`Total de furnis de chão: ${furnis.size()}`);
     */
    getAllFurnis(): ScriptFurniFloor[];

    /**
     * Obtém uma lista de todas as entidades presentes em uma coordenada específica no quarto.
     * @param x A coordenada X.
     * @param y A coordenada Y.
     * @returns Uma lista de entidades na coordenada.
     * @example
     * const entitiesOnTile = room.getEntitiesByCoord(5, 5);
     * Debug.log(`Entidades em (5, 5): ${entitiesOnTile.map(e => e.getName()).join(', ')}`);
     */
    getEntitiesByCoord(x: number, y: number): ScriptEntity[];

    /**
     * Obtém uma lista de itens de chão dentro de uma área retangular definida.
     * @param x1 A coordenada X inicial.
     * @param y1 A coordenada Y inicial.
     * @param x2 A coordenada X final.
     * @param y2 A coordenada Y final.
     * @param isReverse `true` para retornar itens *fora* da área, `false` para itens *dentro* da área.
     * @returns Uma lista de itens de chão na área ou fora dela.
     * @example
     * // Itens dentro da área de (1,1) a (3,3)
     * const itemsInArea = room.getItemsByArea(1, 1, 3, 3);
     * Debug.log(`Itens na área: ${itemsInArea.map(item => item.getId()).join(', ')}`);
     *
     * // Itens fora da área de (1,1) a (3,3)
     * const itemsOutArea = room.getItemsByArea(1, 1, 3, 3, true);
     * Debug.log(`Itens fora da área: ${itemsOutArea.map(item => item.getId()).join(', ')}`);
     */
    getItemsByArea(x1: number, y1: number, x2: number, y2: number, isReverse: boolean): ScriptFurniFloor[];

    /**
     * Obtém uma lista de itens de chão dentro de uma área retangular definida (sem reversão).
     * @param x1 A coordenada X inicial.
     * @param y1 A coordenada Y inicial.
     * @param x2 A coordenada X final.
     * @param y2 A coordenada Y final.
     * @returns Uma lista de itens de chão dentro da área.
     * @example
     * const itemsInArea = room.getItemsByArea(1, 1, 3, 3);
     * Debug.log(`Itens na área: ${itemsInArea.map(item => item.getId()).join(', ')}`);
     */
    getItemsByArea(x1: number, y1: number, x2: number, y2: number): ScriptFurniFloor[];

    /**
     * Obtém uma lista de entidades dentro de uma área retangular definida.
     * @param x1 A coordenada X inicial.
     * @param y1 A coordenada Y inicial.
     * @param x2 A coordenada X final.
     * @param y2 A coordenada Y final.
     * @param isReverse `true` para retornar entidades *fora* da área, `false` para entidades *dentro* da área.
     * @returns Uma lista de entidades na área ou fora dela.
     * @example
     * // Entidades dentro da área de (1,1) a (3,3)
     * const entitiesInArea = room.getEntitiesByArea(1, 1, 3, 3);
     * Debug.log(`Entidades na área: ${entitiesInArea.map(e => e.getName()).join(', ')}`);
     *
     * // Entidades fora da área de (1,1) a (3,3)
     * const entitiesOutArea = room.getEntitiesByArea(1, 1, 3, 3, true);
     * Debug.log(`Entidades fora da área: ${entitiesOutArea.map(e => e.getName()).join(', ')}`);
     */
    getEntitiesByArea(x1: number, y1: number, x2: number, y2: number, isReverse: boolean): ScriptEntity[];

    /**
     * Obtém uma lista de entidades dentro de uma área retangular definida (sem reversão).
     * @param x1 A coordenada X inicial.
     * @param y1 A coordenada Y inicial.
     * @param x2 A coordenada X final.
     * @param y2 A coordenada Y final.
     * @returns Uma lista de entidades dentro da área.
     * @example
     * const entitiesInArea = room.getEntitiesByArea(1, 1, 3, 3);
     * Debug.log(`Entidades na área: ${entitiesInArea.map(e => e.getName()).join(', ')}`);
     */
    getEntitiesByArea(x1: number, y1: number, x2: number, y2: number): ScriptEntity[];

    /**
     * Obtém uma lista de entidades presentes na mesma posição de um item de quarto.
     * @param item O item do quarto.
     * @returns Uma lista de entidades na posição do item.
     * @example
     * // Supondo que você tenha um item de quarto 'myFurni'
     * const myFurni: ScriptFurni = room.getFurniById(12345);
     * if (myFurni) {
     *     const entitiesOnFurni = room.getEntitiesByFurni(myFurni);
     *     Debug.log(`Entidades no furni ${myFurni.getId()}: ${entitiesOnFurni.map(e => e.getName()).join(', ')}`);
     * }
     */
    getEntitiesByFurni(item: ScriptFurni): ScriptEntity[];

    /**
     * Obtém uma lista de entidades presentes nas posições de múltiplos itens de quarto.
     * @param items Um array de itens do quarto.
     * @returns Uma lista de entidades nas posições dos itens.
     * @example
     * // Supondo que você tenha dois itens de quarto
     * const furni1: ScriptFurni = room.getFurniById(123);
     * const furni2: ScriptFurni = room.getFurniById(456);
     *
     * if (furni1 && furni2) {
     *     const entitiesOnFurnis = room.getEntitiesByFurnis([furni1, furni2]);
     *     Debug.log(`Entidades nos furnis: ${entitiesOnFurnis.map(e => e.getName()).join(', ')}`);
     * }
     */
    getEntitiesByFurnis(items: ScriptFurni[]): ScriptEntity[];

    /**
     * Obtém um objeto `RoomTile` (bloco do mapa) em uma coordenada específica.
     * @param x A coordenada X.
     * @param y A coordenada Y.
     * @returns O objeto `RoomTile`, ou `null` se o bloco não existir.
     * @example
     * const tile = room.getTile(5, 5);
     * if (tile) {
     *     Debug.log(`Bloco em (5, 5) existe.`);
     * } else {
     *     Debug.log(`Bloco em (5, 5) não existe.`);
     * }
     */
    getTile(x: number, y: number): ScriptTile | null;

    /**
     * Obtém um item de quarto (furni de chão ou parede) pelo seu ID.
     * @param id O ID do item.
     * @returns O item do quarto, ou `null` se não for encontrado.
     * @example
     * const furni = room.getFurniById(12345);
     * if (furni) {
     *     Debug.log(`Encontrado furni: ${furni.getId()}`);
     * }
     */
    getFurniById(id: number): ScriptFurni | null;

    /**
     * Obtém uma lista de todos os itens de chão (furnis) presentes em um bloco específico.
     * @param x A coordenada X do bloco.
     * @param y A coordenada Y do bloco.
     * @returns Uma lista de itens de chão no bloco.
     * @example
     * const furnisOnTile = room.getFurniByTile(5, 5);
     * Debug.log(`Furnis em (5, 5): ${furnisOnTile.map(f => f.getId()).join(', ')}`);
     */
    getFurniByTile(x: number, y: number): ScriptFurniFloor[];

    /**
     * Obtém uma lista de todos os itens de chão (furnis) que possuem um determinado `spriteId`.
     * @param spriteId O ID do sprite do item.
     * @returns Uma lista de itens de chão com o `spriteId` especificado.
     * @example
     * const chairs = room.getAllFurnisBySpriteId(123); // 123 pode ser o spriteId de uma cadeira
     * Debug.log(`Cadeiras no quarto: ${chairs.map(c => c.getId()).join(', ')}`);
     */
    getAllFurnisBySpriteId(spriteId: number): ScriptFurniFloor[];

    /**
     * Verifica se um bloco (tile) específico existe no mapa do quarto.
     * @param x A coordenada X do bloco.
     * @param y A coordenada Y do bloco.
     * @returns `true` se o bloco existir, `false` caso contrário.
     * @example
     * if (room.tileExists(10, 10)) {
     *     Debug.log("O bloco (10, 10) existe.");
     * } else {
     *     Debug.log("O bloco (10, 10) não existe.");
     * }
     */
    tileExists(x: number, y: number): boolean;

    /**
     * Retorna o item de contador (ScriptCounterFurni) com o ID especificado.
     * @param itemId O ID do item de contador.
     * @returns O `ScriptCounterFurni`, ou `null` se não for encontrado ou não for um contador.
     * @example
     * const counter = room.getCounter(98765);
     * if (counter) {
     *     Debug.log(`Valor do contador: ${counter.getValue()}`);
     * }
     */
    getCounter(itemId: number): ScriptCounterFurni | null;

    /**
     * Define se o quarto é um "quarto bloqueado" (blocked room).
     * Isso pode afetar certas permissões ou comportamentos.
     * @param blockedRoom `true` para bloquear o quarto, `false` para desbloquear.
     * @example
     * room.setBlockedRoom(true);
     * Debug.log("Quarto definido como bloqueado.");
     */
    setBlockedRoom(blockedRoom: boolean): void;

    /**
     * Verifica se o quarto é um "quarto bloqueado" (blocked room).
     * @returns `true` se o quarto estiver bloqueado, `false` caso contrário.
     * @example
     * if (room.isBlockedRoom()) {
     *     Debug.log("Este é um quarto bloqueado.");
     * }
     */
    isBlockedRoom(): boolean;

    /**
     * Verifica se a execução de scripts no quarto está bloqueada.
     * @returns `true` se a execução de scripts estiver bloqueada, `false` caso contrário.
     * @example
     * if (room.isBlockedScript()) {
     *     Debug.log("A execução de scripts está bloqueada neste quarto.");
     * }
     */
    isBlockedScript(): boolean;

    /**
     * Verifica se o quarto é um quarto público.
     * @returns `true` se for um quarto público, `false` caso contrário.
     * @example
     * if (room.isPublicRoom()) {
     *     Debug.log("Este é um quarto público.");
     * }
     */
    isPublicRoom(): boolean;
}

/**
 * @interface ScriptTile
 * @description Representa um bloco (quadrado) do mapa. Fornece dados técnicos de colisão, 
 * altura de caminhada e lista itens ou entidades presentes na coordenada.
 */
interface ScriptTile {
    /**
     * Obtém a altura de caminhada no bloco, considerando itens de chão e configurações de wired.
     * Esta altura determina onde uma entidade "pisa" ao se mover para este bloco.
     * @returns A altura de caminhada no bloco.
     * @example
     * const tile = Room.getTile(5, 5);
     * if (tile) {
     *     const walkHeight = tile.getWalkHeight();
     *     Debug.log(`Altura de caminhada em (5, 5): ${walkHeight}`);
     * }
     */
    getWalkHeight(): number;

    /**
     * Verifica se é possível empilhar itens neste bloco.
     * @returns `true` se for possível empilhar, `false` caso contrário.
     * @example
     * const tile = Room.getTile(3, 4);
     * if (tile && tile.canStack()) {
     *     Debug.log(`É possível empilhar itens em (3, 4).`);
     * } else if (tile) {
     *     Debug.log(`Não é possível empilhar itens em (3, 4).`);
     * }
     */
    canStack(): boolean;

    /**
     * Verifica se o bloco contém um "portão" (gate) ou item semelhante.
     * @returns `true` se houver um portão, `false` caso contrário.
     * @example
     * const tile = Room.getTile(10, 8);
     * if (tile && tile.hasGate()) {
     *     Debug.log(`O bloco em (10, 8) tem um portão.`);
     * }
     */
    hasGate(): boolean;

    /**
     * Obtém a coordenada X da posição do bloco.
     * @returns A coordenada X.
     * @example
     * const tile = Room.getTile(2, 2);
     * if (tile) {
     *     Debug.log(`Coordenada X do bloco: ${tile.getX()}`);
     * }
     */
    getX(): number;

    /**
     * Obtém a coordenada Y da posição do bloco.
     * @returns A coordenada Y.
     * @example
     * const tile = Room.getTile(2, 2);
     * if (tile) {
     *     Debug.log(`Coordenada Y do bloco: ${tile.getY()}`);
     * }
     */
    getY(): number;

    /**
     * Obtém a coordenada Z (altura) da posição base do bloco.
     * @returns A coordenada Z.
     * @example
     * const tile = Room.getTile(2, 2);
     * if (tile) {
     *     Debug.log(`Coordenada Z base do bloco: ${tile.getZ()}`);
     * }
     */
    getZ(): number;

    /**
     * Obtém uma lista de todos os itens de chão (furnis) presentes neste bloco.
     * @returns Uma lista de `ScriptFurniFloor` no bloco.
     * @example
     * const tile = Room.getTile(4, 4);
     * if (tile) {
     *     const furnis = tile.getFurnis();
     *     if (furnis.length > 0) {
     *         Debug.log(`Furnis em (4, 4): ${furnis.map(f => f.getId()).join(', ')}`);
     *     } else {
     *         Debug.log(`Nenhum furni em (4, 4).`);
     *     }
     * }
     */
    getFurnis(): ScriptFurniFloor[];

    /**
     * Obtém um conjunto de todas as entidades (jogadores, bots, pets) presentes neste bloco.
     * @returns Um conjunto de `ScriptEntity` no bloco.
     * @example
     * const tile = Room.getTile(6, 6);
     * if (tile) {
     *     const entities = tile.getEntities();
     *     if (entities.length > 0) {
     *         Debug.log(`Entidades em (6, 6): ${entities.map(e => e.getId()).join(', ')}`);
     *     } else {
     *         Debug.log(`Nenhuma entidade em (6, 6).`);
     *     }
     * }
     */
    getEntities(): ScriptEntity[];

    /**
     * Obtém o item de chão (furni) que está no topo do bloco.
     * @returns O `ScriptFurniFloor` no topo, ou `null` se não houver itens.
     * @example
     * const tile = Room.getTile(5, 5);
     * if (tile) {
     *     const topFurni = tile.getTopFurni();
     *     if (topFurni) {
     *         Debug.log(`ID do furni no topo de (5, 5): ${topFurni.getId()}`);
     *     } else {
     *         Debug.log(`Nenhum furni no topo de (5, 5).`);
     *     }
     * }
     */
    getTopFurni(): ScriptFurniFloor | null;

    /**
     * Verifica se há algum item de chão (furni) no bloco.
     * @returns `true` se houver pelo menos um furni, `false` caso contrário.
     * @example
     * const tile = Room.getTile(7, 7);
     * if (tile && tile.hasFurni()) {
     *     Debug.log(`O bloco em (7, 7) tem furnis.`);
     * } else if (tile) {
     *     Debug.log(`O bloco em (7, 7) não tem furnis.`);
     * }
     */
    hasFurni(): boolean;

    /**
     * Verifica se há alguma entidade (jogador, bot, pet) no bloco.
     * @returns `true` se houver pelo menos uma entidade, `false` caso contrário.
     * @example
     * const tile = Room.getTile(8, 8);
     * if (tile && tile.hasEntities()) {
     *     Debug.log(`O bloco em (8, 8) tem entidades.`);
     * } else if (tile) {
     *     Debug.log(`O bloco em (8, 8) não tem entidades.`);
     * }
     */
    hasEntities(): boolean;

    /**
     * Verifica se um item pode ser colocado neste bloco.
     * Considera o estado do mapa e possíveis barreiras.
     * @returns `true` se um item puder ser colocado, `false` caso contrário.
     * @example
     * const tile = Room.getTile(9, 9);
     * if (tile && tile.canPlaceItem()) {
     *     Debug.log(`É possível colocar um item em (9, 9).`);
     * } else if (tile) {
     *     Debug.log(`Não é possível colocar um item em (9, 9).`);
     * }
     */
    canPlaceItem(): boolean;

    /**
     * Verifica se o wired está desativado para este bloco.
     * @returns `true` se o wired estiver desativado, `false` caso contrário.
     * @example
     * const tile = Room.getTile(1, 1);
     * if (tile && tile.isDisableWired()) {
     *     Debug.log(`O wired está desativado para o bloco em (1, 1).`);
     * }
     */
    isDisableWired(): boolean;

    /**
     * Verifica se o bloco possui um item de "movimento limitado mágico".
     * @returns `true` se tiver um item de movimento limitado mágico, `false` caso contrário.
     * @example
     * const tile = Room.getTile(5, 2);
     * if (tile && tile.hasMagicLimitedMovement()) {
     *     Debug.log(`O bloco em (5, 2) tem um item de movimento limitado mágico.`);
     * }
     */
    hasMagicLimitedMovement(): boolean;

    /**
     * Verifica se este é um bloco válido no mapa do quarto.
     * @returns `true` se for um bloco válido, `false` caso contrário.
     * @example
     * const tile = Room.getTile(0, 0); // Exemplo de um bloco que pode ser inválido
     * if (tile && tile.isValidTile()) {
     *     Debug.log(`O bloco em (0, 0) é um tile válido.`);
     * } else if (tile) {
     *     Debug.log(`O bloco em (0, 0) não é um tile válido.`);
     * }
     */
    isValidTile(): boolean;

    /**
     * Verifica se o bloco está escondido por uma área de esconder (area hide).
     * @returns `true` se estiver escondido, `false` caso contrário.
     * @example
     * const tile = Room.getTile(1, 2);
     * if (tile && tile.isHiddenByAreaHide()) {
     *     Debug.log(`O bloco em (1, 2) está escondido por uma área de esconder.`);
     * }
     */
    isHiddenByAreaHide(): boolean;

    /**
     * Verifica se o bloco está bloqueado por uma área de esconder (area hide), impedindo movimento.
     * @returns `true` se estiver bloqueado, `false` caso contrário.
     * @example
     * const tile = Room.getTile(2, 3);
     * if (tile && tile.isBlockedByAreaHide()) {
     *     Debug.log(`O bloco em (2, 3) está bloqueado por uma área de esconder.`);
     * }
     */
    isBlockedByAreaHide(): boolean;
}

/**
 * @interface ScriptEntity
 * @description Interface base para seres vivos ou simulados (Players, Bots, Pets). 
 * Controla movimentos físicos, estados visuais, efeitos e localização.
 */
interface ScriptEntity extends ScriptPosition {
    /**
     * Obtém o ID único da entidade.
     */
    getId(): number;

    /**
     * Obtém a coordenada X atual.
     */
    getX(): number;

    /**
     * Obtém a coordenada Y atual.
     */
    getY(): number;

    /**
     * Obtém a coordenada Z (altitude) atual.
     */
    getZ(): number;

    /**
     * Obtém a rotação atual do corpo da entidade.
     */
    getR(): number;

    /**
     * Verifica se a entidade está em "moonwalking".
     */
    isMoonwalking(): boolean;

    /**
     * Define o estado de "moonwalking" para a entidade.
     */
    setMoonwalking(moonwalking: boolean): void;

    /**
     * Verifica se a entidade está ociosa (AFK).
     */
    isIdle(): boolean;

    /**
     * Desativa o estado de ociosidade (AFK) da entidade.
     */
    unIdle(): void;

    /**
     * Obtém o ID do item que a entidade está segurando.
     */
    getHandItem(): number;

    /**
     * Define o item na mão e o tempo de duração.
     */
    setHandItem(id: number, time: number): void;

    /**
     * Remove o item da mão da entidade.
     */
    removeHandItem(): void;

    /**
     * Define um efeito visual.
     */
    setEffect(effectId: number): void;

    /**
     * Define um efeito visual com duração específica.
     */
    setEffect(eId: number, time: number): void;

    /**
     * Obtém o efeito atual da entidade.
     */
    getEffect(): ScriptPlayerEffect;

    /**
     * Remove o efeito visual atual.
     */
    removeEffect(): void;

    /**
     * Kica a entidade do quarto.
     */
    kick(): void;

    /**
     * Verifica se a entidade pode andar.
     */
    canWalk(): boolean;

    /**
     * Define se a entidade pode andar, com opção de aplicar efeito de "freeze".
     */
    setCanWalk(can: boolean, effect: boolean): void;

    /**
     * Cancela o movimento atual.
     */
    cancelWalk(): void;

    /**
     * Verifica se a entidade está andando.
     */
    isWalking(): boolean;

    /**
     * Define a visibilidade da entidade no quarto.
     */
    setVisibleInRoom(visible: boolean): void;

    /**
     * Verifica se a entidade está visível no quarto.
     */
    isVisibleInRoom(): boolean;

    /**
     * Faz a entidade olhar para uma coordenada específica.
     */
    lookTo(x: number, y: number, body: boolean): void;

    /**
     * Faz a entidade olhar para outra entidade.
     */
    lookTo(entity: ScriptEntity): void;

    /**
     * Faz a entidade olhar para outra entidade, com opção de girar o corpo.
     */
    lookTo(entity: ScriptEntity, body: boolean): void;

    /**
     * Faz a entidade olhar para uma posição, com opção de girar o corpo.
     */
    lookTo(pos: ScriptPosition, body: boolean): void;

    /**
     * Define a animação de dança.
     */
    setDance(danceId: number): void;

    /**
     * Obtém o ID da dança atual.
     */
    getDance(): number;

    /**
     * Move a entidade para uma coordenada.
     */
    walk(x: number, y: number): void;

    /**
     * Move a entidade para uma posição.
     */
    walk(pos: ScriptPosition): void;

    /**
     * Teleporta a entidade com altura e rotação específicas.
     */
    teleport(x: number, y: number, z: number, rotation: number): void;

    /**
     * Teleporta a entidade (altura automática).
     */
    teleport(x: number, y: number): void;

    /**
     * Teleporta a entidade com rotação (altura automática).
     */
    teleport(x: number, y: number, rotation: number): void;

    /**
     * Teleporta para a posição de um objeto.
     */
    teleport(obj: ScriptFurniFloor | ScriptEntity | ScriptPosition): void;

    /**
     * Executa uma ação visual (acenar, etc).
     */
    action(action: number): void;

    /**
     * Postura padrão.
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
     * Verifica se a entidade está na posição de um item.
     */
    in(ent: ScriptFurniFloor): boolean;

    /**
     * Verifica se a entidade está em qualquer um dos itens fornecidos.
     */
    inAny(items: ScriptFurniFloor[]): boolean;

    /**
     * Move a entidade (pode ignorar travas de pathfinder dependendo do contexto).
     */
    move(x: number, y: number): void;

    /**
     * Verifica se está em um teletransporte.
     */
    usingTeleportItem(): boolean;

    /**
     * Obtém o tipo da entidade.
     */
    getType(): ScriptRoomEntityType;

    /**
     * Verifica se é jogador.
     */
    isPlayer(): boolean;

    /**
     * Verifica se é bot.
     */
    isBot(): boolean;

    /**
     * Verifica se é fake player.
     */
    isFakePlayer(): boolean;

    /**
     * Verifica se é fake bot.
     */
    isFakeBot(): boolean;

    /**
     * Verifica se é pet.
     */
    isPet(): boolean;

    /**
     * Obtém o time atual.
     */
    getGameTeam(): ScriptGameTeam;

    /**
     * Obtém o tipo de time.
     */
    getTeamType(): number;

    /**
     * Obtém o ID do jogador (0 se não for player).
     */
    getPlayerId(): number;

    /**
     * Obtém o ID da ação atual.
     */
    getActionId(): number;

    /**
     * Define a coordenada X via sistema de variáveis Wired.
     * Útil para movimentações forçadas.
     */
    setX(value: number): void;

    /**
     * Define a coordenada Y via sistema de variáveis Wired.
     */
    setY(value: number): void;

    /**
     * Define a altitude (Z) via sistema de variáveis Wired.
     */
    setZ(value: number): void;

    /**
     * Define a rotação via sistema de variáveis Wired.
     */
    setRotation(value: number): void;
}

interface ScriptPlayerEffect {
    getEffectId(): number;
    duration(): number;
}

declare enum ScriptRoomEntityType {
    PLAYER = "PLAYER",
    BOT = "BOT",
    PET = "PET",
    FAKE_PLAYER = "FAKE_PLAYER",
    FAKE_BOT = "FAKE_BOT"
}

declare enum ScriptGameTeam {
    /** Sem time (ID: 0) */
    NONE = "NONE",
    /** Time Vermelho (ID: 1) - Letra: 'r' - Balão: 47 */
    RED = "RED",
    /** Time Verde (ID: 2) - Letra: 'g' - Balão: 50 */
    GREEN = "GREEN",
    /** Time Azul (ID: 3) - Letra: 'b' - Balão: 48 */
    BLUE = "BLUE",
    /** Time Amarelo (ID: 4) - Letra: 'y' - Balão: 49 */
    YELLOW = "YELLOW"
}

/**
 * @interface ScriptPlayerEntity
 * @description Extensão de ScriptEntity para jogadores reais. Inclui funções sociais 
 * (amizades, emblemas), financeiras e carregamento de interfaces (UI) customizadas.
 */
interface ScriptPlayerEntity extends ScriptEntity {
    /**
     * Verifica se a entidade é amigo de outro jogador pelo ID.
     * @param playerId O ID do jogador a ser verificado.
     * @returns `true` se forem amigos, `false` caso contrário.
     * @example
     * if (playerEntity.isFriend(123)) {
     *     Debug.log("Este jogador é meu amigo.");
     * }
     */
    isFriend(playerId: number): boolean;

    /**
     * Obtém o ID do jogador associado a esta entidade.
     * @returns O ID do jogador.
     * @override
     * @example
     * const playerId = playerEntity.getPlayerId();
     * Debug.log(`ID do jogador: ${playerId}`);
     */
    getPlayerId(): number;

    /**
     * Obtém o nome de usuário do jogador.
     * @returns O nome de usuário.
     * @example
     * const username = playerEntity.getUsername();
     * Debug.log(`Nome de usuário: ${username}`);
     */
    getUsername(): string;

    /**
     * Obtém o apelido (nickname) do jogador.
     * @returns O apelido do jogador.
     * @example
     * const nickname = playerEntity.getNickname();
     * Debug.log(`Apelido: ${nickname}`);
     */
    getNickname(): string;

    /**
     * Obtém o rank do jogador.
     * @returns O rank do jogador.
     * @example
     * const rank = playerEntity.getRank();
     * Debug.log(`Rank do jogador: ${rank}`);
     */
    getRank(): number;

    /**
     * Obtém o lema (motto) do jogador.
     * @returns O lema do jogador.
     * @example
     * const motto = playerEntity.getMotto();
     * Debug.log(`Lema do jogador: ${motto}`);
     */
    getMotto(): string;

    /**
     * Obtém a figura (visual) do jogador.
     * @returns A string da figura.
     * @example
     * const figure = playerEntity.getFigure();
     * Debug.log(`Figura do jogador: ${figure}`);
     */
    getFigure(): string;

    /**
     * Obtém o gênero do jogador.
     * @returns O gênero ("M" ou "F").
     * @example
     * const gender = playerEntity.getGender();
     * Debug.log(`Gênero do jogador: ${gender}`);
     */
    getGender(): string;

    /**
     * Obtém o progresso de uma conquista pelo seu código.
     * @param achievement O código da conquista.
     * @returns O objeto `IAchievementProgress`.
     * @example
     * const progress = playerEntity.getAchievementProgress("ACH_EXPLORER");
     * if (progress) {
     *     Debug.log(`Progresso do explorador: ${progress.getLevel()}`);
     * }
     */
    getAchievementProgress(achievement: string): IAchievementProgress; // Assumindo IAchievementProgress

    /**
     * Obtém a quantidade de diamantes do jogador.
     * @returns A quantidade de diamantes.
     * @example
     * const diamonds = playerEntity.getDiamonds();
     * Debug.log(`Diamantes: ${diamonds}`);
     */
    getDiamonds(): number;

    /**
     * Obtém a quantidade de duckets do jogador.
     * @returns A quantidade de duckets.
     * @example
     * const duckets = playerEntity.getDuckets();
     * Debug.log(`Duckets: ${duckets}`);
     */
    getDuckets(): number;

    /**
     * Obtém a quantidade de créditos do jogador.
     * @returns A quantidade de créditos.
     * @example
     * const credits = playerEntity.getCredits();
     * Debug.log(`Créditos: ${credits}`);
     */
    getCredits(): number;

    /**
     * Obtém a quantidade de pontos de conquista do jogador.
     * @returns A quantidade de pontos de conquista.
     * @example
     * const achPoints = playerEntity.getAchievementPoints();
     * Debug.log(`Pontos de conquista: ${achPoints}`);
     */
    getAchievementPoints(): number;

    /**
     * Faz o jogador dizer uma mensagem, com a opção de gritar e usar um balão de chat personalizado.
     * @param message A mensagem a ser dita.
     * @param shout `true` para gritar, `false` para falar normalmente.
     * @param bubble O ID do balão de chat (0 para o padrão).
     * @example
     * playerEntity.say("Olá a todos!", false, 1); // Fala com balão 1
     * playerEntity.say("SOCORRO!", true, 0); // Grita com balão padrão
     */
    say(message: string, shout: boolean, bubble: number): void;

    /**
     * Faz o jogador dizer uma mensagem usando um balão de chat personalizado.
     * @param message A mensagem a ser dita.
     * @param bubble O ID do balão de chat (0 para o padrão).
     * @example
     * playerEntity.say("Que dia lindo!", 2); // Fala com balão 2
     */
    say(message: string, bubble: number): void;

    /**
     * Faz o jogador dizer uma mensagem usando o balão de chat padrão.
     * @param message A mensagem a ser dita.
     * @example
     * playerEntity.say("Tudo bem?");
     */
    say(message: string): void;

    /**
     * Verifica se o jogador possui um emblema específico.
     * @param code O código do emblema.
     * @returns `true` se o jogador possuir o emblema, `false` caso contrário.
     * @example
     * if (playerEntity.hasBadge("ADM")) {
     *     Debug.log("O jogador tem o emblema ADM.");
     * }
     */
    hasBadge(code: string): boolean;

    /**
     * Concede um emblema ao jogador.
     * @param code O código do emblema.
     * @example
     * playerEntity.giveBadge("EVENTO1");
     * Debug.log("Emblema EVENTO1 concedido.");
     */
    giveBadge(code: string): void;

    /**
     * Remove um emblema do jogador.
     * @param code O código do emblema.
     * @example
     * playerEntity.removeBadge("EVENTO1");
     * Debug.log("Emblema EVENTO1 removido.");
     */
    removeBadge(code: string): void;

    /**
     * Verifica se o jogador possui um rank igual ou superior ao especificado.
     * @param rank O valor mínimo do rank.
     * @returns `true` se o jogador tiver o rank necessário, `false` caso contrário.
     * @example
     * if (playerEntity.hasRank(4)) {
     *     Debug.log("O jogador é um moderador ou superior.");
     * }
     */
    hasRank(rank: number): boolean;

    /**
     * Avança o progresso de uma conquista para o jogador.
     * @param code O código da conquista.
     * @param levels A quantidade de níveis para progredir.
     * @example
     * playerEntity.progressAchievement("ACH_BUILDER", 1); // Aumenta 1 nível na conquista de construtor
     */
    progressAchievement(code: string, levels: number): void;

    /**
     * Define o lema (motto) do jogador.
     * @param motto O novo lema. Será abreviado se for muito longo.
     * @example
     * playerEntity.setMotto("Meu novo lema!");
     * Debug.log("Lema atualizado.");
     */
    setMotto(motto: string): void;

    /**
     * Faz o jogador ir para outro quarto.
     * @param roomId O ID do quarto de destino.
     * @example
     * playerEntity.goToRoom(12345); // Vai para o quarto 12345
     * Debug.log("Redirecionando para outro quarto.");
     */
    goToRoom(roomId: number): void;

    /**
     * Calcula a distância entre a entidade e uma posição.
     * @param pos A posição alvo.
     * @returns A distância em double.
     * @example
     * const targetPos = { x: 5, y: 5, z: 0 };
     * const dist = playerEntity.distanceTo(targetPos);
     * Debug.log(`Distância para (5,5): ${dist}`);
     */
    distanceTo(pos: ScriptPosition): number;

    /**
     * Calcula a distância entre a entidade e uma coordenada X, Y, Z.
     * @param x A coordenada X.
     * @param y A coordenada Y.
     * @param z A coordenada Z.
     * @returns A distância em double.
     * @example
     * const dist = playerEntity.distanceTo(10, 10, 0.5);
     * Debug.log(`Distância para (10,10,0.5): ${dist}`);
     */
    distanceTo(x: number, y: number, z: number): number;

    /**
     * Calcula a distância entre a entidade e a posição de outro objeto (Item de chão ou Entidade).
     * @param obj O objeto alvo (ScriptFurniFloor ou ScriptEntity).
     * @returns A distância em double.
     * @example
     * const furni = Room.getFurniById(123);
     * if (furni) {
     *     const dist = playerEntity.distanceTo(furni);
     *     Debug.log(`Distância para o furni: ${dist}`);
     * }
     */
    distanceTo(obj: ScriptFurniFloor | ScriptEntity): number;

    /**
     * Verifica se a entidade está tocando (na mesma posição) outro objeto (Item de chão ou Entidade).
     * @param obj O objeto alvo (ScriptFurniFloor ou ScriptEntity).
     * @returns `true` se estiver tocando, `false` caso contrário.
     * @example
     * const otherPlayer = Room.getPlayerById(456);
     * if (otherPlayer && playerEntity.touching(otherPlayer)) {
     *     Debug.log("O jogador está tocando outro jogador.");
     * }
     */
    touching(obj: ScriptFurniFloor | ScriptEntity): boolean;

    /**
     * Verifica se a entidade está tocando (na mesma posição) uma posição específica.
     * @param pos A posição alvo.
     * @returns `true` se estiver tocando, `false` caso contrário.
     * @example
     * const targetPos = { x: 2, y: 2, z: 0 };
     * if (playerEntity.touching(targetPos)) {
     *     Debug.log("O jogador está tocando a posição (2,2).");
     * }
     */
    touching(pos: ScriptPosition): boolean;

    /**
     * Verifica se a entidade está tocando (na mesma posição) uma coordenada X, Y, Z específica.
     * @param x A coordenada X.
     * @param y A coordenada Y.
     * @param z A coordenada Z.
     * @returns `true` se estiver tocando, `false` caso contrário.
     * @example
     * if (playerEntity.touching(1, 1, 0)) {
     *     Debug.log("O jogador está tocando (1,1,0).");
     * }
     */
    touching(x: number, y: number, z: number): boolean;

    /**
     * Define a figura (visual) e o gênero do jogador.
     * @param gender O novo gênero ("M" ou "F").
     * @param figure A nova string da figura.
     * @example
     * playerEntity.setFigure("F", "lg-275-62.hr-150-42.sh-305-62...");
     * Debug.log("Figura e gênero atualizados.");
     */
    setFigure(gender: string, figure: string): void;

    /**
     * Envia uma mensagem particular (sussurro) para o jogador.
     * @param message A mensagem a ser enviada.
     * @example
     * playerEntity.message("Esta é uma mensagem privada para você.");
     */
    message(message: string): void;

    /**
     * Envia uma mensagem particular (sussurro) para o jogador com um balão de chat personalizado.
     * @param message A mensagem a ser enviada.
     * @param bubble O ID do balão de chat (0 para o padrão).
     * @example
     * playerEntity.message("Olá!", 3); // Mensagem com balão 3
     */
    message(message: string, bubble: number): void;

    /**
     * Sussurra uma mensagem para outra entidade de jogador, com balão opcional.
     * @param entity A entidade do jogador que receberá o sussurro.
     * @param message A mensagem a ser sussurrada.
     * @param bubble O ID do balão de chat (0 para o padrão).
     * @example
     * const targetPlayer = Room.getPlayerByName("OutroJogador");
     * if (targetPlayer) {
     *     playerEntity.whisper(targetPlayer, "Psst, segredo!", 0);
     * }
     */
    whisper(entity: ScriptPlayerEntity, message: string, bubble: number): void;

    /**
     * Obtém o ID do balão de chat atual do jogador.
     * @returns O ID do balão de chat.
     * @example
     * const bubbleId = playerEntity.getBubbleId();
     * Debug.log(`Balão de chat atual: ${bubbleId}`);
     */
    getBubbleId(): number;

    /**
     * Define o ID do balão de chat do jogador.
     * @param bubbleId O novo ID do balão de chat.
     * @example
     * playerEntity.setBubbleId(4); // Define o balão de chat como 4
     */
    setBubbleId(bubbleId: number): void;

    /**
     * Envia um alerta (popup) para o jogador.
     * @param message A mensagem do alerta.
     * @example
     * playerEntity.alert("Atenção! Você ganhou um prêmio!");
     */
    alert(message: string): void;

    /**
     * Envia uma notificação (toast) para o jogador.
     * @param icon O ícone da notificação.
     * @param message A mensagem da notificação.
     * @example
     * playerEntity.notification("info", "Você tem novas mensagens.");
     */
    notification(icon: string, message: string): void;

    /**
     * Abre um vídeo do YouTube para o jogador.
     * @param link A URL do vídeo do YouTube.
     * @example
     * playerEntity.youtube("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
     */
    youtube(link: string): void;

    /**
     * Obtém o ID do quarto atual do jogador.
     * @returns O ID do quarto.
     * @example
     * const roomId = playerEntity.getRoomId();
     * Debug.log(`ID do quarto atual: ${roomId}`);
     */
    getRoomId(): number;

    /**
     * Carrega uma interface de usuário de script (UI) no cliente do jogador.
     * @param scriptName O nome do script.
     * @param fileName O nome do arquivo da UI.
     * @example
     * playerEntity.loadUI("myScript", "myInterface.html");
     */
    loadUI(scriptName: string, fileName: string): void;

    /**
     * Envia uma mensagem para uma interface de usuário de script (UI) no cliente do jogador com dados JSON.
     * @param eventName O nome do evento UI.
     * @param data Uma string JSON ou um objeto que será serializado para JSON.
     * @example
     * playerEntity.sendUIMessage("updateScore", '{"score": 100}');
     * playerEntity.sendUIMessage("updateUser", { id: 1, name: "Teste" });
     */
    sendUIMessage(eventName: string, data: string | object): void;

    /**
     * Envia uma mensagem para uma interface de usuário de script (UI) no cliente do jogador sem dados adicionais.
     * @param eventName O nome do evento UI.
     * @example
     * playerEntity.sendUIMessage("refreshView");
     */
    sendUIMessage(eventName: string): void;

    /**
     * Descarta uma interface de usuário de script (UI) específica no cliente do jogador.
     * @param eventName O nome do evento associado à UI.
     * @param data Dados adicionais para o descarte.
     * @example
     * playerEntity.disposeUI("myScript", "extraData");
     */
    disposeUI(eventName: string, data: string): void;

    /**
     * Descarta *todas* as interfaces de usuário de script (UI) no cliente do jogador.
     * @example
     * playerEntity.disposeUIAll();
     */
    disposeUIAll(): void;

    /**
     * Remove um item do inventário do jogador pelo seu ID.
     * @param itemId O ID único do item.
     * @example
     * playerEntity.removeItemByItemId(123456789);
     */
    removeItemByItemId(itemId: number): void;

    /**
     * Remove um item do inventário do jogador pelo seu Sprite ID. Remove apenas uma unidade.
     * Requer o escopo "manageitems" no quarto.
     * @param spriteId O Sprite ID do item.
     * @example
     * playerEntity.removeItemBySpriteId(123); // Remove 1 item com spriteId 123
     */
    removeItemBySpriteId(spriteId: number): void;

    /**
     * Remove uma quantidade específica de itens do inventário do jogador pelo seu Sprite ID.
     * Requer o escopo "manageitems" no quarto.
     * @param spriteId O Sprite ID do item.
     * @param quantity A quantidade de itens a remover.
     * @example
     * playerEntity.removeItemBySpriteId(456, 5); // Remove 5 itens com spriteId 456
     */
    removeItemBySpriteId(spriteId: number, quantity: number): void;

    /**
     * Verifica se o inventário do jogador está carregado.
     * @returns `true` se o inventário estiver carregado, `false` caso contrário.
     * @example
     * if (playerEntity.inventoryLoaded()) {
     *     Debug.log("Inventário carregado.");
     * }
     */
    inventoryLoaded(): boolean;

    /**
     * Verifica se o jogador possui pelo menos uma unidade de um item pelo seu Sprite ID.
     * @param spriteId O Sprite ID do item.
     * @returns `true` se o jogador possuir o item, `false` caso contrário.
     * @example
     * if (playerEntity.hasItemBySpriteId(789)) {
     *     Debug.log("O jogador possui o item 789.");
     * }
     */
    hasItemBySpriteId(spriteId: number): boolean;

    /**
     * Verifica se o jogador possui uma quantidade específica de um item pelo seu Sprite ID.
     * @param spriteId O Sprite ID do item.
     * @param quantity A quantidade mínima do item.
     * @returns `true` se o jogador possuir a quantidade, `false` caso contrário.
     * @example
     * if (playerEntity.hasItemBySpriteId(987, 3)) {
     *     Debug.log("O jogador possui 3 ou mais itens 987.");
     * }
     */
    hasItemBySpriteId(spriteId: number, quantity: number): boolean;

    /**
     * Obtém a contagem de itens de um determinado Sprite ID no inventário do jogador.
     * @param spriteId O Sprite ID do item.
     * @returns A quantidade de itens.
     * @example
     * const count = playerEntity.getItemCountBySpriteId(111);
     * Debug.log(`O jogador tem ${count} itens 111.`);
     */
    getItemCountBySpriteId(spriteId: number): number;

    /**
     * Adiciona uma unidade de um item ao inventário do jogador pelo seu Sprite ID.
     * Requer o escopo "manageitems" no quarto.
     * @param spriteId O Sprite ID do item.
     * @example
     * playerEntity.addItemBySpriteId(222); // Adiciona 1 item com spriteId 222
     */
    addItemBySpriteId(spriteId: number): void;

    /**
     * Adiciona uma quantidade específica de itens ao inventário do jogador pelo seu Sprite ID.
     * Requer o escopo "manageitems" no quarto.
     * @param spriteId O Sprite ID do item.
     * @param quantity A quantidade de itens a adicionar.
     * @example
     * playerEntity.addItemBySpriteId(333, 10); // Adiciona 10 itens com spriteId 333
     */
    addItemBySpriteId(spriteId: number, quantity: number): void;

    /**
     * Adiciona uma quantidade específica de itens ao inventário do jogador pelo seu Sprite ID, com um ícone de notificação.
     * Requer o escopo "manageitems" no quarto.
     * @param spriteId O Sprite ID do item.
     * @param quantity A quantidade de itens a adicionar.
     * @param notificationIcon O ícone a ser exibido na notificação.
     * @example
     * playerEntity.addItemBySpriteId(444, 2, "trophy"); // Adiciona 2 itens 444 com ícone de troféu
     */
    addItemBySpriteId(spriteId: number, quantity: number, notificationIcon: string): void;

    /**
     * Define se o jogador pode interagir com itens.
     * @param canInteract `true` para permitir interações, `false` para bloqueá-las.
     * @example
     * playerEntity.setCanInteract(false); // Bloqueia interações
     */
    setCanInteract(canInteract: boolean): void;

    /**
     * Verifica se o jogador pode interagir com itens.
     * @returns `true` se puder interagir, `false` caso contrário.
     * @example
     * if (playerEntity.canInteract()) {
     *     Debug.log("O jogador pode interagir.");
     * }
     */
    canInteract(): boolean;

    /**
     * Verifica se o jogador pode interagir com um item específico pelo seu ID.
     * Leva em conta `setCanInteract` e `setNonInteractableItems`.
     * @param itemId O ID do item.
     * @returns `true` se puder interagir, `false` caso contrário.
     * @example
     * if (playerEntity.canInteract(555666)) {
     *     Debug.log("Pode interagir com o item 555666.");
     * }
     */
    canInteract(itemId: number): boolean;

    /**
     * Define uma lista de itens com os quais o jogador *não* pode interagir.
     * Se `canInteract(false)` foi chamado, essa lista define exceções.
     * @param nonInteractableItems Uma lista de IDs de itens.
     * @example
     * playerEntity.setNonInteractableItems([123, 456, 789]); // Não pode interagir com esses itens
     */
    setNonInteractableItems(nonInteractableItems: number[]): void;

    /**
     * Obtém o valor de memória associado ao jogador como uma string.
     * @returns O valor de memória como string.
     * @example
     * const memory = playerEntity.getMemoryValue();
     * Debug.log(`Valor de memória: ${memory}`);
     */
    getMemoryValue(): string;

    /**
     * Obtém o valor de memória associado ao jogador como um número (double).
     * @returns O valor de memória como número.
     * @example
     * const memory = playerEntity.getMemoryValueDouble();
     * Debug.log(`Valor de memória (double): ${memory}`);
     */
    getMemoryValueDouble(): number;

    /**
     * Obtém o valor de memória associado a uma chave específica para o jogador como uma string.
     * @param key A chave do valor de memória.
     * @returns O valor de memória como string.
     * @example
     * const data = playerEntity.getMemoryValue("playerName");
     * Debug.log(`Nome salvo: ${data}`);
     */
    getMemoryValue(key: string): string;

    /**
     * Obtém o valor de memória associado a uma chave específica para o jogador como um número (double).
     * @param key A chave do valor de memória.
     * @returns O valor de memória como número.
     * @example
     * const score = playerEntity.getMemoryValueDouble("playerScore");
     * Debug.log(`Score salvo: ${score}`);
     */
    getMemoryValueDouble(key: string): number;

    /**
     * Define o valor de memória principal associado ao jogador como uma string.
     * @param value O valor a ser definido.
     * @example
     * playerEntity.setMemoryValue("Olá mundo!");
     */
    setMemoryValue(value: string): void;

    /**
     * Define um valor de memória para uma chave específica associada ao jogador como uma string.
     * @param key A chave do valor de memória.
     * @param value O valor a ser definido.
     * @example
     * playerEntity.setMemoryValue("status", "ativo");
     */
    setMemoryValue(key: string, value: string): void;

    /**
     * Define o valor de memória principal associado ao jogador como um número (double).
     * @param value O valor a ser definido.
     * @example
     * playerEntity.setMemoryValue(123.45);
     */
    setMemoryValue(value: number): void;

    /**
     * Define um valor de memória para uma chave específica associada ao jogador como um número (double).
     * @param key A chave do valor de memória.
     * @param value O valor a ser definido.
     * @example
     * playerEntity.setMemoryValue("level", 50);
     */
    setMemoryValue(key: string, value: number): void;

    /**
     * Obtém uma lista de todos os códigos de emblemas que o jogador possui.
     * @returns Uma lista de strings com os códigos dos emblemas.
     * @example
     * const badges = playerEntity.getBadges();
     * Debug.log(`Emblemas do jogador: ${badges.join(', ')}`);
     */
    getBadges(): string[];

    /**
     * Obtém uma lista de todos os amigos do jogador.
     * @returns Uma lista de objetos `IMessengerFriend`.
     * @example
     * const friends = playerEntity.getFriends();
     * Debug.log(`Total de amigos: ${friends.length}`);
     */
    getFriends(): IMessengerFriend[];

    /**
     * Verifica se o jogador está em processo de teletransporte.
     * @returns `true` se estiver teleportando, `false` caso contrário.
     * @example
     * if (playerEntity.isTeleporting()) {
     *     Debug.log("O jogador está teleportando.");
     * }
     */
    isTeleporting(): boolean;

    /**
     * Obtém o código da tecla que o jogador está pressionando.
     * @returns O código da tecla.
     * @example
     * const key = playerEntity.getKeyPressing();
     * Debug.log(`Tecla pressionada: ${key}`);
     */
    getKeyPressing(): number;

    /**
     * Verifica se o jogador possui status VIP.
     * @returns `true` se for VIP, `false` caso contrário.
     * @example
     * if (playerEntity.isVip()) {
     *     Debug.log("O jogador é VIP!");
     * }
     */
    isVip(): boolean;

    /**
     * Cancela o balão de chat para a próxima mensagem.
     * @param cancelBubble `true` para cancelar o balão, `false` para permitir.
     * @example
     * playerEntity.cancelBubble(true); // A próxima fala não terá balão
     */
    cancelBubble(cancelBubble: boolean): void;

    /**
     * Verifica se o balão de chat está cancelado para a próxima mensagem.
     * @returns `true` se o balão estiver cancelado, `false` caso contrário.
     * @example
     * if (playerEntity.isCancelBubble()) {
     *     Debug.log("Balão de chat está cancelado.");
     * }
     */
    isCancelBubble(): boolean;

    /**
     * Ativa ou desativa o "click-through" (passagem de cliques) para o jogador em jogos.
     * Isso permite que cliques passem por cima da entidade do jogador.
     * @param clickThrough `true` para ativar, `false` para desativar.
     * @example
     * playerEntity.setClickThrough(true); // Ativa click-through
     */
    setClickThrough(clickThrough: boolean): void;
}

interface ScriptPlayerData {
    getId(): number;
    getRank(): number;
    getUsername(): string;
    getAchievementPoints(): number;
    getMotto(): string;
    getFigure(): string;
    getGender(): string;
    getDiamonds(): number;
    getDuckets(): number;
    getHubbeCoins(): number;
    getPromoCoins(): number;
    getSeasonalPoints(): number;
    getRegDate(): string;
    getLastOnlineTimestamp(): number;
    isVip(): boolean;
    getRegTimestamp(): number;
    getFavouriteGroup(): number;
    getPontosHallPromo(): number;
    getPontosHallPresenca(): number;
    getPontosHallEvento(): number;
    isTradeLocked(): boolean;
    getBubbleId(): number;
    hasEarlyAccess(): boolean;
    getStartVipTimestamp(): number;
    getEndVipTimestamp(): number;
}

interface IAchievementProgress {
    getLevel(): number;
    getProgress(): number;
}

/**
 * @interface IMessengerFriend
 * @description Representa um vínculo de amizade no console do jogador, permitindo verificar 
 * se o amigo está online ou em qual quarto se encontra.
 */
interface IMessengerFriend {
    isInRoom(): boolean;
    getAvatar(): ScriptPlayerData;
}

/**
 * @interface ScriptBotEntity
 * @description Especialização para Bots. Permite configurar falas programadas, 
 * visuais e lemas sem a necessidade de uma conta de jogador real.
 */
interface ScriptBotEntity extends ScriptEntity {
    /**
     * Faz o bot dizer uma mensagem com o balão de fala padrão.
     * @param message A mensagem a ser dita.
     * @example
     * bot.say("Olá, como posso ajudar?");
     */
    say(message: string): void;

    /**
     * Faz o bot dizer uma mensagem, com opção de gritar e definir o balão de chat.
     * @param message A mensagem a ser dita.
     * @param shout `true` para gritar, `false` para falar normalmente.
     * @param bubble O ID do balão de chat.
     * @example
     * bot.say("BEM-VINDOS!", true, 31);
     */
    say(message: string, shout: boolean, bubble: number): void;

    /**
     * Envia um sussurro do bot para um jogador específico.
     * @param entity A entidade do jogador que receberá o sussurro.
     * @param message A mensagem privada.
     * @param bubble O ID do balão de chat.
     * @example
     * const player = Room.getPlayerByName("User123");
     * if (player) {
     * bot.whisper(player, "Aqui está sua chave secreta.", 34);
     * }
     */
    whisper(entity: ScriptPlayerEntity, message: string, bubble: number): void;

    /**
     * Obtém o nome de usuário do bot.
     * @returns O nome do bot.
     */
    getUsername(): string;

    /**
     * Define um novo nome para o bot e atualiza para todos no quarto.
     * @param username O novo nome.
     */
    setUsername(username: string): void;

    /**
     * Obtém o lema (motto) atual do bot.
     * @returns O lema do bot.
     */
    getMotto(): string;

    /**
     * Define o lema (motto) do bot.
     * @param motto O novo lema (máximo 38 caracteres).
     */
    setMotto(motto: string): void;

    /**
     * Obtém a string da figura (visual) do bot.
     * @returns A string de visual.
     */
    getFigure(): string;

    /**
     * Define um novo visual para o bot.
     * @param figure A string de visual (look).
     */
    setFigure(figure: string): void;

    /**
     * Obtém o gênero do bot.
     * @returns "M" ou "F".
     */
    getGender(): string;

    /**
     * Verifica se o bot é um "fake bot" (criado temporariamente via script).
     * @returns `true` se for fake, `false` se for um bot de banco de dados.
     */
    isFakeBot(): boolean;

    /**
     * Obtém o ID único do bot.
     * @returns O ID do bot.
     */
    getPlayerId(): number;
}

/**
 * @interface FakeScriptPlayerEntity
 * @description Entidade híbrida que se comporta como Bot, mas emula propriedades de 
 * jogadores reais, como inventário de moedas e emblemas.
 */
interface FakeScriptPlayerEntity extends ScriptBotEntity {
    /**
     * Adiciona um emblema ao perfil temporário do fake player.
     * @param code Código do emblema (ex: "ADM").
     */
    addBadge(code: string): void;

    /**
     * Verifica se o fake player possui um determinado emblema.
     * @param code Código do emblema.
     */
    hasBadge(code: string): boolean;

    /**
     * Remove um emblema do fake player.
     * @param code Código do emblema.
     */
    removeBadge(code: string): void;

    /**
     * Define ou atualiza um nível de relacionamento com um jogador real.
     * @param user O ID do jogador alvo.
     * @param level O nível: 1 (Coração), 2 (Sorriso), 3 (Bobba). 0 para remover.
     * @example
     * fakePlayer.addRelationship(123, 1); // Define como 'Coração' para o player 123
     */
    addRelationship(user: number, level: number): void;

    /**
     * Obtém o nível de relacionamento atual com um jogador.
     * @param playerId O ID do jogador.
     * @returns O ID do nível de relacionamento.
     */
    getRelationship(playerId: number): number;

    /**
     * Remove qualquer relacionamento existente com o jogador especificado.
     * @param playerId O ID do jogador.
     */
    removeRelationship(playerId: number): void;

    /**
     * Obtém a quantidade de diamantes definida nos dados do fake player.
     */
    getDiamonds(): number;

    /**
     * Obtém a quantidade de duckets definida nos dados do fake player.
     */
    getDuckets(): number;

    /**
     * Obtém a quantidade de créditos definida nos dados do fake player.
     */
    getCredits(): number;

    /**
     * Verifica se a entidade é um fake player.
     * @returns Sempre `true` nesta interface.
     */
    isFakePlayer(): boolean;

    /**
     * Sobrescreve a verificação de bot.
     * @returns Retorna `false`, pois ele emula um jogador.
     */
    isBot(): boolean;
}

/**
 * @interface ScriptPetEntity
 * @description Interface para gerenciamento de animais de estimação. Focada em 
 * estados biológicos (energia, felicidade, fome) e interação com o dono.
 */
interface ScriptPetEntity extends ScriptEntity {
    /**
     * Remove o pet do quarto atual.
     * @example
     * pet.leaveRoom();
     */
    leaveRoom(): void;

    /**
     * Obtém os dados detalhados do pet.
     * @returns Um objeto contendo as propriedades básicas do pet (nome, tipo, raça, dono).
     * @example
     * const petData = pet.getData();
     * Debug.log(`Nome do pet: ${petData.getName()}`);
     */
    getData(): IPetData;

    /**
     * Obtém o ID único do pet no banco de dados.
     * @returns O ID do pet.
     * @override
     * @example
     * const petId = pet.getPlayerId();
     */
    getPlayerId(): number;
}

interface IPetData {
    /**
     * Obtém o ID único do pet.
     * @returns O ID do pet.
     * @example
     * const petId = petData.getId();
     */
    getId(): number;

    /**
     * Obtém o nome do pet.
     * @returns O nome do pet.
     */
    getName(): string;

    /**
     * Obtém o nível atual de treinamento/evolução do pet.
     * @returns O nível do pet.
     */
    getLevel(): number;

    /**
     * Obtém o nível de felicidade atual do pet (0-100).
     * @returns O valor da felicidade.
     */
    getHappiness(): number;

    /**
     * Obtém a experiência acumulada do pet.
     * @returns A experiência atual.
     */
    getExperience(): number;

    /**
     * Obtém a quantidade de experiência necessária para alcançar o próximo nível.
     * @returns A meta de experiência.
     */
    getExperienceGoal(): number;

    /**
     * Obtém o nível de energia atual do pet.
     * @returns O valor da energia.
     */
    getEnergy(): number;

    /**
     * Obtém o ID do proprietário (jogador) do pet.
     * @returns O ID do dono.
     */
    getOwnerId(): number;

    /**
     * Obtém a cor do pet em formato hexadecimal.
     * @returns A cor do pet.
     */
    getColour(): string;

    /**
     * Obtém o ID da raça (raceId) do pet.
     * @returns O ID da raça.
     */
    getRaceId(): number;

    /**
     * Obtém a posição atual do pet no quarto.
     * @returns Um objeto ScriptPosition contendo x, y e z.
     */
    getRoomPosition(): ScriptPosition;

    /**
     * Verifica se o pet está selado (específico para cavalos).
     * @returns `true` se tiver sela, `false` caso contrário.
     */
    isSaddled(): boolean;

    /**
     * Verifica se o pet permite que qualquer usuário o monte.
     * @returns `true` se for permitido, `false` caso contrário.
     */
    isAnyRider(): boolean;

    /**
     * Obtém a contagem de carinhos (scratches) que o pet recebeu.
     * @returns O número de carinhos.
     */
    getScratches(): number;

    /**
     * Obtém o timestamp do nascimento/criação do pet.
     * @returns O timestamp do aniversário.
     */
    getBirthday(): number;

    /**
     * Obtém o nome de usuário do proprietário do pet.
     * @returns O nome do dono.
     */
    getOwnerName(): string;

    /**
     * Obtém o nível de fome atual do pet (0-100).
     * @returns O valor da fome.
     */
    getHunger(): number;

    /**
     * Obtém o ID do quarto onde o pet está localizado.
     * @returns O ID do quarto.
     */
    getRoomId(): number;
}

/**
 * @interface ScriptFurni
 * @description Interface base para todos os objetos (móveis). Controla posição 3D, 
 * visibilidade, estados de interação e opacidade.
 */
interface ScriptFurni extends ScriptPosition {
    /**
     * Obtém o ID único do item.
     * @returns O ID do furni.
     */
    getId(): number;

    /**
     * Obtém o ID da definição (base) do item.
     * @returns O ID da definição.
     */
    getDefinitionId(): number;

    /**
     * Obtém a coordenada X atual do item.
     */
    getX(): number;

    /**
     * Obtém a coordenada Y atual do item.
     */
    getY(): number;

    /**
     * Obtém a coordenada Z (altura) atual do item.
     */
    getZ(): number;

    /**
     * Obtém a rotação atual do item.
     */
    getR(): number;

    /**
     * Obtém o estado atual (extra data) do item.
     * @returns Uma string representando o estado (ex: "1" para ligado, "0" para desligado).
     */
    getCurrentState(): string;

    /**
     * Obtém o ID do Sprite do item.
     */
    getSprite(): number;

    /**
     * Obtém o nome interno do item (ex: "ads_background").
     */
    getName(): string;

    /**
     * Obtém o nome público do item. Se for um item raro com tier, inclui o nome do tier.
     */
    getPublicName(): string;

    /**
     * Retorna uma lista de todas as entidades que estão sobre ou interagindo com este item.
     */
    getAllEntities(): ScriptEntity[];

    /**
     * Obtém o tipo de interação do item (ex: "default", "gate", "wired").
     */
    getInteractionType(): string;

    /**
     * Obtém a quantidade de estados/modos de interação que o item possui.
     */
    getInteractionModesCount(): number;

    /**
     * Obtém a altura de empilhamento (stack height) definida para este item.
     */
    getStackHeight(): number;

    /**
     * Obtém a largura do item em tiles.
     */
    getItemWidth(): number;

    /**
     * Obtém o comprimento do item em tiles.
     */
    getItemLength(): number;

    /**
     * Obtém a altura visual atual (Z) do item.
     */
    getItemHeight(): number;

    /**
     * Verifica se há alguma entidade sobre o item.
     */
    hasEntities(): boolean;

    /**
     * Verifica se o item permite que entidades sentem nele.
     */
    canSit(): boolean;

    /**
     * Verifica se o item permite que entidades caminhem sobre ele.
     */
    canWalk(): boolean;

    /**
     * Verifica se o item permite empilhamento de outros itens sobre ele.
     */
    canStack(): boolean;

    /**
     * Torna o item visível para todos os jogadores no quarto.
     */
    show(): void;

    /**
     * Esconde o item para todos os jogadores no quarto (apenas visualmente).
     */
    hide(): void;

    /**
     * Torna o item visível para um jogador específico.
     */
    show(entity: ScriptPlayerEntity): void;

    /**
     * Esconde o item para um jogador específico.
     */
    hide(entity: ScriptPlayerEntity): void;

    /**
     * Alterna o estado do item para o próximo modo de interação disponível.
     */
    toggleState(): void;

    /**
     * Move um item de parede para uma nova posição.
     * @param x1 Coordenada de parede X1.
     * @param x2 Coordenada de parede X2.
     * @param y1 Coordenada de parede Y1.
     * @param y2 Coordenada de parede Y2.
     * @param side Lado da parede ("l" ou "r").
     */
    moveWall(x1: number, x2: number, y1: number, y2: number, side: string): void;

    /**
     * Move um item de chão com opções avançadas de animação e força.
     * @param x Nova coordenada X.
     * @param y Nova coordenada Y.
     * @param z Nova altura Z.
     * @param rot Nova rotação.
     * @param force Se deve forçar o movimento ignorando colisões.
     * @param animation Se deve exibir a animação de deslize.
     * @param animationTime Tempo da animação em milissegundos.
     */
    move(x: number, y: number, z: number, rot: number, force: boolean, animation: boolean, animationTime: number): void;
    move(x: number, y: number, z: number, rot: number, force: boolean, animation: boolean): void;
    move(x: number, y: number, z: number, rot: number, force: boolean): void;
    move(x: number, y: number, z: number, rot: number): void;
    move(pos: ScriptPosition, rot: number, force: boolean): void;
    move(pos: ScriptPosition, rot: number, force: boolean, animation: boolean): void;

    /**
     * Move o item para coordenadas X e Y, calculando a altura automaticamente se keepHeight for false.
     */
    move(x: number, y: number, keepHeight: boolean, force: boolean, animation: boolean, animationTime: number): void;
    move(x: number, y: number): void;

    /**
     * Teletransporta o item instantaneamente para a posição especificada.
     */
    warp(x: number, y: number, z: number): void;
    warp(x: number, y: number, z: number, ignoreEntities: boolean, ignoreFurnis: boolean): void;

    /**
     * Define o estado (extra data) do item manualmente.
     * @param val O novo valor do estado.
     */
    setState(val: string): void;
    setState(val: number): void;

    /**
     * Se o item for LTD, retorna o número da unidade. Caso contrário, retorna -1.
     */
    getLimitedUnit(): number;

    /**
     * Se o item for LTD, retorna o total de unidades produzidas. Caso contrário, retorna -1.
     */
    getLimitedTotal(): number;

    /**
     * Verifica se o item está marcado como escondido.
     */
    isHidden(): boolean;

    /**
     * Obtém o nível de opacidade atual do item (0 a 10).
     */
    getOpacity(): number;

    /**
     * Altera a opacidade do item para todos no quarto.
     * @param opacity Valor entre 0 (transparente) e 10 (opaco).
     */
    changeOpacity(opacity: number): void;

    /**
     * Altera a opacidade do item apenas para um jogador específico.
     */
    changeOpacity(playerEntity: ScriptPlayerEntity, opacity: number): void;
}

interface FakeFloorItem extends ScriptFurni {

}

/**
 * @interface ScriptFurniFloor
 * @description Especialização para móveis de chão. Permite manipular propriedades 
 * físicas de colisão, altura e empilhamento dinamicamente via script.
 */
interface ScriptFurniFloor extends ScriptFurni {
    /**
     * Recolhe o item do quarto e o devolve ao inventário do proprietário.
     * @example
     * furni.pick();
     */
    pick(): void;

    /**
     * Verifica se as propriedades do item foram modificadas em relação à sua definição original.
     * @returns `true` se houver modificações ativas.
     */
    isModified(): boolean;

    /**
     * Altera a altura de empilhamento (stack height) deste item específico.
     * @param height A nova altura.
     * @example
     * furni.changeHeight(1.5);
     */
    changeHeight(height: number): void;

    /**
     * Reseta a altura do item para o valor padrão da definição original.
     */
    changeHeight(): void;

    /**
     * Define se as entidades podem sentar neste item.
     * @param canSit `true` para permitir sentar.
     */
    changeCanSit(canSit: boolean): void;

    /**
     * Reseta a permissão de sentar para o valor padrão da definição original.
     */
    changeCanSit(): void;

    /**
     * Define se o item é atravessável (entidades podem andar sobre ele).
     * @param canWalk `true` para tornar o item atravessável.
     */
    changeWalkable(canWalk: boolean): void;

    /**
     * Reseta a propriedade de atravessável para o valor padrão da definição original.
     */
    changeWalkable(): void;

    /**
     * Define se outros itens podem ser empilhados sobre este.
     * @param canStack `true` para permitir empilhamento.
     */
    changeStackable(canStack: boolean): void;

    /**
     * Reseta a propriedade de empilhamento para o valor padrão da definição original.
     */
    changeStackable(): void;

    /**
     * Altera a quantidade de estados de interação (ciclos) do item.
     * @param cycleCount Nova contagem de ciclos.
     */
    changeCycleCount(cycleCount: number): void;

    /**
     * Reseta a contagem de ciclos de interação para o valor padrão da definição original.
     */
    changeCycleCount(): void;

    /**
     * Define a coordenada X do item utilizando o sistema interno de variáveis Wired.
     * @param value Nova coordenada X.
     */
    setX(value: number): void;

    /**
     * Define a coordenada Y do item utilizando o sistema interno de variáveis Wired.
     * @param value Nova coordenada Y.
     */
    setY(value: number): void;

    /**
     * Define a altitude (Z) do item utilizando o sistema interno de variáveis Wired.
     * @param value Nova altitude.
     */
    setZ(value: number): void;

    /**
     * Define a rotação (R) do item utilizando o sistema interno de variáveis Wired.
     * @param value Nova rotação.
     */
    setR(value: number): void;
}

interface ScriptFurniWall extends ScriptFurni {
    /**
     * Recolhe o item de parede do quarto e o envia de volta para o inventário do proprietário.
     * @example
     * const wallItem = room.getFurniById(98765);
     * if (wallItem) {
     * wallItem.pick();
     * }
     */
    pick(): void;
}

interface ScriptCounterFurni extends ScriptFurniFloor {
}

interface ScriptPosition {
    /**
     * Obtém a coordenada X.
     * @returns O valor de X.
     * @example
     * const x = pos.getX();
     */
    getX(): number;

    /**
     * Obtém a coordenada Y.
     * @returns O valor de Y.
     * @example
     * const y = pos.getY();
     */
    getY(): number;

    /**
     * Obtém a coordenada Z (altura).
     * @returns O valor de Z.
     * @example
     * const z = pos.getZ();
     */
    getZ(): number;

    /**
     * Compara se esta posição é igual a outra posição (baseado em X e Y).
     * @param o O objeto de posição a ser comparado.
     * @returns `true` se as coordenadas X e Y forem iguais.
     */
    equals(o: any): boolean;
}

declare enum keyCodes {
    CTRL = 1,
    ALT = 2,
    SHIFT = 3,
    UP = 4,
    DOWN = 5,
    LEFT = 6,
    RIGHT = 7
}

declare enum ScriptVariableAvailabilityType {
    USER_IN_ROOM = 0,
    ROOM_ACTIVE = 1,
    PERMANENT = 10,
    PERMANENT_SHARED = 11,
    REFERENCE = 20,
    SMART = 21,
    INTERNAL = 100,
    ECHO = 101
}

declare enum ScriptVariableType {
    FURNI = 0,
    USER = 1,
    GLOBAL = -10,
    CONTEXT = -20
}

type VariableTextsEntry = Record<number, string>;

type ScriptVariableFurniEntry = Record<number, ScriptVariableFurni>;

/**
 * @interface ScriptFurnitureDefinition
 * @description Contém os dados técnicos e propriedades fixas de um móvel vindos 
 * diretamente do catálogo (spriteId, nome técnico, se é wired, se permite sentar, etc).
 */
interface ScriptFurnitureDefinition {

    /**
     * Verifica se o móvel é de anúncio.
     */
    isAdFurni(): boolean;

    /**
     * Verifica se é decoração de quarto (wall/floor/landscape).
     */
    isRoomDecor(): boolean;

    /**
     * Verifica se o móvel é um teleporte.
     */
    isTeleporter(): boolean;

    /**
     * Verifica se o móvel possui música.
     */
    isSong(): boolean;

    /**
     * Retorna o nome público do item.
     */
    getPublicName(): string;

    /**
     * Retorna o nome interno do item.
     */
    getItemName(): string;

    /**
     * Retorna a largura do item.
     */
    getWidth(): number;

    /**
     * Retorna o comprimento do item.
     */
    getLength(): number;

    /**
     * Retorna a altura do item.
     */
    getHeight(): number;

    /**
     * Retorna o sprite ID.
     */
    getSpriteId(): number;

    /**
     * Retorna o tipo de interação.
     */
    getInteraction(): string;

    /**
     * Retorna a quantidade de ciclos de interação.
     */
    getInteractionCycleCount(): number;

    /**
     * Retorna o ID do efeito.
     */
    getEffectId(): number;

    /**
     * Retorna os IDs de vending.
     */
    getVendingIds(): string[];

    /**
     * Verifica se pode empilhar.
     */
    canStack(): boolean;

    /**
     * Verifica se pode sentar.
     */
    canSit(): boolean;

    /**
     * Verifica se pode deitar.
     */
    canLay(): boolean;

    /**
     * Verifica se é caminhável.
     */
    canWalk(): boolean;

    /**
     * Verifica se pode ser trocado.
     */
    canTrade(): boolean;

    /**
     * Verifica se pode ser reciclado.
     */
    canRecycle(): boolean;

    /**
     * Verifica se pode ser deletado.
     */
    canDeletable(): boolean;

    /**
     * Verifica se pode ser escondido.
     */
    isHideable(): boolean;

    /**
     * Verifica se é wired.
     */
    isWired(): boolean;
}

interface ItemFakeSpawnData {
    baseId: number;
    x: number;
    y: number;
    z: number;
    rotation: number;
}

/**
 * @interface ScriptVariable
 * @description Representa uma variável lógica vinculada a um objeto ou contexto. 
 * Permite armazenar valores numéricos ou textos que podem ser interceptados por Wireds.
 */
interface ScriptVariable {
    /**
     * @description Retorna o nome da variável.
     * @returns {string}
     */
    getVariableName(): string;

    /**
     * @description Retorna o ID da variável.
     * @returns {number}
     */
    getVariableId(): number;

    /**
     * @description Retorna o ID do item associado à variável.
     * @returns {number}
     */
    getItemId(): number;

    /**
     * @description Retorna o ID do quarto associado à variável.
     * @returns {number}
     */
    getRoomId(): number;

    /**
     * @description Retorna o ID do proprietário associado à variável.
     * @returns {number}
     */
    getOwnerId(): number;

    /**
     * @description Retorna o tipo de disponibilidade da variável.
     * @returns {ScriptVariableAvailabilityType}
     */
    getAvailabilityType(): ScriptVariableAvailabilityType;

    /**
     * @description Retorna o tipo da variável.
     * @returns {ScriptVariableType}
     */
    getVariableType(): ScriptVariableType;

    /**
     * @description Retorna o alvo da variável.
     * @returns {ScriptVariableType}
     */
    getVariableTarget(): ScriptVariableType;

    /**
     * @description Retorna o item associado à variável.
     * @returns {ScriptFurni}
     */
    getVariableItem(): ScriptFurni;

    /**
     * @description Retorna os textos associados à variável.
     * @returns {VariableTextsEntry[]}
     */
    getVariableTexts(): VariableTextsEntry[];

    /**
     * @description Verifica se a variável está sempre disponível.
     * @returns {boolean}
     */
    isAlwaysAvailable(): boolean;

    /**
     * @description Verifica se a variável está invisível.
     * @returns {boolean}
     */
    isInvisible(): boolean;

    /**
     * @description Verifica se a variável tem um valor.
     * @returns {boolean}
     */
    hasValue(): boolean;

    /**
     * @description Verifica se a variável tem textos associados.
     * @returns {boolean}
     */
    hasTexts(): boolean;

    /**
     * @description Verifica se a variável pode ser escrita.
     * @returns {boolean}
     */
    canWriteTo(): boolean;

    /**
     * @description Verifica se a variável pode ser criada e excluída.
     * @returns {boolean}
     */
    canCreateAndDelete(): boolean;

    /**
     * @description Verifica se a variável pode interceptar mudanças.
     * @returns {boolean}
     */
    canInterceptChanges(): boolean;
}

interface ScriptVariableData {
    /**
     * @description Retorna o valor da variável.
     * @returns {number}
     */
    getValue(): number;

    /**
     * @description Retorna o timestamp de criação da variável.
     * @returns {number}
     */
    getCreationTime(): number;

    /**
     * @description Retorna o timestamp da última atualização da variável.
     * @returns {number}
     */
    getUpdateTime(): number;
}

interface ScriptVariableUserData extends ScriptVariableData {
    /**
     * @description Retorna o ID do jogador.
     * @returns {number}
     */
    getPlayerId(): number;

    /**
     * @description Retorna o nome do jogador.
     * @returns {string}
     */
    getUsername(): string;
}

interface ScriptVariableUser extends ScriptVariable {
    /**
     * @description Retorna todos os dados das variáveis dos usuários.
     * @returns {ScriptVariableUserData[]}
     */
    getUserVariablesData(): ScriptVariableUserData[];

    /**
     * @description Retorna os dados da variável do usuário específico.
     * @param {number} playerId - ID do usuário.
     * @returns {ScriptVariableUserData}
     */
    getUserVariableData(playerId: number): ScriptVariableUserData;

    /**
     * @description Retorna os dados da variável do bot específico.
     * @param {number} botId - ID do bot.
     * @returns {ScriptVariableUserData}
     */
    getBotVariableData(botId: number): ScriptVariableUserData;

    /**
     * @description Retorna os dados da variável do pet específico.
     * @param {number} petId - ID do pet.
     * @returns {ScriptVariableUserData}
     */
    getPetVariableData(petId: number): ScriptVariableUserData;
}

interface ScriptVariableFurniData extends ScriptVariableData {
    /**
     * @description Retorna o ID do furni.
     * @return {number}
     */
    getItemId(): number;
}

interface ScriptVariableFurni extends ScriptVariable {
    /**
     * @description Retorna os dados da variável do furni específico.
     * @param {number} furniId - ID do furni.
     * @return {ScriptVariableFurniData}
     */
    getFurniVariableData(furniId: number): ScriptVariableFurniData;

    /**
     * @description Retorna todos os dados das variáveis dos furnis.
     * @return {ScriptVariableFurniEntry}
     */
    getFurniVariablesData(): ScriptVariableFurniEntry;
}

interface ScriptVariableGlobal extends ScriptVariable {
    /**
     * @description Retorna os dados da variável global.
     * @returns {ScriptVariableData}
     */
    getValue(): number;

    /**
     * @description Retorna o timestamp de criação da variável global.
     * @return {number}
     */
    getCreationTime(): number;

    /**
     * @description Retorna o timestamp da última atualização da variável global.
     * @return {number}
     */
    getUpdatedTime(): number;
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
     * @param {string} hexadecimal - Cor hexadecimal que será definida no Embed do Webhook
     * @returns {WebhookMessage}
    */
    setColor(hexadecimal: string): WebhookMessage;

    /**
     * @description Adiciona um campo com titulo e descrição no Embed do Webhook
     * @param {string} titleField - Titulo do campo
     * @param {string} valueField - Descrição do campo
     * @param {boolean} inline - Se o campo será inline
     * @default inline = false
     * @returns {WebhookMessage}
    */
    addField(titleField: string, valueField: string, inline: boolean): WebhookMessage;

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

interface ScriptEventHandlers {
    "userJoin": (player: ScriptPlayerEntity) => void;
    "userLeave": (player: ScriptPlayerEntity) => void;
    "userIdle": (entity: ScriptEntity) => void;
    "userWakeUp": (entity: ScriptEntity) => void;
    "say": (player: ScriptPlayerEntity, message: string, shout: boolean) => void;
    "stepOn": (entity: ScriptEntity, furni: ScriptFurniFloor) => void;
    "stepOff": (entity: ScriptEntity, furni: ScriptFurniFloor) => void;
    "interact": (entity: ScriptEntity, furni: ScriptFurni) => void;
    "furniSelected": (player: ScriptPlayerEntity, furni: ScriptFurni) => void;
    "playerSelected": (selector: ScriptPlayerEntity, target: ScriptPlayerEntity) => void;
    "fakePlayerSelected": (selector: ScriptPlayerEntity, target: FakeScriptPlayerEntity) => void;
    "botSelected": (selector: ScriptPlayerEntity, target: ScriptBotEntity) => void;
    "floorClicked": (player: ScriptPlayerEntity, position: ScriptPosition) => void;
    "floorItemPlaced": (player: ScriptPlayerEntity, furni: ScriptFurni) => void;
    "floorItemPickedup": (player: ScriptPlayerEntity, furni: ScriptFurni) => void;
    "floorItemMoved": (player: ScriptPlayerEntity, furni: ScriptFurni) => void;
    "serverMessage": (fromRoomId: number, event: string, data: string) => void;
    "uiMessage": (player: ScriptPlayerEntity, eventName: string, data: any) => void;
    "keyDown": (player: ScriptPlayerEntity, keyCode: number) => void;
    "keyUp": (player: ScriptPlayerEntity, keyCode: number) => void;
    "walk": (entity: ScriptEntity) => void;
    "cannon": (entity: ScriptEntity, target: ScriptEntity, furni: ScriptFurniFloor) => void;
    "tick": () => void;
    "shortTick": () => void;
    "load": () => void;
    "dispose": () => void;
}

type ScriptEventType = keyof ScriptEventHandlers;

/**
 * @interface Events
 * @description O motor reativo do script. Permite ouvir ações do quarto (como entrar 
 * ou falar) e possibilita a comunicação entre scripts de diferentes quartos.
 */
interface Events {
    /**
     * Inscreve um callback para um evento do quarto com tipagem dinâmica.
     * @param type O nome do evento.
     * @param handler A função que recebe os parâmetros específicos do evento.
     */
    on<K extends ScriptEventType>(type: K, handler: ScriptEventHandlers[K]): void;

    /**
     * Envia uma mensagem para o evento "serverMessage" de outro quarto.
     * @param roomId ID do quarto alvo.
     * @param event Nome do evento/identificador.
     * @param data Dados em string (geralmente JSON).
     */
    sendMessageToRoom(roomId: number, event: string, data: string): void;
}

interface CommandCallback {
    /**
     * @description Função que será executada quando o comando for chamado.
     * @param {ScriptPlayerEntity} entity - Entidade que chamou o comando.
     * @param {string} message - Argumentos passados no comando.
     * @returns {void}
     */
    (entity: ScriptPlayerEntity, message: string): void;
}

/**
 * @interface Commands
 * @description Gerencia a criação de comandos de chat personalizados (ex: :limpar), 
 * definindo argumentos e permissões de execução.
 */
interface Commands {
    /**
     * @description Registra um comando para ser executado.
     * @param {string | string[]} commandName - Nome do comando a ser registrado.
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
    register(commandName: string | string[], needStart: boolean, callback: CommandCallback): void;

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
    register(commandName: string, callback: CommandCallback): void;

    /**
     * @description Remove um comando registrado.
     * @param {string | string[]} commandName - Nome do comando a ser removido.
     * 
     * @example
     * // exemplo de uso:
     * Commands.unregister('comando');
     * @returns {void}
     */
    unregister(commandName: string | string[]): void;
}

/**
 * @interface Faker
 * @description Ferramenta de simulação. Cria móveis e entidades "fantasmas" que 
 * existem apenas visualmente, sem persistência no banco de dados do quarto.
 */
interface Faker {
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
    createFakeItem(baseId: number, x: number, y: number, z: number, r: number): FakeFloorItem;

    /**
     * Cria vários itens falsos iguais.
     * @param baseId ID da sprite base.
     * @param x Posição X inicial.
     * @param y Posição Y inicial.
     * @param z Altura Z.
     * @param r Rotação.
     * @param quantity Quantidade de itens a gerar.
     * @example
     * // Cria 10 cadeiras na mesma posição
     * const list = Faker.createFakeItems(1, 5, 5, 0, 0, 10);
     */
    createFakeItems(baseId: number, x: number, y: number, z: number, r: number, quantity: number): FakeFloorItem[];

    /**
     * Cria vários itens falsos personalizados via lista.
     * @param items Lista de objetos ItemFakeSpawnData.
     * @example
     * const data = [
     *   { baseId: 1, x: 2, y: 2, z: 0, rotation: 0 },
     *   { baseId: 2, x: 3, y: 2, z: 0, rotation: 2 },
     * ];
     * const list = Faker.createFakeItems(data);
     */
    createFakeItems(items: ItemFakeSpawnData[]): FakeFloorItem[];

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
     * @returns {FakeScriptPlayerEntity} Retorna o player criado
     */
    createFakePlayer(name: string, x: number, y: number, z: number, r: number): FakeScriptPlayerEntity;

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
     * @returns {FakeScriptPlayerEntity} Retorna o player criado
     */
    createFakePlayer(name: string, motto: string, figure: string, gender: string, credits: number, diamonds: number, duckets: number, x: number, y: number, z: number, r: number): FakeScriptPlayerEntity;

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
     * @returns {FakeScriptPlayerEntity} Retorna o bot criado
     */
    createFakeBot(name: string, x: number, y: number, z: number, r: number): FakeScriptPlayerEntity;

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
     * @returns {FakeScriptPlayerEntity} Retorna o bot criado
     */
    createFakeBot(name: string, motto: string, figure: string, gender: string, x: number, y: number, z: number, r: number): FakeScriptPlayerEntity;

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
    getLoadedFurnis(): FakeFloorItem[];

    /**
     * @description Remove item determinado
     * @param {FakeFloorItem} fakeItem - Item a ser removido
     * 
     * @example
     * // Exemplo de uso:
     * 
     * let faker = null
     * Events.on('load', () => {
     *  faker = Faker.createFakeItem(1, 0, 0, 0, 0); // Cria um item falso na posição 0, 0, 0, 0
     * });
     * 
     * Commands.register('remove', true, (user, message) => {
     *  if (!faker) returns; // Se o item não existir, não faça nada
     * 
     *  Faker.removeFakeFloorItem(faker); // Remove o item criado
     *  faker = null // Limpa a variável
     * });
     * @returns {void}
     */
    removeFakeFloorItem(fakeItem: FakeFloorItem): void;

    /**
     * @description Remove uma entidade Fake
     * @param {FakeScriptPlayerEntity} FakeScriptPlayerEntity - Entidade Fake a ser removida do quarto
     * 
     * @example
     * // Exemplo de uso:
     * let faker = null
     * Events.on('load', () => {
     *  faker = Faker.createFakePlayer('Senhoreu', 0, 0, 0, 0); // Cria um player falso na posição 0, 0, 0, 0
     * });
     * 
     * Commands.register('remove', true, (user, message) => {
     *  if (!faker) returns; // Se a entidade não existir, não faça nada
     * 
     *  Faker.removeEntity(faker); // Remove a entidade criado
     *  faker = null // Limpa a variável
     * });
     * @returns {void}
     */
    removeEntity(FakeScriptPlayerEntity: FakeScriptPlayerEntity): void;

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
    removeAllFloorItems(): void;

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
    removeAllEntities(): void;

}

/**
 * @interface Highscores
 * @description Gerencia placares de líderes. Permite manipular pontuações individuais 
 * ou de grupos em itens de ranking do quarto.
 */
interface Highscores {
    /**
     * Adiciona pontos a um jogador no placar.
     * @param player O nome do jogador (string) ou a entidade do jogador (ScriptPlayerEntity).
     * @param points A quantidade de pontos a serem adicionados.
     * @example
     * Highscores.add("Senhoreu", 10);
     * Highscores.add(playerEntity, 5);
     */
    add(player: string | ScriptPlayerEntity, points: number): void;

    /**
     * Adiciona pontos a um placar específico para um jogador.
     * @param item O ID do furni (number) ou a instância do furni de placar (ScriptFurniFloor).
     * @param player O nome do jogador (string) ou a entidade do jogador (ScriptPlayerEntity).
     * @param points A quantidade de pontos a serem adicionados.
     */
    add(item: number | ScriptFurniFloor, player: string | ScriptPlayerEntity, points: number): void;

    /**
     * Obtém a pontuação atual de um jogador.
     * @param player O nome do jogador ou a entidade do jogador.
     * @returns A pontuação atual do jogador.
     */
    getScore(player: string | ScriptPlayerEntity): number;

    /**
     * Retorna um mapeamento de todos os usuários e suas respectivas pontuações em um placar específico.
     * @param furniId O ID do furni de placar.
     * @returns Um objeto onde a chave é o nome do usuário (ou usuários do grupo separados por vírgula) e o valor é a pontuação.
     */
    getScoreAll(furniId: number): Record<string, number>;

    /**
     * Remove pontos de um jogador no placar.
     * @param player O nome do jogador ou a entidade do jogador.
     * @param points A quantidade de pontos a serem removidos.
     */
    remove(player: string | ScriptPlayerEntity, points: number): void;

    /**
     * Adiciona pontos a um grupo de jogadores no placar.
     * @param players Um array contendo nomes de usuários ou entidades de jogadores.
     * @param points A quantidade de pontos a serem adicionados para o grupo.
     */
    addGroup(players: (string | ScriptPlayerEntity)[], points: number): void;

    /**
     * Obtém a pontuação atual de um grupo específico de jogadores.
     * @param players Um array contendo nomes de usuários ou entidades de jogadores.
     * @returns A pontuação atual do grupo.
     */
    getScoreGroup(players: (string | ScriptPlayerEntity)[]): number;

    /**
     * Remove pontos de um grupo de jogadores no placar.
     * @param players Um array contendo nomes de usuários ou entidades de jogadores.
     * @param points A quantidade de pontos a serem removidos.
     */
    removeGroup(players: (string | ScriptPlayerEntity)[], points: number): void;

    /**
     * Limpa todas as pontuações de um placar específico.
     * @param item O ID do furni ou a instância do furni de placar.
     */
    clear(item: number | ScriptFurniFloor): void;

    /**
     * Reinicia (limpa) as pontuações de um placar específico. Atalho para `clear`.
     * @param item O ID do furni ou a instância do furni de placar.
     */
    reset(item: number | ScriptFurniFloor): void;
}

/**
 * @interface GlobalData
 * @description Fornece acesso a informações externas ao quarto, como dados de 
 * jogadores offline, preços de raros e definições técnicas de mobílias.
 */
interface GlobalData {
    /**
     * Obtém os dados de um jogador pelo seu ID. 
     * Retorna dados do cache se estiver online ou do banco de dados se estiver offline.
     * @param id O ID do jogador.
     * @returns Os dados do jogador (ScriptPlayerData).
     * @example
     * const data = GlobalData.getPlayerDataById(1);
     * if (data) Debug.log(`Nome: ${data.getUsername()}`);
     */
    getPlayerDataById(id: number): ScriptPlayerData;

    /**
     * Obtém os dados de um jogador pelo seu nome de usuário.
     * @param username O nome de usuário do jogador.
     * @returns Os dados do jogador (ScriptPlayerData).
     */
    getPlayerDataByName(username: string): ScriptPlayerData;

    /**
     * Obtém a entidade de um jogador pelo seu ID, caso ele esteja em algum quarto.
     * @param id O ID do jogador.
     * @returns A entidade do jogador (ScriptPlayerEntity) ou null se não encontrada.
     */
    getPlayerEntityById(id: number): ScriptPlayerEntity | null;

    /**
     * Obtém a entidade de um jogador pelo nome de usuário, caso ele esteja em algum quarto.
     * @param username O nome do jogador.
     * @returns A entidade do jogador (ScriptPlayerEntity) ou null se não encontrada.
     */
    getPlayerEntityByUsername(username: string): ScriptPlayerEntity | null;

    /**
     * Verifica se um jogador está online pelo seu ID.
     * @param id O ID do jogador.
     * @returns `true` se estiver online, `false` caso contrário.
     */
    isOnlineById(id: number): boolean;

    /**
     * Verifica se um jogador está online pelo nome de usuário.
     * @param username O nome de usuário.
     * @returns `true` se estiver online, `false` caso contrário.
     */
    isOnlineByUsername(username: string): boolean;

    /**
     * Obtém o preço de um item raro pela sua definição.
     * @param definitionId O ID da definição do item (sprite id).
     * @returns O preço do item.
     */
    getRarePriceByDefinitionId(definitionId: number): number;

    /**
     * Retorna um mapa contendo todos os itens raros e seus respectivos preços.
     * @returns Um objeto Record onde a chave é o ID da definição e o valor é o preço.
     */
    getAllRares(): Record<number, number>;

    /**
     * Obtém a instância de um quarto pelo seu ID, permitindo manipular quartos remotos.
     * @param roomId O ID do quarto.
     * @returns A instância do quarto (Room) ou null se o quarto não estiver carregado.
     */
    getRoomById(roomId: number): Room | null;

    /**
     * Obtém a definição técnica de uma mobília.
     * @param id O ID da definição da mobília.
     * @returns A definição da mobília (ScriptFurnitureDefinition).
     */
    getFurnitureDefinition(id: number): ScriptFurnitureDefinition;
}

/**
 * @interface RoomStorage
 * @description Sistema de persistência de dados. RoomStorage isola dados por quarto, 
 * enquanto GlobalStorage compartilha dados entre todo o servidor.
 */
interface RoomStorage {
    /**
     * Obtém um valor armazenado no banco de dados do quarto.
     * @param key A chave identificadora do dado.
     * @returns O valor em string associado à chave, ou null se não encontrado.
     * @example
     * const welcomeMessage = RoomStorage.get("welcome_msg");
     */
    get(key: string): string | null;

    /**
     * Define ou atualiza um valor persistente para o quarto.
     * @param key A chave identificadora.
     * @param value O valor a ser armazenado.
     * @example
     * RoomStorage.set("welcome_msg", "Bem-vindo ao evento!");
     */
    set(key: string, value: string): void;

    /**
     * Remove uma entrada específica do armazenamento do quarto.
     * @param key A chave a ser removida.
     * @returns `true` se a chave existia e foi removida, `false` caso contrário.
     * @example
     * if (RoomStorage.delete("old_config")) {
     * Debug.log("Configuração antiga removida.");
     * }
     */
    delete(key: string): boolean;

    /**
     * Remove todos os dados armazenados para o quarto atual no banco de dados.
     * @example
     * RoomStorage.clear();
     */
    clear(): void;
}

/**
 * @interface GlobalStorage
 * @description Sistema de armazenamento persistente compartilhado. Diferente do RoomStorage, 
 * os dados aqui salvos podem ser lidos e alterados por qualquer quarto no hotel.
 */
interface GlobalStorage {
    /**
     * Obtém um valor global armazenado no banco de dados.
     * @param key A chave identificadora do dado.
     * @returns O valor em string associado à chave, ou null se não encontrado.
     * @example
     * const eventStatus = GlobalStorage.get("global_event_active");
     */
    get(key: string): string | null;

    /**
     * Define ou atualiza um valor global persistente.
     * @param key A chave identificadora.
     * @param value O valor a ser armazenado.
     * @example
     * GlobalStorage.set("global_event_active", "true");
     */
    set(key: string, value: string): void;

    /**
     * Remove uma entrada específica do armazenamento global.
     * @param key A chave a ser removida.
     * @returns `true` se a chave existia e foi removida, `false` caso contrário.
     * @example
     * if (GlobalStorage.delete("maintenance_mode")) {
     * Debug.log("Modo de manutenção encerrado globalmente.");
     * }
     */
    delete(key: string): boolean;
}

/**
 * @interface Debug
 * @description Ferramentas de diagnóstico. Envia logs para o console do servidor 
 * ou exibe balões de fala informativos para os jogadores no quarto.
 */
interface Debug {
    /**
     * Envia uma mensagem de debug para todos os jogadores no quarto na forma de um balão de fala.
     * @param log O objeto ou mensagem a ser exibida.
     * @example
     * Debug.debug("Iniciando processamento do evento...");
     */
    debug(log: any): void;

    /**
     * Atalho para o método debug().
     * @param log O objeto ou mensagem a ser exibida.
     */
    d(log: any): void;

    /**
     * Adiciona uma mensagem ao log de depuração interno do componente de scripting do quarto.
     * @param log A mensagem ou objeto a ser registrado.
     * @example
     * Debug.log("Sistema carregado com sucesso.");
     */
    log(log: any): void;

    /**
     * Adiciona uma mensagem ao log de depuração com um nível de severidade específico.
     * @param levelType O nível do log ("info", "warning", "error", "success").
     * @param log A mensagem ou objeto a ser registrado.
     * @example
     * Debug.log("error", "Falha ao processar comando: ID inválido.");
     */
    log(levelType: ScriptLogLevelType, log: any): void;

    /**
     * Atalho para o método log() focado em erros.
     * @param log A mensagem de erro.
     */
    e(log: any): void;

    /**
     * Atalho para o método log() com nível de severidade.
     * @param levelType O nível do log.
     * @param log A mensagem a ser registrada.
     */
    e(levelType: ScriptLogLevelType, log: any): void;

    /**
     * Limpa todos os logs de depuração armazenados no componente de scripting do quarto.
     * @example
     * Debug.clearLog();
     */
    clearLog(): void;
}

type ScriptLogLevelType = "info" | "warning" | "error" | "success";

type WiredCallback = (entity: ScriptEntity | null, furni: ScriptFurni | null, entities: ScriptEntity[], furnis: ScriptFurni[]) => void

/**
 * @interface Wired
 * @description Interface de integração Wired. Permite disparar efeitos via código, 
 * ler memórias de disquetes e sincronizar eventos de cota.
 */
interface Wired {
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
    on(eventName: string, callback: WiredCallback): void;

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
    on(eventName: 'startEvent', callback: () => void): void;

    /**
     * @description Ativa um wired ativador.
     * @param {string} wiredName - codigo do wired.
     * @param {ScriptEntity | null} entity - Entidade que ativou o wired.
     * @param {ScriptFurni | null} furni - Mobilia que ativou o wired.
     * @param {ScriptEntity[] | null} entities - Entidades do seletor.
     * @param {ScriptFurni[] | null} furnis - Mobilias do seletor.
     * 
     * @example
     * // Exemplo de uso:
     * Wired.trigger('wiredName', entity, furni, entities, furnis);
     * // entity opcional, furni opcional, entities opcional, furnis opcional
     * @returns {void}
     */
    trigger(wiredName: string, entity: ScriptEntity | null, furni: ScriptFurni | null, entities: ScriptEntity[] | null, furnis: ScriptFurni[] | null): void;

    /**
     * @description Ativa um wired ativador.
     * @param {string} wiredName - codigo do wired.
     * 
     * @example
     * // Exemplo de uso:
     * Wired.trigger('wiredName');
     * @returns {void}
     */
    trigger(wiredName: string): void;

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
    trigger(wiredName: string, entity: ScriptEntity): void;

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
    trigger(wiredName: string, entity: ScriptEntity, furni: ScriptFurni): void;

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
    setMemoryValue(disqueteName: string, value: number): void;

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
    setMemoryValue(disqueteName: string, value: string): void;

    /**
     * @description Retorna o valor da memoria em formato number.
     * @param {string} disqueteName - Nome do disquete.
     * @returns {number}
     */
    getMemoryValueDouble(disqueteName: string): number;

    /**
     * @description Retorna o valor da memoria em formato string.
     * @param disqueteName - Nome do disquete.
     * @returns {string}
     */
    getMemoryValue(disqueteName: string): string;

    /**
     * @description Ínicia o próximo evento da cota.
     * @returns {void}
     */
    nextEvent(): void;
}

/**
 * @interface Utils
 * @description Biblioteca geométrica e matemática. Auxilia no cálculo de rotações, 
 * distâncias e tratamento de strings seguras (HTML escape).
 */
interface Utils {
    /**
     * Retorna uma lista com todas as 8 posições possíveis ao redor de uma coordenada com base em uma distância.
     * @param x1 Coordenada X central.
     * @param y1 Coordenada Y central.
     * @param distance Distância das posições geradas.
     * @returns Uma lista de objetos ScriptPosition.
     */
    allRotations(x1: number, y1: number, distance: number): ScriptPosition[];

    /**
     * Retorna uma lista com todas as 8 posições possíveis ao redor de uma coordenada.
     * @param x1 Coordenada X central.
     * @param y1 Coordenada Y central.
     * @param reverse Se deve inverter o cálculo da posição.
     * @param distance Distância das posições geradas.
     */
    allRotations(x1: number, y1: number, reverse: boolean, distance: number): ScriptPosition[];

    /**
     * Calcula uma nova posição baseada em uma rotação e distância.
     * @param x1 Coordenada X inicial.
     * @param y1 Coordenada Y inicial.
     * @param rotation Rotação alvo (0-7).
     * @param reverse Se deve calcular para a direção oposta.
     * @param distance Distância a percorrer.
     */
    calculatePosition(x1: number, y1: number, rotation: number, reverse: boolean, distance: number): ScriptPosition;

    /**
     * Calcula a rotação necessária para olhar de um ponto A para um ponto B.
     * @param x1 X de origem.
     * @param y1 Y de origem.
     * @param x2 X de destino.
     * @param y2 Y de destino.
     * @param reverse Se deve retornar a rotação oposta.
     */
    calculateRotation(x1: number, y1: number, x2: number, y2: number, reverse: boolean): number;

    /**
     * Calcula a distância de Chebyshev entre dois pontos (número de passos em qualquer direção, incluindo diagonais).
     */
    chebyshevDistance(x1: number, y1: number, x2: number, y2: number): number;

    /**
     * Verifica se uma rotação é diagonal (1, 3, 5, 7).
     */
    isDiagonal(rotation: number): boolean;

    /**
     * Retorna a posição localizada atrás de uma coordenada com base em sua rotação.
     */
    positionBehind(x1: number, y1: number, rotation: number, distance: number): ScriptPosition;

    /**
     * Retorna a posição localizada à frente de uma coordenada com base em sua rotação.
     */
    positionInFront(x1: number, y1: number, rotation: number, distance: number): ScriptPosition;

    /**
     * Escapa caracteres de HTML (< e >) de uma string para exibição segura.
     */
    safeStr(text: string): string;

    /**
     * Cria um novo objeto de posição.
     */
    createPosition(x: number, y: number, z: number): ScriptPosition;

    /**
     * Cria um novo objeto de posição com Z padrão (0).
     */
    createPosition(x: number, y: number): ScriptPosition;
}

/**
 * @interface Pathfinder
 * @description Motor de busca de caminho. Calcula o próximo passo ideal para que 
 * uma entidade ou móvel chegue ao destino desviando de obstáculos.
 */
interface Pathfinder {
    /**
     * Calcula o próximo passo de uma entidade em direção a uma coordenada.
     * @param object A entidade (ScriptEntity) para a qual o caminho será calculado.
     * @param x Coordenada X de destino.
     * @param y Coordenada Y de destino.
     * @param enableDiagonal Define se o movimento diagonal é permitido.
     * @returns Uma lista contendo a próxima posição (ScriptPosition) do caminho.
     * @example
     * const nextStep = Pathfinder.makeEntityPath(player, 10, 10, true);
     * if (nextStep.length > 0) player.walk(nextStep[0]);
     */
    makeEntityPath(object: ScriptEntity, x: number, y: number, enableDiagonal: boolean): ScriptPosition[];

    /**
     * Calcula o próximo passo de uma entidade (sem diagonal).
     */
    makeEntityPath(object: ScriptEntity, x: number, y: number): ScriptPosition[];

    /**
     * Calcula o próximo passo de uma entidade em direção a uma posição.
     */
    makeEntityPath(object: ScriptEntity, position: ScriptPosition): ScriptPosition[];

    /**
     * Calcula o próximo passo de uma mobília (furni) em direção a uma coordenada.
     * Útil para sistemas de mobis que se movem sozinhos.
     * @param object O item (ScriptFurni) para o qual o caminho será calculado.
     * @param x Coordenada X de destino.
     * @param y Coordenada Y de destino.
     * @param enableDiagonal Define se o movimento diagonal é permitido.
     * @returns Uma lista contendo a próxima posição (ScriptPosition) do caminho.
     */
    makeFurniPath(object: ScriptFurni, x: number, y: number, enableDiagonal: boolean): ScriptPosition[];

    /**
     * Calcula o próximo passo de uma mobília (sem diagonal).
     */
    makeFurniPath(object: ScriptFurni, x: number, y: number): ScriptPosition[];

    /**
     * Calcula o próximo passo de uma mobília em direção a uma posição.
     */
    makeFurniPath(object: ScriptFurni, position: ScriptPosition): ScriptPosition[];
}

/**
 * @interface Sound
 * @description Gerencia o áudio. Permite tocar músicas e efeitos sonoros para 
 * indivíduos ou para todos os presentes no quarto.
 */
interface Sound {
    /**
     * Toca uma música específica para um jogador.
     * @param name O nome ou identificador da música.
     * @param volume O nível do volume (geralmente de 0 a 100).
     * @param loop `true` para repetir a música continuamente.
     * @param playerEntity A entidade do jogador que ouvirá a música.
     * @example
     * Sound.playMusic("bg_music", 50, true, player);
     */
    playMusic(name: string, volume: number, loop: boolean, playerEntity: ScriptPlayerEntity): void;

    /**
     * Toca uma música para todos os jogadores presentes no quarto.
     * @param name O nome da música.
     * @param volume O nível do volume.
     * @param loop `true` para repetir a música.
     */
    playMusicToAll(name: string, volume: number, loop: boolean): void;

    /**
     * Toca um efeito sonoro específico para um jogador.
     * @param name O nome do efeito sonoro.
     * @param volume O nível do volume.
     * @param playerEntity A entidade do jogador que ouvirá o som.
     */
    playSoundEffect(name: string, volume: number, playerEntity: ScriptPlayerEntity): void;

    /**
     * Toca um efeito sonoro para todos no quarto.
     * @param name O nome do efeito sonoro.
     * @param volume O nível do volume.
     */
    playSoundEffectToAll(name: string, volume: number): void;

    /**
     * Para todas as músicas que estão sendo reproduzidas para um jogador específico.
     * @param playerEntity A entidade do jogador.
     */
    stopMusic(playerEntity: ScriptPlayerEntity): void;

    /**
     * Para todas as músicas que estão sendo reproduzidas para todos no quarto.
     */
    stopMusicToAll(): void;
}

/**
 * @interface ScriptDatabase
 * @description Interface de manipulação do MongoDB. Permite realizar operações CRUD 
 * (inserir, buscar, atualizar e deletar) e gerenciar coleções de documentos JSON.
 */
interface ScriptDatabase {
    /**
     * Obtém o número total de coleções criadas neste banco de dados.
     */
    getCollectionCount(): number;

    /**
     * Obtém o limite máximo de coleções permitidas.
     */
    getMaxCollections(): number;

    /**
     * Verifica se ainda é possível criar novas coleções.
     */
    canCreateMoreCollections(): boolean;

    /**
     * Lista os nomes de todas as coleções existentes.
     */
    listCollections(): string[];

    /**
     * Remove uma coleção inteira do banco de dados.
     * @param collection Nome da coleção.
     */
    dropCollection(collection: string): boolean;

    /**
     * Insere um novo documento em uma coleção.
     * @param collection Nome da coleção.
     * @param data Objeto com os dados a serem salvos.
     * @returns O ID (string) do documento inserido ou null em caso de falha.
     */
    insert(collection: string, data: Record<string, any>): string | null;

    /**
     * Busca documentos que correspondam aos critérios fornecidos (limite padrão de 1000).
     * @param collection Nome da coleção.
     * @param query Critérios de busca (ex: { "name": "User" }).
     */
    query(collection: string, query: Record<string, any>): Record<string, any>[];

    /**
     * Realiza uma busca com paginação manual via offset e limite.
     */
    queryWithOffset(collection: string, query: Record<string, any>, offset: number, limit: number): Record<string, any>[];

    /**
     * Realiza uma busca com ordenação e paginação.
     * @param sortField Campo pelo qual ordenar.
     * @param sortAscending True para ascendente, false para descendente.
     */
    queryWithSort(collection: string, query: Record<string, any>, offset: number, limit: number, sortField: string, sortAscending: boolean): Record<string, any>[];

    /**
     * Busca uma página específica de resultados.
     */
    queryPage(collection: string, query: Record<string, any>, page: number, pageSize: number): Record<string, any>[];

    /**
     * Busca uma página específica de resultados com ordenação.
     */
    queryPageWithSort(collection: string, query: Record<string, any>, page: number, pageSize: number, sortField: string, sortAscending: boolean): Record<string, any>[];

    /**
     * Retorna os dados da página juntamente com informações de metadados (total de itens, páginas, etc).
     * @returns Objeto contendo { data, page, pageSize, totalItems, totalPages, hasNextPage, hasPrevPage }.
     */
    queryPageWithInfo(collection: string, query: Record<string, any>, page: number, pageSize: number): Record<string, any>;

    /**
     * Busca o primeiro documento que corresponda aos critérios.
     */
    queryOne(collection: string, query: Record<string, any>): Record<string, any> | null;

    /**
     * Atualiza múltiplos documentos.
     * @param update Objeto com os campos a serem alterados (ex: { "status": "active" }).
     * @returns Quantidade de documentos modificados.
     */
    update(collection: string, query: Record<string, any>, update: Record<string, any>): number;

    /**
     * Atualiza o primeiro documento encontrado.
     */
    updateOne(collection: string, query: Record<string, any>, update: Record<string, any>): boolean;

    /**
     * Remove múltiplos documentos.
     * @returns Quantidade de documentos removidos.
     */
    delete(collection: string, query: Record<string, any>): number;

    /**
     * Remove o primeiro documento encontrado.
     */
    deleteOne(collection: string, query: Record<string, any>): boolean;

    /**
     * Conta a quantidade de documentos que correspondem aos critérios.
     */
    count(collection: string, query: Record<string, any>): number;

    /**
     * Obtém o nome do banco de dados atual.
     */
    getDatabaseName(): string;
}

/**
 * @interface ScriptDatabaseController
 * @description Portal de conexão para o banco de dados NoSQL (MongoDB). Permite 
 * salvar e consultar documentos estruturados para o projeto.
 */
interface ScriptDatabaseController {
    /**
     * Obtém a conexão ativa com o banco de dados NoSQL.
     */
    getConnection(): ScriptDatabase | null;
}

/**
 * @interface Currency
 * @description Gestor econômico. Controla a entrega de moedas e o processamento 
 * automático de prêmios de eventos (pontos de Hall e emblemas).
 */
interface Currency {
    /**
     * Entrega Créditos a um jogador pelo seu ID.
     * @param id O ID do jogador.
     * @param amount A quantidade de Créditos.
     */
    giveCreditsById(id: number, amount: number): void;

    /**
     * Entrega Créditos a um jogador pelo seu nome de usuário.
     * @param username O nome de usuário.
     * @param amount A quantidade de Créditos.
     */
    giveCreditsByUsername(username: string, amount: number): void;

    /**
     * Entrega Duckets a um jogador pelo seu ID.
     * @param id O ID do jogador.
     * @param amount A quantidade de Duckets.
     */
    giveDucketsById(id: number, amount: number): void;

    /**
     * Entrega Duckets a um jogador pelo seu nome de usuário.
     * @param username O nome de usuário.
     * @param amount A quantidade de Duckets.
     */
    giveDucketsByUsername(username: string, amount: number): void;

    /**
     * Entrega Diamantes a um jogador pelo seu ID.
     * Registra a transação nos logs do sistema (DiamondLog e PlayerBalanceLog).
     * @param id O ID do jogador.
     * @param amount A quantidade de Diamantes.
     */
    giveDiamondsById(id: number, amount: number): void;

    /**
     * Entrega Diamantes a um jogador pelo seu nome de usuário.
     * @param username O nome de usuário.
     * @param amount A quantidade de Diamantes.
     */
    giveDiamondsByUsername(username: string, amount: number): void;

    /**
     * Entrega Pontos Sazonais a um jogador pelo seu nome de usuário.
     * @param username O nome de usuário.
     * @param amount A quantidade de pontos.
     */
    giveSeasonalPointsByUsername(username: string, amount: number): void;

    /**
     * Entrega Pontos Sazonais a um jogador pelo seu ID.
     * @param id O ID do jogador.
     * @param amount A quantidade de pontos.
     */
    giveSeasonalPointsById(id: number, amount: number): void;

    /**
     * Realiza o pagamento automático de prêmio de evento para um jogador pelo seu ID.
     * O sistema calcula bônus de nível, pontos para o Hall da Fama e entrega o emblema mensal do evento (ex: EVT_JAN_24).
     * @param id O ID do jogador.
     */
    payById(id: number): void;

    /**
     * Realiza o pagamento automático de prêmio de evento para um jogador pelo seu nome de usuário.
     * Pode incluir a entrega de itens de recompensa caso configurado nas definições globais (REWARDS_EVENTS_ENABLED).
     * @param username O nome de usuário.
     */
    payByUsername(username: string): void;
}

interface Trade {
}

/**
 * @interface Furnis
 * @description Gerencia a logística de itens. Permite transferir mobis entre 
 * inventários e trocar o proprietário de itens já colocados no quarto.
 */
interface Furnis {
    /**
     * Transfere um único item do inventário de um jogador para outro.
     * @param fromPlayerId ID do jogador que possui o item.
     * @param toPlayerId ID do jogador que receberá o item.
     * @param itemId ID único da instância do item a ser transferido.
     * @returns `true` se a transferência for bem-sucedida.
     * @example
     * Furnis.transferItem(1, 2, 1000500);
     */
    transferItem(fromPlayerId: number, toPlayerId: number, itemId: number): boolean;

    /**
     * Transfere múltiplos itens do inventário de um jogador para outro de uma só vez.
     * @param fromPlayerId ID do jogador de origem.
     * @param toPlayerId ID do jogador de destino.
     * @param itemsId Lista de IDs únicos das instâncias dos itens.
     * @returns `true` se todos os itens forem transferidos com sucesso.
     */
    transferItems(fromPlayerId: number, toPlayerId: number, itemsId: number[]): boolean;

    /**
     * Altera o proprietário de um item que está atualmente colocado no quarto.
     * O item será removido do quarto e enviado para o inventário do novo proprietário.
     * @param ownerPlayerId ID do proprietário atual.
     * @param newOwnerPlayerId ID do novo proprietário.
     * @param itemId ID único da instância do item no quarto.
     * @returns `true` se a troca de dono for realizada.
     */
    changeOwner(ownerPlayerId: number, newOwnerPlayerId: number, itemId: number): boolean;

    /**
     * Altera o proprietário de múltiplos itens colocados no quarto simultaneamente.
     * Os itens serão removidos do quarto e enviados para o inventário do novo proprietário.
     * @param ownerPlayerId ID do proprietário atual.
     * @param newOwnerPlayerId ID do novo proprietário.
     * @param itemsId Lista de IDs únicos das instâncias dos itens.
     */
    changeOwner(ownerPlayerId: number, newOwnerPlayerId: number, itemsId: number[]): boolean;
}

/**
 * @interface Campaign
 * @description Integra o script às campanhas globais do hotel, somando progresso 
 * para metas da comunidade ou times específicos.
 */
interface Campaign {
    /**
     * Registra um progresso (impulso) para um jogador em uma campanha específica por time.
     * Atualiza as estatísticas para todos os jogadores online.
     * @param playerEntity A entidade do jogador que receberá o progresso.
     * @param total A quantidade de pontos/progresso a adicionar.
     * @param team O nome do time associado (opcional).
     * @returns `true` se o progresso foi registrado com sucesso.
     * @example
     * Campaign.impulse(player, 10, "TimeAzul");
     */
    impulse(playerEntity: ScriptPlayerEntity, total: number, team: string): boolean;

    /**
     * Registra um progresso para um jogador na campanha atual (sem time).
     * @param playerEntity A entidade do jogador.
     * @param total A quantidade de progresso.
     */
    impulse(playerEntity: ScriptPlayerEntity, total: number): boolean;

    /**
     * Registra um progresso para um jogador offline ou via ID.
     * @param playerId O ID do jogador.
     * @param total A quantidade de progresso.
     */
    impulse(playerId: number, total: number): boolean;

    /**
     * Registra um progresso para um jogador offline ou via ID associado a um time.
     * @param playerId O ID do jogador.
     * @param total A quantidade de progresso.
     * @param team O nome do time.
     */
    impulse(playerId: number, total: number, team: string): boolean;

    /**
     * Verifica se existe uma campanha ativa no momento no servidor.
     * @returns `true` se houver uma campanha em execução.
     */
    isActive(): boolean;
}

/**
 * @interface HubbeIA
 * @description Interface de IA avançada. Cria diálogos naturais com NPCs, analisa 
 * sentimentos e modera conteúdos de forma automatizada.
 */
interface HubbeIA {
    /**
     * Define a chave de API para o serviço Groq.
     * @param apiKey Chave de API válida.
     */
    setApiKey(apiKey: string): void;

    /**
     * Altera o modelo de IA utilizado (ex: llama-3.1-70b-versatile).
     * @param model Nome do modelo.
     */
    setModel(model: string): void;

    /**
     * Define as instruções básicas de comportamento da IA (System Prompt).
     * @param prompt Instruções de personalidade e regras.
     */
    setSystemPrompt(prompt: string): void;

    /**
     * Adiciona dados ao contexto global da IA para influenciar as respostas.
     * @param key Chave do dado (ex: "tempo_clima").
     * @param value Valor do dado.
     */
    addContext(key: string, value: any): void;

    /**
     * Limpa todos os dados de contexto adicionados anteriormente.
     */
    clearContext(): void;

    /**
     * Define a criatividade da IA (0.0 a 2.0).
     * @param temp Temperatura da resposta.
     */
    setTemperature(temp: number): void;

    /**
     * Define o limite máximo de tokens (tamanho) da resposta.
     * @param tokens Quantidade de tokens (50 a 8000).
     */
    setMaxTokens(tokens: number): void;

    /**
     * Faz uma pergunta simples à IA sem histórico de conversa.
     * @param message Mensagem/Pergunta.
     */
    ask(message: string): string;

    /**
     * Faz uma pergunta à IA mantendo o histórico de uma conversa específica.
     * @param message Mensagem do usuário.
     * @param conversationId ID único da conversa (geralmente o nome do jogador).
     */
    ask(message: string, conversationId: string | null): string;

    /**
     * Remove o histórico de uma conversa específica da memória.
     * @param conversationId ID da conversa a ser removida.
     */
    clearHistory(conversationId: string): void;

    /**
     * Limpa todos os históricos de conversas ativos na memória.
     */
    clearAllHistories(): void;

    /**
     * Analisa se a mensagem é "positiva", "negativa" ou "neutra".
     * @param message Texto a ser analisado.
     */
    analyzeSentiment(message: string): "positivo" | "negativo" | "neutro";

    /**
     * Gera uma resposta específica para um NPC com nome e personalidade.
     * @param npcName Nome do Personagem.
     * @param userMessage Mensagem dita pelo jogador.
     * @param conversationId ID opcional para manter histórico.
     */
    generateNPCResponse(npcName: string, userMessage: string, conversationId?: string | null): string;

    /**
     * Classifica uma mensagem em categorias pré-definidas.
     * @param message Texto para classificar.
     * @param categories Lista de categorias separadas por vírgula.
     */
    classify(message: string, categories: string): string;

    /**
     * Resume um texto longo em uma única frase curta.
     */
    summarize(text: string): string;

    /**
     * Traduz um texto para o idioma destino.
     * @param text Texto original.
     * @param targetLanguage Idioma alvo (ex: "Inglês").
     */
    translate(text: string, targetLanguage: string): string;

    /**
     * Verifica se uma mensagem é apropriada para menores de idade.
     * @returns True se for seguro, False se for inapropriado.
     */
    isAppropriate(message: string): boolean;

    /**
     * Gera uma história curta baseada em um tema.
     */
    generateStory(theme: string): string;

    /**
     * Retorna a quantidade de conversas com histórico armazenadas no momento.
     */
    getActiveConversations(): number;

    /**
     * Verifica se existe histórico ativo para um determinado ID de conversa.
     */
    hasHistory(conversationId: string): boolean;
}

/**
 * @interface Webhook
 * @description Permite o envio de dados externos (via HTTP POST) para serviços 
 * como Discord, facilitando logs remotos e alertas.
 */
interface Webhook {
    /**
     * @description Cria um novo Webhook direcionado ao link.
     * @param {string} linkWebhook - Link do Webhook a receber informações.
     * 
     * @example
     * // Exemplo de uso:
     * const webhook = new Webhook('https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvxwyz');
     * @returns {WebhookMessage}
    */
    sendTo(linkWebhook: string): WebhookMessage;
}

/**
 * @interface Delay
 * @description Gerencia temporizadores. Permite agendar execuções únicas ou 
 * repetitivas baseadas em Ticks (ciclos do servidor).
 */
interface Delay {
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
    wait(callback: Function, ticks: number): DelayTask;

    /**
     * Executa uma função no intervalo de tempo.
     * @example
     * Delay.interval(() => {
     *  //Executado a cada 1 segundo.
     * }, 2)
     * @param {Function} callback - Função executada sempre que o tempo determinado ter passado.
     * @param {number} ticks - Quantidade de ticks a aguardar até a execução da função
    */
    interval(callback: Function, ticks: number): DelayTask;

    /**
     * Executa uma função no intervalo de tempo.
     * @example
     * Delay.shortWait(() => {
     *  //Executado a cada 50 milisegundos.
     * }, 1)
     * @param {Function} callback - Função executada sempre que o tempo determinado ter passado.
     * @param {number} ticks - Quantidade de mili ticks a aguardar até a execução da função.
    */
    shortWait(callback: Function, milliseconds: number): DelayTask;

    /**
     * Executa uma função no intervalo de tempo.
     * @example
     * Delay.shortInterval(() => {
     *  //Executado a cada 50 milisegundos.
     * }, 1)
     * @param {Function} callback - Função executada sempre que o tempo determinado ter passado.
     * @param {number} ticks - Quantidade de mili ticks a aguardar até a execução da função.
    */
    shortInterval(callback: Function, milliseconds: number): DelayTask;

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
    cancel(task: DelayTask): void;

    /**
     * @description Cancela todos os delays criados
     * @example
     * Delay.wait(() => {}, 100);
     * Delay.interval(() => {}, 1);
     * 
     * Delay.cancelAll(); // cancela os dois delays criados.
     * @returns {void}
     */
    cancelAll(): void;

    /**
     * Converte segundos em uma quantia de ticks correspondente.
     * @example
     * Delay.wait(() => {
     *      //Executado após 10 segundos.
     * }, Delay.seconds(10))
     * @
     * @param {number} sec - Quantidade de segundos a serem convertidos em ticks.
    */
    seconds(sec: number): number;
}

/**
 * @interface Variables
 * @description Sistema de variáveis dinâmicas em memória, atreladas a usuários, 
 * móveis ou ao contexto global do script.
 */
interface Variables {
    /**
     * @param variableName - Nome da variável a ser buscada.
     * @description Retorna a variável com o nome fornecido.
     * @example
     * // Exemplo de uso:
     * const varUser = Variables.getVariable('minhaVariavel'); // Retorna a variável 'minhaVariavel'
     * Debug.log(varUser.getValue()); // Exibe no log o valor da variável
     * @returns {ScriptVariable} Retorna a variável com o nome fornecido.
     */
    getVariable(variableName: string): ScriptVariable | null;

    /**
     * @param variableName - Nome da variável a ser buscada.
     * @description Retorna a variável do usuário com o nome fornecido.
     * @example
     * // Exemplo de uso:
     * const varUser = Variables.getVariableUser('minhaVariavel'); // Retorna a variável 'minhaVariavel' do usuário
     * Debug.log(varUser.getValue()); // Exibe no log o valor da variável
     * @returns {ScriptVariableUser} Retorna a variável do usuário com o nome fornecido.
     */
    getVariableUser(variableName: string): ScriptVariableUser | null;

    /**
     * @param variableName - Nome da variável a ser buscada.
     * @description Retorna a variável da mobilia com o nome fornecido.
     * @example
     * // Exemplo de uso:
     * const varFurni = Variables.getVariableFurni('minhaVariavel'); // Retorna a variável 'minhaVariavel' da mobilia
     * Debug.log(varFurni.getValue()); // Exibe no log o valor da variável
     * @returns {ScriptVariableFurni} Retorna a variável da mobilia com o nome fornecido.
     */
    getVariableFurni(variableName: string): ScriptVariableFurni | null;

    /**
     * @param variableName - Nome da variável a ser buscada.
     * @description Retorna a variável global com o nome fornecido.
     * @example
     * // Exemplo de uso:
     * const varGlobal = Variables.getVariableGlobal('minhaVariavel'); // Retorna a variável 'minhaVariavel' global
     * Debug.log(varGlobal.getValue());
     * // Exibe no log o valor da variável
     * @returns {ScriptVariableGlobal} Retorna a variável global com o nome fornecido.
     */
    getVariableGlobal(variableName: string): ScriptVariableGlobal | null;

    /**
     * @param variable - A variável a ser verificada.
     * @description Verifica se a variável é do tipo usuário.
     * @example
     * // Exemplo de uso:
     * const varUser = Variables.getVariable('minhaVariavel');
     * if (Variables.isUserVariable(varUser)) {
     *     Debug.log('A variável é do tipo usuário');
     * }
     * @returns {boolean} Retorna true se a variável for do tipo usuário, caso contrário, false.
     */
    isUserVariable(variable: ScriptVariable | any): variable is ScriptVariableUser;

    /**
     * @param variable - A variável a ser verificada.
     * @description Verifica se a variável é do tipo mobilia.
     * @example
     * // Exemplo de uso:
     * const varFurni = Variables.getVariable('minhaVariavel');
     * if (Variables.isFurniVariable(varFurni)) {
     *     Debug.log('A variável é do tipo mobilia');
     * }
     * @returns {boolean} Retorna true se a variável for do tipo mobilia, caso contrário, false.
     */
    isFurniVariable(variable: ScriptVariable | any): variable is ScriptVariableFurni;

    /**
     * @param variable - A variável a ser verificada.
     * @description Verifica se a variável é do tipo global.
     * @example
     * // Exemplo de uso:
     * const varGlobal = Variables.getVariable('minhaVariavel');
     * if (Variables.isGlobalVariable(varGlobal)) {
     *     Debug.log('A variável é do tipo global');
     * }
     * @returns {boolean} Retorna true se a variável for do tipo global, caso contrário, false.
     */
    isGlobalVariable(variable: ScriptVariable | any): variable is ScriptVariableGlobal;

    /**
     * @param entity - A entidade a ser verificada.
     * @param variableName - Nome da variável a ser verificada.
     * @description Verifica se a entidade possui a variável com o nome fornecido.
     * @example
     * // Exemplo de uso:
     * const player = Room.getPlayerByName('Senhoreu');
     * if (player && Variables.hasVariable(player, 'minhaVariavel')) {
     *     Debug.log('O usuário possui a variável "minhaVariavel"');
     * }
     * @returns {boolean} Retorna true se a entidade possuir a variável, caso contrário, false.
     */
    hasVariable(entity: ScriptEntity, variableName: string): boolean;

    /**
     * @param furni - A mobilia a ser verificada.
     * @param variableName - Nome da variável a ser verificada.
     * @description Verifica se a mobilia possui a variável com o nome fornecido.
     * @example
     * // Exemplo de uso:
     * const furni = Room.getFurniById(12345);
     * if (furni && Variables.hasVariable(furni, 'minhaVariavel')) {
     *     Debug.log('A mobilia possui a variável "minhaVariavel"');
     * }
     * @returns {boolean} Retorna true se a mobilia possuir a variável, caso contrário, false.
     */
    hasVariable(furni: ScriptFurni, variableName: string): boolean;
}
