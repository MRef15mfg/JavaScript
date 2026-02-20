function Article({ data }) {
  return (
    <div className="article">
      <h2 className="article-title">{data.title}</h2>

      <AuthorInfo author={data.author} />

      <img className="article-image" src={data.image} alt="Article" />

      <ArticleContent paragraphs={data.paragraphs} />
    </div>
  );
}