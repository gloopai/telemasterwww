import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常见问题",
  description:
    "Telemaster 常见问题解答：产品定位、上手方式、管理范围与联系方式。",
  alternates: { canonical: "/faq" },
};

export default function FAQ() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32">
      <h1 className="mb-8 text-3xl font-bold">常见问题</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Q: Telemaster是什么？</h2>
          <p className="mt-2 text-gray-700">
            A: Telemaster 是一款面向 Telegram 群组、频道与机器人的运营平台，帮助你
            用更少的人力实现自动化与可复盘的运营。
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Q: 如何开始使用？</h2>
          <p className="mt-2 text-gray-700">
            A: 注册账号后，根据页面指引完成授权与配置，即可开始管理群组/频道并启用
            自动化能力。
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Q: 是否支持多账号管理？</h2>
          <p className="mt-2 text-gray-700">
            A: 支持。你可以按工作区管理多个群组/频道与相关配置（按方案与可用性）。
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Q: 如何联系客服？</h2>
          <p className="mt-2 text-gray-700">
            A: 你可以通过“联系我们”页面发送邮件或提交需求，我们会尽快回复。
          </p>
        </div>
      </div>
    </div>
  );
}
