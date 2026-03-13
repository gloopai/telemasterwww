import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "重置密码",
  description: "重置 Telemaster 账号密码。",
  alternates: { canonical: "/reset-password" },
  robots: { index: false, follow: false },
};

export default function ResetPassword() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">重置密码</h1>
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
        </div>
        <div className="mt-6">
          <button className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
            发送重置邮件
          </button>
        </div>
      </form>
    </>
  );
}
