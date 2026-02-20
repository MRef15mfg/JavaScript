function ArticleContent({ paragraphs }) {
  return (
    <div className="article-content">
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}

      <a
        href="https://uk.wikipedia.org/wiki/Штучний_інтелект"
        target="_blank"
        rel="noopener noreferrer"
      >
        Дізнатися більше про штучний інтелект
      </a>
    </div>
  );
}