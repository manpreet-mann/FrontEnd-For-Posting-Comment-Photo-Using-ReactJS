import logo from './logo.svg';
import './App.css';
// import PostCard from './Components/PostCard';
import React, { useState } from 'react';
import './index.css';

function App() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value)
  };

  return (
    <div className="App">
      <h2 className='uploadpic-text'>Upload A Picture:</h2>
      <input type="file" onChange={handleChange} />
      <img src={file} />
      {comments.map((text, index) => (
        <div className='comment-container' key={index}>{text}</div>
      ))}
      <div className='comment-flexbox'>
        <br></br>
        <h2 className='comment-text'>Or Type your doubt</h2>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className='input-box'
        />
        <br></br>
        <button onClick={onClickHandler}>Post</button>
      </div>
    </div>
  );
}

export default App;
