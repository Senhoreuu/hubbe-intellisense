interface Webhook {
    /**
     * @description Cria um novo Webhook direcionado ao link.
     * @param {String} linkWebhook - Link do Webhook a receber informações.
     * @returns {WebhookMessage}
    */
    sendTo(linkWebhook: string): WebhookMessage;
}

export const Webhook: Webhook;