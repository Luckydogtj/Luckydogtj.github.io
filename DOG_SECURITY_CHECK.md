# 科研内容发布安全检查报告（DOG_SECURITY_CHECK）

- 检查日期：2026-10-26
- 项目：`E:\blog\Dog_blog`（Hexo 6.3.0 + Matery）
- 检查范围：两个科研详情页、科研总览、简历页、首页项目卡片、项目文档、Git 跟踪文件、Git 全历史、构建产物、线上站点
- 执行结果：**已完成源码脱敏、Git 历史重写、force-push 与重新部署；线上页面已替换为脱敏版本，复检 0 命中**

## 1. 结论摘要

| 位置 | 结果 | 说明 |
|---|---|---|
| 公开源码 `source/` | 通过 | 已无受限指标明文，仅保留安全文案与占位 |
| 构建产物 `public/` | 通过 | 部署形态无受限数值、无占位标记；`search.xml` 与首页干净 |
| Git 跟踪文件（工作区） | 通过 | 脱敏修改已提交；HEAD = `7897dfc` |
| Git 历史 | 通过 | 全历史重写，受限数值替换为“【限制发布】”，官方监视清单 0 命中 |
| 线上站点 | 通过 | Actions 部署成功，5 个页面复检均未命中受限数据 |
| 首页项目卡片 | 通过 | 本轮新发现的泄漏点已修复（衰减时间阈值、损耗百分比） |
| 私有数据存放 | 通过 | 位于仓库外 `E:\blog\Dog_blog_private\research-restricted\` |
| 发布前阻断 | 通过 | 源码、渲染产物、构建后文件三层检查，实测可中断构建 |

**残余风险**：GitHub 对不可达对象可能有缓存，旧提交短时间仍可能通过已知 SHA 访问；仓库若曾被他人在此期间克隆或 fork，副本无法追回。建议按项目保密要求评估是否需联系 GitHub Support 清除缓存并通知项目单位。详见第 5 节。

## 2. 私有数据外移

### 2.1 私有目录（仓库外，不参与 Git）

```
E:\blog\Dog_blog_private\research-restricted\
├── uhvdc-oscillation.blocks.json    # 项目二受限区块（KPI、损耗、模型/工况）
├── watchlist.txt                    # 敏感数据监视清单（供构建检查使用）
├── PRIV_NOTES.md                    # 受限数据存档与来源说明
├── filter_file_info.py              # 历史重写替换规则（仅对科研相关文件生效）
└── history-rewrite.md               # Git 历史清理操作与执行记录
```

### 2.2 公开源码的处理

- 项目二详情页中原有的 KPI 卡片、损耗对比条、模型/工况参数已移除，改为：

```html
<!-- DOG-RESTRICTED:SLOT:uhvdc-kpi -->
<div class="dog-research-restricted">数据发布限制提示</div>
<!-- /DOG-RESTRICTED:SLOT -->
```

- 本地构建/预览时由 `scripts/research-restricted-inject.js` 从私有目录注入真实内容；
  CI/部署环境未授权时保留提示，且占位注释在输出前被移除。
- 简历页中项目一、项目二的未核实/未授权指标改为定性表述，原文移入私有存档。
- 首页项目卡片（主题 `_config.yml`）两段项目描述同步改为定性表述。
- `DOG_BLOG_AUDIT.md`、`DOG_RESEARCH_IMPLEMENTATION_REPORT.md`、`RESEARCH_ASSET_REVIEW.md` 中的明文数值已替换为“见私有存档 PRIV-RES-01/02”。

## 3. 泄漏面扫描结果

### 3.1 源码与文档

- 扫描 `source/` 全部 `.md/.html/.ejs/.js/.css`：未命中监视清单。
- 扫描 `themes/matery/_config.yml` 与 `themes/matery/layout/`：未命中（本轮新增扫描范围）。
- 扫描公开文档（含本报告）：未命中监视清单。
- `git grep` 全仓库跟踪文件（排除主题第三方资源）：未命中。
- 主题第三方字体 `themes/matery/source/libs/awesome/webfonts/fa-brands-400.svg` 存在与受限指标形态相近的数字串，经逐条核对均为字形坐标，不是科研数据；构建检查未扫描该第三方目录，报告中也不复述具体数字。

### 3.2 构建产物

- `public/research/gfm-storage/index.html`、`public/research/uhvdc-oscillation/index.html`：无 `DOG-RESTRICTED` 标记。
- `public/search.xml`：无受限数值。
- `public/index.html`（首页项目卡片）、`public/research/index.html`、`public/resume/index.html`、归档页：无受限数值。
- 未生成 `atom.xml` / `rss.xml`；如后续启用，`tools/research-security-scan.js` 会自动纳入扫描。

### 3.3 Git 历史（已清理）

重写前的暴露位置：

| 提交 | 分支 | 含受限数据的文件 |
|---|---|---|
| `70afed1` | `main`（初始提交） | `DOG_BLOG_AUDIT.md`、`source/research/index.md`、`source/research/gfm-storage/index.md`、`source/research/uhvdc-oscillation/index.md`、`source/resume/index.md` |
| `e27b7b4` | `main`（原 HEAD） | 同上 5 个文件，另有主题 `_config.yml` 的首页卡片文案 |
| `80844b6` | `origin/gh-pages` | `research/index.html`、`research/gfm-storage/index.html`、`research/uhvdc-oscillation/index.html`、`resume/index.html` |

2026-10-26 已执行的处理：

- 备份：`E:\blog\Dog_blog_backup.git`（远端全量镜像）、`E:\blog\Dog_blog_local_all.bundle`（本地全分支）。
- 工具与方式：`git-filter-repo 2.47.0` + `--file-info-callback`，仅对 9 个科研相关文件替换受限数值，主题第三方字体与压缩脚本保持原样。
- 覆盖引用：`refs/heads/main`、`refs/heads/gh-pages`；无标签。
- 结果：`main` 由 `e27b7b4` 重写为 `7897dfc`（5 个提交）；`gh-pages` 由 `80844b6` 重写为 `f582bd0`。
- 替换后的占位为“【限制发布】”，不包含原始数值。
- 验证：对 `git rev-list --all` 的每个提交执行 `git grep` 官方监视清单（排除第三方 libs），命中数为 0；`fa-brands-400.svg` 的 blob 哈希与备份一致，确认未被误改。
- 本地仓库已对齐重写后的历史（`git reset --hard origin/main`）。

### 3.4 线上站点（已替换）

- 强制推送触发 `Deploy Dog Blog (Hexo)` 工作流，`7897dfc` 运行状态为 success（2026-10-26T05:43Z）。
- 复检结果（带时间戳参数绕过缓存）：

| 路径 | 受限数值 | 受限表述 | KPI 结构 | 限制提示 |
|---|---|---|---|---|
| `/research/uhvdc-oscillation/` | 0 | 0 | 0 | 2 |
| `/research/gfm-storage/` | 0 | 0 | 0 | 0 |
| `/resume/` | 0 | 0 | 0 | 0 |
| `/`（首页项目卡片） | 0 | 0 | 0 | 0 |
| `/search.xml` | 0 | 0 | — | — |

## 4. 发布前阻断机制

### 4.1 三层检查

1. **源码层（`before_generate`）**
   `scripts/research-security-check.js` 读取私有监视清单，扫描 `source/`、`themes/matery/_config.yml` 与 `themes/matery/layout/`，命中即抛错中断 `hexo generate`。
2. **渲染层（`after_render:html`）**
   - 任何产物残留 `DOG-RESTRICTED` 标记即中断；
   - CI/部署且未授权（`RESEARCH_METRICS_PUBLIC!==true`）时，出现 KPI/损耗百分比/仿真规模结构即中断。
3. **构建后文件层（`tools/research-security-scan.js`）**
   扫描 `public/research/*.html`、`public/index.html`、`search.xml`、RSS/Atom；CI 环境自动进入部署检查模式。非零退出码阻断部署。

### 4.2 接入构建与 CI

- `package.json`：`"build": "hexo clean && hexo generate && node tools/research-security-scan.js"`。
- `.github/workflows/deploy.yml`：构建步骤改为 `npm run build`；检查失败时不会进入 `upload-pages-artifact` 与 `deploy-pages`。
- 本地命令：`npm run check:security`。

### 4.3 实测结果

| 场景 | 结果 |
|---|---|
| 本地构建（私有数据可用） | 223 个文件；注入 2 处受限区块；无标记残留；本地检查通过 |
| 模拟部署（`CI=true`、未授权） | 223 个文件；保留 2 处限制提示；无 KPI/损耗/规模数据；部署检查通过 |
| 首页卡片仍含受限表述 | 扩展监视清单后由源码层拦截；修复后构建通过 |
| 在源码临时写入一个受限数值 | `hexo generate` 退出码 2 并输出“发布阻断”；`research-security-scan.js` 退出码 1 |
| 受阻测试文件删除后重建 | 构建与检查恢复通过 |

### 4.4 授权发布说明

- 仅设置 `RESEARCH_METRICS_PUBLIC=true` 不会凭空产生数据：私有目录在 CI 中不存在时仍显示限制提示。
- 取得授权后，应在本机构建（私有目录可用）或将私有目录通过 CI Secret 挂载，再部署 `public/`。
- 授权范围变化时，同步更新 `PRIV_NOTES.md` 与监视清单。

## 5. 历史与线上清理：执行记录与残余风险

已执行（2026-10-26）：

1. 备份镜像与本地全分支 bundle。
2. `git filter-repo` 重写 `main` 与 `gh-pages` 全历史。
3. force-push 两个分支（无标签需要处理）。
4. 强制推送自动触发 Pages 工作流，线上页面已替换为脱敏构建。
5. 清理后完成 `git grep` + 逐提交复检，官方监视清单 0 命中。

仍建议处理（需另行批准）：

1. **GitHub 缓存**：不可达对象可能仍可通过已知 SHA 临时访问；如保密要求严格，联系 GitHub Support 请求清除缓存。
2. **他方副本**：公开期间若被克隆或 fork，副本不受本次重写影响；由项目单位评估是否需要通知。
3. **保密流程**：仓库曾公开，建议按项目保密要求完成内部报备或告知。

## 6. 页面与构建验证

执行 `hexo clean` + `hexo generate`（本地注入模式）：223 个文件。

| 页面 | 视口 | HTTP | 7 章节 | 7 锚点 | 占位 | KPI | 提示 | 横向溢出 | 控制台错误 |
|---|---|---|---|---|---|---|---|---|---|
| 科研总览 | 1440 | 200 | — | — | — | — | — | 0 | 0 |
| 项目一 | 1440 | 200 | 7 | 7 | 4 | — | 0 | 0 | 0 |
| 项目二 | 1440 | 200 | 7 | 7 | 4 | 2 | 0 | 0 | 0 |
| 科研总览 | 375 | 200 | — | — | — | — | — | 0 | 0 |
| 项目一 | 375 | 200 | 7 | 7 | 4 | — | 0 | 0 | 0 |
| 项目二 | 375 | 200 | 7 | 7 | 4 | 2 | 0 | 0 | 0 |

- 总览页两张卡片分别指向 `/research/gfm-storage/`、`/research/uhvdc-oscillation/`，详情页上下篇互链正常。
- Hero 顶部桌面 144px、手机 130px；蓝白配色、技术路线、目录导航与响应式布局保持原状。
- 视觉衔接：总览页蓝色 Banner + 白色卡片，详情页深蓝 Hero + 蓝色章节编号/标签，字体与间距一致；未做大规模改版。

## 7. 文件变更

| 文件 | 变更 |
|---|---|
| `source/research/uhvdc-oscillation/index.md` | 受限区块改为 SLOT 占位 + 安全提示 |
| `source/resume/index.md` | 删除未授权/未核实指标，改定性表述 |
| `themes/matery/_config.yml` | 首页项目卡片移除受限表述，改定性描述 |
| `DOG_BLOG_AUDIT.md` | 删除明文数值清单与模型参数表述 |
| `DOG_RESEARCH_IMPLEMENTATION_REPORT.md` | 数值引用改为私有存档编号 |
| `RESEARCH_ASSET_REVIEW.md` | 更新隔离措施说明 |
| `scripts/research-restricted-inject.js` | 新增：本地从私有目录注入 |
| `scripts/research-security-check.js` | 新增：源码/渲染层阻断；扫描范围含主题配置与布局 |
| `tools/research-security-scan.js` | 新增：构建后终检；纳入首页产物 |
| `package.json` | `build` 接入终检，新增 `check:security` |
| `.github/workflows/deploy.yml` | 改用 `npm run build`，检查失败即停止部署 |
| `.gitignore` | 增加私有数据目录与文件保护 |

未修改：`E:\blog\blog`、两个项目的 7 章节结构、技术路线、目录导航、图表占位、蓝白配色与响应式功能。Git 提交、force-push 与线上部署已按站点所有者授权执行。
