declare class Webhook {
    /**
     * @description Cria um novo Webhook direcionado ao link.
     * @param {String} linkWebhook - Link do Webhook a receber informações.
     * @returns {WebhookMessage}
    */
    static sendTo(linkWebhook: string): WebhookMessage;
}