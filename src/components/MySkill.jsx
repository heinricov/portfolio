import vite from "../assets/icon/vite.svg";
import react from "../assets/icon/react.svg";
import html from "../assets/icon/html.svg";
import css from "../assets/icon/css.svg";
import js from "../assets/icon/js.svg";

function MySkill() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
        <div class="mx-auto max-w-screen-sm">
          <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">
            SKILL
          </h1>
          <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div class="flex justify-center items-center mb-4 w-96 h-10">
              <img src={vite} width={50} />
              <img src={react} />
              <img src={html} />
              <img src={css} />
              <img src={js} />
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Frontend</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div class="flex justify-center items-center mb-4 w-96 h-10">
              <img src={vite} width={50} />
              <img src={react} />
              <img src={html} />
              <img src={css} />
              <img src={js} />
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Backend</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div class="flex justify-center items-center mb-4 w-96 h-10">
              <img src={vite} width={50} />
              <img src={react} />
              <img src={html} />
              <img src={css} />
              <img src={js} />
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">Other</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkill;
