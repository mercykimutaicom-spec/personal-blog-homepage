import { useState } from "react";
import posts from "../data/posts";
import BlogCard from "./BlogCard";

function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  // Filter articles based on the selected category
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

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

      {/* Display all articles matching the selected category */}
      {filteredPosts.length > 0 ? (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="empty-message">No articles found in this category.</p>
      )}
    </section>
  );
}

export default BlogList;
