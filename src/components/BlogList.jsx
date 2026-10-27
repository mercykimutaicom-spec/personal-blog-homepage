import { useState } from "react";
import posts from "../data/posts";
import BlogCard from "./BlogCard";

function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  // Filter articles based on the selected category
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
  return (
    <section id="articles" aria-labelledby="articles-title">
      <div>
        <p>THE JOURNAL</p>

        <h2 id="articles-title">Latest Articles</h2>

        <p>
          Discover thoughts, experiences, and insights from the world of
          technology.
        </p>
      </div>

      {/* Category filter buttons */}
      <div className="category-filters">
        <div className="blog-search">
          <input
            type="search"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search blog articles"
          />
        </div>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="results-count" aria-live="polite">
        Showing {filteredPosts.length}{" "}
        {filteredPosts.length === 1 ? "article" : "articles"}
      </p>

      {/* Display all articles matching the selected category */}
      {filteredPosts.length > 0 ? (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="empty-message">
          No articles match your search or selected category.
        </p>
      )}
    </section>
  );
}

export default BlogList;
