import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BlogList from "./components/BlogList";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main>
        <Hero />
        <BlogList />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
