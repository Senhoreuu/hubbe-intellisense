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