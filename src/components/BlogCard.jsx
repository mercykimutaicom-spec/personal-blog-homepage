import { useState } from "react";

function BlogCard({ post }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="blog-card">
      <div className="blog-card-content">
        <p className="blog-card-category">{post.category}</p>

        <h3>{post.title}</h3>

        <p className="blog-card-excerpt">
          {isExpanded ? post.excerpt : `${post.excerpt.slice(0, 80)}...`}
        </p>
        <button
          className="read-more-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>

        <div className="blog-card-meta">
          <span>{post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
