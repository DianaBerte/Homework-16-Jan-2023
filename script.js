const getLists = () => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=pinkfloyd', {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '0cbcd173dfmshe0d3767927ec133p151910jsn1f811931eda4',
		    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }).then((response)=> {
        return response.json()
    }).then((data) => {
        console.log(data)
        
        let albums = data.data

        renderAlbums(albums)
     
    })
 
    .catch(err => console.error(err))
}

const arrayOfAlbums = []

const renderAlbums = (albums) => {
    let rowNode = document.getElementsByClassName("row")[0];
    console.log(albums)
    for (let i = 0; i < albums.length; i++) {
        rowNode.innerHTML += `
        <div class = "col col-lg-3">
        <div class="card">
        <img src="${albums[i].album.cover_medium}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${albums[i].title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
            `
            arrayOfAlbums.push(albums[i].album.cover_medium)
        }

}

getLists()

