import ArtCard from "./ArtCard"


function Home({ artistList }) {

    const displayArt = artistList.map(band =>
        <ArtCard key={ band.id} band={band}/>
        )

    return (
        <div>
            <section className="text-center pt-8 font-bold">
                <h1 className="text-xl pb-5">Hello!</h1>
                <p className="text-lg pb-5">Welcome to TuneJar!</p>
                <p className="pb-8">A new place to keep track of your favorite musical artists!</p>
            </section>
            <div class="grid gap-75 grid-cols-3 m-8">
                {displayArt}
            </div>
        </div>
    )
}

export default Home;