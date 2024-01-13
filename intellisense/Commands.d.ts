interface Commands {
    /**
     * @description Registra um comando para ser executado.
     * @param commandName - Nome do comando a ser registrado.
     * @param callback - Função a ser executada quando o comando for chamado.
     */
    register(commandName: string, callback: () => void): void;

    /**
     * @description Remove um comando registrado.
     * @param commandName - Nome do comando a ser removido.
     */
    unregister(commandName: string): void;
}

declare const Commands: Commands;