import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap">

          {/* Logo Section */}
          <div className="w-full lg:w-5/12 md:w-1/2 mb-10 lg:mb-0">
            <div className="flex flex-col h-full justify-between">
              <div>
                <Logo width="50px" />
              </div>

              <p className="mt-6 text-sm text-slate-400 leading-6 max-w-sm">
                Create, share and explore amazing blogs with our modern
                blogging platform powered by React and Appwrite.
              </p>

              <p className="mt-8 text-sm text-slate-500">
                © 2026 BlogHub. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="w-full lg:w-2/12 md:w-1/2 mb-8">
            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  className="text-slate-400 hover:text-blue-400 transition duration-300"
                  to="/"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  className="text-slate-400 hover:text-blue-400 transition duration-300"
                  to="/"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  className="text-slate-400 hover:text-blue-400 transition duration-300"
                  to="/"
                >
                  Affiliate Program
                </Link>
              </li>

              <li>
                <Link
                  className="text-slate-400 hover:text-blue-400 transition duration-300"
                  to="/"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full lg:w-2/12 md:w-1/2 mb-8">
            <h3 className="mb-5 text-lg font-semibold text-white">
              Support
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  className="text-slate-400 hover:text-blue-400 transition duration-300"
                  to="/"
                >
                  Account
                </Link>
              </li>

              <li>
                <Link
                  className="text-slate-400 hover:text-blue-400 transition duration-300"
                  to="/"
                >
                  Help
                </Link>
              </li>

              <li>
                <Link
                  className="text-slate-400 hover:text-blue-400 transition duration-300"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  className="text-slate-400 hover:text-blue-400 transition duration-300"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full lg:w-3/12 md:w-1/2">
            <h3 className="mb-5 text-lg font-semibold text-white">
              Legal
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  className="text-slate-400 hover:text-blue-400 transition duration-300"
                  to="/"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  className="text-slate-400 hover:text-blue-400 transition duration-300"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  className="text-slate-400 hover:text-blue-400 transition duration-300"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer