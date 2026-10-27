function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header>
      <nav aria-label="Main navigation">
        <a href="#home">Mercy's Journal</a>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#articles">Articles</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
