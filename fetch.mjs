import fetch from "node-fetch" 
fetch("https://www.instagram.com/nala_cat/")
. then(response => {
    if (response.ok) return response.json()
    return Promise.reject(response)
  })
  .then(data => console.log(data))
  .catch(response => console.error(response.status)) // checks if there is a response from the website