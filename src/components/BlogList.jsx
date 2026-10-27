import posts from "../data/posts";
import BlogCard from "./BlogCard";

function BlogList() {
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

      <div className="blog-grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default BlogList;
