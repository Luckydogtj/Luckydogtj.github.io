# Dog Blog 内容审计与修正报告（DOG_BLOG_AUDIT.md）

日期：2026-10-24
范围：`E:\blog\Dog_blog`（原博客 `E:\blog\blog` 全程只读，未修改）
依据：《东北林业大学-黄太极-电气技术管理员.pdf》+ 本轮提供的简历事实

---

## 一、简历 PDF 读取情况

- PDF 已成功读取并解析文本流，可提取的**数字与时间信息**与指令完全一致，包括：项目起止时间、教育经历时间、个人项目（轮毂电机）设计参数、英语与体测信息等。**两个科研项目涉及的未授权/未核实指标数值已移出公开仓库**，存档于仓库外私有目录 `E:\blog\Dog_blog_private\research-restricted\PRIV_NOTES.md`（PRIV-RES-01 / PRIV-RES-02），本文件不再记录明文数值。
- **限制说明（如实记录）**：该 PDF 的中文正文使用 CID 字形编码，未提供可用的 ToUnicode 映射，逐字文本无法完整还原。因此中文表述（公司名、项目描述、奖项名称等）以本轮指令列出的简历事实为准，未做任何推断性补充。
- PDF 中出现电话与 QQ 邮箱等字段，按隐私要求**未写入网站任何页面**。

---

## 二、检查到的问题

| # | 问题 | 位置 | 处理 |
|---|---|---|---|
| 1 | 教育背景写「学历/学位及起止时间待补充」 | `source/resume/index.md` | 已补全硕士/本科两段 |
| 2 | 「关于我」缺少教育背景与个人特点 | `source/about/index.md` | 已补全 |
| 3 | 首页缺少个人介绍、研究方向、技术能力 | `themes/matery/layout/index.ejs` | 新增首页介绍卡片 |
| 4 | 项目二把「硬件实验验证」与大容量仿真模型并列表述，易被读成同一实物试验 | `source/research/**` | 拆分为两层并显式说明 |
| 5 | 项目一指标未注明适用工况，易被理解为普遍结论 | `source/research/**` | 增加「对应前期仿真算例工况」限定 |
| 6 | 轮毂电机页存在「未制造实物样机、未进行实车测试」的断言，简历无此依据 | `source/projects/**` | 删除断言，改为「以仿真分析为主，数据为仿真结果」 |
| 7 | 首页副标题仍是旧文案（MMC/PCB 方向） | `themes/matery/_config.yml` | 改为储能/柔直/电机方向 |
| 8 | 主题 `my.css` 残留指向第三方 CDN 的 `.cur` 鼠标指针 | `themes/matery/source/css/my.css` | 删除，改用系统默认指针 |
| 9 | 打字效果依赖 jsDelivr CDN 的 typed.js，离线/受限网络下 `Typed is not defined` | `_partial/bg-cover-content.ejs` | 改为本地 `libs/typed/typed.js` |
| 10 | 不蒜子统计接口在当前网络返回 502，控制台报错 | `themes/matery/_config.yml` | 关闭统计（可后续按需开启） |
| 11 | `_config.yml` 站点 URL 使用 `example.github.io` 占位 | `_config.yml` | 改为 `https://your-name.github.io` 占位，避免指向他人域名 |
| 12 | `MIGRATION_NOTES.md` 中保留原博客所有者姓名 | `MIGRATION_NOTES.md` | 改为中性表述 |
| 13 | 导航多出「归档」项，与规划不符 | `themes/matery/_config.yml` | 导航收敛为 6 项（归档页仍保留，可直接访问） |

---

## 三、已纠正的不准确 / 不实内容

1. **删除**「未制造实物样机」这类简历未记载的否定性断言（轮毂电机页与工程页）。
2. **拆分**项目二表述：
   - 本人参与 `CCF + 改进 C 型滤波器`方案的验证工作（公开页统一表述为“方案分析与仿真验证”，硬件细节待授权证据）；
   - 项目在大容量仿真模型中实现高频振荡抑制（模型规模数值未获公开授权，见私有存档 PRIV-RES-01）；
   - 明确「不应合并理解为同一项实物硬件试验」。
3. **保留**「参与」措辞（VMD-MSST-HHT 辨识设计、方案验证），未改写为「独立设计/独立开发」。
4. **限定**项目一指标工况并暂缓展示：短路比切换工况下的衰减时间、阻抗交点与相位差数值存在来源冲突或未确认公开权限，公开页面与简历页均不展示明文数值（见私有存档 PRIV-RES-02）。
5. **删除**此前虚构的 4 个泛化科研方向卡片（原「MMC 与柔性直流输电」「PCB 与硬件」等），改为 2 个科研项目 + 1 个工程项目。
6. **删除**此前虚构的「Buck/Boost 变换器项目」「单相并网逆变器实验平台」等经历。
7. 论文专利仅保留简历记载的 2 条，状态为「已受理」「中文核心（国网经研院）」，**未添加**已发表/已录用/授权/DOI/卷期/专利号。

---

## 四、修改的文件路径

**站点配置与文档**
- `_config.yml`（描述、关键词、URL 占位）
- `MIGRATION_NOTES.md`（移除原所有者姓名）
- 新增 `DOG_BLOG_AUDIT.md`（本文件）

**主题（最小改动）**
- `themes/matery/_config.yml`：导航 6 项；`myProjects`/`mySkills`/`profile` 按简历重写；副标题更新；新增 `libs.js.typed`；关闭不蒜子
- `themes/matery/layout/index.ejs`：新增首页个人介绍/研究方向/技术能力卡片
- `themes/matery/layout/_partial/bg-cover-content.ejs`：typed.js 改本地加载
- `themes/matery/source/css/my.css`：移除外部 `.cur` 指针引用与过时注释
- `source/css/dog.css`：新增 `.dog-intro*` 与通用 `.dog-tag` 样式

**内容页**
- `source/research/index.md`（重写为 2 个项目卡片）
- `source/research/gfm-storage/index.md`（新增）
- `source/research/uhvdc-oscillation/index.md`（新增）
- `source/projects/index.md`（重写为轮毂电机）
- `source/projects/hub-motor/index.md`（新增）
- `source/resume/index.md`（教育/技能/项目/实习/论文专利/个人评价）
- `source/about/index.md`（简介/教育/兴趣/能力/个人特点）

---

## 五、保留的原有功能

- Hexo 6.3.0 + Matery 主题全套 EJS 模板与交互
- 首页 Banner、打字副标题、AOS 动画、Materialize 组件
- 文章系统：分类、标签、归档、搜索（`search.xml`）、目录、代码高亮、分享
- 科技蓝视觉体系（`dog.css`）、卡片布局、简历时间线样式
- 5 篇通用技术文章（GFM-VSC 原理、MMC 原理、Buck 小信号建模、PCB 分区、Simulink 技巧），均定位为**知识分享**，未声称个人科研成果
- GitHub Actions 部署工作流（未执行推送）

---

## 六、新增或优化的内容

- 首页新增「黄太极 · 东北林业大学 控制科学与工程（工学硕士）」介绍卡，含 4 个研究方向标签与 5 项技术能力标签
- 首页 3 个代表项目卡片（2 科研 + 1 工程），均链接至详情页
- 2 个科研详情页按「研究背景 / 系统建模 / 控制策略 / 稳定性分析 / 研究结果 / 相关成果」组织；项目二按「振荡辨识 / 振荡抑制 / 方案评估」组织并区分参与层级
- 简历页补全双段教育经历、完整实习内容、个人评价（800 米第 1 名、七项全能第 1 名并破纪录、跨国家篮球赛组织与裁判、英语交流与组织协调）
- 关于我页增加教育背景与个人特点

---

## 七、本地构建与页面测试结果

**构建**
- `npx hexo clean` ✅
- `npx hexo generate` ✅ 224 files generated

**HTTP 验证（已实测通过）**
| 路径 | 状态 |
|---|---|
| `/` `/research` `/projects` `/resume` `/about` `/archives` `/categories` `/tags` `/search.xml` | 200 |
| `/research/gfm-storage` | 200 |
| `/research/uhvdc-oscillation` | 200 |
| `/projects/hub-motor` | 200 |

- 首页内链批量自检：全部返回 200，无失效链接。

**响应式与前端（Playwright + 系统 Chrome 实测）**
| 视口 | 页面 | 横向溢出 | 控制台/页面错误 |
|---|---|---|---|
| 1440×900 | 首页/科研/工程/简历/关于 | 无 | 无 |
| 834×1112 | 同上 5 页 | 无 | 无 |
| 375×812 | 同上 5 页 | 无 | 无 |

- 移动端汉堡菜单触发按钮可见（`burgerVisible: true`），桌面端隐藏，符合 Matery 行为。
- 网络请求失败列表：`[]`（修复 `.cur`、typed.js CDN、不蒜子后已清零）。
- 注意：Banner 主标题显示站点副标题「电气工程科研与技术实践」，站名 `Dog Blog` 显示在导航栏 Logo 处，属 Matery 默认布局。

**隐私与安全（已实测）**
- `public/` 全量扫描未发现：原博客姓名、原域名、手机号、邮箱、API Key、Coze Token。
- 未写入简历中的电话与 QQ 邮箱。

**未执行**
- 未执行 `hexo deploy`、未 `git push`、未修改任何远程仓库；GitHub Actions 仅在本地生成，未触发线上发布。

---

## 八、仍需补充的科研材料

1. 项目一：Bode 图、Nyquist 判据曲线、振荡波形、SCR 切换过程仿真截图。
2. 项目二：VMD-MSST-HHT 辨识结果对比图、CCF+改进 C 型滤波器硬件实验照片与波形、3 种工况仿真结果、损耗对比数据图。
3. 项目三：Maxwell 磁密云图、转矩波形、温度分布云图、效率 Map 图。
4. 论文专利：公开后可补充专利号、期刊名与状态更新（当前严格保持简历记载）。
5. 教育背景：硕士导师、主修课程（如可公开）。
6. 个人联系方式：经本人同意后再公开邮箱。

---

## 九、尚未完成的问题及原因

| 问题 | 原因 | 建议 |
|---|---|---|
| PDF 中文正文未能逐字校验 | PDF 使用 CID 字形且无可用 ToUnicode 映射，本机无 PDF 解析库、pip 网络不可用 | 后续可提供 `.docx`/`.txt` 版本以逐字核对 |
| 站点 `url` 仍为占位 `https://your-name.github.io` | 未提供实际 GitHub Pages 地址 | 部署前改为真实地址，并启用 `deploy` 配置 |
| 未开启评论、访问统计 | 未提供账号；不蒜子接口在当前网络 502 | 需要时开启 Waline/Twikoo 或自建统计 |
| 首页 Banner 主标题非站名 | Matery 默认用站点副标题 | 如需改为「Dog Blog」，可调整模板或把 `subtitle` 设为站名 |
| 移动端仅浏览器模拟验证 | 未做真机测试 | 上线前用真机复核 |
