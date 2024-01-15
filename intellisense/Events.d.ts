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

export const Events: Events;