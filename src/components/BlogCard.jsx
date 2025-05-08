import React from 'react';

const BlogCard = ({ title, imageUrl, date, link }) => {
  return (
    <div className="col-md-6 blog-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt={title}
          height="200"
          style={{ width: 'auto', objectFit: 'cover' }}
        />
      </a>
      <div className="blog-card-title">
        <a href={link}  rel="noopener noreferrer">
        {/* <a href={link} target="_blank" rel="noopener noreferrer"> */}
          {title}
        </a>
      </div>
      <div className="blog-card-meta">
        <i className="fas fa-calendar-alt"></i> {date}
      </div>
    </div>
  );
};

export default BlogCard;
