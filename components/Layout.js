import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import Cookies from "js-cookie";
import { ArrowUturnRightIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    signOut({ callbackUrl: "/signin" });
  };

  return (
    <>
      <Head>
        <title>
          {title ? title + " - GyeonggiGourmet" : "GyeonggiGourmet"}
        </title>
        <meta name="description" content="Nextjs" />
        <link rel="icon" href="/head.png" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />

      <div>
        <div class="w-full py-4 bg-blue-800 shadow">
          <div class="w-full container mx-auto flex flex-wrap items-center justify-between">
            <div>
              <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                <li>
                  <a
                    class="hover:text-gray-200 hover:underline px-4"
                    href="/list"
                  >
                    List
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-200 hover:underline px-4" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="flex items-center text-lg no-underline text-white pr-6">
              <Link class="" href="#">
                <i class="fab fa-facebook">123</i>
              </Link>
              <Link class="pl-6" href="#">
                <i class="fab fa-instagram">234</i>
              </Link>
              <Link class="pl-6" href="#">
                <i class="fab fa-twitter">345</i>
              </Link>
              <Link class="pl-6" href="#">
                <i class="fab fa-linkedin">456</i>
              </Link>
            </div>
          </div>
        </div>

        <div class="w-full container mx-auto">
          <div class="flex flex-col items-center py-12">
            <Link
              class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
              href="/"
            >
              Minimal Blog
            </Link>
            <p class="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
          </div>
        </div>

        <nav class="w-full py-4 border-t border-b bg-gray-100">
          <div class="block sm:hidden">
            <a
              href="#"
              class="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
            >
              Topics
            </a>
          </div>
          <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
              <a
                href="/restlist"
                class="hover:bg-gray-400 rounded py-2 px-4 mx-2"
              >
                음식점 정보
              </a>
              <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                Automotive
              </a>
              <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                Finance
              </a>
              <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                Politics
              </a>
              <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                Culture
              </a>
              <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
                Sports
              </a>
            </div>
          </div>
        </nav>
      </div>
      <main className="">{children}</main>
      <footer class="bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex justify-center text-teal-600 sm:justify-start"></div>

            <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
