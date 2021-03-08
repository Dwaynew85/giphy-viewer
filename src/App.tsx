import React, {useState} from 'react';
import './App.css';

function App() {
  const [giphySearch, setGiphySearch] =useState('Paris');

  return (
    <div className="App">
      <h1>Giphy Search</h1>
      <div>
        <label>
          Search Giphy: 
          <input 
            type="text" 
            value={giphySearch}
            onChange={e => setGiphySearch(e.target.value)}
          />
        </label>
        <button>Search</button>
      </div>

      <div>
        <h2>Results</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Test1</td></tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
