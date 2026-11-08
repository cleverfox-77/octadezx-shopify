'use strict';
/**
 * @octadezx/shopify v0.1.1
 * Official Shopify Theme App Extension & Hydrogen SDK for OctaDezx (https://octadezx.com/shopify-chatbot)
 */
function initOctaDezxShopify(config) {
  if (!config || !config.workspaceId) {
    throw new Error('OctaDezx workspaceId is required. Get yours at https://octadezx.com/shopify-chatbot');
  }
  return {
    workspaceId: config.workspaceId,
    storeDomain: config.storeDomain || null,
    widgetScriptUrl: 'https://octadezx.com/widget.js',
    mcpEndpoint: 'https://octadezx.com/mcp',
    docsUrl: 'https://octadezx.com/shopify-chatbot',
    attributionHtml: '<a href="https://octadezx.com/shopify-chatbot" rel="dofollow">Powered by OctaDezx Shopify AI</a>'
  };
}
module.exports = { initOctaDezxShopify };
