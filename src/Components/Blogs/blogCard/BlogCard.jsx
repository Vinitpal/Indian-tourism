const BlogCard = ({ imgSrc, title, text, userName, userJob, userImg }) => {
  return (
    <div className="blog-card">
      <div className="img">
        <img src={imgSrc} alt="blog-img" />
      </div>
      <div className="content">
        <h1>{title.slice(0, 40) + "..."}</h1>
        <p>{text.slice(0, 120) + "..."}</p>
      </div>
      <div className="user">
        <img src={userImg} alt="user" />
        <div className="user-info">
          <h2>{userName}</h2>
          <p>{userJob}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
