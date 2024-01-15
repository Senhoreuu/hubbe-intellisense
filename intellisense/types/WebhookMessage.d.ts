export interface WebhookMessage {
    /**
     * @description Define a mensagem que será enviada junto ao Webhook
     * @param bodyMessage
     */
    setRawMessage(bodyMessage: string): WebhookMessage;

    /**
     * @description Define o titulo no Embed do Webhook
     * @param title
     */
    setTitle(title: string): WebhookMessage;

    /**
     * @description Define a descrição no Embed do Webhook
     * @param description
     */
    setDescription(description: string): WebhookMessage;

    /**
     * @description Define a imagem no Embed do Webhook
     * @param link
     */
    setImageUrl(link: string): WebhookMessage;

    /**
     * @description Define a imagem da Thumbnail no Embed do Webhook
     * @param link
     */
    setThumbnailUrl(link: string): WebhookMessage;

    /**
     * @description Define a cor no Embed do Webhook
     * @param decimalColor - Cor em decimal
     */
    setColor(decimalColor: number): WebhookMessage;

    /**
     * @description Adiciona um campo com titulo e descrição no Embed do Webhook
     * @param titleField
     * @param valueField
     */
    addField(titleField: string, valueField: string): WebhookMessage;

    /**
     * Envia o Webhook.
     */
    queue(): WebhookMessage;
}
