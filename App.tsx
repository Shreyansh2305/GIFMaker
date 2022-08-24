import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './style.css';

export default function App() {
  const [value, setValue] = useState('');
  const [res, setRes] = useState(null);
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleClick() {
    setRes(null);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=y1ZFwiomdYKWy80gtSxU4iEdv165yeOD`
      )
      .then((res) => {
        setRes(res?.data);
      });
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <h1>
            <b>Giphy Client</b>
          </h1>
          <input
            style={{ marginRight: '5px', marginBottom: '5px' }}
            onChange={(e) => handleChange(e)}
          ></input>
          <button onClick={handleClick}>Search</button>
          {res !== null && <h1 style={{ textAlign: 'center' }}>Results</h1>}
        </div>
      </div>
      <div style={{ display: 'flex-wrap' }}>
        {res !== null &&
          res?.data.map((data) => {
            return (
              <img
                src={data.images.original.url}
                height={data.images.fixed_height.height}
                width={data.images.fixed_width.width}
              />
            );
          })}
      </div>
    </div>
  );
}
