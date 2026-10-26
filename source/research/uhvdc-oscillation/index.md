---
title: 多端特高压柔性直流源网交互宽频振荡抑制研究
date: 2026-01-01 00:00:00
comments: false
hideBanner: true
---

<div class="dog-research-page">

<p class="dog-research-back"><a href="/research/"><i class="fas fa-arrow-left" aria-hidden="true"></i> 返回科研项目</a></p>

<section class="dog-research-hero">
  <div class="dog-research-hero-meta">
    <span class="dog-research-badge dog-research-badge--dark">国家电网总部科技项目</span>
    <span class="dog-research-period">2024.09 — 2025.12</span>
    <span class="dog-research-focus">研究侧重：振荡辨识 · 协同阻尼</span>
  </div>
  <h1>多端特高压柔性直流源网交互宽频振荡抑制研究</h1>
  <p class="dog-research-hero-desc">面向多端大容量柔性直流系统的源网交互与高频振荡风险，参与振荡辨识、协同阻尼控制方案及性能评估相关研究，结合含噪声信号辨识与多工况仿真，对振荡特征识别、阻抗改善和振荡抑制效果进行分析。</p>
  <div class="dog-research-tags">
    <span class="dog-tag dog-tag--on-dark">MMC-HVDC</span>
    <span class="dog-tag dog-tag--on-dark">宽频振荡</span>
    <span class="dog-tag dog-tag--on-dark">VMD-MSST-HHT</span>
    <span class="dog-tag dog-tag--on-dark">CCF</span>
    <span class="dog-tag dog-tag--on-dark">改进 C 型滤波器</span>
    <span class="dog-tag dog-tag--on-dark">Simulink</span>
  </div>
</section>

<div class="dog-research-layout">

<article class="dog-research-main">

<section class="dog-research-section" id="background">
  <h2><span class="dog-research-num">01</span>背景与问题</h2>
  <p>多端特高压柔性直流在大规模清洁能源外送场景中面临复杂的源网交互问题。换流器控制延时和交流系统运行方式变化可能改变阻抗特性，使振荡频率和阻尼条件发生变化。本项目围绕振荡辨识、负阻尼弱化与协同阻尼控制开展研究，以提升系统在不同工况下的稳定性。</p>
</section>

<section class="dog-research-section" id="work">
  <h2><span class="dog-research-num">02</span>本人参与工作</h2>
  <p class="dog-research-lead">本人在项目中承担参与性质的工作，以下按“任务—方法—作用”说明；项目整体成果归项目组所有。</p>
  <div class="dog-work-grid">
    <div class="dog-work-card">
      <h3><i class="fas fa-bolt" aria-hidden="true"></i>振荡辨识</h3>
      <ul class="dog-work-list">
        <li><span class="dog-work-label">任务</span><p>参与 VMD-MSST-HHT 组合辨识及振源分析相关工作。</p></li>
        <li><span class="dog-work-label">方法</span><p>通过含噪声三模态测试信号评价振荡频率、衰减因子的识别效果。</p></li>
        <li><span class="dog-work-label">作用</span><p>为振荡特征提取与振源判别提供方法支撑。</p></li>
      </ul>
    </div>
    <div class="dog-work-card">
      <h3><i class="fas fa-filter" aria-hidden="true"></i>振荡抑制</h3>
      <ul class="dog-work-list">
        <li><span class="dog-work-label">任务</span><p>参与交叉耦合滤波器（CCF）与改进 C 型滤波器的有源—无源协同阻尼方案分析与验证。</p></li>
        <li><span class="dog-work-label">方法</span><p>结合控制侧阻抗重塑与无源阻尼补偿，区分控制策略和滤波器各自的作用。</p></li>
        <li><span class="dog-work-label">作用</span><p>分析协同阻尼方案的抑制效果与适应性。</p></li>
      </ul>
    </div>
    <div class="dog-work-card">
      <h3><i class="fas fa-clipboard-check" aria-hidden="true"></i>方案评估</h3>
      <ul class="dog-work-list">
        <li><span class="dog-work-label">任务</span><p>参与不同电网运行方式与控制延时条件下的方案评估。</p></li>
        <li><span class="dog-work-label">方法</span><p>分析仿真波形、频域特性和阻尼器损耗。</p></li>
        <li><span class="dog-work-label">作用</span><p>评价抑制效果及适应性，为方案比较提供依据。</p></li>
      </ul>
    </div>
  </div>
</section>

<section class="dog-research-section" id="roadmap">
  <h2><span class="dog-research-num">03</span>技术路线</h2>
  <ol class="dog-roadmap">
    <li>源网阻抗与风险分析</li>
    <li>振荡信号分解（VMD）</li>
    <li>时频精细辨识（MSST-HHT）</li>
    <li>协同阻尼（CCF + 改进 C 型）</li>
    <li>多工况稳定性验证</li>
  </ol>
</section>

<section class="dog-research-section" id="tech">
  <h2><span class="dog-research-num">04</span>关键技术解析</h2>

  <h3>VMD-MSST-HHT 振荡辨识</h3>
  <p>辨识流程由三个环节衔接：VMD 先对含噪声信号进行模态预分离，MSST 提高时频聚集性，HHT 提取瞬时频率与衰减特征。三者组合的目的，是在噪声背景下把多模态振荡分离开，并对每个模态的频率与衰减特性给出估计。</p>
  <div class="dog-chain" aria-label="VMD-MSST-HHT 辨识流程">
    <span>VMD 模态预分离</span><i class="fas fa-chevron-right" aria-hidden="true"></i>
    <span>MSST 时频聚集</span><i class="fas fa-chevron-right" aria-hidden="true"></i>
    <span>HHT 瞬时特征提取</span>
  </div>
  <figure class="dog-figure">
    <div class="dog-figure-placeholder" data-code="P2-01" role="img" aria-label="辨识流程与时频对比图待公开审核">
      <i class="fas fa-image" aria-hidden="true"></i>
      <span>图表待公开审核</span>
    </div>
    <figcaption>
      <strong>图 P2-01</strong> VMD-MSST-HHT 流程与时频辨识对比
      <span class="dog-figure-source">来源：项目技术报告第3章 · 状态：待公开审核</span>
    </figcaption>
  </figure>

  <h3>协同阻尼方案</h3>
  <p>方案由两部分协同构成：CCF 用于控制侧的有源阻抗重塑，改进 C 型滤波器用于无源阻尼补偿并权衡损耗。二者并非两个彼此独立的措施，而是在同一方案中分别作用于控制侧与无源支路，共同改善源网阻抗特性。</p>
  <figure class="dog-figure">
    <div class="dog-figure-placeholder" data-code="P2-02" role="img" aria-label="协同阻尼结构图待公开审核">
      <i class="fas fa-image" aria-hidden="true"></i>
      <span>图表待公开审核</span>
    </div>
    <figcaption>
      <strong>图 P2-02</strong> CCF + 改进 C 型协同阻尼结构
      <span class="dog-figure-source">来源：项目技术报告图6-2 · 状态：待公开审核</span>
    </figcaption>
  </figure>

  <h3>工况与控制延时敏感性</h3>
  <p>不同线路状态与控制延时下，换流器阻抗特性与系统阻尼条件会发生变化，因此需要在多种运行工况与延时组合下对比振荡响应。以下结论均来自仿真验证范围，不表示对任意电网结构均能保证稳定。</p>
  <figure class="dog-figure">
    <div class="dog-figure-placeholder" data-code="P2-05" role="img" aria-label="多工况与延时对比图待公开审核">
      <i class="fas fa-image" aria-hidden="true"></i>
      <span>图表待公开审核</span>
    </div>
    <figcaption>
      <strong>图 P2-05</strong> 三种电网运行工况 / 不同控制延时对比
      <span class="dog-figure-source">来源：项目技术报告图6-10～6-14 · 状态：待公开审核</span>
    </figcaption>
  </figure>
</section>

<section class="dog-research-section" id="validation">
  <h2><span class="dog-research-num">05</span>研究验证与结果</h2>

  <h3>振荡辨识精度与阻尼器损耗</h3>
  <!-- DOG-RESTRICTED:SLOT:uhvdc-kpi -->
  <div class="dog-research-restricted">
    <strong>数据发布限制</strong>
    振荡辨识精度与阻尼器损耗数值来自项目技术报告（第3章表3-1、第6章表6-1），公开权限未经项目单位确认，本页暂不展示具体数值；取得授权后另行发布。
  </div>
  <!-- /DOG-RESTRICTED:SLOT -->

  <h3>仿真模型与工况</h3>
  <!-- DOG-RESTRICTED:SLOT:uhvdc-model -->
  <div class="dog-research-restricted">
    <strong>数据发布限制</strong>
    仿真模型规模与工况参数（第6章表6-3、第6.4节）公开权限未经项目单位确认，本页暂不展示具体数值；验证结论仅对应仿真工况范围，不推广为普遍结论。
  </div>
  <!-- /DOG-RESTRICTED:SLOT -->
  <figure class="dog-figure">
    <div class="dog-figure-placeholder" data-code="P2-04" role="img" aria-label="协同阻尼前后波形对比图待公开审核">
      <i class="fas fa-image" aria-hidden="true"></i>
      <span>图表待公开审核</span>
    </div>
    <figcaption>
      <strong>图 P2-04</strong> 协同阻尼前后 Bode/FFT 或电压电流响应
      <span class="dog-figure-source">来源：项目技术报告图6-5、6-7～6-10 · 状态：待公开审核</span>
    </figcaption>
  </figure>
  <p class="dog-research-note"><strong>数据说明：</strong>本页结果均对应项目技术报告所述的仿真工况，不推广为普遍结论；硬件实验设备与实测数据在取得授权证据前不展示，具体数值的公开条件以项目单位授权为准。</p>
</section>

<section class="dog-research-section" id="contribution">
  <h2><span class="dog-research-num">06</span>个人贡献与能力沉淀</h2>
  <div class="dog-contrib-grid">
    <div class="dog-contrib-item"><i class="fas fa-search" aria-hidden="true"></i><strong>参与振荡辨识设计与验证</strong><p>参与 VMD-MSST-HHT 组合辨识方法的相关工作与含噪声信号测试。</p></div>
    <div class="dog-contrib-item"><i class="fas fa-shield-alt" aria-hidden="true"></i><strong>参与协同阻尼方案分析</strong><p>参与 CCF 与改进 C 型滤波器的有源—无源协同阻尼方案分析与验证。</p></div>
    <div class="dog-contrib-item"><i class="fas fa-chart-area" aria-hidden="true"></i><strong>参与仿真及性能评估</strong><p>参与多工况、多延时条件下的仿真分析与阻尼器损耗比较。</p></div>
  </div>
  <p class="dog-research-note">本人以参与身份承担上述工作，不声称独立提出全部算法或独立负责课题；硬件实验的具体设备与测试结果在取得授权证据前不展示。</p>
</section>

<section class="dog-research-section" id="outputs">
  <h2><span class="dog-research-num">07</span>相关成果与延伸阅读</h2>
  <ul class="dog-output-list">
    <li>
      <strong>项目技术报告（内部资料）</strong>
      <p>《多端特高压大容量柔性直流源网交互宽频振荡抑制方法研究》分报告5——属项目技术资料，公开需项目单位授权，本页不提供下载或原图。</p>
    </li>
    <li>
      <strong>成果状态</strong>
      <p>本项目相关论文与专利尚未提供可查的公开凭证，暂不标注“已发表”“已授权”，待补充后再行更新。</p>
    </li>
    <li>
      <strong>延伸阅读</strong>
      <p><a href="/2026/04/02/mmc-mo-kuai-hua-duo-dian-ping-huan-liu-qi-gong-zuo-yuan-li/">MMC 模块化多电平换流器工作原理</a>（技术博客）</p>
    </li>
  </ul>
</section>

<nav class="dog-research-nextprev" aria-label="项目导航">
  <a class="dog-research-nextprev-link dog-research-nextprev-link--prev" href="/research/gfm-storage/">
    <span>上一个项目</span>
    <strong>基于构网型储能的海上风电柔直系统宽频振荡抑制技术研究</strong>
  </a>
  <a class="dog-research-nextprev-link dog-research-nextprev-link--next" href="/research/">
    <span>返回</span>
    <strong>科研项目总览</strong>
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
