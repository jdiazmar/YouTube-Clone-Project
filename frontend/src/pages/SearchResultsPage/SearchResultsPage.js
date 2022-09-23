// Generic Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { KEY } from '../../localKey';
// Component Imports
import SearchBar from '../../components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';


const SearchResultsPage = (props) => {

const [searchResults, setSearchResults] = useState([]);
const [videoId, setVideoId] = useState('');
const [description, setDescription] = useState('');
const [title, setTitle] = useState('');

useEffect(() => {
    getSearchResults();
}, [])

async function getSearchResults(searchTerm = 'nba 2k23'){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet`);
    setSearchResults(response.data.items)
}

    
    
    return ( 
        <div>
            <div>
                <Link to='/register'> <b>Register Here!</b> </Link>
            </div>
            <div>
                <h2>Search Page</h2>
            </div>
            <div> <SearchBar getSearchResults={getSearchResults} /> </div>
            <div> <h3>Search Results</h3> </div>
            <div>
                <div>
                    {searchResults.map((element, index) => {
                        if(element.snippet){
                            return (
                                <div>
                                    <img src={element.snippet.thumbnails.medium.url}></img>
                                    <p><b>Title:</b> {element.snippet.title} </p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default SearchResultsPage;
