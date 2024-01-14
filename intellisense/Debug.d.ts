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