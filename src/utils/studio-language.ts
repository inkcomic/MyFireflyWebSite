import type { SiteConfig } from "@/types/siteConfig";
import { resolveSiteLang } from "./site-config-utils";

// Default site language; PUBLIC_SITE_LANG can override it for development/builds.
export const studioLanguage: SiteConfig["lang"] = resolveSiteLang("en");

export const studioText = (zh: string, en: string): string =>
	studioLanguage.startsWith("zh") ? zh : en;
