import React, { useState } from 'react';


const SearchBar = (props) => {

const [searchVideo, setSearchVideo] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchVideo);
    props.getSearchVideo(searchVideo);
    setSearchVideo('');
}

    return ( 
        <div>
        <form  onSubmit={handleSubmit}>
            <label >Search:</label>
            <input type='text' placeholder="Search for a video..." className='search-input' value={searchVideo} onChange ={(event) => setSearchVideo(event.target.value)} />
            <button>Search</button>
        </form>
    </div>
    );
}
 
export default SearchBar;