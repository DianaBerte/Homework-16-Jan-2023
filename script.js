// fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink%20floyd")
//     .then(rawSongs => rawSongs.json())
//     .then(songs => {
//         console.log(songs)
//     })
//     .catch(err => console.err(err))

const getLists = () => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=pinkfloyd', {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '0cbcd173dfmshe0d3767927ec133p151910jsn1f811931eda4',
		    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }).then((rawLists)=> {
        return rawLists.json()
    }).then((jsonLists) => {
        console.log(jsonLists)
    })
}

getLists()