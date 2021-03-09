import React, {useState} from 'react';
import { GiphyData } from '../model/Giphy';
import { searchGiphies } from '../services/GiphyService';
import { ErrorAlert, WarningAlert } from './Alerts';
import './App.css';
import { GiphyResults } from './GiphyResults';
import { GiphySearch } from './GiphySearch';

function App() {
  const [giphies, setGiphies] = useState<GiphyData[]>([]);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');

  const resetAlerts = () => {
    setError('');
    setWarning('');
  }
  console.log(giphies)
  const addGiphy = async (term: string) => {
    resetAlerts();
    const giphs = await searchGiphies(term);
    console.log(giphs)
    if (!giphs) {
      setError(`No Giphies found called '${term}'`);
    } else {
      // setGiphies([giphs])
    }
  }
  
  return (
    <div className="container">
      <h1>Giphy Search</h1>
      <GiphySearch onSearch={addGiphy} />
      <ErrorAlert message={error}/>
      <WarningAlert message={warning}/>
      {/* {giphies.map((giphy) => <GiphyResults key={giphy.id} url={giphy.url}/>)} */}
    </div>
  );
}

export default App;
