# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hammy Wire（哈米电线）产品介绍网站 — 面向淘宝/拼多多电商推广的电线工厂品牌落地页，采用 Apple 官网风格设计（中文 zh-CN）。

产品品类：RVV 电源线、RVS 双绞电源线、网线（超五类/六类）、双绞线（音频/信号线）。

## Tech Stack

| 层 | 技术 |
|---|------|
| 前端 | React 18 + Vite + Tailwind CSS + TypeScript |
| 后台管理 | React + Vite + Tailwind（独立入口或独立项目） |
| 后端 API | Python + FastAPI |
| 数据库 | Supabase（PostgreSQL + Auth + Storage） |

## Project Structure

```
hammy-wire/
├── frontend/                  # 用户端展示网站（电商落地页） ✅ 已创建
│   ├── src/
│   │   ├── components/
│   │   │   ├── site/          # 页面级区块组件（Nav, Hero, Footer 等）
│   │   │   └── ui/            # shadcn/ui 基础组件（button, card, dialog 等）
│   │   ├── pages/             # 路由页面
│   │   ├── hooks/             # 自定义 hooks
│   │   ├── i18n/              # 国际化（React Context + 中/英 JSON）
│   │   │   ├── context.tsx     # LocaleProvider + useLocale / useT
│   │   │   ├── types.ts       # Translations 类型定义
│   │   │   └── locales/       # zh.ts / en.ts 翻译文件
│   │   ├── lib/               # 工具函数
│   │   ├── assets/            # 产品图片等静态资源
│   │   └── test/              # 测试文件
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── package.json
├── admin/                     # 后台管理系统（规划中，未创建）
├── backend/                   # Python + FastAPI（规划中，未创建）
└── supabase/                  # 数据库迁移（规划中，未创建）
```

## Commands

> 需要 Node.js >= 18。使用 nvm 切换版本：`nvm use 22`

### Frontend / Admin

```bash
# 开发
cd frontend && npm run dev      # 启动前端开发服务器（端口 8080）
cd admin && npm run dev         # 启动后台管理开发服务器

# 构建
npm run build                   # 构建生产版本
npm run preview                 # 预览生产构建

# 代码质量
npm run lint                    # ESLint 检查
```

### Backend

```bash
cd backend
uvicorn app.main:app --reload   # 开发模式启动（默认 8000）
pytest                          # 运行测试
pytest tests/ -k "test_name"    # 运行单个测试
```

## Architecture

### 设计系统

**色彩** — 深色主题，HSL CSS 自定义属性驱动，定义在 [src/index.css](frontend/src/index.css)：

| Token | 色值 | 用途 |
|---|---|---|
| `--background` | `#000` | 页面主背景 |
| `--bg-elevated` | `#0d0d0d` | 抬高区块背景 |
| `--bg-card` | `#141414` | 卡片背景 |
| `--foreground` | `#f5f5f7` | 主文字色 |
| `--foreground-muted` | `#a1a1a6` | 次级文字色 |
| `--primary` | `hsl(22 78% 52%)` | **铜色主色调**（呼应铜导体材质） |
| `--border` | `#242424` | 边框 / 分割线 |
| `--gradient-copper` | `hsl(22 78% 52%) → hsl(28 90% 60%)` | 品牌渐变 |
| `--shadow-glow` | `0 0 60px -10px hsl(22 78% 52% / 0.35)` | 铜色辉光阴影 |

品牌辅助色类名：`bg-elevated`、`bg-card-hammy`、`text-muted-hammy`、`hairline`（渐变分割线）。

**字体** — `font-display`（Inter + SF Pro Display，用于标题）和默认 `font-sans`（Inter，用于正文）。定义在 [tailwind.config.ts](frontend/tailwind.config.ts)。

**间距** — section 统一使用 `py-24 md:py-32`，CTA 区域加大到 `md:py-40`。container 内边距 `1.5rem`，最大宽度 `1400px`。

### 组件模式

每个 section 组件遵循统一结构（参见 [src/components/site/](frontend/src/components/site/)）：

**Section 标题行（Eyebrow）**：
```
text-xs tracking-[0.4em] text-muted-hammy uppercase
+ 铜色短线: <span className="inline-block w-6 h-px bg-primary align-middle mr-2" />
```

**主标题**：
```
font-display font-semibold text-foreground text-3xl md:text-5xl tracking-tight
→ Hero 特例: text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95]
```

**正文**：
```
text-muted-hammy leading-relaxed max-w-md
```

**网格布局**（Categories、Quality、产品规格）：
```
grid + gap-px bg-border + border border-border + rounded-2xl overflow-hidden
→ 单元格 bg-card-hammy，hover 时 bg-background
```

**卡片**：`bg-card-hammy border border-border rounded-2xl`，hover 时 `hover:border-primary/60 transition-colors`

**CTA 按钮**：`rounded-full` + 实心（`bg-foreground text-background`）或描边（`border border-border`），hover 变铜色

**导航栏**（[Nav.tsx](frontend/src/components/site/Nav.tsx)）：
- `fixed top-0 z-50`，滚动后出现毛玻璃效果 `bg-background/70 backdrop-blur-xl border-b border-border`
- Logo：铜色圆点（`bg-gradient-copper shadow-glow`）+ `HAMMY` 字标（`tracking-[0.18em]`）
- 激活态：铜色渐变下划线 `h-px bg-gradient-copper`
- 右侧 "询价" CTA：`rounded-full border`，hover 变铜色

**Hero 区域**（[Hero.tsx](frontend/src/components/site/Hero.tsx)）：
- 全屏产品大图 `object-cover` + 径向渐变叠加层
- 顶部品牌线 + 主标题（`Extremely Durable Jacket`）+ 副标题
- 底部统计栏（30+ Years, ISO 9001, 50+ Countries）+ Scroll 指示器（跳动箭头动画）

**产品水平滚动**（[ProductPinScroll.tsx](frontend/src/components/site/ProductPinScroll.tsx)）：
- `sticky top-0` 容器 + `height: n*100vh` section，滚动时水平平移产品卡片
- 每张卡片：`grid grid-cols-1 lg:grid-cols-12`，左侧产品图（`aspect-[4/3]`），右侧产品信息 + `<dl>` 规格网格
- 顶部有进度指示器（产品编号 + 线段）

**评价走马灯**（[TestimonialsMarquee.tsx](frontend/src/components/site/TestimonialsMarquee.tsx)）：
- 双份列表 + `animate-marquee`（CSS `translateX(-50%)` 无限循环）
- 左右边缘有渐变淡出遮罩，hover 暂停动画

**动画** — 全部使用 CSS/Tailwind 实现，无第三方动画库：
- `animate-fade-in`：opacity + translateY(20px → 0)，0.8s ease-out
- `animate-marquee`：translateX(0 → -50%)，40s linear infinite
- `animate-bounce-down`：箭头跳动，2s ease-in-out infinite
- 滚动驱动：ProductPinScroll 通过 `useEffect` + scroll 事件监听实现水平平移

### 国际化 (i18n)

使用轻量 `LocaleContext` + 嵌套翻译对象，无第三方依赖。

- **默认语言**：中文 `zh`，偏好存入 `localStorage('hammy-locale')`
- **切换方式**：Nav 栏点击 `中 / EN` 按钮调用 `setLocale()`
- **组件中使用**：`const t = useT()` → `t.nav.home` / `t.hero.title1` 等
- **切换语言**：`const { locale, setLocale } = useLocale()`
- **类型安全**：`Translations` 接口（[types.ts](frontend/src/i18n/types.ts)）强制 zh/en 结构一致
- **新增文案**：在 `types.ts` 加键 → 在两个 locale 文件中补充翻译

### 数据流

1. Supabase 存储产品数据（名称、规格、图片、品类、价格区间）
2. FastAPI 提供 RESTful API，作为 Supabase 和前端之间的中间层
3. 前端通过 API 获取产品列表/详情，静态生成（或 ISR）提升首屏速度
4. 后台管理通过 API 进行 CRUD 操作，图片上传至 Supabase Storage

### Supabase 核心表设计

- `products` — 产品主表（name, slug, category_id, specs JSONB, price_range, images[], is_featured）
- `categories` — 品类表（name, slug, description, display_order）
- `product_specs` — 产品规格详情（awg, conductor_material, insulation, jacket, certifications）

### API 路由设计

- `GET /api/products` — 产品列表（支持 ?category= & ?featured=true）
- `GET /api/products/{slug}` — 产品详情
- `GET /api/categories` — 品类列表
- `POST/PUT/DELETE /api/admin/products` — 后台产品管理（需认证）

## 设计约束

- 文案以中文为主，英文为辅（面向国内买家和电商，同时支持国外电商）
- 图片需考虑移动端加载速度，使用 WebP 格式 + 懒加载（`loading="lazy"`）
- 移动端优先的响应式设计，使用 `grid grid-cols-1 lg:grid-cols-12` 等响应式 grid
- 品牌主色：**铜色** `hsl(22 78% 52%)`（呼应铜导体材质），辅色：`#F5F5F7`（Apple 浅灰文字）
- 深色主题为默认，背景纯黑 `#000`，卡片 `#141414`
