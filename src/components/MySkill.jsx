import vite from "../assets/icon/vite.svg";
import react from "../assets/icon/react.svg";
import html from "../assets/icon/html.svg";
import css from "../assets/icon/css.svg";
import js from "../assets/icon/js.svg";

function MySkill() {
  return (
    <section id="skill" class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
        <div class="mx-auto max-w-screen-sm">
          <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">
            SKILL
          </h1>
        </div>
        <div className="CardFrame">
          <div className="CardCompo">
            <h3>Frontend</h3>
            <div class="flex justify-center items-center mb-4 w-full h-10">
              <img src={vite} width={50} />
              <img src={react} />
              <img src={html} />
              <img src={css} />
              <img src={js} />
            </div>
            <p>
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div className="CardCompo">
            <h3>Frontend</h3>
            <div class="flex justify-center items-center mb-4 w-full h-10">
              <img src={vite} width={50} />
              <img src={react} />
              <img src={html} />
              <img src={css} />
              <img src={js} />
            </div>
            <p>
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
