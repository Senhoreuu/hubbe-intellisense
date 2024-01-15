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

export const GlobalStorage: GlobalStorage;