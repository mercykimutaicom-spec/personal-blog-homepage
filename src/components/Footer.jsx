
function Footer() {
  return (
    <footer id="contact">
      <div>
        <h2>Mercy's Journal</h2>

        <p>
          Exploring technology, sharing ideas, and learning through every story.
        </p>
      </div>

      <nav aria-label="Footer navigation">
        <a href="#home">Home</a>
        <a href="#articles">Articles</a>
        <a href="#about">About</a>
      </nav>

      <p>
        &copy; {new Date().getFullYear()} Mercy's Journal.
        All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
