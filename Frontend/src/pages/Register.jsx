import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center  px-6 py-7 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-2 md:space-y-0 sm:p-8">
              <h2 className="text-gray-800 dark:text-white text-center text-2xl font-font">
                Register
              </h2>
              <form className="space-y-2 md:space-y-0">
                <div>
                  <label
                    for="profile"
                    className="flex text-white text-base px-5 py-0 outline-none rounded w-max cursor-pointer mx-auto mt-4"
                  >
                    <img
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s"
                      }
                      alt="Profile"
                      className=" rounded-[50%] w-[95px] h-[95px] object-cover"
                    />

                    <input
                      type="file"
                      id="profile"
                      name="profile"
                      className="hidden"
                    />
                  </label>
                </div>
                <div>
                  <label
                    for="text"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-4"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-4"
                  >
                    Email
                  </label>
                  <input
                    type="Email"
                    name="Email"
                    id="email"
                    placeholder="Enter your email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-4"
                  >
                    Password
                  </label>
                  <input
                    type="Password"
                    name="Password"
                    id="Password"
                    placeholder="Enter your password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-1"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="mt-8 w-full py-2 px-5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-center"
                  >
                    Register
                  </button>
                </div>

                <p className="text-gray-800 dark:text-gray-300 text-sm !mt-8 text-center">
                  Already Registered?
                  <Link
                    to="/login"
                    className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
