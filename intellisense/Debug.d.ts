interface Debug {
    /**
     * Envia mensagem de debug para todos os usuários do quarto.
     * @param object Conteúdo
     */
    d(object: any): void;

    /** 
     * Envia mensagem de debug para todos os usuários do quarto.
     * @param object Conteúdo
    */
    debug(object: any): void;

    /**
     * Registra uma mensagem no log do quarto. (*:script log*)
     * @param object Conteúdo
    */
    log(object: any): void;

    /**
     * Registra uma mensagem no log do quarto. (*:script log*)
     * @param object Conteúdo
     */
    e(object: any): void;

    /**
     * Limpa o registro de mensagens no log do quarto. (*:script log*)
     */
    clearLog(): void;
}

export const Debug: Debug;