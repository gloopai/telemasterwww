import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务条款",
  description:
    "Telemaster 服务条款：使用条件、责任限制与合规说明。请在使用前阅读。",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32">
      <div className="text-sm text-gray-500">
        <Link className="hover:underline" href="/">
          首页
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">服务条款</span>
      </div>

      <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        服务条款
      </h1>
      <p className="mt-4 text-gray-700">
        本页面为示例条款文本，用于完善产品网站模块与 SEO 结构。正式上线前建议由
        法务审阅并替换为适用版本。
      </p>

      <div className="markdown mt-10">
        <h2>1. 服务范围</h2>
        <p>
          Telemaster 提供用于管理 Telegram 群组、频道与机器人的工具与界面（以产品
          实际提供功能为准）。我们可能会不定期更新、调整或新增功能。
        </p>

        <h2>2. 账号与使用</h2>
        <ul>
          <li>你应确保提供的信息真实、合法，并妥善保管账号凭据。</li>
          <li>你不得使用本服务从事违法活动或侵害他人权益的行为。</li>
          <li>你应对通过你的账号发生的操作与内容承担相应责任。</li>
        </ul>

        <h2>3. 付费与退款</h2>
        <p>
          付费方案的价格与权益以定价页面为准。若涉及退款与计费周期，请以正式的
          商业规则与合同条款为准。
        </p>

        <h2>4. 数据与合规</h2>
        <p>
          你应确保你在 Telegram 侧的管理与自动化行为符合当地法律法规与 Telegram
          平台规则。你应对所管理群组/频道的内容与合规承担责任。
        </p>

        <h2>5. 免责声明与责任限制</h2>
        <p>
          在法律允许范围内，Telemaster 不对间接损失、利润损失或数据损失承担责任。
          服务可能会因网络、第三方平台或不可抗力出现中断或延迟。
        </p>

        <h2>6. 联系方式</h2>
        <p>
          如对条款有疑问，请访问 <Link href="/contact">联系我们</Link>。
        </p>
      </div>
    </div>
  );
}
