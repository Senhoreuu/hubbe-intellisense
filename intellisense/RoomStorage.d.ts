declare class RoomStorage {
    /**
    * @description Retorna os dados salvos no quarto a partir da chave de busca. 
    * @param {string} key - Chave da propriedade a ser buscada.
    * @returns {string} 
    */
    static get(key: string): string;

    /** 
    * @description Define/Atualiza valor correspondente a chave buscada.
    * @param {string} key - Chave da propriedade a definir.
    * @param {string} value - Novo valor a ser definido.
    */
    static set(key: string, value: string): void;

    /** 
    * @description Deleta valor correspondente a chave buscada.
    * @param {string} key - Chave da propriedade a ser deletada.
    * @returns {boolean} - Retorna true caso a chave tenha sido deletada com sucesso.
    */
    static delete(key: string): boolean;
}