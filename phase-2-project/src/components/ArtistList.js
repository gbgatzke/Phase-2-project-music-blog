import React from 'react';
import ArtistCard from './ArtistCard'

function ArtistList({ searchResults, setSearchQuery, onDeleteArtist }) {

    const displayArtists = searchResults.map(band => 
            <ArtistCard key={band.id} band={band} onDeleteArtist={onDeleteArtist}/>  
        )

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div>
            <div className="text-center pt-8">
                <label>Search by Artist, Album, City, or Release Date: </label>
                <br/>
                <input onChange={handleChange} type="text" placeholder='Search...'></input>
            </div>
            
            <div class="grid grid-cols-4 p-8">
                {displayArtists}
            </div>
            
        </div>
        
    )
}

export default ArtistList