import React from "react";
import {FC, useState} from "react";

interface GiphySearchProps {
    onSearch: (search: string) => void;
}

export const GiphySearch: FC<GiphySearchProps> = ({onSearch}) => {
    const [giphySearch, setGiphySearch] = useState('');

    const disableSearch = giphySearch.trim() === '';

    const addGiphy = () => {
        onSearch(giphySearch);
        setGiphySearch('');
    }    

    return (
        <div>
            <label>
                Search Giphy: 
                <input 
                    className="ml-1 mr-1"
                    type="text" 
                    value={giphySearch}
                    onChange={e => setGiphySearch(e.target.value)}
                />
            </label>
            <button
                className="btn btn-primary"
                onClick={addGiphy} disabled={disableSearch} 
            >
            Search
            </button>
        </div>
    )
}