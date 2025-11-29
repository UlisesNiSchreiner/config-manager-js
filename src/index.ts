import { ConfigManager } from "./configManager";

export * from "./types";

/**
 * Default singleton instance.
 *
 * Usage:
 *   import { config } from "properties-manager-js";
 *   const port = config.getNumber("PORT");
 */
export const config = ConfigManager.getInstance();
