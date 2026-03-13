import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隐私政策",
  description:
    "Telemaster 隐私政策：说明我们如何收集、使用与保护信息。请在使用前阅读。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32">
      <div className="text-sm text-gray-500">
        <Link className="hover:underline" href="/">
          首页
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">隐私政策</span>
      </div>

      <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        隐私政策
      </h1>
      <p className="mt-4 text-gray-700">
        本页面为示例隐私政策文本，用于完善产品网站模块与 SEO 结构。正式上线前建议
        补充真实的数据处理细节并由合规/法务审阅。
      </p>

      <div className="markdown mt-10">
        <h2>1. 我们可能收集的信息</h2>
        <ul>
          <li>账号信息：邮箱等用于注册与登录的信息。</li>
          <li>使用数据：功能使用情况、操作日志（用于安全与产品优化）。</li>
          <li>设备与技术信息：浏览器类型、基础网络信息（用于排障与安全）。</li>
        </ul>

        <h2>2. 信息使用目的</h2>
        <ul>
          <li>提供、维护与改进服务体验。</li>
          <li>保障安全与防止滥用。</li>
          <li>与用户沟通（例如支持与通知）。</li>
        </ul>

        <h2>3. 信息共享</h2>
        <p>
          我们不会出售你的个人信息。仅在提供服务所必需、符合法律要求或经你授权的
          情况下共享信息。
        </p>

        <h2>4. 数据安全</h2>
        <p>
          我们会采取合理的技术与组织措施保护信息安全，但互联网传输无法保证绝对安全。
        </p>

        <h2>5. 你的权利</h2>
        <p>
          你可以请求访问、更正或删除你的信息。请访问 <Link href="/contact">联系我们</Link>。
        </p>
      </div>
    </div>
  );
}
