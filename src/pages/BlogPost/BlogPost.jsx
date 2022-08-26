import axios from "axios";

import React, { useEffect, useState } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";

const BlogPost = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    apiGetPost();
  }, []);

  // fetch Request API with get method
  //   const apiGetPost = () => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setPost(json);
  //         console.log(post);
  //       })
  //       .catch((error) => {
  //         alert(error.toString());
  //       });
  //   };

  //   axios Request API with get method
  const apiGetPost = () => {
    axios
      .get("http://localhost:3004/posts")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        alert("error cuy");
      });
  };

  //   axios Delete API
  const handleRemove = (id) => {
    axios.delete(`http://localhost:3004/posts/${id}`).then((res) => {
      apiGetPost();
    });
  };

  return (
    <>
      <p>Blog post</p>
      {post.map((item) => {
        return (
          <Post
            title={item.title}
            body={item.body}
            id={item.id}
            key={item.id}
            onRemove={handleRemove}
          />
        );
      })}
    </>
  );
};

export default BlogPost;
