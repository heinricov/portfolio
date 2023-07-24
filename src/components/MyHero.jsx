import "../index.css";
import "./custome.css";
import foto1 from "../assets/foto/foto1.jpeg";
import foto2 from "../assets/foto/foto3.jpeg";

export default function MyHero() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900 My-Section">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="HeroCompo">
            <h2>Hallo,,</h2>
            <h1>I'm HEINRICOV</h1>
            <h3>Web Developer | Frontend</h3>
            <p>
              I am a web developer with experience in completing various types
              of web project websites. on this website you can see many things
              about me, please scroll down.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Contact
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              My Portfolio
            </a>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src={foto1} alt="office content 1" />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src={foto2}
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
