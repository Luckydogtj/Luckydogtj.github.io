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
    <li><a href="#background">01 背景与问题</a></li>
    <li><a href="#work">02 本人参与工作</a></li>
    <li><a href="#roadmap">03 技术路线</a></li>
    <li><a href="#tech">04 关键技术解析</a></li>
    <li><a href="#validation">05 研究验证与结果</a></li>
    <li><a href="#contribution">06 个人贡献与能力沉淀</a></li>
    <li><a href="#outputs">07 相关成果与延伸阅读</a></li>
  </ol>
</aside>

</div>

</div>

<script src="/js/dog-research.js"></script>
