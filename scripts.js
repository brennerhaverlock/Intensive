
const form = document.getElementById('form')
const search = document.getElementById('search')
const result = document.getElementById('result')



/// api URL ///
const apiURL = 'https://api.lyrics.ovh';


/// adding event listener in form

form.addEventListener('submit', e=> {
    e.preventDefault();
    searchValue = search.value.trim()
    
    if(!searchValue){
        alert("There is nothing to search")
    }
    else{ 
        searchSong(searchValue)
    }
})


//search song 
async function searchSong(searchValue){
    const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`)
    const data = await searchResult.json();
    console.log(searchResult)
    // console.log(finaldata)
    showData(data)
}

//display final result in DO
function showData(data){
  
    result.innerHTML = `
    <ul class="song-list">
      ${data.data
        .map(song => `<li>
                    <div>
                        <strong>${song.artist.name}</strong> -${song.title} 
                    </div>
                    <span data-artist="${song.artist.name}" data-songtitle="${song.title}"> Lyrics</span>
                </li>`
        )
        .join('')}
    </ul>
  `;
}



