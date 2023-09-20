import React from "react";

export default function Pagination() {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="list-style-none flex gap-2">
          <li>
            <a class="pointer-events-none relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400 text-xl mt-[-5px]">
              «
            </a>
          </li>
          <li>
            <a
              class="bg-red-600 relative block rounded-full px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
            >
              1
            </a>
          </li>

          <li aria-current="page">
            <a
              class=" bg-gray-200 relative block rounded-full  px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
            >
              2
              <span class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                (current)
              </span>
            </a>
          </li>
          <li>
            <a
              class=" bg-gray-200 relative block rounded-full  px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
            >
              3
            </a>
          </li>
          <li>
            <a
              class="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
            >
              ...
            </a>
          </li>
          <li>
            <a
              class=" bg-gray-200 relative block rounded-full px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#!"
            >
              7
            </a>
          </li>
          <li>
            <a
              class="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-black text-xl mt-[-5px]"
              href="#!"
            >
              »
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
