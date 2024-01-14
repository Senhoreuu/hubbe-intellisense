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