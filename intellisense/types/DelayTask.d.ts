export interface DelayTask {
    /** 
    * Returna quantidade de ticks que restam para o termino do temporizador.
    * @returns {Number} 
    */
    getTicksRemain(): number;
}