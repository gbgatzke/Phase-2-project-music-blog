

function ArtistCard({ band, onDeleteArtist }) {

    const { id, artist, image, city, album, albumImg, website } = band;

    const handleClick = () => {

        fetch(`http://localhost:3000/artists/${id}`, {
            method: "DELETE",
        });
        onDeleteArtist(band)
    }

    return (
        <div className="card w-auto bg-base-100 shadow-xl m-7 bg-opacity-80">
            <img class="object-cover h-full w-full" src={image} alt={artist} />
            <div className="card-body items-center text-center">
                <h1 className="card-title" >{artist}</h1>
                <h2>{city}</h2>
                <h2>Favorite album:</h2>
                <img class="object-contain h-20" src={albumImg} alt={album}/>
                <p>{album}</p>
                <a class="break-all" href={website}>{website}</a>
                    <div className="card-actions justify-center">
                        <button className="btn" onClick={handleClick}>Delete Artist</button>
                    </div>
            </div>
        </div>

    )
}

export default ArtistCard;