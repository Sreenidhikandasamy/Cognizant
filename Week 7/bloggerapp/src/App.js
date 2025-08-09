import React from "react";
import "./App.css";

function App() {
  const courseList = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/20201" },
  ];

  const bookList = [
    { title: "Master React", price: "670" },
    { title: "Deep Dive into Angular 11", price: "800" },
    { title: "Mongo Essentials", price: "450" },
  ];

  const blogList = [
    {
      title: "React Learning",
      author: "Stephen Biz",
      desc: "Welcome to learning React!",
    },
    {
      title: "Installation",
      author: "Schewzdenier",
      desc: "You can install React from npm.",
    },
  ];

  return (
    <div className="App">
      <h1>React App</h1>
      <div className="container">

        <div className="column">
          <h2>Course Details</h2>
          {courseList.map((course, index) => (
            <div key={index}>
              <h4>{course.name}</h4>
              <p>{course.date}</p>
            </div>
          ))}
        </div>

        <div className="column">
          <h2>Book Details</h2>
          {bookList.map((book, index) => (
            <div key={index}>
              <h4>{book.title}</h4>
              <p>{book.price}</p>
            </div>
          ))}
        </div>

        
        <div className="column">
          <h2>Blog Details</h2>
          {blogList.map((blog, index) => (
            <div key={index}>
              <h4>{blog.title}</h4>
              <strong>{blog.author}</strong>
              <p>{blog.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default App;
