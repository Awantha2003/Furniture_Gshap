
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <div className="min-h-screen overflow-clip">
      {/* Header */}
      <Header/>
      <hr className="text-zinc-300 -mt-4"/>

      {/*Main */}
      <main>
        <Hero/>
            <hr className="text-zinc-300 "/>
            <Trending/>
      </main>
    </div>
  );
};

export default App
