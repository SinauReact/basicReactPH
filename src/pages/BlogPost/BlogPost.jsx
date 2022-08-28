import axios from "axios";

import React, { useEffect, useState } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";

const BlogPost = () => {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    apiGet();
  }, []);

  // fetch Request API get method-------------------------
  //   const apiGet = () => {
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

  //   axios Request API  get method-------------------------
  const apiGet = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        // alert("error cuy");
      });
  };

  //   axios Request API Delete method-------------------------
  const handleRemove = (id) => {
    axios.delete(`http://localhost:3004/posts/${id}`).then((res) => {
      apiGet();
    });
  };

  // axios Request API with Post method-------------------------

  const bodyReq = {
    id,
    title,
    body,
  };

  const apiPost = (newId) => {
    setId(newId);
    axios
      .post("http://localhost:3004/posts", bodyReq)
      .then((response) => {
        apiGet();
      })
      .catch((error) => {
        alert("the post is failed");
      });
  };

  const apiPut = () => {
    axios
      .put(`http://localhost:3004/posts/${id}`, bodyReq)
      .then((response) => {
        apiGet();
        setTitle("");
        setBody("");
        setId(0);
        setIsUpdate(false);
      })
      .catch(() => {
        alert("Your update is failed");
      });
  };

  //   handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      apiPut();
    } else {
      let newId = new Date().getTime();
      apiPost(newId);
    }
  };

  // axios Request API with Put method-------------------------
  const handleUpdate = (dataInput) => {
    setId(dataInput.id);
    setTitle(dataInput.title);
    setBody(dataInput.body);
    setIsUpdate(true);
  };

  return (
    <>
      <p className="section-title">Blog post</p>

      {/* Form */}
      <form className="form-add-post" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="add title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="body-content">Blog Content</label>
        <textarea
          id="body-content"
          cols="30"
          rows="10"
          placeholder="add blog content"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        ></textarea>
        <button className="btn-submit">Simpan</button>
      </form>

      {/* card */}
      {post.map((item) => {
        return (
          <Post
            title={item.title}
            body={item.body}
            id={item.id}
            key={item.id}
            onRemove={handleRemove}
            onUpdate={handleUpdate}
          />
        );
      })}
    </>
  );
};

export default BlogPost;
