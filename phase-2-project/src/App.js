import React,{ useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import ArtistList from './components/ArtistList'
import AlbumList from './components/AlbumList'
import NewArtistForm from './components/NewArtistForm'

import { Routes, Route } from 'react-router-dom';


function App() {

  const [ artistList, setArtistList ] = useState([])
  const [ searchQuery, setSearchQuery ] = useState('')


  useEffect(() => {
      fetch("http://localhost:3000/artists")
      .then(r => r.json())
      .then(list => setArtistList(list)) 
  },[])

  const searchResults = artistList.filter(band =>
    band.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    band.album.toLowerCase().includes(searchQuery.toLowerCase()) || 
    band.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    band.release.includes(searchQuery)
    )
  
  const onAddArtist = (newArtist) => {
    setArtistList([...artistList, newArtist])
  }

  const onDeleteArtist = (deletedArtist) => {
    const updatedArtists = artistList.filter(band => 
        band.id !== deletedArtist.id
      )
    setArtistList(updatedArtists)
  }
  return (
    <div className="bg-purple-600 p-8 font-all">
      <NavBar/>
      <Routes>

        <Route path="/" element={<Home artistList={artistList}/>}/>

        <Route 
          path="/artistslist" 
          element={<ArtistList 
                    searchResults={searchResults} 
                    setSearchQuery={setSearchQuery} 
                    onDeleteArtist={onDeleteArtist}
                  />}
        />

        <Route 
          path="/albumslist"
          element={<AlbumList searchResults={searchResults} setSearchQuery={setSearchQuery} />}
        />

        <Route 
          path="/newartist"
          element={<NewArtistForm onAddArtist={onAddArtist}/>}
        />

      </Routes>
    </div>
  );
}

export default App;
