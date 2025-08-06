export const metadata = {
  title: "FAQ - Telemaster常见问题解答",
};

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto py-32 px-">
      <h1 className="text-3xl font-bold mb-8">常见问题解答 (FAQ)</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Q: Telemaster是什么？</h2>
          <p className="mt-2 text-gray-700">A: Telemaster是一款智能的Telegram管理工具，帮助您高效管理社群和自动化运营。</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Q: 如何开始使用？</h2>
          <p className="mt-2 text-gray-700">A: 注册账号并绑定您的Telegram，即可开始体验丰富的管理功能。</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Q: 是否支持多账号管理？</h2>
          <p className="mt-2 text-gray-700">A: 支持，您可以同时管理多个Telegram账号和群组。</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Q: 如何联系客服？</h2>
          <p className="mt-2 text-gray-700">A: 您可以通过页面下方的联系方式或加入官方Telegram群组联系客服。</p>
        </div>
      </div>
    </div>
  );
}
