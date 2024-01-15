import { IScriptReachable } from "./IScriptReachable";
import { ScriptEntity } from "./ScriptEntity";

export interface FakeEntity {
   /**
    * @description - Adiciona relacionamento a entidade
    * @param entityId - ID da entidade
    * @param relationship - Relação entre entidade e FakeEntity
    * 1: Coração (Heart)
    * 2: Sorriso (Smile)
    * 3: Bobba (Bobba)
    * 4: Merda (Poop)
    */
   addRelationship(entityId: number, relationship: 1 | 2 | 3 | 4): void;

   /**
    * Retorna ID da FakeEntity
    * @returns
    */
   getId(): number;

   /**
    * Retorna username atual da entidade
    * @returns
    */
   getUsername(): string;

   /**
    * Retorna a posição x atual da FakeEntity.
    * @returns
    */
   getX(): number;

   /**
    * Retorna a posição Z atual da FakeEntity.
    * @returns
    */
   getZ(): number;

   /**
    * Retorna a posição Y atual da FakeEntity.
    * @returns
    */
   getY(): number;

   /**
    * Retorna a rotação atual do FakeEntity.
    * @returns
    */
   getR(): number;

   /**
    * Retorna o código do atual visual da entidade.
    * @returns
    */
   getFigure(): string;

   /**
    * Retorna missão atual da entidade
    * @returns
    */
   getMotto(): string;

   /**
    * Retorna o código do efeito atual da entidade.
    * @returns
    */
   getEffect(): number;

   /**
    * Retorna o código do atual item de mão que a entidade está segurando.
    * @returns
    */
   getHandItem(): number;

   /**
    * Retorna a atual dança da entidade.
    * @returns
    */
   getDance(): number;

   /**
    * @description Retorna a quantidade de diamantes que a entidade possui.
    * @returns
    */
   getDiamonds(): number;

   /**
    * Retorna a quantidade de duckets que a entidade possui.
    * @returns
    */
   getDuckets(): number;

   /**
    * Retorna a quantidade de créditos que a entidade possui.
    * @returns
    */
   getCredits(): number;

   /**
    * Retorna a distancia entre a entidade e outra posição fornecida no objeto.
    * @param e - 
    * @returns
    */
   distanceTo(e: IScriptReachable): number;

   /**
    * Retorna a distancia atual entre esta entidade e a posição fornecida.
    * @param x - Posição X a ser comparada.
    * @param y - Posição Y a ser comparada.
    * @param z - Posição Z a ser comparada.
    * @returns
    */
   distanceTo(x: number, y: number, z: number): number;

   /**
    * Retorna se entidade é um FakeBot.
    * @returns Boolean
    */
   isBot(): boolean;

   /**
    * Retorna se entidade está próxima (tocando) a posição fornecida.
    * @param x - Posição X a ser comparada.
    * @param y - Posição Y a ser comparada.
    * @param z - Posição Z a ser comparada.
    * @returns Boolean
    */
   touching(x: number, y: number, z: number): boolean;

   /**
    * Retorna se entidade está próxima (tocando) a posição fornecida pelo objeto.
    * @param e
    * @returns Boolean
    */
   touching(e: IScriptReachable): boolean;

   /**
    * Retorna se esta entidade está sobre a mobilia fornecida.
    * @param obj
    * @returns Boolean
    */
   in(obj: IScriptReachable): boolean;

   /**
    * Retorna se a entidade está se movendo.
    * @returns Boolean
    */
   isWalking(): boolean;

   /**
    * Define nome para a entidade
    * @param username - Nome que será definido.
    */
   setUsername(username: string): void;

   /**
    * Define o visual da entidade
    * @param gender - Gênero do visual.
    * @param figure - Código do visual.
    */
   setFigure(gender: string, figure: string): void;

   /**
    * Define nova missão na entidade
    * @param motto - Missão que será definida.
    */
   setMotto(motto: string): void;

   /**
    * Define um efeito a entidade.
    * @param e - Código do efeito.
    */
   setEffect(e: number): void;

   /**
    * Define um item de mão para entidade segurar.
    * @param h - Código do item de mão.
    */
   setHandItem(h: number): void;

   /**
    * Define uma dança para a entidade.
    * 0: Parado.
    * 1: Hap-Hop
    * 2: Pogo-Mogo
    * 3: Duck Funk
    * 4: Rollie
    * @param danceId - Código da dança
    */
   setDance(danceId: 0 | 1 | 2 | 3 | 4): void;

   /**
    * Remove efeito (:enable 0)
    */
   removeEffect(): void;

   /**
    * Remove o item de mão da entidade.
    */
   removeHandItem(): void;

   /**
    * Faz com que a entidade pare de andar.
    */
   cancelWalk(): void;

   /**
    * Adiciona um emblema no perfil do Bot
    * @param badge - Código do emblema a ser adicionado.
   */
   addBadge(badge: string): void;

   /**
    * Entidade faz uma ação determinada
    * 1: Acenar
    * 2: Mandar Beijo
    * 3: Rir
    * @param action - Número da ação
   */
   action(action: 1 | 2 | 3): void;

   /**
    * Move a entidade até a posição fornecida.
    * Entidade só irá se mover caso o caminho esteja livre até o ponto fornecido*
    * @param x
    * @param y
    */
   walk(x: number, y: number): void;

   /**
    * @param object
    */
   walk(object: IScriptReachable): void;

   /**
    * Teletransporta a entidade para posição fornecida.
    * @param x - Posição X em que entidade seŕa levada.
    * @param y - Posição Y em que entidade seŕa levada.
    * @param z - Posição Z em que entidade seŕa levada.
    * @param r - Rotação definida para a entidade.
    */
   teleport(x: number, y: number, z: number, r: number): void;

   /**
    * Teletransporta a entidade para posição fornecida no objeto.
    * @param object
    */
   teleport(object: IScriptReachable): void;

   /**
    * Entidade olha para o ponto definido.
    * @param x - Posição X que entidade irá olhar.
    * @param y - Posição Y que entidade irá olhar.
    * @param moveHead - Se a entidade pode mover somente sua cabeça.
    */
   lookTo(x: number, y: number, moveHead: boolean): void;

   /**
    * Entidade olha para o ponto definido.
    * @param r
    */
   lookTo(pos: IScriptReachable): void;

   /**
      * Faz a entidade dizer uma mensagem.
      * @param message - Mensagem que será dita pela entidade.
      * @param shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
      * @param bubbleId - Balão da mensagem
      */
   say(message: string, shout: boolean, bubbleId: number): void;

   /**
      * Sussura uma mensagem para outra entendide.
      * @param to - Entidade que receberá a mensagem.
      * @param message - Mensagem que será enviada.
      * @param bubbleId - Balão da mensagem.
      */
   whisper(to: ScriptEntity, message: string, bubbleId: number): void;

   /**
    * Faz a entidade levantar
    */
   std(): void;

   /**
    * Faz a entidade sentar
    */
   sit(): void;

   /**
    * Faz a entidade deitar
    */
   lay(): void;


}