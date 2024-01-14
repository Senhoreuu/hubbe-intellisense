declare class Delay {
    /**
     * @example
     * Delay.wait(() => {
     *  //Executado após 1 segundo de espera.
     * }, 2)
     * @param callback - Função executada após o tempo determinado ter passado.
     * @param ticks - Quantidade de ticks a aguardar até a execução da função 
    */
    wait(callback: () => void, ticks: number): DelayTask;

    /**
     * Executa uma função no intervalo de tempo.
     * @example
     * Delay.interval(() => {
     *  //Executado a cada 1 segundo.
     * }, 2)
     * @param callback - Função executada sempre que o tempo determinado ter passado.
     * @param ticks - Quantidade de ticks a aguardar até a execução da função
    */
    interval(callback: () => void, ticks: number): DelayTask;

    /**
     * Cancela o delayScript que for passado.
     * @example 
     * const delay = Delay.wait(() => {
     *      Debug.log('Teste')
     * }, 10)
     *
     * Delay.cancel(delay)
     * //Função não executará, pois o delay foi interrompido antes do tempo a ser aguardado.
     * @param task - Wait/Delay a ser interrompido.
    */
    cancel(task: DelayTask): void;

    /**
     * Converte segundos em uma quantia de ticks correspondente.
     * @example
     * Delay.wait(() => {
     *      //Executado após 10 segundos.
     * }, Delay.seconds(10))
     * @static 
     * @param sec - Quantidade de segundos a serem convertidos em ticks.
    */
    seconds(sec: number): number;
}