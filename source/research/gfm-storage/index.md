---
title: 基于构网型储能的海上风电柔直系统宽频振荡抑制技术研究
date: 2026-01-01 00:00:00
comments: false
hideBanner: true
---

<div class="dog-research-page">

<p class="dog-research-back"><a href="/research/"><i class="fas fa-arrow-left" aria-hidden="true"></i> 返回科研项目</a></p>

<section class="dog-research-hero">
  <div class="dog-research-hero-meta">
    <span class="dog-research-badge">国家自然科学基金项目</span>
    <span class="dog-research-period">2026.01 — 至今</span>
    <span class="dog-research-focus">研究侧重：阻抗建模 · 稳定性分析</span>
  </div>
  <h1>基于构网型储能的海上风电柔直系统宽频振荡抑制技术研究</h1>
  <p class="dog-research-hero-desc">围绕海上风电经柔性直流系统送出的宽频振荡风险，研究构网型储能与风电、柔直换流器的阻抗交互及稳定性改善方法；相关专题重点分析电流内环对 GFM-VSC 强电网稳定性的影响，并探索基于虚拟阻抗的附加电压反馈控制。</p>
  <div class="dog-research-tags">
    <span class="dog-tag dog-tag--on-dark">构网型储能</span>
    <span class="dog-tag dog-tag--on-dark">GFM-VSC</span>
    <span class="dog-tag dog-tag--on-dark">序阻抗建模</span>
    <span class="dog-tag dog-tag--on-dark">Nyquist</span>
    <span class="dog-tag dog-tag--on-dark">虚拟阻抗</span>
    <span class="dog-tag dog-tag--on-dark">MATLAB/Simulink</span>
  </div>
</section>

<section class="dog-research-section" id="report" style="margin-top:28px">
  <link rel="stylesheet" href="/css/dog-ppt-viewer.css">
<div class="dog-ppt-viewer" data-report-viewer data-deck="gfm" data-count="5" data-slide-base="/medias/research-reports/gfm">
  <div class="dog-ppt-head"><h2>项目汇报 PPT</h2><span class="dog-ppt-status">汇报原页 · 5 页</span></div>
  <button class="dog-ppt-stage" type="button" data-action="zoom" aria-label="放大查看当前 PPT 页面"><img data-slide-image src="/medias/research-reports/gfm/slide-01.png" width="1440" height="810" alt="构网型变流器专题汇报第 1 页" fetchpriority="high"></button>
  <div class="dog-ppt-controls"><span data-page-label aria-live="polite">第 1 / 5 页</span><div class="dog-ppt-actions"><button type="button" data-action="prev" disabled>上一页</button><button type="button" data-action="next">下一页</button><button type="button" data-action="zoom">放大查看</button></div></div>
  <div class="dog-ppt-pages" aria-label="PPT 页码"><button type="button" data-page="1" aria-label="跳到第 1 页" aria-current="page">1</button><button type="button" data-page="2" aria-label="跳到第 2 页">2</button><button type="button" data-page="3" aria-label="跳到第 3 页">3</button><button type="button" data-page="4" aria-label="跳到第 4 页">4</button><button type="button" data-page="5" aria-label="跳到第 5 页">5</button></div>
  <p class="dog-ppt-note">构网型变流器专题 · 点击页面可放大，选中播放器后可用左右方向键翻页。展示内容为汇报原页，技术结论对应报告所述模型与仿真条件。</p>
  <dialog class="dog-ppt-modal" aria-label="PPT 页面放大"><div class="dog-ppt-modal-bar"><span data-page-label>第 1 / 5 页</span><div><button type="button" data-action="prev">上一页</button> <button type="button" data-action="next">下一页</button> <button type="button" data-action="close">关闭</button></div></div><img data-slide-image alt="项目汇报放大页面"></dialog>
</div>
<script src="/js/dog-ppt-viewer.js" defer></script>
</section>

<div class="dog-research-layout">

<article class="dog-research-main">

<section class="dog-research-section" id="background">
  <h2><span class="dog-research-num">01</span>背景与问题</h2>
  <p>高比例风电与电力电子换流装置接入后，风电、储能及柔性直流系统之间的控制耦合可能引起宽频振荡。构网型储能具备电压和频率支撑潜力，但其接入方式、控制环节与源网阻抗交互之间的关系需要进一步分析。本项目围绕阻抗建模、振荡机理及控制优化开展研究。</p>
</section>

<section class="dog-research-section" id="work">
  <h2><span class="dog-research-num">02</span>本人参与工作</h2>
  <p class="dog-research-lead">以下三项为本人在项目中开展的工作，按“任务—方法—作用”说明，不等同于基金项目的全部研究内容。</p>
  <div class="dog-work-grid">
    <div class="dog-work-card">
      <h3><i class="fas fa-project-diagram" aria-hidden="true"></i>阻抗建模与稳定性分析</h3>
      <ul class="dog-work-list">
        <li><span class="dog-work-label">任务</span><p>分析构网型储能接入风储柔直系统后的阻抗交互与稳定性。</p></li>
        <li><span class="dog-work-label">方法</span><p>结合储能 Buck-Boost DC/DC、DC/AC 变换环节及风储柔直系统模型，研究构网型储能与电网的阻抗交互，使用 Bode 图和 Nyquist 判据分析稳定性。</p></li>
        <li><span class="dog-work-label">作用</span><p>辨识振荡风险频段与源网阻抗匹配问题，为控制策略研究提供分析依据。</p></li>
      </ul>
    </div>
    <div class="dog-work-card">
      <h3><i class="fas fa-wave-square" aria-hidden="true"></i>电流环 PI 参数影响</h3>
      <ul class="dog-work-list">
        <li><span class="dog-work-label">任务</span><p>以含电流内环 GFM-VSC 为研究专题，分析强电网下的稳定性。</p></li>
        <li><span class="dog-work-label">方法</span><p>比较有/无电流环的输出阻抗，分析比例系数与积分系数对不同频段阻抗幅相和次同步容性区域的影响。</p></li>
        <li><span class="dog-work-label">作用</span><p>明确电流环动态在强网振荡中的参与机理，为控制参数选择提供参考。</p></li>
      </ul>
    </div>
    <div class="dog-work-card">
      <h3><i class="fas fa-sliders-h" aria-hidden="true"></i>振荡抑制控制</h3>
      <ul class="dog-work-list">
        <li><span class="dog-work-label">任务</span><p>研究基于虚拟阻抗的附加电压反馈振荡抑制方法。</p></li>
        <li><span class="dog-work-label">方法</span><p>围绕并网电流反馈与带低通滤波的虚拟阻抗，研究附加电压分量对控制侧电压反馈和等效源网阻抗匹配的影响，并开展时域仿真验证。</p></li>
        <li><span class="dog-work-label">作用</span><p>改善考察工况下的源网阻抗匹配，为振荡抑制提供控制侧实现方案。</p></li>
      </ul>
    </div>
  </div>
</section>

<section class="dog-research-section" id="roadmap">
  <h2><span class="dog-research-num">03</span>技术路线</h2>
  <ol class="dog-roadmap">
    <li>风储柔直系统建模</li>
    <li>序阻抗和源网交互分析</li>
    <li>电流环影响与失稳机理</li>
    <li>虚拟阻抗附加电压反馈</li>
    <li>工况切换仿真验证</li>
  </ol>
</section>

<section class="dog-research-section" id="tech">
  <h2><span class="dog-research-num">04</span>关键技术解析</h2>

  <h3>源网阻抗与稳定性</h3>
  <p>把并网变流器与电网分别视为两个阻抗子系统，在公共连接点比较两侧阻抗的幅值与相位关系，可以判断系统是否存在振荡风险：当两侧阻抗幅值接近时，若相位关系不利，则可能形成负阻尼频段。研究中使用 Bode 图观察幅相随频率的变化，并结合 Nyquist 判据评估稳定性，从阻抗角度定位振荡风险频段。</p>
  <figure class="dog-figure">
    <div class="dog-figure-placeholder" data-code="P1-01" role="img" aria-label="系统结构图待公开审核">
      <i class="fas fa-image" aria-hidden="true"></i>
      <span>图表待公开审核</span>
    </div>
    <figcaption>
      <strong>图 P1-01</strong> 海上风电—储能—MMC-HVDC 系统结构
      <span class="dog-figure-source">来源：项目申请书图2 · 状态：待公开审核</span>
    </figcaption>
  </figure>

  <h3>强网下电流环作用</h3>
  <p>在含电流内环的 GFM-VSC 中，比例参数对较宽频带的阻抗特性产生影响，积分参数则更侧重基频附近。部分次同步频段的阻抗性质可由感性转为容性，从而在强电网条件下增加振荡风险。需要说明的是，该规律来自对应专题研究的模型与参数范围，属于特定条件下的分析结论，不概括为普遍定律。</p>
  <figure class="dog-figure">
    <div class="dog-figure-placeholder" data-code="P1-02" role="img" aria-label="主电路与控制结构图待公开审核">
      <i class="fas fa-image" aria-hidden="true"></i>
      <span>图表待公开审核</span>
    </div>
    <figcaption>
      <strong>图 P1-02</strong> 含电流环 GFM-VSC 主电路及控制结构
      <span class="dog-figure-source">来源：关联专题研究图1 · 状态：待公开审核</span>
    </figcaption>
  </figure>

  <h3>虚拟阻抗附加电压反馈</h3>
  <p>抑制思路可概括为：采样并网电流 → 经带低通滤波的虚拟阻抗环节 → 生成附加电压反馈 → 改变控制侧等效电压与等效源网阻抗关系 → 改善稳定性。该方法在保留电流内环的前提下调整控制侧阻抗特性，并不改变物理网侧的线路阻抗；虚拟阻抗参数还需兼顾调制电压裕量、控制带宽与动态响应。</p>
  <div class="dog-chain" aria-label="虚拟阻抗附加电压反馈流程">
    <span>并网电流</span><i class="fas fa-chevron-right" aria-hidden="true"></i>
    <span>带低通滤波的虚拟阻抗</span><i class="fas fa-chevron-right" aria-hidden="true"></i>
    <span>附加电压反馈</span><i class="fas fa-chevron-right" aria-hidden="true"></i>
    <span>等效源网阻抗变化</span><i class="fas fa-chevron-right" aria-hidden="true"></i>
    <span>稳定性改善</span>
  </div>
  <figure class="dog-figure">
    <div class="dog-figure-placeholder" data-code="P1-04" role="img" aria-label="附加电压反馈控制框图待公开审核">
      <i class="fas fa-image" aria-hidden="true"></i>
      <span>图表待公开审核</span>
    </div>
    <figcaption>
      <strong>图 P1-04</strong> 附加电压反馈控制框图与响应对比
      <span class="dog-figure-source">来源：关联专题研究图14、18～22 · 状态：待公开审核</span>
    </figcaption>
  </figure>
</section>

<section class="dog-research-section" id="validation">
  <h2><span class="dog-research-num">05</span>研究验证与结果</h2>
  <p>相关序阻抗理论结果与扫频验证趋势一致。在所研究的强电网及控制参数条件下，电流环动态可能引起不利的次同步源网阻抗交互。通过引入带低通滤波的虚拟阻抗附加电压反馈，可在部分考察工况中改善系统稳定性，振荡响应呈现更明显的衰减。参数选择还需兼顾调制电压裕量、带宽与动态响应。</p>
  <div class="dog-condition-grid">
    <div class="dog-condition-card">
      <h3><i class="fas fa-check-circle" aria-hidden="true"></i>已验证的方法</h3>
      <p>序阻抗理论分析与扫频验证趋势对照；虚拟阻抗附加电压反馈的时域仿真。</p>
      <span class="dog-condition-meta">验证方式：理论分析 + 仿真 · 来源：关联专题研究</span>
    </div>
    <div class="dog-condition-card">
      <h3><i class="fas fa-info-circle" aria-hidden="true"></i>结论适用范围</h3>
      <p>上述结论对应所研究的强电网与控制参数条件，属于定性的趋势判断，不推广为普遍结论。</p>
      <span class="dog-condition-meta">条件：强电网 + 特定控制参数 · 状态：定性结论</span>
    </div>
  </div>
  <figure class="dog-figure">
    <div class="dog-figure-placeholder" data-code="P1-03" role="img" aria-label="序阻抗与 Bode、Nyquist 对比图待公开审核">
      <i class="fas fa-image" aria-hidden="true"></i>
      <span>图表待公开审核</span>
    </div>
    <figcaption>
      <strong>图 P1-03</strong> 有/无电流环序阻抗或 Bode/Nyquist 对比
      <span class="dog-figure-source">来源：关联专题研究图6～9 · 状态：待公开审核</span>
    </figcaption>
  </figure>
  <p class="dog-research-note"><strong>数据说明：</strong>前期算例中的阻抗交点、相位差及短路比切换工况下的衰减时间等指标，其公开条件与统计口径尚在核实（部分来源之间存在差异），本页暂不展示具体数值，避免在未确认前形成误导。</p>
</section>

<section class="dog-research-section" id="contribution">
  <h2><span class="dog-research-num">06</span>个人贡献与能力沉淀</h2>
  <div class="dog-contrib-grid">
    <div class="dog-contrib-item"><i class="fas fa-drafting-compass" aria-hidden="true"></i><strong>建模分析</strong><p>风储柔直系统与构网型储能变流器的阻抗建模，Bode 图与 Nyquist 判据稳定性分析。</p></div>
    <div class="dog-contrib-item"><i class="fas fa-cog" aria-hidden="true"></i><strong>控制策略研究</strong><p>电流环参数对阻抗特性影响的分析，虚拟阻抗附加电压反馈控制设计。</p></div>
    <div class="dog-contrib-item"><i class="fas fa-chart-line" aria-hidden="true"></i><strong>仿真验证</strong><p>MATLAB/Simulink 时域仿真，工况切换下的振荡响应对比与参数合理性评估。</p></div>
  </div>
  <p class="dog-research-note">本人开展上述建模、分析与仿真工作，项目为国家自然科学基金项目，由项目组共同承担，本人并非项目负责人；页面内容不将团队成果表述为个人独立完成。</p>
</section>

<section class="dog-research-section" id="outputs">
  <h2><span class="dog-research-num">07</span>相关成果与延伸阅读</h2>
  <ul class="dog-output-list">
    <li>
      <strong>关联专题研究（修回稿）</strong>
      <p>《强电网下含电流环构网型变流器并网系统振荡抑制策略》——论文状态待核实，未确认发表，暂不提供下载。</p>
    </li>
    <li>
      <strong>相关专利研究（状态待核实）</strong>
      <p>《一种构网型变流器并网系统振荡抑制方法》——以申请文件核对技术术语，受理与公开状态尚未核实，不展示原始文件。</p>
    </li>
    <li>
      <strong>延伸阅读</strong>
      <p><a href="/2026/03/15/gfm-vsc-ji-ben-yuan-li-yu-kong-zhi/">GFM-VSC 基本原理与控制</a>（技术博客）</p>
    </li>
  </ul>
  <p class="dog-research-note">上述论文与专利属于本项目相关专题的研究内容，不代表基金项目整体成果；在取得可查凭证前，不使用“已发表”“已授权”等表述。</p>
</section>

<section class="dog-research-section dog-report" id="report-notes">
  <h2><span class="dog-research-num">08</span>汇报专题导读</h2>
  <div class="dog-report-intro"><div class="dog-report-meta"><span>关联专题汇报</span><span>原汇报 5 页</span><span>汇报导读</span></div>
  <h3>构网型变流器次 / 超同步振荡抑制</h3><p>这份汇报聚焦含 / 无电流环 GFM-VSC 的序阻抗、强电网稳定性和虚拟阻抗附加电压反馈，为构网型储能与海上风电项目提供相关专题分析。</p></div>
  <p class="dog-report-scope">专题对象为构网型变流器并网系统，不能据此认定已完成海上风电—储能—柔直全系统验证。报告内容也不作为个人独立完成全部研究的证明。</p>
  <div class="dog-report-topics"><details class="dog-report-topic" open>
  <summary><span class="dog-report-index">01</span><span>序阻抗建模<small>原汇报第 2—3 页</small></span><span class="dog-report-toggle" aria-hidden="true"></span></summary>
  <div class="dog-report-body">
    <p>比较含电流环与无电流环的 GFM-VSC 序阻抗，用扫频结果核对理论模型。序阻抗模型用于描述端口特性，扫频用于验证，二者作用不同。</p>
    <figure class="dog-report-figure"><ol class="dog-report-flow"><li>含 / 无电流环模型</li><li>序阻抗表达</li><li>扫频核对</li></ol><figcaption>方法关系示意 · 根据专题内容重新整理，不含报告原图或仿真数值</figcaption></figure>
    <a class="dog-report-related" href="#tech">阅读本页关联技术说明 <span aria-hidden="true">↗</span></a>
  </div>
</details><details class="dog-report-topic">
  <summary><span class="dog-report-index">02</span><span>强电网下的振荡机理<small>原汇报第 4 页</small></span><span class="dog-report-toggle" aria-hidden="true"></span></summary>
  <div class="dog-report-body">
    <p>结合 Bode、Nyquist 与时域分析，考察电流环参数变化对次同步频段阻抗及源网交互的影响。结论限定在报告所考察的模型与参数范围内。</p>
    <figure class="dog-report-figure"><ol class="dog-report-flow"><li>控制环节变化</li><li>端口阻抗变化</li><li>源网稳定性评估</li></ol><figcaption>方法关系示意 · 根据专题内容重新整理，不含报告原图或仿真数值</figcaption></figure>
    <a class="dog-report-related" href="#validation">阅读本页关联技术说明 <span aria-hidden="true">↗</span></a>
  </div>
</details><details class="dog-report-topic">
  <summary><span class="dog-report-index">03</span><span>虚拟阻抗附加电压反馈<small>原汇报第 5 页</small></span><span class="dog-report-toggle" aria-hidden="true"></span></summary>
  <div class="dog-report-body">
    <p>利用并网电流构造附加电压分量，重构控制侧等效电压反馈，改善源网阻抗匹配。示意仅表示控制思路，具体结构、参数与仿真曲线需另行审核。</p>
    <figure class="dog-report-figure"><ol class="dog-report-flow"><li>并网电流</li><li>虚拟阻抗环节</li><li>附加电压反馈</li><li>阻抗匹配评估</li></ol><figcaption>方法关系示意 · 根据专题内容重新整理，不含报告原图或仿真数值</figcaption></figure>
    <a class="dog-report-related" href="#tech">阅读本页关联技术说明 <span aria-hidden="true">↗</span></a>
  </div>
</details></div>
  <p class="dog-report-disclosure"><strong>资料说明</strong>本页顶部展示经用户确认可公开的汇报页面，包含原图及仿真数据；下方导读为重新整理的文字与方法示意。演讲者备注和原始 PPT 文件不随网页发布。课题整体成果与个人参与范围分别说明。</p>
</section>

<nav class="dog-research-nextprev" aria-label="项目导航">
  <a class="dog-research-nextprev-link dog-research-nextprev-link--prev" href="/research/">
    <span>返回</span>
    <strong>科研项目总览</strong>
  </a>
  <a class="dog-research-nextprev-link dog-research-nextprev-link--next" href="/research/uhvdc-oscillation/">
    <span>下一个项目</span>
    <strong>多端特高压柔性直流源网交互宽频振荡抑制研究</strong>
  </a>
</nav>

</article>

<aside class="dog-research-toc" aria-label="章节导航">
  <p class="dog-research-toc-title">章节导航</p>
  <ol>
    <li><a href="#report">项目汇报 PPT</a></li>
    <li><a href="#background">01 背景与问题</a></li>
    <li><a href="#work">02 本人参与工作</a></li>
    <li><a href="#roadmap">03 技术路线</a></li>
    <li><a href="#tech">04 关键技术解析</a></li>
    <li><a href="#validation">05 研究验证与结果</a></li>
    <li><a href="#contribution">06 个人贡献与能力沉淀</a></li>
    <li><a href="#outputs">07 相关成果与延伸阅读</a></li>
    <li><a href="#report-notes">08 汇报专题导读</a></li>
  </ol>
</aside>

</div>

</div>

<script src="/js/dog-research.js"></script>
