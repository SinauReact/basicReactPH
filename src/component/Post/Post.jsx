import React from "react";

const Post = ({ title, body, id, onRemove, onUpdate }) => {
  const dataInput = { title, body, id };
  return (
    <>
      <div className="post">
        <div className="img-thumb">
          <img src={"https://placeimg.com/200/150/tech"} alt="dummy " />
        </div>
        <div className="content">
          <p className="title"> {title} </p>
          <p className="desc"> {body} </p>
          <button className="update" onClick={() => onUpdate(dataInput)}>
            Update
          </button>
          <button className="remove" onClick={() => onRemove(id)}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Post;
