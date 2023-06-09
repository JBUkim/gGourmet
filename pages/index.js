import Layout from "../components/Layout";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Home() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Layout title="Home">
      <section class="relative bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/15 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Gyeonggi
              <strong class="font-extrabold text-indigo-500 sm:block">
                Gourmet
              </strong>
            </h1>

            <p class="mt-5 sm:text-xl sm:leading-relaxed">123123</p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                class="block w-full rounded bg-indigo-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
              >
                로그인
              </Link>

              <Link
                href="/signup"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-indigo-400 shadow hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto"
              >
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <Link href="#">
        <ArrowUpIcon></ArrowUpIcon>
      </Link> */}
    </Layout>
  );
}
