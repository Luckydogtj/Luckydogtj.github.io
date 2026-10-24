# Dog Blog 迁移说明（MIGRATION_NOTES.md）

> 本博客基于 `E:\blog\blog`（原博客）的 Hexo + Matery 架构迁移而来，
> 所有者变更为 **黄太极**，站点名 **Dog Blog**。
> 原项目 `E:\blog\blog` 未做任何修改。

---

## 一、迁移原则

1. 复用原博客成熟的 Hexo 6.3.0 框架与 Matery 主题，不重写主题。
2. 不复制原项目的 `.env`、API Key、个人身份信息、Git 历史、缓存、测试报告及 Python AI 测试平台。
3. 所有第三方服务（评论、统计、社交账号、部署仓库）在未提供新账号前保持**关闭**状态。
4. 不使用原博客的个人头像与身份图片；尚未提供的图片使用中性 SVG 占位。

## 二、原 → 新 功能迁移对照

| 原博客功能 | 新博客处理 | 说明 |
|---|---|---|
| Hexo 6.3.0 工程结构 | ✅ 复用 | 独立 `package.json` + `_config.yml` |
| Matery 主题（layout / css / js / libs / medias） | ✅ 整体迁移 | 复制 `themes/matery`，未重写 |
| EJS 页面模板（首页/归档/分类/标签/关于） | ✅ 复用 | 保留全部原模板 |
| 首页 Banner + 打字副标题 | ✅ 复用 + 重写内容 | 副标题改为电力电子方向 |
| 文章卡片 / 目录 / 代码高亮 / 搜索 | ✅ 复用 | `search.xml`、`hexo-generator-search` |
| 不蒜子访问统计 | ✅ 开启 | 无需个人绑定 |
| 我的项目 / 我的技能 小部件 | ✅ 复用 + 重写数据 | 改为科研与工程方向 |
| 评论（Gitalk/Valine/Waline/Twikoo 等） | ⚠️ 全部关闭 | 未提供账号 |
| 看板娘 Live2D | ⚠️ 关闭 | 与科研博客风格不符，可重新开启 |
| 樱花 / 爱心 / 鼠标星星特效 | ⚠️ 关闭 | 保持专业风格 |
| 音乐播放器 | ⚠️ 关闭 | |
| 打赏功能 | ⚠️ 关闭 | 未提供收款码 |
| Google / 百度统计 | ⚠️ 关闭 | 未提供 ID |
| 百度推送 / Fork me | ⚠️ 关闭 | |
| Coze 智能体聊天机器人 | ❌ 已移除 | 原 `layout.ejs` 内嵌 SDK 与 PAT Token，属于敏感信息，已彻底删除 |
| GitHub Pages 部署配置 | ⚠️ 注释 | `_config.yml` 中 deploy 已注释，未绑定远程仓库 |
| 原 `.github/workflows/deploy.yml` | ✅ 复用 + 改造 | 保留 CI，仓库地址由 `peaceiris/actions-gh-pages` 自动处理 |

## 三、主题层修改（`themes/matery/`）

| 文件 | 修改内容 |
|---|---|
| `_config.yml` | 重写：新菜单、个人资料、科研/工程项目数据、技能数据；关闭所有第三方服务；指定科技蓝背景与占位图 |
| `layout/layout.ejs` | 删除内嵌 Coze 聊天机器人 SDK 与 PAT Token；删除内联点击爱心脚本 |
| `layout/_partial/head.ejs` | 新增 `dog.css` 样式引入；删除自定义鼠标指针样式 |
| `layout/_partial/bg-cover-content.ejs` | Banner 图路径改为 `/medias/dog/banner.svg` |
| `layout/about.ejs` | 在个人简介下方新增 `page.content` 渲染，支持「关于我」正文 |

> 未修改任何 `.ejs` 模板的布局结构与交互逻辑，仅做上述最小改动。

## 四、站点层新增（`source/`）

| 路径 | 用途 |
|---|---|
| `source/css/dog.css` | 科技蓝主题覆盖（主色 #1565c0、卡片阴影、科研/工程卡片网格、简历时间线） |
| `source/medias/dog/banner.svg` | 首页 Banner 占位（科技蓝渐变 + 电路纹理） |
| `source/medias/dog/avatar.svg` | 头像占位（中性人物剪影） |
| `source/medias/dog/bg.svg` | 页面背景（浅蓝网格） |
| `source/research/index.md` | 科研成果页（4 个方向卡片） |
| `source/projects/index.md` | 工程项目页（5 个项目卡片） |
| `source/resume/index.md` | 个人简历页（教育/技能/科研/项目/荣誉/联系） |
| `source/about/index.md` | 关于我页（layout: about） |
| `source/{404,categories,tags}/index.md` | 基础页面 |
| `source/_posts/*.md` | 5 篇示例技术文章（GFM-VSC、MMC、Buck 建模、PCB、Simulink） |

## 五、配置层

- `_config.yml`：站点名 Dog Blog、作者 黄太极、`deploy` 已注释、`live2d` 关闭、无个人邮箱。
- `package.json`：移除原项目中无效的 `hexo-theme-matery` 依赖（主题已本地化）；保留 Hexo 全家桶。
- `.gitignore`：排除 `public/`、`db.json`、`.env`、`node_modules/`、AI 测试相关目录。
- `scaffolds/post.md`：模板含 `categories`、`tags`、`summary`。

## 六、尚未配置 / 待补充

以下内容因未提供具体信息，使用占位或关闭状态，需黄太极本人补充：

1. **个人资料**：真实头像、邮箱、电话、GitHub、所在城市。
2. **科研内容**：每个研究方向的具体背景、技术路线细节、本人承担工作、阶段性成果、论文列表、仿真/实验图片。
3. **工程项目**：原理图、PCB 图、实物照片、测试数据、项目文档链接。
4. **部署**：`_config.yml` 的 `url` 与 `deploy.repo`，以及 GitHub Pages 仓库。
5. **第三方服务**：评论系统（推荐 Waline/Twikoo）、统计（百度/Google）、ICP 备案。
6. **简历**：真实教育背景年份、科研/项目经历细节、荣誉奖项。
7. **favicon / logo**：当前复用原主题默认 logo.png，建议替换为 Dog Blog 专属标识。

## 七、验证结果

- `npm install` ✅ 成功（758 packages）
- `hexo generate` ✅ 成功（221 文件）
- `hexo server -p 4010` ✅ 所有页面返回 200
- 页面内容检查 ✅ 无原博客个人信息泄露、无 Coze Token 残留
- 浏览器视觉检查 ✅ 科技蓝主题、卡片布局、导航菜单、Banner 均正常渲染
