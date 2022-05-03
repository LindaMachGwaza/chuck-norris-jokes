const button = document.querySelector(".container button");
const jokeText = document.querySelector(".container p");

//when button is clicked joke is shown
button.addEventListener("click", getJoke);

/*Before we run the fetch we will wait until it's complete then go to the next line of code and for that to work pefectly 
have added async*/
async function getJoke() {
    const jokeData = await fetch("http://api.icndb.com/jokes/random/3", {
        headers: {
            "Accept": "application/json"
        },
    });
    const jokeObj = await jokeData.json(); //data made readable
    //Get array of jokes
    const jokesArray = jokeObj.value;

    //Loop thrugh array to get joke
    for (const jokes of jokesArray) {
        jokeText.innerHTML = jokes.joke;
    }
}

//Resources used include Hyperiondev notes, You Tube, Stackoverflow, Google.com and appdividend.com