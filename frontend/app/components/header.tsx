import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="sticky top-0 border-b z-10 w-full shadow bg-white">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex items-center flex-no-shrink mr-6">
              <Link href="/">
                <h2 className="text-2xl  font-bold">threaDBlog</h2>
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                aria-label="Toggle navigation"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li>
                <Link href="/">
                  ブログ一覧
                </Link>
              </li>
              <li>
                <Link href="/thread">
                  スレッド一覧
                </Link>
              </li>
              <li>
                <Link href="/new">
                  新規ブログ
                </Link>
              </li>
              <li>
                <Link href="/new-thread">
                  新規スレッド
                </Link>
              </li>
              <li>
                <Link href="/login">
                  ログイン
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  新規登録
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header
