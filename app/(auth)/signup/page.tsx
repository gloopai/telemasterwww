import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "注册",
  description: "创建 Telemaster 账号。",
  alternates: { canonical: "/signup" },
  robots: { index: false, follow: false },
};

export default function SignUp() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">创建账号</h1>
      </div>

      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              姓名
            </label>
            <input
              id="name"
              className="form-input w-full py-2"
              type="text"
              placeholder="你的名字"
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              邮箱
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              手机号
            </label>
            <input
              id="phone"
              className="form-input w-full py-2"
              type="text"
              placeholder="选填"
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              密码
            </label>
            <input
              id="password"
              className="form-input w-full py-2"
              type="password"
              autoComplete="on"
              placeholder="••••••••"
              required
            />
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <button className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
            注册
          </button>
          <div className="text-center text-sm italic text-gray-400">或</div>
          <button className="btn w-full bg-linear-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
            使用 GitHub 继续
          </button>
        </div>
      </form>

      {/* Bottom link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          注册即表示你同意{" "}
          <Link
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="/terms"
          >
            服务条款
          </Link>{" "}
          和{" "}
          <Link
            className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
            href="/privacy"
          >
            隐私政策
          </Link>
          。
        </p>
      </div>
    </>
  );
}
