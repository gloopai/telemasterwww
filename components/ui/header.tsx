
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);


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
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li>
       
              <li>
                <Link href="/tutorials" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                  Price
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>
              </li>              
              {/* 1st level: hover */}
              <li>
                <Link href="/resources" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Resources</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About us</Link>
              </li>
            </ul>
          {/* Desktop sign in links */}
          <ul className=" flex-1 items-center justify-end gap-3 hidden md:flex">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
              >
                Register
              </Link>
            </li>
          </ul>
          <ul className="block md:hidden">
            <li>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2"
                aria-label="Open main menu"
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
              className={`fixed m-4 inset-0 z-40 flex md:hidden top-[4rem] h-[100px] rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03]}`}
              ref={menuRef}
            >
                asdfsdf
            </div>
          )}
      </div>
    </header>
  );
}
