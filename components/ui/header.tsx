"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!menuRef.current) return;
      if (menuRef.current.contains(target)) return;
      setMobileMenuOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("touchstart", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleMenuToggle = () => setMobileMenuOpen((open) => !open);
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
            {/* Desktop menu links */}
            <ul className="hidden md:flex grow justify-center flex-wrap items-center text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  首页
                </Link>
              </li>

              <li>
                <Link
                  href="/features"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  功能
                </Link>
              </li>
 <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  定价
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  使用场景
                </Link>
              </li>

              <li>
                <Link
                  href="/mini-apps"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  小程序
                </Link>
              </li>

              <li>
                <Link
                  href="/mini-games"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  小游戏
                </Link>
              </li>

              <li>
                <Link
                  href="/ton"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  TON
                </Link>
              </li>

             
            </ul>
          {/* Desktop sign in links */}
          <ul className=" flex-1 items-center justify-end gap-3 hidden md:flex">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                登录
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
              >
                注册
              </Link>
            </li>
          </ul>
          <ul className="block md:hidden">
            <li>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2"
                aria-label="打开主菜单"
                onClick={handleMenuToggle}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </li>
          </ul>
    
        </div>
          {/* 移动端弹出菜单 */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-x-4 top-[4.5rem] z-40 flex flex-col gap-1 rounded-2xl bg-white/95 p-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs md:hidden"
              ref={menuRef}
            >
              <Link
                href="/"
                className="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                首页
              </Link>
              <Link
                href="/features"
                className="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                功能
              </Link>
              <Link
                href="/use-cases"
                className="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                使用场景
              </Link>
              <Link
                href="/mini-apps"
                className="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                小程序
              </Link>
              <Link
                href="/mini-games"
                className="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                小游戏
              </Link>
              <Link
                href="/ton"
                className="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                TON
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                定价
              </Link>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link
                  href="/signin"
                  className="btn-sm w-full justify-center bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  登录
                </Link>
                <Link
                  href="/signup"
                  className="btn-sm w-full justify-center bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  注册
                </Link>
              </div>
            </div>
          )}
      </div>
    </header>
  );
}
