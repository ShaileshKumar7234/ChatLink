import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow border dark:border-gray-700">
              <h2 className="text-gray-800 dark:text-white text-center text-2xl font-font">
                Login
              </h2>
              <form action="" className="mt-8 space-y-4">
                <div>
                  <label className="text-gray-800 font-medium dark:text-white text-lg mb-2 block mt-4">
                    Email
                  </label>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full text-gray-900 dark:text-white text-sm border bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 px-4 py-3 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 font-medium dark:text-white text-lg mb-2 block mt-4">
                    Password
                  </label>
                  <div>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full text-gray-900 dark:text-white text-sm border bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 px-4 py-3 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
                <div className="!mt-8">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 font-medium text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </div>
                <p className="text-gray-800 dark:text-gray-300 text-sm !mt-8 text-center">
                  Don't have an account?
                  <Link
                    to="/register"
                    className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
