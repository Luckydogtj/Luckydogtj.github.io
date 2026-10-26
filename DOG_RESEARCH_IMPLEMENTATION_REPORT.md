# 科研项目页面实施报告（DOG_RESEARCH_IMPLEMENTATION_REPORT）

- 项目路径：`E:\blog\Dog_blog`
- 实施日期：2026-10-25（初版） / 2026-10-26（最终检查与优化）
- 范围：科研项目总览 + 两个科研项目详情页
- 状态：**本地完成并通过验证，未执行 Git 提交 / Push / 线上部署**
- 本地预览：`http://localhost:4012/research/`、`/research/gfm-storage/`、`/research/uhvdc-oscillation/`

## 1. 修改文件清单

| 文件 | 类型 | 说明 |
|---|---|---|
| `source/research/index.md` | 重写 | 总览页：标题、副标题、两张真实项目卡片、公开说明；移除未经核实的 KPI |
| `source/research/gfm-storage/index.md` | 重写 + 优化 | 项目一详情页：`hideBanner: true`、研究侧重标签、7 章节、4 个带图号占位 |
| `source/research/uhvdc-oscillation/index.md` | 重写 + 优化 | 项目二详情页：`hideBanner: true`、研究侧重标签、7 章节、4 个占位、2 处发布限制标记 |
| `themes/matery/layout/page.ejs` | 修改 | `hideBanner` 时跳过 900px 大 Banner，并为内容区加 `content--no-banner` |
| `source/css/dog.css` | 追加 + 精修 | `.dog-research-*` 组件、首屏间距、双栏/单栏、占位图、KPI、损耗条、限制提示、灯箱 |
| `source/js/dog-research.js` | 新增 + 修正 | 章节导航高亮（含滚动到底部）、图表灯箱；无第三方依赖 |
| `scripts/research-restricted-inject.js` | 新增 | 本地构建/预览时从仓库外私有目录注入受限区块，CI 未授权时保留提示 |
| `scripts/research-security-check.js` | 新增 | 源码与渲染阶段阻断：命中监视清单/残留标记/未授权结构即中断构建 |
| `tools/research-security-scan.js` | 新增 | 构建后文件级终检，扫描 public、search.xml、RSS 与公开源码 |
| `package.json` / `.github/workflows/deploy.yml` | 修改 | `npm run build` 接入安全终检，检查失败即停止部署 |
| `RESEARCH_ASSET_REVIEW.md` | 新增 | 9 个图表位置的公开审核清单 |
| `DOG_RESEARCH_IMPLEMENTATION_REPORT.md` | 新增 | 本报告 |

未改动：`source/projects/`（含轮毂电机项目）、导航栏、其他页面 Banner、`_config.yml`、文章内容、`E:\blog\blog`。

## 2. 模块完成情况

| PRD 模块 | 项目一 | 项目二 |
|---|---|---|
| Hero（全名/级别/时间/侧重/标签/摘要/返回） | 完成（6 标签 + 侧重标签） | 完成（6 标签 + 侧重标签） |
| 01 背景与问题 | 完成 | 完成 |
| 02 本人参与工作（三卡片，任务—方法—作用） | 完成（建模/电流环/抑制） | 完成（辨识/抑制/评估，全部“参与”措辞） |
| 03 技术路线（5 步 HTML 流程） | 完成 | 完成 |
| 04 关键技术解析（3 小节 + 图文交替） | 完成（3 图位） | 完成（3 图位） |
| 05 研究验证与结果 | 定性结论 + 1 图位 + 数值暂缓说明 | 2 张指标卡 + 损耗对比条 + 模型/工况 + 1 图位 |
| 06 个人贡献与能力沉淀 | 完成 | 完成（仅“参与”表述） |
| 07 相关成果与延伸阅读 | 完成（论文/专利状态待核实） | 完成（内部报告/成果状态/延伸阅读） |
| 侧栏章节目录 + 锚点 | 完成（7 个锚点） | 完成（7 个锚点） |
| 上一个 / 下一个项目 | 完成 | 完成 |
| 整卡可点击、无假链接 | 完成（两张卡片为真实 `<a>`） | — |

## 3. 真实性处理

1. 项目一移除了来源冲突或未确认公开权限的指标（阻抗交点、相位差、短路比切换工况、衰减时间，明文见私有存档 PRIV-RES-02），改为定性结论 + “数值待核实/待授权后补充”说明。
2. 项目一明确区分“基金项目整体研究范围”和“含电流内环 GFM-VSC 关联专题”，并声明本人非项目负责人、团队成果不作个人独立成果。
3. 项目二统一使用“参与”表述；删除“硬件实验验证”的公开表述，改为“方案分析与仿真验证”，硬件设备与实测数据待授权证据后补充。
4. 振荡辨识精度两项误差指标均标注测试条件与报告章节来源；明文数值仅存于仓库外私有存档（PRIV-RES-01），公开仓库不记录。
5. 阻尼器损耗对比明确为**阻尼器功率损耗比**的相对下降，注明不代表系统总损耗；明文数值见私有存档 PRIV-RES-01。
6. 仿真模型规模参数标注为 MATLAB/Simulink **仿真模型**参数（表6-3），不表述为实物硬件平台；明文数值见私有存档 PRIV-RES-01。
7. 论文与专利仅作为“关联专题研究/相关专利研究”，写明“状态待核实”，不出现“已发表/已授权/已受理”。

## 4. 本轮最终优化

### 4.1 首屏与 Banner

- 两个详情页 front-matter 增加 `hideBanner: true`，[page.ejs](file:///E:/blog/Dog_blog/themes/matery/layout/page.ejs) 条件跳过 900px 大 Banner，Banner 仍保留在其他页面。
- `content--no-banner` 顶部留白由 88px 调整为桌面 24px、手机 20px（导航在文档流内已占 64/56px），消除重复留白。
- 首屏实测：Hero 顶部桌面 144px、平板 142px、手机 130px；Hero 高度桌面 227px、平板 210～233px、手机 381px。桌面 900px 视口可完整看到 Hero 与 01 章节，手机 812px 视口可看到 Hero、目录与 01 章节起始。

### 4.2 排版与图表位置

- 正文：段落 0.94rem / 行高 1.9；章节标题 1.34rem；小节标题左侧 3px 蓝色竖线；章节间距 40px。
- 卡片：工作卡 gap 18px / padding 20px；路线图 5 步等宽、箭头与移动端纵向箭头；上下篇导航重置 Materialize 粉色 `nav` 背景与阴影。
- 9 个图表位置 = **8 个纯 CSS 占位**（P1-01/02/04/03、P2-01/02/05/04）+ **1 个 HTML 损耗对比图**（P2-03，不复制原表）。
- 占位块统一 `data-code` 图号、16:7 比例、最小 160/190px、最大 300px、网格底纹 + 虚线内框；桌面约 686×300，手机约 308×160，未放图时仍保持整齐。
- 修复 375px 横向溢出：单栏容器 `align-items: stretch` + 主体 `width: 100%`，占位块 `width: 100%; box-sizing: border-box`，三端 `overflow = 0`。

### 4.3 两项目展示重点

- 项目一 Hero 标注“研究侧重：阻抗建模 · 稳定性分析”，以 Atlas 建模、电流环、虚拟阻抗附加电压反馈与定性验证为主。
- 项目二 Hero 标注“研究侧重：振荡辨识 · 协同阻尼”，保留 VMD-MSST-HHT、CCF + 改进 C 型、KPI 与损耗对比条。
- 两页共用组件与导航，但内容结构、指标呈现和技术重点保持差异，未改动已核实事实。

### 4.4 未授权数据发布限制（2026-10-26 升级为仓库外私有数据方案）

- 明文数值已从公开源码移出，保存于仓库外私有目录 `E:\blog\Dog_blog_private\research-restricted\`（不参与 Git 跟踪）。
- 公开源码中只保留 `<!-- DOG-RESTRICTED:SLOT:名称 -->` 占位与默认“数据发布限制”提示：
  1. 振荡辨识精度 KPI 与阻尼器损耗比较（槽 `uhvdc-kpi`）；
  2. 仿真模型规模参数与工况覆盖（槽 `uhvdc-model`）。
- [research-restricted-inject.js](file:///E:/blog/Dog_blog/scripts/research-restricted-inject.js)：本地构建/预览且私有数据存在时注入真实内容；CI 未授权时保留安全提示。
- [research-security-check.js](file:///E:/blog/Dog_blog/scripts/research-security-check.js)：构建时扫描源码与渲染产物，发现明文数值回流、残留标记或未授权受限结构时**抛出错误中断构建/部署**。
- [research-security-scan.js](file:///E:/blog/Dog_blog/tools/research-security-scan.js)：`npm run build` 的构建后终检，扫描 `public/`、`search.xml` 与 RSS；非零退出码阻断 GitHub Pages 上传与部署。
- Git 历史与线上站点的残留暴露及清理步骤见《科研内容发布安全检查报告》（DOG_SECURITY_CHECK.md）；历史重写与重新部署须另行批准。
- 取得项目单位书面授权后，在部署环境设置 `RESEARCH_METRICS_PUBLIC=true` 即可正常发布受限内容。
- 验证结果详见《科研内容发布安全检查报告》（DOG_SECURITY_CHECK.md）。

## 5. 实际验证结果

执行 `npx hexo clean` + `npx hexo generate`：构建成功，生成 **223 个文件**（本地构建无 guard 告警）；本地预览 `http://localhost:4012`。

浏览器实测（Playwright + Chrome）：

| 页面 | 视口 | HTTP | 横向溢出 | 控制台报错 | Hero 顶部 / 高度 |
|---|---|---|---|---|---|
| `/research/gfm-storage/` | 1440 | 200 | 0 | 0 | 144 / 227 |
| `/research/gfm-storage/` | 834 | 200 | 0 | 0 | 142 / 233 |
| `/research/gfm-storage/` | 375 | 200 | 0 | 0 | 130 / 381 |
| `/research/uhvdc-oscillation/` | 1440 | 200 | 0 | 0 | 144 / 227 |
| `/research/uhvdc-oscillation/` | 834 | 200 | 0 | 0 | 142 / 210 |
| `/research/uhvdc-oscillation/` | 375 | 200 | 0 | 0 | 130 / 381 |

- 7 章节、7 目录锚点、7 个滚动高亮状态全部正确；点击锚点后章节顶部为 88px（接近页尾的章节受文档高度限制，见下），避开 64px 固定导航。
- 接近页尾的锚点最终位置：项目一 #outputs 桌面 318px、平板 530px、手机 88px；项目二 #contribution 桌面 108px / 平板 309px / 手机 88px，#outputs 桌面 349px / 平板 562px / 手机 125px。
- 返回顶部按钮三端可见，点击后 `scrollY = 0`。
- 灯箱：通过预注入测试图片验证，两页均能打开、Esc 关闭，`is-open` 状态正确。
- 上下篇链接：项目一 → 总览/项目二；项目二 → 项目一/总览；`/research/`、两详情页均返回 200。
- 6 张完整页面截图（1440 / 834 / 375 × 两页）：
  - `C:\Users\pc\AppData\Local\Temp\final-p1-1440.png`
  - `C:\Users\pc\AppData\Local\Temp\final-p1-834.png`
  - `C:\Users\pc\AppData\Local\Temp\final-p1-375.png`
  - `C:\Users\pc\AppData\Local\Temp\final-p2-1440.png`
  - `C:\Users\pc\AppData\Local\Temp\final-p2-834.png`
  - `C:\Users\pc\AppData\Local\Temp\final-p2-375.png`

## 6. 待核实 / 待补充材料

| 编号 | 事项 | 当前处理 |
|---|---|---|
| A | 项目一相位差存在来源冲突（三组数值见私有存档 PRIV-RES-02） | 页面完全不展示 |
| B | 项目一短路比切换范围与衰减时间的工况与定义待核实（PRIV-RES-02） | 页面不展示，仅留说明 |
| C | 项目二硬件实验平台与实测数据 | 页面只写“参与方案验证/评估”，未展示设备与数据 |
| D | 论文“修回稿”与专利“受理”状态 | 标注“待核实”，不写已发表/已授权/已受理 |
| E | 基金申请书、国网分报告、专利附图公开权限 | 全部用占位；项目二数值已加 CI 发布限制 |
| F | 9 个图表位置的授权图片 | 待逐项审批后替换占位 |

图件审批明细见 `RESEARCH_ASSET_REVIEW.md`。

## 7. 未执行事项

未执行 `git commit`、`git push`、`hexo deploy`，未修改 `E:\blog\blog`，未新增 AI 测试平台代码。
