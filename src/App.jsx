import MyAbout from "./components/MyAbout";
import MyContact from "./components/MyContact";
import MyFooter from "./components/MyFooter";
import MyHero from "./components/MyHero";
import MyNafigasi from "./components/MyNafigasi";
import MyPortfolio from "./components/MyPortfolio";
import MySkill from "./components/MySkill";
// import MeNavbar from "./components/MeNavbar";

function App() {
  return (
    <>
      <MyNafigasi />
      {/* <MeNavbar /> */}
      <MyHero />
      <MyAbout />
      <MySkill />
      <MyPortfolio />
      <MyContact />
      <MyFooter />
    </>
  );
}

export default App;
