# 深空极简主题

在 Firefly 现有 Astro/Svelte 工程上实施，保留内容集合、搜索、归档、分页、项目筛选和文章渲染系统。

## 编辑入口

- `src/components/home/SpaceHome.astro`：首屏、精选作品、开发日志和个人简介。
- `src/styles/deep-space.css`：深空配色、布局、移动端与减少动画偏好。
- `src/config/siteConfig.ts`：站名、说明、默认暗色、宽度和主题色。
- `src/config/profileConfig.ts`：作者介绍与社交链接。
- `src/config/navBarConfig.ts`：导航和探索菜单。
- `src/content/projects/`：作品；首页读取按原有规则排序的前两项。
- `src/content/posts/`：文章；沿用置顶、草稿、分页规则。
- `src/content/spec/about.md`：关于页。
- `public/assets/deep-space/`：光影素材、Logo、头像、favicon。

原有示例文章和项目仍保留，两个示例项目仅更换封面。未添加虚构的已发布游戏作品。

默认收起双侧栏和音乐入口，模块仍可通过原有配置启用。首页不使用壁纸轮播，改为独立的静态光影首屏。保留亮暗切换、RSS/Atom、归档、分类、标签、系列、项目筛选和文章目录。导航「探索」中可访问其他已启用页面。

## 运行

需要 Node >=22.23.0 和 pnpm，版本要求以 package.json 为准。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm type-check
pnpm build
pnpm preview
```

先运行 `pnpm check` 生成 Astro 内容类型，再运行独立 TypeScript 检查。全文搜索使用生产构建的 Pagefind 索引，应使用生产预览验证。

**正式部署前**：设置 `src/config/siteConfig.ts` 的 `site_url` 为自己的域名；目前保留 fork 原值，避免猜测地址。根据实际情况替换默认站名、作者介绍、示例文章与项目。

## 素材来源

两张抽象光影图片使用内置 ImageGen 生成，以本地 WebP 交付，无外部热链。Logo 与头像采用简单轨道 SVG。

Hero 提示词：
> Create a production WEBSITE HERO BACKGROUND IMAGE, not a UI mockup. Wide 16:9 landscape. Deep space minimal abstract art: almost black ink navy #060910 canvas, elegant cold blue-white wispy light veil curves upward along the RIGHT third and exits at the top right. One beautifully restrained thin glowing edge, with long smooth atmospheric light trails fading diagonally into lower right. Left HALF is extremely dark empty negative space for later HTML typography. No text, letters, logos, labels, interface, stars field, planets, rockets, robots, buildings, concrete subject, or orb. Abstract light sculpture only, cinematic quiet, very subtle fine grain, clean smooth gradients, no harsh neon. Color understated silver-blue and periwinkle. The brightest portion is small and entirely on the right. Sophisticated indie game developer portfolio atmosphere. All edges fade nearly to black for seamless website compositing.

Crosslight 提示词：
> Create a website project thumbnail background, widescreen 16:9, minimalist abstract deep-space art. Two very soft silver-blue ribbons of light cross asymmetrically near the right center of an almost black ink navy canvas. Razor-thin luminous curved edges taper into broad smooth dark atmospheric gradients. A hint of soft lavender in the light, not neon. Sparse composition, restrained, contemplative, refined, no recognizable object. No text, symbols, interface, stars, planet, machine, architecture or illustrations. Smooth dark gradients, subtle fine grain. This is an abstract background for an indie game developer website, modern cinematic minimalism.

保留 Astro / Firefly / Fuwari 来源说明与原许可证。

## Language

English is the default interface language. No visitor language switch is displayed.
To use Simplified Chinese, change `resolveSiteLang("en")` to `resolveSiteLang("zh_CN")` in `src/utils/studio-language.ts`, or set `PUBLIC_SITE_LANG=zh_CN` before running the dev server or building. Restart the dev server after changing environment variables.
The homepage, studio profile, navigation, footer and About page include English and Chinese copy. Articles and project content keep their authored language.
