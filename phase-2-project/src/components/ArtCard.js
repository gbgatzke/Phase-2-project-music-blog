

function ArtCard({ band }) {



    return(
        <div className="card">
            <img className="w-full h-full object-cover overflow-hidden opacity-75" src={band.image}/>
        </div>
        
    )
}

export default ArtCard