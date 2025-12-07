import { ConfigManager } from "./configManager";

export * from "./types";

// We are not expoting the class up to now. We are just exporting the instance

/**
 * Default singleton instance.
 *
 * Usage:
 *   import { config } from "config-manager-js";
 *   const port = config.getNumber("PORT");
 */
export const config = ConfigManager.getInstance();
