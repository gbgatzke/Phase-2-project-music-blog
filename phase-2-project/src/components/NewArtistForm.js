import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function NewArtistForm({ onAddArtist }) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        artist: "",
        image: "",
        city: "",
        album: "",
        albumImg: "",
        release: "",
        website: "",
    })

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      fetch("http://localhost:3000/artists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      .then(r => r.json())
      .then(newArtist => {
        onAddArtist(newArtist);
        navigate('/artistslist');
      })
    }

    return(
        <div className='flex justify-center items-center pt-7 pb-16'>
      <form className="form-control w-full max-w-xs text-center items-center" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Artist</h3>

        <div className="p-3">
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="name"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            placeholder="Artist"
          />
        </div>
        
        <div className="p-3">
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="name"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image"
          />
        </div>
        
        <div className="p-3">
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="link"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
          />
        </div>
        
        <div className="p-3">
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="image"
            name="album"
            value={formData.album}
            onChange={handleChange}
            placeholder="Album"
          />
        </div>
        
        <div className="p-3">
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="image"
            name="albumImg"
            value={formData.albumImg}
            onChange={handleChange}
            placeholder="Album Image"
          />
        </div>
          
        <div className="p-3">
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="image"
            name="release"
            value={formData.release}
            onChange={handleChange}
            placeholder="Release Date"
          />
        </div>
         
        <div className="p-3 pb-6">
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            id="image"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website"     
          />
        </div>

        <button className='btn w-36 flex justify-center' type="submit">Add Artist</button>
      </form>
    </div>
    )
}

export default NewArtistForm;