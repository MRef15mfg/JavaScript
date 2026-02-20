function AuthorInfo({ author }) {
  return (
    <div className="author">
      <img className="author-avatar" src={author.avatar} alt="Author" />
      <div>
        <p className="author-name">{author.name}</p>
        <p className="author-date">{author.date}</p>
      </div>
    </div>
  );
}