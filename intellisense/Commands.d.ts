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