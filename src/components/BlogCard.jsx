function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card-content">
        <p className="blog-card-category">{post.category}</p>

        <h3>{post.title}</h3>

        <p className="blog-card-excerpt">{post.excerpt}</p>

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
