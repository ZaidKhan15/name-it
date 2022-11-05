import React from 'react';
import './SearchBox.css';
const SearchBox = ({ handleInputChange }) => {
    return (
        <div className='search-container' >
            <input type="text" onChange={(event) => handleInputChange(event.target.value)} placeholder='Type Keywords Here' className='search-input' />
        </div>
    )
}

export default SearchBox;