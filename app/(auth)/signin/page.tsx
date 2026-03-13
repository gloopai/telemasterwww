import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "登录",
  description: "登录 Telemaster。",
  alternates: { canonical: "/signin" },
  robots: { index: false, follow: false },
};

export default function SignIn() {
  return (
    <>
      <>
        <div className="mb-10">
          <h1 className="text-4xl font-bold">登录账号</h1>
        </div>
        {/* Form */}
        <form>
          <div className="space-y-4">
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
          <div className="mt-6">
            <button className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
              登录
            </button>
          </div>
        </form>
        {/* Bottom link */}
        <div className="mt-6 text-center">
          <Link
            className="text-sm text-gray-700 underline hover:no-underline"
            href="/reset-password"
          >
            忘记密码
          </Link>
        </div>
      </>
    </>
  );
}
