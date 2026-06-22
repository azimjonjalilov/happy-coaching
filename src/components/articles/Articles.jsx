import "./Articles.css";

const articles = [
  {
    id: 1,
    image: "src/components/articles/img/Image1.png",
    title: "Balancing your love and work life.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
  },
  {
    id: 2,
    image: "src/components/articles/img/Image2.png",
    title: "A short break from Social Media is important.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
  },
  {
    id: 3,
    image: "src/components/articles/img/Image3.png",
    title: "How to be 1% Better Every Day",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
  },
];

function Articles() {
  return (
    <section className="articles">
      <div className="articles-container">
        <h2 className="articles-title">
          Stay Motivated, read the <br />
          weekly blog articles.
        </h2>

        <div className="articles-grid">
          {articles.map((article) => (
            <div className="article-card" key={article.id}>
              <img
                src={article.image}
                alt={article.title}
                className="article-image"
              />

              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="articles-btn">
          Read more blogs
        </button>
      </div>
    </section>
  );
}

export default Articles;