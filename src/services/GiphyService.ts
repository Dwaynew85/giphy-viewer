import { GiphyList } from "../model/Giphy";

const key: string = process.env.REACT_APP_GIPHY_API_KEY as string;
if (key === undefined) {
    throw new Error('No Giphy API Key define - ensure you set a variable called REACT_APP_GIPHY_API_KEY')
}

export async function searchGiphies(term: string): Promise<GiphyList[] | undefined> {
    const result = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${term}&limit=25&offset=0&rating=g&lang=en`);
    
    if (result.status !== 200) throw new Error('Failed to read Giphy data');
    
    return await result.json();
} 