

function AlbumCard({ band }) {

    const { artist, album, albumImg, release } = band;

    return(

        <div className="card w-auto bg-base-100 shadow-xl m-7">
            <img src={albumImg} alt={album}/>
            <div className="card-body text-center items-center">
                <h1 className="card-title text-center">{album}</h1>
                <h2>Artist: {artist}</h2>
                <h3>Release date: {release}</h3>
            </div>
            
        </div>
    )
}

export default AlbumCard;