import React, {useState} from 'react';
import './App.css';
import { GiphyResults } from './GiphyResults';
import { GiphySearch } from './GiphySearch';

function App() {
  const [giphies, setGiphies] = useState<string[]>([]);
  
  const addGiphy = (giphy: string) => setGiphies([giphy, ...giphies])

  return (
    <div className="container">
      <h1>Giphy Search</h1>
      <GiphySearch onSearch={addGiphy} />
      <GiphyResults giphies={giphies}/>
    </div>
  );
}

export default App;
