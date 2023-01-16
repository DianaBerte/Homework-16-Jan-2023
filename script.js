const getLists = () => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=pinkfloyd', {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '0cbcd173dfmshe0d3767927ec133p151910jsn1f811931eda4',
		    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }).then((rawLists)=> {
        return rawLists.json()
    }).then((jsonLists) => {
        console.log(jsonLists.lists)

        let ul = document.querySelector("ul");

        for (let i = 0; i < jsonLists.length; i++) {
             let singleList = jsonLists[i];
             let li = document.createElement("li");
             li.innerText = singleList.title
             ul.appendChild(li)
        } 
    }).catch(err => console.error(err))
}

getLists()