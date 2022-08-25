import axios from "axios";

import React, { useEffect, useState } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";

const BlogPost = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    apiPost();
  }, []);

  // fetch Request API
  //   const apiPost = () => {
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

  //   axios Request API
  const apiPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        alert(error.toString());
      });
  };

  return (
    <>
      <p>Blog post</p>
      {post.map((item) => {
        return <Post title={item.title} desc={item.body} key={item.id} />;
      })}
    </>
  );
};

export default BlogPost;
