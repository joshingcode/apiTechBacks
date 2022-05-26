//lets use fetch to get some data from nasa

fetch(`https://api.nasa.gov/planetary/apod?api_key=DTwzGxGJhoXp5t8jIcONrSNZlksqvw0POU9U9KxM`)

    .then(res => res.json()) // parse response as JSON

    .then(data => {

      console.log(data)

    })

    .catch(err => {

        console.log(`error ${err}`)

    });