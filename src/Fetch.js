import React, { useState, useEffect } from "react";
import axios from "axios";

function Fetch() {
  const [post, setPost] = useState([]);
  const [name, setName] = useState("");

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    console.log(response);
    setPost(response.data);
  };

  const newPost = post.map(function (posts) {
    return (
      <p key={posts.id}>
        <h4>Title</h4>
        {posts.title}
        <h4>Body</h4>
        {posts.body}
      </p>
    );
  });

  return (
    <div className="container">
      <h2>Example component</h2>
      <button onClick={fetchWeather}>Get students</button>
      <div>{newPost}</div>
    </div>
  );
}

export default Fetch;
