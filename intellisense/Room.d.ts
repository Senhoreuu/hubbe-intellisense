interface Room {
    /**
     * @returns Retorna o ID do quarto
     */
    getId(): number;

    /**
     * @returns Retorna o nome atual do quarto.
     */
    getName(): number;

    /**
     * @returns Retorna o nome do dono do quarto
     */
    getOwnerUsername(): number;

    /**
     * @returns Retorna o ID do dono do quarto
     */
    ownerId(): number;

    /**
     * @returns Retorna a quantidade de usuários do quarto
     */
    userCount(): number;

    /**
     * @param id - ID do usuário buscado.
     * @returns Retorna o usuário correspondente ao ID.
     */
    getPlayerById(id: number): ScriptEntity;

    /**
     * @param name - Nome do usuário buscado.
     * @returns Retorna o usuário correspondente ao Nome.
     */
    getPlayerByName(name: string): ScriptEntity;

    /**
     * @param name - Nome do Bot a ser buscado.
     * @returns Retorna o bot correspondente ao nome.
     */
    getBotByName(name: string): ScriptEntity;

    /**
     * @returns Retorna uma lista com todos os usuários do quarto.
     */
    getAllPlayers(): ScriptEntity[];

    /**
     * @param x - Posição X buscada.
     * @param y - Posição Y buscada.
     * @returns Retorna todas entidades que estão na posição fornecida.
     */
    getEntitiesByCoord(x: number, y: number): ScriptEntity[];

    /**
     * @param furni - Mobilia a ser consultada.
     * @returns Retorna uma lista com todas as entidades presentes na mobilia.
     */
    getEntitiesByFurni(furni: ScriptFurni): ScriptEntity[];

    /**
     * @param furnis - Mobilias a serem consultadas.
     * @returns Retorna uma lista de todas as entidades presentes nas mobilias.
     */
    getEntitiesByFurnis(furnis: ScriptFurni[]): ScriptFurni[];

    /**
     * @param x - Posição X do piso.
     * @param y - Posição y do piso.
     * @returns Retorna o Piso da posição fornecida.
     */
    getTile(x: number, y: number): ScriptTile;

    /**
     * @param id - ID da mobilia a ser buscada.
     * Retorna a mobilia correspondente ao ID.
     */
    getFurniById(id: number): ScriptFurni;

    /**
     * Retorna uma lista de mobilias que estão no piso
     * @param x - Posição X do piso.
     * @param y - Posição y do piso.
     * @returns {ScriptFurni[]}
     */
    getFurniByTile(x: number, y: number): ScriptFurni[];

    /**
     * @returns Retorna uma lista com todos as mobilias do tipo definido.
     * @param sprite - Código base da mobilia buscada.
     */
    getAllFurnisBySpriteId(sprite: number): ScriptFurni[];

    /**
     * @param x - Posição X do piso.
     * @param y - Posição X do piso.
     * @returns Retorna se o floor existe
     */
    tileExists(x: number, y: number): Boolean;

    /** 
     * @param id - Id da entidade a ser verificada.
     * @returns Retorna se o usuário tem direitos no quarto.
    */
    hasRights(id: number): boolean;

    /**
     * @param id - Id do usuário que receberá Direitos.
     * @returns Dá Direitos ao usuário *ID*.
     */
    addRights(id: number): void;

    /**
     * @description Retira os Direitos do usuário *ID*.
     * @param id - Id do usuário que perderá Direitos.
     */
    removeRights(id: number): void;

    /** 
     * @description Retorna estado atual do atravessar.
     */
    getWalkThrough(): boolean;

    /**
     * @description Retorna estado atual da diagonal.
     */
    getDiagonal(): boolean;

    /**
     * @description Retorna o atual estado do mute no quarto.
     */
    getRoomMute(): boolean;

    /**
     * @description Define o nome do quarto
     * @param name - Novo nome que será definido ao quarto.
     */
    setName(name: string): void;

    /**
     * @description Desliga/liga a luz do quarto.
     * @param activated - Se a luz deve ser desligada ou ligada.
     */
    setMoodLight(activated: boolean): void;

    /**
     * @description Altera a cor e estado da luz do quarto.
     * @param activated - Se a luz deve ser desligada ou ligada.
     * @param r - Valor da cor representando Vermelha. (0 a 255)
     * @param g - Valor da cor representando Verde. (0 a 255)
     * @param b - Valor da cor representando Azul. (0 a 255)
     * @param intensity - Valor da intensidade que a cor. *(0: Opaco a 255: Transparente)*
     * @param wallOnly - Se a luz deve ficar só nas paredes.
     */
    setMoodLight(activated: boolean, r: number, g: number, b: number, intensity: number, wallOnly: boolean): void;

    /**
     * @description Altera a cor do plano de fundo do quarto. Formato em HSL.
     * @param h - Valor da Matiz (0 a 255)
     * @param s - Valor da Saturação (0 a 255)
     * @param l - Valor do nivel de claridade da cor. (0 a 255)
     */
    setBackgroundTonerColor(h: number, s: number, l: number): void;

    /**
     * @description Define a velocidade dos Rollers no quarto.
     * @param speed - Velocidade dos rollers.
     */
    setRollerSpeed(speed: number): void;

    /**
     * @description Define a diagonal
     * @param allow - Valor que irá definir se será habilitado ou desabilitado
     */
    setDiagonal(allow: boolean): void;

    /**
     * @description Define o atravessar
     * @param allow - Valor que irá definir se será habilitado ou desabilitado
     */
    setWalkThrough(allow: boolean): void;

    /**
     * @description Define mute do quarto
     * @param mute - Valor que irá definir se será mutado ou desmutado.
     */
    setRoomMute(mute: boolean): void;

    /**
     * @description Define uma senha para trancar o quarto.
     * @param password - Senha a ser definida.
     */
    setPassword(password: string): void;

    /**
     * @description Define campanhia 
     */
    setDoorbell(): void;

    /**
     * @description Envia notificação para todos do quarto
     * @param icon - Código do icone que irá aparecer na notificação
     * @param message - Mensagem que irá aparecer na notificação.
     */
    notification(icon: string, message: string): void;

    /**
     * @param message - Mensagem que irá aparecer no alerta.
     * @description Envia um alerta para todos do quarto
     */
    alert(message: string): void;

    /**
     * @returns Abre o quarto
     */
    open(): void;

    /**
     * @param text - Texto a ser lido pela voz sintetizada
     * @returns Envia TTS para todos os usuários
     */
    tts(text: string): void;

    /**
     * @param link - Link do video do Youtube.
     * @returns Reproduz video do Youtube para todos os usuários do quarto.
     */
    youtube(link: string): void;
}

declare const Room: Room;