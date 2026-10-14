import { studioText as t } from "@/utils/studio-language";
import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	avatar: "/assets/deep-space/avatar.svg",
	name: "Arcmelo",
	bio: t("把想象写进代码，把过程留在这里。", "Turning imagination into code. Sharing the journey here."),
	links: [
		{ name: "GitHub", icon: "fa7-brands:github", url: "https://github.com/inkcomic", showName: true },
		{ name: "RSS", icon: "fa7-solid:rss", url: "/rss/", showName: true },
		{ name: "Atom", icon: "fa7-solid:atom", url: "/atom/", showName: true },
	],
};
