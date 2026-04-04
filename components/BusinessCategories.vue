<template>
    <section class="border-t border-gray-200/80 bg-gray-50">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="py-16 md:py-24">
          <div class="mx-auto max-w-2xl pb-12 text-center md:pb-16">
            <p class="text-sm font-semibold text-blue-600">AI 助理</p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              加入 AI 助理，让运营可编排
            </h2>
            <p class="mt-4 text-lg text-gray-600">
              AI 负责理解与建议，系统负责执行与审计，让团队在规模化下依然稳定。
            </p>
          </div>

          <div class="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
            <div
              class="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm"
            >
              <div
                class="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600/10 ring-1 ring-blue-600/10"
              >
                <img
                  src="/images/telemaster-mark.svg"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <p class="mt-6 text-base font-semibold text-gray-900">
                中枢编排，多触点协同
              </p>
              <p class="mt-2 max-w-sm text-sm leading-relaxed text-gray-600">
                Bot、群组、频道与自动化规则统一接入；建议由 AI 给出，执行由系统落地并留痕。
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div
                v-for="m in aiModules"
                :key="m.title"
                class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <div class="flex items-center gap-3">
                  <span
                    class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 1.5c-2.9 0-5.25 2.35-5.25 5.25S5.1 12 8 12s5.25-2.35 5.25-5.25S10.9 1.5 8 1.5Z"
                        fill="currentColor"
                        opacity="0.25"
                      />
                      <path
                        d="M8 4a1 1 0 0 1 1 1v.2a2 2 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 9.5c-1.37 0-2.6-.56-3.5-1.46a1 1 0 0 1 1.41-1.41c.54.54 1.29.88 2.09.88.8 0 1.55-.34 2.09-.88a1 1 0 0 1 1.41 1.41A4.97 4.97 0 0 1 8 13.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <div class="text-sm font-semibold text-gray-900">
                    {{ m.title }}
                  </div>
                </div>
                <div class="mt-3 text-sm text-gray-700">{{ m.desc }}</div>
              </div>
            </div>
          </div>

          <div class="mt-16 rounded-3xl border border-gray-200/80 bg-white p-8 shadow-sm md:p-10">
            <div class="mx-auto max-w-3xl text-center">
              <p class="text-sm font-semibold text-blue-600">商业化</p>
              <h3 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                社群变现：从运营到收入的闭环
              </h3>
              <p class="mt-3 text-base text-gray-700">
                Telemaster 把“承接-转化-交付-复盘”做成可执行的流程，帮助 Telegram
                社群运营者更稳定地获得收入与增长。
              </p>
            </div>

            <div class="mt-8 flex flex-wrap justify-center gap-2">
              <span
                v-for="label in monetizationOptions"
                :key="label"
                class="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200"
              >
                {{ label }}
              </span>
            </div>

            <div class="mt-10 grid gap-6 lg:grid-cols-2">
              <div
                v-for="s in monetizationModel"
                :key="s.title"
                class="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200"
              >
                <div class="text-sm font-semibold text-gray-900">
                  {{ s.title }}
                </div>
                <div class="mt-2 text-sm text-gray-700">{{ s.desc }}</div>
                <ul class="mt-4 space-y-2 text-sm text-gray-700">
                  <li v-for="b in s.bullets" :key="b" class="flex gap-2">
                    <span
                      class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600/70"
                      aria-hidden="true"
                    />
                    <span>{{ b }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mt-16 overflow-hidden rounded-3xl bg-gray-900 p-8 text-white shadow-lg ring-1 ring-white/10 md:p-10">
            <div class="mx-auto max-w-3xl text-center">
              <p class="text-sm font-semibold text-blue-300/90">联盟</p>
              <h3 class="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                Telegram 生态流量运营变现联盟
              </h3>
              <p class="mt-3 text-base text-white/80">
                Telemaster 在做一件更长期的事：连接流量与变现产品，让合作从“单次对接”
                变成“可复制的联盟协作”。
              </p>
            </div>

            <div class="mt-8 flex flex-wrap justify-center gap-2">
              <span
                v-for="label in allianceRoles"
                :key="label"
                class="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/10"
              >
                {{ label }}
              </span>
            </div>

            <div class="mt-10 grid gap-6 lg:grid-cols-2">
              <div
                v-for="p in alliancePillars"
                :key="p.title"
                class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div class="text-sm font-semibold text-white">
                  {{ p.title }}
                </div>
                <div class="mt-2 text-sm text-white/80">{{ p.desc }}</div>
                <ul class="mt-4 space-y-2 text-sm text-white/80">
                  <li v-for="b in p.bullets" :key="b" class="flex gap-2">
                    <span
                      class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/80"
                      aria-hidden="true"
                    />
                    <span>{{ b }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <NuxtLink to="/contact"  
                class="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
              >
                加入联盟
              </NuxtLink>
              <NuxtLink to="/alliance"  
                class="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/15"
              >
                了解联盟
              </NuxtLink>
              <NuxtLink to="/integrations"  
                class="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/15"
              >
                查看集成能力
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script setup lang="ts">
const aiModules = [
  {
    title: "AI 对话总结",
    desc: "自动提炼热点、未解决问题与待跟进事项，减少人工翻群记录。",
  },
  {
    title: "意图识别与分流",
    desc: "识别咨询、投诉、合作等意图，自动引导到表单/工单/人工支持。",
  },
  {
    title: "智能回复与话术",
    desc: "基于模板与知识库生成回复，保持口径一致并支持多语言（按可用性）。",
  },
  {
    title: "风险提示",
    desc: "对广告、钓鱼链接与敏感内容进行提示与拦截建议（按可用性）。",
  },
];

const monetizationModel = [
  {
    title: "承接：把流量变成可运营的人",
    desc: "用清晰的入口与规则，把新成员稳定导入你的“转化路径”。",
    bullets: [
      "欢迎语与固定入口：权益说明、常见问题、下一步指引",
      "关键词触发：资料领取、课程报名、合作咨询等场景化引导",
      "意图识别分流：转到私聊、表单或人工支持（按可用性）",
    ],
  },
  {
    title: "转化：把兴趣变成订单",
    desc: "把“问来问去”变成“可复用的话术与流程”，减少漏单与跟进成本。",
    bullets: [
      "标准话术与套餐说明：保持口径一致，支持多语言（按可用性）",
      "分层权限与群规：维护高质量讨论环境，提升付费意愿",
      "引导到支付/下单页面：外部收款与跳转链接（按可用性）",
    ],
  },
  {
    title: "交付：把服务做成可复制",
    desc: "用自动化与内容排期支撑交付，让同样的人力服务更多成员。",
    bullets: [
      "频道排期与素材管理：课程/更新/活动节奏化输出",
      "智能回复覆盖高频问答：减少重复咨询，提高满意度",
      "反垃圾与风险策略：避免广告与钓鱼干扰交付体验",
    ],
  },
  {
    title: "复盘：把一次成交做成长期收入",
    desc: "用数据与总结抓住“下一次增长点”，持续提高转化率与留存。",
    bullets: [
      "统一看板与关键指标：增长、互动、触达与线索（按可用性）",
      "AI 总结热点与问题：定位需求变化与产品机会",
      "跟进清单与流程化执行：把经验变成团队标准作业",
    ],
  },
];

const monetizationOptions = [
  "会员订阅/付费社群",
  "课程/训练营/资料包",
  "咨询/陪跑/服务交付",
  "赞助与品牌合作",
  "联盟/返佣分销",
  "线索获客与导流",
];

const allianceRoles = [
  "流量方：群组/频道/媒体矩阵",
  "产品方：课程/工具/服务交付",
  "服务方：运营/增长/内容与客服",
];

const alliancePillars = [
  {
    title: "供需撮合",
    desc: "把合适的变现产品匹配到合适的流量场景，让合作更可复制。",
    bullets: ["人群与场景标签化", "产品权益与素材包", "可控频率与触达策略"],
  },
  {
    title: "标准分发",
    desc: "用统一的话术、入口与流程承接流量，减少反复沟通与漏单。",
    bullets: ["关键词/欢迎语入口（按可用性）", "模板化活动与落地页", "分流到私聊/表单/工单"],
  },
  {
    title: "追踪归因",
    desc: "把转化路径数据化，明确来源与效果，帮助双方持续优化。",
    bullets: [
      "渠道与素材维度追踪（按可用性）",
      "关键指标看板（按可用性）",
      "复盘热点与问题（按可用性）",
    ],
  },
  {
    title: "结算协作",
    desc: "用权限与记录保障合作过程透明可审计，支持规模化协作。",
    bullets: ["角色权限与最小授权", "操作记录与审计", "返佣/结算对账（按可用性）"],
  },
];
</script>
