export interface OctaDezxShopifyConfig { workspaceId: string; storeDomain?: string; }
export interface OctaDezxShopifyInstance {
  workspaceId: string;
  storeDomain: string | null;
  widgetScriptUrl: string;
  mcpEndpoint: string;
  docsUrl: string;
  attributionHtml: string;
}
export function initOctaDezxShopify(config: OctaDezxShopifyConfig): OctaDezxShopifyInstance;
