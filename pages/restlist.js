import React from "react";
import GourmetItem from "../components/GourmetItem";
import data from "../utils/data";
import Layout from "../components/Layout";

export default function page() {
  return (
    <Layout title="RestaurantList">
      <div>
        <section class="">
          <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-lg text-center">
              <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>

              {/* <p class="hidden text-gray-500 sm:mt-4 sm:block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                dolor officia blanditiis repellat in, vero, aperiam porro ipsum
                laboriosam consequuntur exercitationem incidunt tempora nisi?
              </p> */}
            </div>

            <div class="mx-auto mt-8 max-w-xl">
              <form action="#" class="sm:flex sm:gap-4">
                <div class="sm:flex-1">
                  <label for="" class="sr-only">
                    검색
                  </label>

                  <input
                    type="text"
                    placeholder="검색"
                    class="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                  />
                </div>

                <button
                  type="submit"
                  class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                >
                  <span class="text-sm font-medium"> Search </span>

                  <svg
                    class="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>

        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            {data.restaurants.map((restaurant) => (
              <GourmetItem
                restaurant={restaurant}
                key={restaurant.REFINE_ZIPNO}
              ></GourmetItem>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
