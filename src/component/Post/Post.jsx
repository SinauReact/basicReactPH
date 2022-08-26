import React from "react";

const Post = ({ title, body, id, onRemove }) => {
  return (
    <>
      <div className="post">
        <div className="img-thumb">
          <img src={"https://placeimg.com/200/150/tech"} alt="dummy " />
        </div>
        <div className="content">
          <p className="title"> {title} </p>
          <p className="desc"> {body} </p>
          <button className="remove" onClick={() => onRemove(id)}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Post;
