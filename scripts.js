
const form = document.getElementById('form')
const search = document.getElementById('search')
const result = document.getElementById('result')



/// api URL ///
const apiURL = 'https://api.lyrics.ovh';


// event listen for button press 
form.addEventListener('submit', e=> {
    e.preventDefault();
    searchResult = search.value.trim()

    if(!searchResult){
        alert("Please enter a valid song")
    }
    else{ 
        searchSong(searchResult)
    }
})
