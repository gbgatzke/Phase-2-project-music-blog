import AlbumCard from './AlbumCard'

function AlbumList({ searchResults, setSearchQuery }) {

    const displayAlbums = searchResults.map(band =>
        <AlbumCard key={band.id} band={band}/>
        )
    
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }
        
    return(
        <div>
            <div className="text-center pt-8">
                <label>Search by Artist or Album:</label>
                <br/>
                <input onChange={handleChange} type="text" placeholder='Search...'></input>
            </div>
            
            <div class="grid gap-75 grid-cols-4 p-8">
               {displayAlbums}
            </div>
            
        </div>
    )
}

export default AlbumList;